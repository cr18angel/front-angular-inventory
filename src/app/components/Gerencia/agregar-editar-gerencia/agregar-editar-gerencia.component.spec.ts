import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarGerenciaComponent } from './agregar-editar-gerencia.component';

describe('AgregarEditarGerenciaComponent', () => {
  let component: AgregarEditarGerenciaComponent;
  let fixture: ComponentFixture<AgregarEditarGerenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarGerenciaComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
