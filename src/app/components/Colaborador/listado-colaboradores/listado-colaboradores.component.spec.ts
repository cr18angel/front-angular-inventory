import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoColaboradoresComponent } from './listado-colaboradores.component';

describe('ListadoColaboradoresComponent', () => {
  let component: ListadoColaboradoresComponent;
  let fixture: ComponentFixture<ListadoColaboradoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoColaboradoresComponent]
    });
    fixture = TestBed.createComponent(ListadoColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
