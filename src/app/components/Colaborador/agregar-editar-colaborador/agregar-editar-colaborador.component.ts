
import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Area } from 'src/app/Interfaces/Area';
import { Cargo } from 'src/app/Interfaces/cargo';
import { CentroCosto } from 'src/app/Interfaces/centro-costo';
import { Colaborador } from 'src/app/Interfaces/colaborador';
import { Empresa } from 'src/app/Interfaces/empresa';
import { Gerencia } from 'src/app/Interfaces/gerencia';
import { Roles } from 'src/app/Interfaces/roles';
import { Sucursal } from 'src/app/Interfaces/Sucursal';
import { AreaService } from 'src/app/Services/area.service';
import { CargoService } from 'src/app/Services/cargo.service';
import { CentroCostoService } from 'src/app/Services/centro-costo.service';
import { ColaboradorService } from 'src/app/Services/colaborador.service';
import { EmpresaService } from 'src/app/Services/empresa.service';
import { GerenciaService } from 'src/app/Services/gerencia.service';
import { RolesService } from 'src/app/Services/roles.service';
import { SucursalService } from 'src/app/Services/sucursal.service';



@Component({
  selector: 'app-agregar-editar-colaborador',
  templateUrl: './agregar-editar-colaborador.component.html',
  styleUrls: ['./agregar-editar-colaborador.component.css'],

})

// formulario reactivo {importarlo}
// 1 crear variable FormGroup, 2. ctor FormBuilder {esto ayuda a crear el objeto} 
// 3. igual la variable creada  con el ctor  y le asigno el tipo group

export class AgregarEditarColaboradorComponent implements OnInit {
  form: FormGroup

  //// Area /////
  area = new FormControl(' ');
  options: Area[] = [];
  filteredOptions!: Observable<Area[]>;

  //// Roles /////
  rol = new FormControl(' ');
  roles: Roles[] = [];
  filteredRoles!: Observable<Roles[]>;

  //// Cargos ///// -- falta implementar
  cargo = new FormControl(' ');
  sourceCargos: Cargo[] = [];
  filterCargos!: Observable<Cargo[]>;

  //// Sucursal ////// 
  sucursal = new FormControl(' ');
  sourceSucursales: Sucursal[] = [];
  filterSucursal!: Observable<Sucursal[]>

  //CentroCosto
  centroCosto = new FormControl(' ');
  sourceCCcosto: CentroCosto[] = [];
  filterCCosto!: Observable<CentroCosto[]>;

  //Empresa
  empresa = new FormControl(' ');
  sourceEmpresa: Empresa[] = [];
  filterEmpresa!: Observable<Empresa[]>;

  //Gerencia
  gerencia = new FormControl(' ');
  sourceGerencia: Gerencia[] = [];
  filterGerencia!: Observable<Gerencia[]>;



  constructor(
    private fb: FormBuilder,
    private _serviceArea: AreaService,
    private _serviceRol: RolesService,
    private _serviceCargo: CargoService,
    private _serviceSucursal: SucursalService,
    private _serviceCentroCosto: CentroCostoService,
    private _serviceEmpresa: EmpresaService,
    private _serviceGerencia: GerenciaService,
    private _serviceColaborador: ColaboradorService
  ) {
    // igual el form con la variable que construye el objeto
    this.form = this.fb.group({

      // ' ' valor inicial, [validacion]
      // formControlNam="" colocarlo en el input
      run: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      clave: ['', Validators.required],
      usuarioNte: ['', Validators.required],
      jefatura: ['', Validators.required],
      rol: ['', Validators.required],
      fecha: [''],
      area: ['', Validators.required],
      cargo: ['', Validators.required],
      sucursal: ['', Validators.required],
      centroCosto: ['', Validators.required],
      empresa: ['', Validators.required],
      gerencia: ['', Validators.required],


    })
  }

  // para que al seleccionar quede en el input el string y no el id 
  //agregarlo en el input
  displayArea(area: Area): string {
    return area ? area.areaNombre : '';
  }

  displayRole(role: Roles): string {
    return role ? role.rolNombre : '';
  }

  displayCargo(cargo: Cargo): string {
    return cargo ? cargo.cargoNombre : '';
  }

  displaySucursal(sucursal: Sucursal): string {
    return sucursal ? sucursal.sucursalNombre : '';
  }

  displayCentroCosto(centroCosto: CentroCosto): string {
    return centroCosto ? centroCosto.centroCostoNombre : '';
  }

  displayEmpresa(empresa: Empresa): string {
    return empresa ? empresa.empresaNombre : '';
  }

  displayGerencia(gerencia: Gerencia): string {
    return gerencia ? gerencia.gerenciaNombre : '';
  }



  ngOnInit() {

    console.log(this.sourceEmpresa);


    // filtro [varibable ]   //  observable = formulario 
    this.filteredOptions = this.form.get('area')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    //filtro roles
    this.filteredRoles = this.form.get('rol')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterRoles(value || '')),
    );

    //filtro cargos
    this.filterCargos = this.form.get('cargo')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCargos(value || '')),
    );


    //sucursal 
    this.filterSucursal = this.form.get('sucursal')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSucursal(value || '')),
    );

    //Centro Costo 
    this.filterCCosto = this.form.get('centroCosto')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCCosto(value || '')),
    );

    //Empresa
    this.filterEmpresa = this.form.get('empresa')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEmpresa(value || '')),
    );

    //Gerencia
    this.filterGerencia = this.form.get('gerencia')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGerencia(value || '')),
    );


    // llenar datos 
    this.llenarArea();
    this.llenarRol();
    this.llenarCargo();
    this.llenarSucursal();
    this.llenarCCosto();
    this.llenarEmpresa();
    this.llenarGerencia();


  } // fin onInit

  // ---------------------------------------------------------------------------------------- CLASES FILTERR PARA MAP
  private _filter(value: string): Area[] {
    if (typeof value !== 'string') return [];
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.areaNombre.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterRoles(value: string): Roles[] {
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.roles.filter(role => role.rolNombre.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterCargos(value: string): Cargo[] {
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.sourceCargos.filter(cargo => cargo.cargoNombre.toLowerCase().includes(filterValue));
  }

  //Sucursal

  private _filterSucursal(value: string): Sucursal[] {
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.sourceSucursales.filter(data => data.sucursalNombre.toLowerCase().includes(filterValue));
  }

  //Centro Costo 
  private _filterCCosto(value: string): CentroCosto[] {
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.sourceCCcosto.filter(data => data.centroCostoNombre.toLowerCase().includes(filterValue));
  }

  //Empresa
  private _filterEmpresa(value: string): Empresa[] {
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.sourceEmpresa.filter(data => data.empresaNombre.toLowerCase().includes(filterValue));
  }

  //Gerencia
  private _filterGerencia(value: string): Gerencia[] {
    if (typeof value !== 'string') return [];
    const filterValue = value.trim().toLowerCase();
    return this.sourceGerencia.filter(data => data.gerenciaNombre.toLowerCase().includes(filterValue));
  }

  //-------------------------------------------------------------------------------------------FIN CLASE FILTER


  // funciones 

  addColaborador() {
    const colaborador: Partial<Colaborador> = {
      nombre: this.form.value.nombre,
      run: this.form.value.run,
      correo: this.form.value.correo,
      clave: this.form.value.clave,
      usuarioNTE: this.form.value.usuarioNte,
      fecha_Ingreso: this.form.value.fecha ? this.form.value.fecha.toISOString() : null,
      jefatura_Directa: this.form.value.jefatura,
      areaId: this.form.value.area.id,
      cargoId: this.form.value.cargo.id,
      centroCostoId: this.form.value.centroCosto.id,
      empresaId: this.form.value.empresa.id,
      gerenciaId: this.form.value.gerencia.id,
      sucursalId: this.form.value.sucursal.id,
      rolId: this.form.value.rol.id
    }

    this._serviceColaborador.addData(colaborador).subscribe(data => {
      console.log(data);

    })


    console.log('esto es la practicas')

    console.log(colaborador);

  }











  // suscribes funtion
  //Area
  llenarArea() {
    this._serviceArea.getData().subscribe(
      data => {
        this.options = data;
      }
    )
  }


  llenarRol() {
    this._serviceRol.getData().subscribe(
      data => {
        this.roles = data;

      }
    )
  }

  llenarCargo() {
    this._serviceCargo.getData().subscribe(
      data => {
        this.sourceCargos = data;
      }
    )
  }

  llenarSucursal() {
    this._serviceSucursal.getData().subscribe(
      data => {
        this.sourceSucursales = data;
      }
    )
  }

  llenarCCosto() {
    this._serviceCentroCosto.getData().subscribe(
      data => {
        this.sourceCCcosto = data;
      }
    )
  }

  llenarEmpresa() {
    this._serviceEmpresa.getData().subscribe(
      data => {
        this.sourceEmpresa = data;
        console.log(this.sourceEmpresa);

      }
    )
  }


  llenarGerencia() {
    this._serviceGerencia.getData().subscribe(
      data => {
        this.sourceGerencia = data;
      }
    )
  }


}//fin clase 