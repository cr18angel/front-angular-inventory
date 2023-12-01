import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarCostoComponent } from './agregar-editar-costo.component';

describe('AgregarEditarCostoComponent', () => {
  let component: AgregarEditarCostoComponent;
  let fixture: ComponentFixture<AgregarEditarCostoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarCostoComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
