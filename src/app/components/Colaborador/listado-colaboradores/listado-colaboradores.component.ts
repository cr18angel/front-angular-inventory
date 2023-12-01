import { Component, OnInit} from '@angular/core';
import { Colaborador } from 'src/app/Interfaces/colaborador';
import { ColaboradorService } from 'src/app/Services/colaborador.service';

import { mergeMap, map, tap, forkJoin } from 'rxjs';
import { AreaService } from 'src/app/Services/area.service';
import { CargoService } from 'src/app/Services/cargo.service';
import { CentroCosto } from 'src/app/Interfaces/centro-costo';
import { CentroCostoService } from 'src/app/Services/centro-costo.service';
import { EmpresaService } from 'src/app/Services/empresa.service';
import { GerenciaService } from 'src/app/Services/gerencia.service';
import { PaisService } from 'src/app/Services/pais.service';
import { Sucursal } from 'src/app/Interfaces/Sucursal';
import { SucursalService } from 'src/app/Services/sucursal.service';


@Component({
  selector: 'app-listado-colaboradores',
  templateUrl: './listado-colaboradores.component.html',
  styleUrls: ['./listado-colaboradores.component.css']
})
export class ListadoColaboradoresComponent implements OnInit {


  loading: boolean = false;
  dataSources: Colaborador[] = []


  constructor(
    private _serviceColaborador: ColaboradorService
    ) {}

  ngOnInit(): void {
    this.llenarData();
    
  }
// funciones 

llenarData() {
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

  this._serviceColaborador.getData().subscribe(
    data =>{
      dataLoader = true;

      console.log(data);
      this.dataSources= data;
    


    }

  )


  


}




// fin de la clase 
}
