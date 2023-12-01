import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';

import { Marca, Modelo, Pais, SistemaOperativo, Tipo, UbicacionActivo } from 'src/app/Interfaces/computador';
import { CelularService } from 'src/app/Services/celular.service';
import { ComputadorService } from 'src/app/Services/computador.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-agregar-editar-celular',
  templateUrl: './agregar-editar-celular.component.html',
  styleUrls: ['./agregar-editar-celular.component.css']
})
export class AgregarEditarCelularComponent {
  form: FormGroup


  //// Modelo /////

  modelo: Modelo[] = [];
  filteredModelo!: Observable<Modelo[]>;



  //// Pais /////

  pais: Pais[] = [];
  filteredPais!: Observable<Pais[]>;

  ////UbicacionActivo  /////

  UbicacionActivo: UbicacionActivo[] = [];
  filteredUbicacion!: Observable<UbicacionActivo[]>;



  constructor(
    private fb: FormBuilder,

    // de computar ya que comparten varios parecidos como ej  Ubicacion etc ..
    private _serviceComputador: ComputadorService,
    private _serviceCelular: CelularService
  ) {

    this.form = this.fb.group({
      imei: ['', Validators.required],
      observacion: ['', Validators.required],

      nroFactura: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      nroGuia: ['', [Validators.pattern(/^\d+$/)]],
      precio: ['', [Validators.required, Validators.pattern(/^\d+$/)]],



      fechaCompra: ['', Validators.required],
      modelof: ['', Validators.required],

      pais: ['', Validators.required],
      ubicacion: ['', Validators.required]
    })
  } // fin cetor 

  //--------------------CLASES PARA EL FILTARDO MAP

  private _filterModelo(value: string): Modelo[] {

    // typeof, le asiganara el valor a la variable   numero numb, nombre string
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.modelo.filter(option => option.nombreModelo.toLowerCase().includes(filterValue));
  }


  private _filterPais(value: string): Pais[] {
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.pais.filter(option => option.nombrePais.toLowerCase().includes(filterValue));

  }


  private _filterUbicacionActivo(value: string): UbicacionActivo[] {
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.UbicacionActivo.filter(option => option.ubicacion.toLowerCase().includes(filterValue));

  }



  displayModelo(modelo: Modelo): string {
    return modelo ? modelo.nombreModelo : '';
  }


  // Método para mostrar el país de origen
  displayPais(pais: Pais): string {
    return pais ? pais.nombrePais : '';
  }

  // Método para mostrar la ubicación actual
  displayUbicacion(ubicacion: UbicacionActivo): string {
    return ubicacion ? ubicacion.ubicacion : '';
  }


  /////////////////////////////// IMPLEMENTACION DE NGONINIT /////////////////////////////////////
  ngOnInit() {
    //llenar la informacion correspondiente
    this.getModeloCelular();

    this.getUbicacionActivo();
    this.getPais();




    // filtro [varibable ]   //  observable = formulario 

    // este es una manera donde en el form tengo el option.id
    this.filteredModelo = this.form.get('modelof')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterModelo(value || '')),
    );



    this.filteredPais = this.form.get('pais')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPais(value || ''))
    );

    this.filteredUbicacion = this.form.get('ubicacion')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUbicacionActivo(value || ''))
    )

  }// fin clase
  //////////////////////////////// FIN ONINIT ////////////////////////////////////////////////////7


  addCelular() {
    if (this.form.value) {
      console.log(this.form.value)
    }

  }

  getModeloCelular() {
    this._serviceCelular.getModeloCelular().subscribe(
      data => {
        this.modelo = data;



      }
    )
  }





  getPais() {
    this._serviceComputador.getPais().subscribe(
      data => {
        this.pais = data;
      }
    )
  }

  getUbicacionActivo() {
    this._serviceComputador.getUbicacionActivo().subscribe(
      data => {
        this.UbicacionActivo = data;


      }
    )
  }







}
