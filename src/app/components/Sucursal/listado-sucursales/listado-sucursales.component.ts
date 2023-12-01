import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/Services/sucursal.service';
import { Sucursal } from 'src/app/Interfaces/Sucursal';
import { PaisService } from 'src/app/Services/pais.service';



@Component({
  selector: 'app-listado-sucursales',
  templateUrl: './listado-sucursales.component.html',
  styleUrls: ['./listado-sucursales.component.css']
})


export class ListadoSucursalesComponent implements OnInit{

  loading: boolean =false;
  dataSource: Sucursal[] = [];

  
constructor(private _sucursalService: SucursalService,private _paisService: PaisService) {}


ngOnInit(): void {
  this.llenarData();
}



llenarData(){
this.loading = true;
// variable del call back, mientras sea falso sigue corriendo el loading
let dataLoader = false;

// primera funcion que da el tiempo minimo 
setTimeout(() => {
// si dataloader ya tiene los datos, frena el loading 
  if(dataLoader){
    this.loading = false;
  }
}, 2500);


// solicitud de los datos 

  this._sucursalService.getData().subscribe(
  
    data => {
    dataLoader = true;

    console.log(data);
    this.dataSource = data;


    // data.forEach(sucursal => {
    //   this._paisService.getDataById(sucursal.paisID).subscribe(pais => {
    //     sucursal.paisNombre = pais.paisNombre;
    //   });
   
    // });
    // this.dataSource = data;

   

    if(!this.loading){
      this.loading = false;
    }
  },
  error => {
    console.error('Error al obtener los datos;', error);
  }
  );
}



eliminarSucursal(id: number){
  this._sucursalService.deleteData(id).subscribe(

    ()=>{
      this.llenarData();
    }
  )
}

  // llenarData(){
  //   this._sucursalService.getData().subscribe(data => {
  //     this.dataSource= data;
  //   },
  //   error => {
  //     console.error('Error al obtener los datos:', error);
  //   }

  //   );
  // }


}
