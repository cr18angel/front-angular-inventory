import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarColaboradorComponent } from './agregar-editar-colaborador.component';

describe('AgregarEditarColaboradorComponent', () => {
  let component: AgregarEditarColaboradorComponent;
  let fixture: ComponentFixture<AgregarEditarColaboradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarColaboradorComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
