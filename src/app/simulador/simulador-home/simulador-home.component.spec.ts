import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorHomeComponent } from './simulador-home.component';

describe('SimuladorHomeComponent', () => {
  let component: SimuladorHomeComponent;
  let fixture: ComponentFixture<SimuladorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
