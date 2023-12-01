import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/Interfaces/roles';
import { RolesService } from 'src/app/Services/roles.service';

@Component({
  selector: 'app-listado-roles',
  templateUrl: './listado-roles.component.html',
  styleUrls: ['./listado-roles.component.css']
})
export class ListadoRolesComponent implements OnInit{
  loading: boolean = false;
  dataSources: Roles[] = [];

 
  constructor(private _serviceRoles: RolesService) {}

  ngOnInit(): void {
    this.llenarData();
  }



  // funciones 
llenarData(){
  this.loading= true;
//setTimeOut
let dataLoaded = false;
setTimeout(() => {
  if (dataLoaded) {
    this.loading = false;
  }
}, 2500);

// suscribe
this._serviceRoles.getData().subscribe( data => {
  this.dataSources = data;
  console.log(data);
  dataLoaded = true;
})



}// fin funcion 




}// fin de exten class
