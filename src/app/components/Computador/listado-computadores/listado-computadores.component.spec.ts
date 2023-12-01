import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComputadoresComponent } from './listado-computadores.component';

describe('ListadoComputadoresComponent', () => {
  let component: ListadoComputadoresComponent;
  let fixture: ComponentFixture<ListadoComputadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoComputadoresComponent]
    });
    fixture = TestBed.createComponent(ListadoComputadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
