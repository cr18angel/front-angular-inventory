import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ComputadorService } from 'src/app/Services/computador.service';
import { Computador } from 'src/app/Interfaces/computador';

@Component({
  selector: 'app-listado-computadores',
  templateUrl: './listado-computadores.component.html',
  styleUrls: ['./listado-computadores.component.css']
})

export class ListadoComputadoresComponent implements OnInit {
  loading: boolean = true;

  ELEMENT_DATA: Computador[] = [];


constructor(private _serviceComputador: ComputadorService) {}


ngOnInit(): void {
  
  this.llenarData();
}



// funicones 
llenarData(){
  this._serviceComputador.getData().subscribe(data =>{
    this.ELEMENT_DATA = data;

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

    console.log(this.ELEMENT_DATA)
  })
}


// cuadro html   =>  el ELEMENT_DATA => ANTIGUO ARRAY 
  displayedColumns: string[] = ['serie','marca',"modelo","factura","guia","valor","fechaCompra","SO","ubicacion","pais","acciones"];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
