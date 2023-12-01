import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos importardos 
import { SharedModule } from './shared/shared.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavegationComponent } from './navegation/navegation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { ListadoPaisesComponent } from './components/Pais/listado-paises/listado-paises.component';
import { AgregarEditarPaisComponent } from './components/Pais/agregar-editar-pais/agregar-editar-pais.component';
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
import { ModalComponent } from './components/Asignaciones/modal/modal.component';


// import { SpinnerComponent } from './shared/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    DashboardComponent,
    ListadoPaisesComponent,
    AgregarEditarPaisComponent,
    ListadoSucursalesComponent,
    AgregarEditarSucursalComponent,
    ListadoAreasComponent,
    AgregarEditarAreaComponent,
    ListadoCargosComponent,
    ListadoCostoComponent,
    AgregarEditarCostoComponent,
    ListadoEmpresasComponent,
    AgregarEditarEmpresaComponent,
    ListadoGerenciaComponent,
    AgregarEditarGerenciaComponent,
    ListadoColaboradoresComponent,
    AgregarEditarColaboradorComponent,
    ListadoRolesComponent,
    AgregarEditarRolComponent,
    AgregarEditarCargoComponent,

    AgregarEditarComputadorComponent,
    ListadoComputadoresComponent,
    ListadoCelularesComponent,
    AgregarEditarCelularComponent,
    ListadoAsignacionesComponent,
    ListadoLineasComponent,
    AgregarEditarLineasComponent,
    ModalComponent,


    // SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
