import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarruselComponent } from './home-carrusel.component';

describe('HomeCarruselComponent', () => {
  let component: HomeCarruselComponent;
  let fixture: ComponentFixture<HomeCarruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCarruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
