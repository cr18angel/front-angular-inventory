import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Pais } from 'src/app/Interfaces/Pais';
import { Sucursal } from 'src/app/Interfaces/Sucursal';
import { PaisService } from 'src/app/Services/pais.service';
import { SucursalService } from 'src/app/Services/sucursal.service';


@Component({
  selector: 'app-agregar-editar-sucursal',
  templateUrl: './agregar-editar-sucursal.component.html',
  styleUrls: ['./agregar-editar-sucursal.component.css']
})


export class AgregarEditarSucursalComponent implements OnInit {
  //variables
  selectedValue: string = '';
  paises: Pais[] = [];

  //esto se lo tengo que pasar tambien al formulario de HTML
  form: FormGroup;


  // variable formBuilder para crear el objeto
  constructor(
    private _servicePais: PaisService,
    private _serviceSucursal: SucursalService,
    private fb: FormBuilder
    )          { 

    this.form= this.fb.group({
      nombre: ['',Validators.required],
      Origen: ['',Validators.required]

      
    })
  }


ngOnInit(): void {

  this.llenarData();
  
}





//funciones

llenarData(){
this._servicePais.getData().subscribe(data=> {
// cargo a la variable
  this.paises = data;
  })
}


// forma el objeto  
agregarSucursal(){
// console.log(this.form)

  const sucursal: Partial<Sucursal>= {
    sucursalNombre: this.form.get('nombre')?.value,
    paisID: this.form.get('Origen')?.value

  }
// enviar objeto al backend
this._serviceSucursal.addData(sucursal).subscribe(data => {
})



}


// fin de export class 
}