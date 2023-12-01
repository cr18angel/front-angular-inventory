import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin, map } from 'rxjs';
import { Asignacion } from 'src/app/Interfaces/asignacion';
import { AsignacionService } from 'src/app/Services/asignacion.service';
import { ColaboradorService } from 'src/app/Services/colaborador.service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-listado-asignaciones',
  templateUrl: './listado-asignaciones.component.html',
  styleUrls: ['./listado-asignaciones.component.css']
})


export class ListadoAsignacionesComponent implements OnInit {
  loading: boolean = false;
  ELEMENT_DATA: Asignacion[] = [];
  displayedColumns: string[] = ['fecha', 'nombre', 'computador', 'telefono', 'linea', "acciones",];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);


  constructor(
    public _modal: MatDialog,
    private _serviceAsignacion: AsignacionService,
    private _colaboradorService: ColaboradorService
  ) { }

  ngOnInit(): void {
    this.llenarData()
  }

  //---------------------------------------------apertura de modal

  openAsignacionModal() {
    const dialogRef = this._modal.open(ModalComponent, {
      width: '40%',
      height: '80%',


      // Aquí puedes pasar datos al modal si es necesario
    });


    //toma los cambios que tenia y los guarda // por ejemplo puedo enviarlos al servidor
    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal fue cerrado');
      // Aquí puedes manejar los datos del formulario si es necesario
    });
  }

  //-------------------------------------------------- fin de modal



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  // funciones 

  llenarData() {

    this._serviceAsignacion.getData().subscribe(data => {
      this.ELEMENT_DATA = data;
      this.loading = false

      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);


      this.getColaboradoresNombres();

    })
  }

  getColaboradoresNombres() {
    const observables = this.ELEMENT_DATA.map(item => {
      return this._colaboradorService.getDataById(item.codigoUsuario).pipe(
        map(colaborador => {
          // Suponiendo que la respuesta tiene un campo 'nombre' para el nombre del colaborador
          item.nombreUsuario = colaborador.nombre;
          return item;
        })
      );
    });


    forkJoin(observables).subscribe(updatedData => {
      this.ELEMENT_DATA = updatedData;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });
  }




}


