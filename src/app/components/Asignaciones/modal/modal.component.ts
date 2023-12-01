import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ListadoAsignacionesComponent } from '../listado-asignaciones/listado-asignaciones/listado-asignaciones.component';
import { ColaboradorService } from 'src/app/Services/colaborador.service';
import { Colaborador } from 'src/app/Interfaces/colaborador';
import { Observable, map, startWith } from 'rxjs';
import { CelularService } from 'src/app/Services/celular.service';
import { LineaMovilService } from 'src/app/Services/linea-movil.service';
import { ComputadorService } from 'src/app/Services/computador.service';
import { Computador } from 'src/app/Interfaces/computador';
import { Celular } from 'src/app/Interfaces/celular';
import { LineaMovil } from 'src/app/Interfaces/linea-movil';
import { Asignacion } from 'src/app/Interfaces/asignacion';
import { AsignacionService } from 'src/app/Services/asignacion.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  asignacionForm!: FormGroup;
  isLoading = false;

  //USUARIO
  colaborador: Colaborador[] = [];
  filteredColaborador!: Observable<Colaborador[]>;

  // COMPUTADOR 
  computador: Computador[] = [];
  filteredComputador!: Observable<Computador[]>;
  // CELULAR 

  celular: Celular[] = [];
  filterdeCelular!: Observable<Celular[]>;

  // LINEA
  linea: LineaMovil[] = [];
  filteredLinea!: Observable<LineaMovil[]>;


  constructor(
    private _serviceAsignacion: AsignacionService,
    private _serviceCelular: CelularService,
    private _serviceColaborador: ColaboradorService,
    private _serviceLineaMovil: LineaMovilService,
    private _serviceComputador: ComputadorService,


    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ListadoAsignacionesComponent>
  ) {

    this.asignacionForm = this.fb.group({
      // fechaAsignacion: ['', Validators.required],
      usuario: ['', Validators.required],
      computador: [''],
      celular: [''],
      linea: [''],
      observacion: ['']
    });
  } // fin llaves ctor 




  //--------------------CLASES PARA EL FILTARDO MAP
  private _filterColaborador(value: string): Colaborador[] {
    // typeof, le asiganara el valor a la variable   numero numb, nombre string
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.colaborador.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }


  private _filterComputador(value: string): Computador[] {
    if (typeof value !== 'string') return [];

    const filterValue = value.trim().toLowerCase();
    return this.computador.filter(option =>
      option.serie.toLowerCase().includes(filterValue) ||
      (option.modelo.nombreModelo && option.modelo.nombreModelo.toLowerCase().includes(filterValue))
    );
  }

  private _filterCelular(value: string): Celular[] {
    // typeof, le asiganara el valor a la variable   numero numb, nombre string
    if (typeof value !== 'string') return [];

    const filterValue = value.trim().toLowerCase();
    return this.celular.filter(option =>
      option.imei.toLowerCase().includes(filterValue) ||
      (option.modelo.nombreModelo && option.modelo.nombreModelo.toLowerCase().includes(filterValue))
    );
  }

  private _filterLinea(value: string): LineaMovil[] {

    const filterValue = value.trim();
    return this.linea.filter(option => option.numeroCelular.toString().includes(filterValue));
  }




  // diplay para mostrar el input seleccionado 

  displayColaborador(colaborador: Colaborador): string {
    return colaborador ? colaborador.nombre : '';
  }
  displayLinea(linea: LineaMovil): string {
    return linea ? linea.numeroCelular.toString() : '';
  }


  displayComputador(computador: Computador): any {
    return computador && computador.serie && computador.modelo ? `${computador.serie} - ${computador.modelo.nombreModelo}` : computador ? computador.serie || computador.modelo.nombreModelo : '';

  }

  displayCelular(celular: Celular): any {
    return celular && celular.imei && celular.modelo ? `${celular.imei} - ${celular.modelo.nombreModelo}` : celular ? celular.imei || celular.modelo.nombreModelo : '';
  }




  /////////////////////////////// IMPLEMENTACION DE NGONINIT /////////////////////////////////////

  ngOnInit(): void {
    this.getUser();
    this.getCelular();
    this.getComputador();
    this.getLineaMovil();

    // filtro [varibable ]   //  observable = formulario 
    // este es una manera donde en el form tengo el option.id
    this.filteredColaborador = this.asignacionForm.get('usuario')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterColaborador(value || '')),
    );


    this.filteredComputador = this.asignacionForm.get('computador')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterComputador(value || '')),
    );

    this.filterdeCelular = this.asignacionForm.get('celular')!.valueChanges.pipe(
      map(value => this._filterCelular(value)),
    );

    this.filteredLinea = this.asignacionForm.get('linea')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'number' ? value.toString() : value),
      map(value => this._filterLinea(value || ''))
    );

  }

  onSubmit(): void {
    this.isLoading = true; // Comienza la carga

    const fechaActual = new Date(); // Obtiene la fecha y hora actual


    const asigancion: Partial<Asignacion> = {
      fechaAsignacion: fechaActual,
      codigoUsuario: this.asignacionForm.value.usuario.codigoUsuario,
      ComputadorId: this.asignacionForm.value.computador.id,
      CelularId: this.asignacionForm.value.celular.id,
      lineaMovilId: this.asignacionForm.value.linea.id,
      observacion: this.asignacionForm.value.observacion
    }
    this._serviceAsignacion.addData(asigancion).subscribe(data => {
      console.log(data);
      this.isLoading = false; // Finaliza la carga
      this.dialogRef.close(); // Cierra el modal
      location.reload(); // Recarga la página
    }, error => {
      console.error(error);
      this.isLoading = false; // Finaliza la carga incluso si hay un error
    });
  }



  onCancel(): void {
    this.dialogRef.close();
  }

  // fucniones de llenado 

  getUser() {
    this._serviceColaborador.getData().subscribe(
      data => {
        this.colaborador = data;
      }

    )
  }


  getComputador() {
    this._serviceComputador.getData().subscribe(
      data => {
        this.computador = data;
        console.log(this.computador);
      }
    )

  }

  getCelular() {
    this._serviceCelular.getData().subscribe(
      data => {
        this.celular = data;
      }
    )

  }
  getLineaMovil() {
    this._serviceLineaMovil.getData().subscribe(
      data => {
        this.linea = data;
      }
    )

  }





}