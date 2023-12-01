import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/Interfaces/Pais';
import { PaisService } from 'src/app/Services/pais.service';



@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {
  loading: boolean = false;
   
  dataSources: Pais[] = [];

  constructor(private _paisService: PaisService) { }

    ngOnInit(): void {
      this.llenarData();
    }

      llenarData() {
        this.loading = true;
       //  setTimeout para controlar el tiempo mínimo que se muestra el spinner.
        let dataLoaded = false;
        setTimeout(()=> {
          if(dataLoaded){
            this.loading = false;
          }
        }, 2500);


        // ssolicitamos los datos 
        this._paisService.getData().subscribe(
          data => {
            dataLoaded = true;
            this.dataSources = data;


            if(!this.loading){
              this.loading = false;
            }
          },

          error => {
            console.error('Error al obtener los datos:', error);
          }
        );
      }


      eliminarPais(id: number){
        this._paisService.deleteData(id).subscribe(
          
          ()=>{
            this.llenarData();
          } )
      }
}
