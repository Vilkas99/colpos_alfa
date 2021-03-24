import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPerfilEditarComponent } from './security-perfil-editar.component';

describe('SecurityPerfilEditarComponent', () => {
  let component: SecurityPerfilEditarComponent;
  let fixture: ComponentFixture<SecurityPerfilEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityPerfilEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityPerfilEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
