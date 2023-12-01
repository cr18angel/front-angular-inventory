import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarCelularComponent } from './agregar-editar-celular.component';

describe('AgregarEditarCelularComponent', () => {
  let component: AgregarEditarCelularComponent;
  let fixture: ComponentFixture<AgregarEditarCelularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarCelularComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
