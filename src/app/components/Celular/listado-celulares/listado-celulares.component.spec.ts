import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCelularesComponent } from './listado-celulares.component';

describe('ListadoCelularesComponent', () => {
  let component: ListadoCelularesComponent;
  let fixture: ComponentFixture<ListadoCelularesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoCelularesComponent]
    });
    fixture = TestBed.createComponent(ListadoCelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
