import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarLineasComponent } from './agregar-editar-lineas.component';

describe('AgregarEditarLineasComponent', () => {
  let component: AgregarEditarLineasComponent;
  let fixture: ComponentFixture<AgregarEditarLineasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarLineasComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
