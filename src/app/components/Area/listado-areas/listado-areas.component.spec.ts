import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAreasComponent } from './listado-areas.component';

describe('ListadoAreasComponent', () => {
  let component: ListadoAreasComponent;
  let fixture: ComponentFixture<ListadoAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoAreasComponent]
    });
    fixture = TestBed.createComponent(ListadoAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
