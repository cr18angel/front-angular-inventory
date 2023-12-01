import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGerenciaComponent } from './listado-gerencia.component';

describe('ListadoGerenciaComponent', () => {
  let component: ListadoGerenciaComponent;
  let fixture: ComponentFixture<ListadoGerenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoGerenciaComponent]
    });
    fixture = TestBed.createComponent(ListadoGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
