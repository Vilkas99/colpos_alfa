import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosHomeComponent } from './cursos-home.component';

describe('CursosHomeComponent', () => {
  let component: CursosHomeComponent;
  let fixture: ComponentFixture<CursosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
