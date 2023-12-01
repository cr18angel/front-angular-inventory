import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCargosComponent } from './listado-cargos.component';

describe('ListadoCargosComponent', () => {
  let component: ListadoCargosComponent;
  let fixture: ComponentFixture<ListadoCargosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoCargosComponent]
    });
    fixture = TestBed.createComponent(ListadoCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
