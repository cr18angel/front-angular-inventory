import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarCargoComponent } from './agregar-editar-cargo.component';

describe('AgregarEditarCargoComponent', () => {
  let component: AgregarEditarCargoComponent;
  let fixture: ComponentFixture<AgregarEditarCargoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarCargoComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
