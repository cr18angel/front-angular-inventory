import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarComputadorComponent } from './agregar-editar-computador.component';

describe('AgregarEditarComputadorComponent', () => {
  let component: AgregarEditarComputadorComponent;
  let fixture: ComponentFixture<AgregarEditarComputadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarComputadorComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarComputadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
