import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarPaisComponent } from './agregar-editar-pais.component';

describe('AgregarEditarPaisComponent', () => {
  let component: AgregarEditarPaisComponent;
  let fixture: ComponentFixture<AgregarEditarPaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarPaisComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
