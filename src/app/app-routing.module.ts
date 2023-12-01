import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes para ruteo
import { ListadoPaisesComponent } from './components/Pais/listado-paises/listado-paises.component';
import { AgregarEditarPaisComponent } from './components/Pais/agregar-editar-pais/agregar-editar-pais.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoSucursalesComponent } from './components/Sucursal/listado-sucursales/listado-sucursales.component';
import { AgregarEditarSucursalComponent } from './components/Sucursal/agregar-editar-sucursal/agregar-editar-sucursal.component';
import { ListadoAreasComponent } from './components/Area/listado-areas/listado-areas.component';
import { AgregarEditarAreaComponent } from './components/Area/agregar-editar-area/agregar-editar-area.component';
import { ListadoCargosComponent } from './components/Cargo/listado-cargos/listado-cargos.component';
import { ListadoCostoComponent } from './components/Cc/listado-costo/listado-costo.component';
import { AgregarEditarCostoComponent } from './components/Cc/agregar-editar-costo/agregar-editar-costo.component';
import { ListadoEmpresasComponent } from './components/Empresa/listado-empresas/listado-empresas.component';
import { AgregarEditarEmpresaComponent } from './components/Empresa/agregar-editar-empresa/agregar-editar-empresa.component';
import { ListadoGerenciaComponent } from './components/Gerencia/listado-gerencia/listado-gerencia.component';
import { AgregarEditarGerenciaComponent } from './components/Gerencia/agregar-editar-gerencia/agregar-editar-gerencia.component';
import { ListadoColaboradoresComponent } from './components/Colaborador/listado-colaboradores/listado-colaboradores.component';
import { AgregarEditarColaboradorComponent } from './components/Colaborador/agregar-editar-colaborador/agregar-editar-colaborador.component';
import { ListadoRolesComponent } from './components/Rol/listado-roles/listado-roles.component';
import { AgregarEditarRolComponent } from './components/Rol/agregar-editar-rol/agregar-editar-rol.component';
import { AgregarEditarCargoComponent } from './components/Cargo/agregar-editar-cargo/agregar-editar-cargo.component';
import { AgregarEditarComputadorComponent } from './components/Computador/agregar-editar-computador/agregar-editar-computador.component';
import { ListadoComputadoresComponent } from './components/Computador/listado-computadores/listado-computadores.component';
import { ListadoCelularesComponent } from './components/Celular/listado-celulares/listado-celulares.component';
import { AgregarEditarCelularComponent } from './components/Celular/agregar-editar-celular/agregar-editar-celular.component';
import { ListadoAsignacionesComponent } from './components/Asignaciones/listado-asignaciones/listado-asignaciones/listado-asignaciones.component';
import { ListadoLineasComponent } from './components/LineaMovil/listado-lineas/listado-lineas.component';
import { AgregarEditarLineasComponent } from './components/LineaMovil/agregar-editar-lineas/agregar-editar-lineas.component';


const routes: Routes = [

  { path: '', redirectTo: 'listPaises', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },



  //pais
  { path: 'listPaises', component: ListadoPaisesComponent },
  { path: 'pais', component: AgregarEditarPaisComponent },
  { path: 'editarpais/:id', component: AgregarEditarPaisComponent },

  //sucursal

  { path: 'listSucursales', component: ListadoSucursalesComponent },
  { path: 'sucursal', component: AgregarEditarSucursalComponent },
  { path: 'editarsucursal/:id', component: AgregarEditarSucursalComponent },

  // Area

  { path: 'listAreas', component: ListadoAreasComponent },
  { path: 'area', component: AgregarEditarAreaComponent },
  { path: 'editararea/:id', component: AgregarEditarAreaComponent },



  // Cargo
  { path: 'listCargos', component: ListadoCargosComponent },
  { path: 'cargo', component: AgregarEditarCargoComponent },
  { path: 'editarcargo/:id', component: AgregarEditarCargoComponent },


  // Centro Costo 

  { path: 'listCc', component: ListadoCostoComponent },
  { path: 'cc', component: AgregarEditarCostoComponent },
  { path: 'cc/:id', component: AgregarEditarCostoComponent },


  // Empresa
  { path: 'listEmpresas', component: ListadoEmpresasComponent },
  { path: 'empresa', component: AgregarEditarEmpresaComponent },
  { path: 'empresa/:id', component: AgregarEditarEmpresaComponent },

  // Gerencia 

  { path: 'listGerencias', component: ListadoGerenciaComponent },
  { path: 'gerencia', component: AgregarEditarGerenciaComponent },
  { path: 'editargerencia/:id', component: AgregarEditarGerenciaComponent },

  // Colaborador

  { path: 'listColaborador', component: ListadoColaboradoresComponent },
  { path: 'colaborador', component: AgregarEditarColaboradorComponent },
  { path: 'editarcolaborador/:id', component: AgregarEditarColaboradorComponent },

  // rol 


  { path: 'listRoles', component: ListadoRolesComponent },
  { path: 'rol', component: AgregarEditarRolComponent },
  { path: 'editarRol/:id', component: AgregarEditarRolComponent },


  ///////////////////////////// computador

  { path: 'listComputador', component: ListadoComputadoresComponent },
  { path: 'computador', component: AgregarEditarComputadorComponent },
  { path: 'editarCoputador/:id', component: AgregarEditarComputadorComponent },



  ///////////////////////////// Celular
  { path: 'listCelular', component: ListadoCelularesComponent },
  { path: 'celular', component: AgregarEditarCelularComponent },
  { path: 'editarCelular/:id', component: AgregarEditarCelularComponent },


  //////////////////////////// Lineas
  { path: 'listLineas', component: ListadoLineasComponent },
  { path: 'linea', component: AgregarEditarLineasComponent },
  { path: 'editarLinea/:id', component: AgregarEditarLineasComponent },




  ///////////////////////////// Asignaciones
  { path: 'listAsignacion', component: ListadoAsignacionesComponent },





  //siempre al ultimo esto 
  { path: '*', redirectTo: 'listPaises', pathMatch: 'full' }









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
