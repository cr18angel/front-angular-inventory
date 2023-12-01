import { Component, OnInit } from '@angular/core';

import { Area } from 'src/app/Interfaces/Area';
import { AreaService } from 'src/app/Services/area.service';

@Component({
  selector: 'app-listado-areas',
  templateUrl: './listado-areas.component.html',
  styleUrls: ['./listado-areas.component.css']
})



export class ListadoAreasComponent implements OnInit{
  loading: boolean  =false;
  dataSources: Area[] = [];

  constructor(private _serviceArea: AreaService) {}

ngOnInit(): void {


  this.llenarData();
}
  
llenarData() {
  this.loading = true;

  //  setTimeout para controlar el tiempo mínimo que se muestra el spinner.
  let dataLoaded = false;
  setTimeout(() => {
    if (dataLoaded) {
      this.loading = false; // Desactivamos el indicador de carga si los datos ya han sido cargados.
    }
  }, 2500);

  // Solicitamos los datos.
  this._serviceArea.getData().subscribe(
    data => {
      dataLoaded = true; // Indicamos que los datos ya han sido cargados.
      this.dataSources = data;

    },
    error => {
      console.error('Error al obtener los datos:', error);
      
    }
  );
}




}
