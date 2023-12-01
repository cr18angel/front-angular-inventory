import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from 'src/app/Interfaces/Pais';

import { PaisService } from 'src/app/Services/pais.service';

@Component({
  selector: 'app-agregar-editar-pais',
  templateUrl: './agregar-editar-pais.component.html',
  styleUrls: ['./agregar-editar-pais.component.css'],
  
})
export class AgregarEditarPaisComponent {
// nueva variable para reacitve for
form: FormGroup;

//variable para el mapeo por url
id: number;
operacion: string = 'Agregar';


// formBuilder ayuda a crear el objeto 
constructor(
  private fb: FormBuilder, 
  private _paisService: PaisService,

  // Router permite redireccionar cuando guarde un cambio 
  //ej.   this.router.navigate(['/listPaises{Ruta que di en router}'])
  // se coloca a lo ultimo del SUSCRIBE de ADD
  private router: Router,
  

  // esto va a permitir mapear si paso una id por url 
  private aRoute: ActivatedRoute
  ) 
  {
  

  this.form  = this.fb.group
  ({
    nombre: ['',Validators.required]
  })

  this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  console.log(this.id)


} 


ngOnInit(): void {

  if(this.id != 0) {
    this.operacion = 'Editar';
    this.obtenerPais(this.id)
    
  }
}

// solo cuando le mando un id por url 

obtenerPais(id: number){

  this._paisService.getDataById(id).subscribe(data => {
    console.log(data)
    this.form.patchValue({
      nombre: data.paisNombre
    })

    this.id = data.id;
    // seteo el id que cree de variable para activa el mapeo por url
  })  

}



agregarPais(){
  // const nombre = this.form.get('nombre')?.value
  // partial saca el id 
const pais: Partial<Pais>= {
        paisNombre: this.form.get('nombre')?.value
    }

    // enviar objeto creado al backend 

    this._paisService.addData(pais).subscribe(data => {
      console.log(data);

      // redirecciono una vez que lo agrego 
      this.router.navigate(['/listPaises'])
    })
  }


}
