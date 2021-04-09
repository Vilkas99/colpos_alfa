import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosLecturasComponent } from './cursos-lecturas.component';

describe('CursosLecturasComponent', () => {
  let component: CursosLecturasComponent;
  let fixture: ComponentFixture<CursosLecturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosLecturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosLecturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
