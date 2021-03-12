import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUbicacionComponent } from './home-ubicacion.component';

describe('HomeUbicacionComponent', () => {
  let component: HomeUbicacionComponent;
  let fixture: ComponentFixture<HomeUbicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUbicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
