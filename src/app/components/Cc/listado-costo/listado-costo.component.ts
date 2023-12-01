import { Component, OnInit } from '@angular/core';
import { CentroCosto } from 'src/app/Interfaces/centro-costo';
import { CentroCostoService } from 'src/app/Services/centro-costo.service';

@Component({
  selector: 'app-listado-costo',
  templateUrl: './listado-costo.component.html',
  styleUrls: ['./listado-costo.component.css']
})
export class ListadoCostoComponent implements OnInit {


  constructor(private _servicioCentroCosto: CentroCostoService) {
   
  }

  loading: boolean = false;
  dataSources: CentroCosto[] = [];



ngOnInit(): void {
  this.llenarData();
  
}

// suscribe

llenarData(){
  this.loading = true

  // setTimeOut para el tiepo 
  let dataLoaded = false;
  setTimeout(()=>{
    if(dataLoaded){
      this.loading = false;
    }
  } ,2500);


  // traer la data  y descativa el spinner
  this._servicioCentroCosto.getData().subscribe( data => {
    dataLoaded = true;
    this.dataSources = data;
  },
  // informo errores 
  error => {
    console.error('Error al obtener los datos:', error);
    
  }

  );

}

  

}
