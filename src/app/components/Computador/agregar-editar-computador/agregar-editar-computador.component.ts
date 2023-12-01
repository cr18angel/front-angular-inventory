import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';

import { Marca, Modelo, Pais, SistemaOperativo, Tipo, UbicacionActivo } from 'src/app/Interfaces/computador';
import { ComputadorService } from 'src/app/Services/computador.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-agregar-editar-computador',
  templateUrl: './agregar-editar-computador.component.html',
  styleUrls: ['./agregar-editar-computador.component.css']
})
export class AgregarEditarComputadorComponent implements OnInit {
  form: FormGroup


  //// Modelo /////

  modelo: Modelo[] = [];
  filteredModelo!: Observable<Modelo[]>;

  //// SistemaOp /////

  sistemaOp: SistemaOperativo[] = [];
  filteredSistemaOp!: Observable<SistemaOperativo[]>;

  //// Tipo /////
  formActivo = new FormControl('');
  tipoActivo: Tipo[] = [];
  filteredActivo!: Observable<Tipo[]>;

  //// Pais /////

  pais: Pais[] = [];
  filteredPais!: Observable<Pais[]>;

  ////UbicacionActivo  /////

  UbicacionActivo: UbicacionActivo[] = [];
  filteredUbicacion!: Observable<UbicacionActivo[]>;



  constructor(
    private fb: FormBuilder,
    private _serviceComputador: ComputadorService
  ) {

    this.form = this.fb.group({
      serie: ['', Validators.required],
      caracteristica: ['', Validators.required],

      nroFactura: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      nroGuia: ['', [Validators.pattern(/^\d+$/)]],
      precio: ['', [Validators.required, Validators.pattern(/^\d+$/)]],



      fechaCompra: ['', Validators.required],
      modelof: ['', Validators.required],
      sistemaOpf: ['', Validators.required],
      tipoActivo: ['', Validators.required],
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


  private _filterSo(value: string): SistemaOperativo[] {
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.sistemaOp.filter(option => option.nombreSO.toLowerCase().includes(filterValue));

  }

  private _filterTipoActivo(value: string): Tipo[] {
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.tipoActivo.filter(option => option.nombreTipoActivo.toLowerCase().includes(filterValue));
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

  // para que al seleccionar quede en el input el string y no el id  => esto es imporante el .value que coloque 
  //agregarlo en el input

  displayModelo(id: number): string {
    if (!id) return '';
    // Encuentra el modelo que coincida con el id
    const correspondingOption = this.modelo.find((option) => option.id === id);
    // Si existe un modelo correspondiente, retorna su nombre para mostrarlo en el input
    return correspondingOption ? correspondingOption.nombreModelo : '';
  }

  // Método para mostrar el sistema operativo
  displaySo(sistema: SistemaOperativo): string {
    return sistema ? sistema.nombreSO : '';
  }

  // Método para mostrar el tipo
  displayTipo(tipo: Tipo): string {
    return tipo ? tipo.nombreTipoActivo : '';
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
    this.getModelo();
    this.getSistemaOp();
    this.getTipoActivo();
    this.getUbicacionActivo();
    this.getPais();




    // filtro [varibable ]   //  observable = formulario 

    // este es una manera donde en el form tengo el option.id
    this.filteredModelo = this.form.get('modelof')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterModelo(value || '')),
    );

    // esta es una mandera donde tengo todo el objeto y al enviarlo solo envio el valor que necesito 
    this.filteredSistemaOp = this.form.get('sistemaOpf')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSo(value || '')),
    );

    this.filteredActivo = this.form.get('tipoActivo')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTipoActivo(value || ''))
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


  addComputadora() {
    if (this.form.value) {
      console.log(this.form.value)
    }

  }

  getModelo() {
    this._serviceComputador.getModelo().subscribe(
      data => {
        this.modelo = data;

      }
    )
  }


  getSistemaOp() {

    this._serviceComputador.getSistemaOp().subscribe(
      data => {
        this.sistemaOp = data;


      }
    )
  }

  getTipoActivo() {
    this._serviceComputador.getTipo().subscribe(
      data => {
        this.tipoActivo = data;
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







} // fin de funcion 