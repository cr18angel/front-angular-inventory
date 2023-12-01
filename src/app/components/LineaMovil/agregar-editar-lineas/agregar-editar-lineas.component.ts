import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-editar-lineas',
  templateUrl: './agregar-editar-lineas.component.html',
  styleUrls: ['./agregar-editar-lineas.component.css']
})
export class AgregarEditarLineasComponent {
  form: FormGroup

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      numero: ['', Validators.required],
      imei: ['', Validators.required],
      fechaCompra: ['', Validators.required],
    })
  }



  addlinea() {
    console.log('funciona')
  }


}
