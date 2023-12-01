import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarRolComponent } from './agregar-editar-rol.component';

describe('AgregarEditarRolComponent', () => {
  let component: AgregarEditarRolComponent;
  let fixture: ComponentFixture<AgregarEditarRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarRolComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
