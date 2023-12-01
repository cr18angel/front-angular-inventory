import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCostoComponent } from './listado-costo.component';

describe('ListadoCostoComponent', () => {
  let component: ListadoCostoComponent;
  let fixture: ComponentFixture<ListadoCostoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoCostoComponent]
    });
    fixture = TestBed.createComponent(ListadoCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
