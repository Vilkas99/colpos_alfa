import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEvaluacionesComponent } from './cursos-evaluaciones.component';

describe('CursosEvaluacionesComponent', () => {
  let component: CursosEvaluacionesComponent;
  let fixture: ComponentFixture<CursosEvaluacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosEvaluacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosEvaluacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
