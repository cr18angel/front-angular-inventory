import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Celular } from 'src/app/Interfaces/celular';
import { CelularService } from 'src/app/Services/celular.service';

@Component({
  selector: 'app-listado-celulares',
  templateUrl: './listado-celulares.component.html',
  styleUrls: ['./listado-celulares.component.css']
})
export class ListadoCelularesComponent {
  loading: boolean = true;

  ELEMENT_DATA: Celular[] = [];


constructor(private _serviceCelular: CelularService) {}


ngOnInit(): void {
  
  this.llenarData();
}



// funicones 
llenarData(){
  this._serviceCelular.getData().subscribe(data =>{
    this.ELEMENT_DATA = data;

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

    console.log(this.ELEMENT_DATA)
  })
}


// cuadro html   =>  el ELEMENT_DATA => ANTIGUO ARRAY 
  displayedColumns: string[] = ['imei','marca',"modelo","factura","guia","valor","fechaCompra","observacion","ubicacion","pais","acciones"];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
