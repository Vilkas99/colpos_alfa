import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSimuladorComponent } from './home-simulador.component';

describe('HomeSimuladorComponent', () => {
  let component: HomeSimuladorComponent;
  let fixture: ComponentFixture<HomeSimuladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSimuladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSimuladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
