import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LineaMovil } from 'src/app/Interfaces/linea-movil';
import { LineaMovilService } from 'src/app/Services/linea-movil.service';

@Component({
  selector: 'app-listado-lineas',
  templateUrl: './listado-lineas.component.html',
  styleUrls: ['./listado-lineas.component.css']
})
export class ListadoLineasComponent implements OnInit {
  loading: boolean = true;
  ELEMENT_DATA: LineaMovil[] = [];




  constructor(private _serviceLinea: LineaMovilService) { }



  ngOnInit(): void {


    this.llenarData();
  }


  // funciones 
  llenarData() {
    this._serviceLinea.getData().subscribe(data => {
      this.ELEMENT_DATA = data
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      console.log(this.ELEMENT_DATA)

    })
  }





  displayedColumns: string[] = ['id', 'NumeroCelular', "Imei", "AsignacionId", "acciones"];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}// fin clase 
