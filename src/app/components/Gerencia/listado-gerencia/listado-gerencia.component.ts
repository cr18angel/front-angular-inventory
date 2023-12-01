import { Component, OnInit } from '@angular/core';
import { Gerencia } from 'src/app/Interfaces/gerencia';
import { GerenciaService } from 'src/app/Services/gerencia.service';

@Component({
  selector: 'app-listado-gerencia',
  templateUrl: './listado-gerencia.component.html',
  styleUrls: ['./listado-gerencia.component.css']
})
export class ListadoGerenciaComponent implements OnInit  {
  loading: boolean = false;
  dataSources: Gerencia[] = [];

constructor( private _serviceGerencia: GerenciaService) {}


  ngOnInit(): void {
    this.llenarData();
  }


// suscribes

llenarData(){
  this.loading = true;
  // setime out 
  let dataLoaded = false;

  setTimeout(() => {
  if (dataLoaded){
    this.loading = false;
  }
  }, 2500);

//llamar al suscribe 

this._serviceGerencia.getData().subscribe(data => {
  this.dataSources = data;
  dataLoaded = true;
})


}// fin llenar data 

} // fin export Class
