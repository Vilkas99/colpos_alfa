import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosMostrarCategoriaComponent } from './cursos-mostrar-categoria.component';

describe('CursosMostrarCategoriaComponent', () => {
  let component: CursosMostrarCategoriaComponent;
  let fixture: ComponentFixture<CursosMostrarCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosMostrarCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosMostrarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
