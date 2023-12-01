import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/Interfaces/cargo';
import { CargoService } from 'src/app/Services/cargo.service';

@Component({
  selector: 'app-listado-cargos',
  templateUrl: './listado-cargos.component.html',
  styleUrls: ['./listado-cargos.component.css']
})
export class ListadoCargosComponent implements OnInit {

  loading: boolean = false;
  dataSources: Cargo[] = []

  constructor(private _serviceCargos: CargoService ) {}

ngOnInit(): void {
  this.llenarData();
}

//suscribe

llenarData(){
this.loading =true;
//SetTIme

let dataLoaded = false;
setTimeout(()=> {
if (dataLoaded) {
  this.loading= false;
  }
},2500);
//pedir los datos y desactivar spinnig

this._serviceCargos.getData().subscribe( data => {
  this.dataSources=data;
  console.log(data);
  dataLoaded = true;
})

    
    } // fin llenar data 
// fin clase 
}
