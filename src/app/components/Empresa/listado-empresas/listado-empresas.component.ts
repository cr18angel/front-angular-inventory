import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/Interfaces/empresa';
import { EmpresaService } from 'src/app/Services/empresa.service';

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit {
loading: boolean = false;
dataSources: Empresa[] = [];


constructor(private _serviceEmpres: EmpresaService) {}

ngOnInit(): void {
  this.llenarData();
}



//-------------------------------- suscribes 
llenarData(){
// spiner activo
  this.loading = true;
// setTimeOut

let dataLoaded = false;
setTimeout(() => {
  if (dataLoaded) {
    this.loading = false;
  }
}, 2500);

// llenar data 
this._serviceEmpres.getData().subscribe(data => {
this.dataSources = data;
console.log(data);
dataLoaded = true;
})



} // fin llenar data 



 

} // fin de export class 
