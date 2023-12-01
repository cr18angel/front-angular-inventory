import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarEmpresaComponent } from './agregar-editar-empresa.component';

describe('AgregarEditarEmpresaComponent', () => {
  let component: AgregarEditarEmpresaComponent;
  let fixture: ComponentFixture<AgregarEditarEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarEmpresaComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
