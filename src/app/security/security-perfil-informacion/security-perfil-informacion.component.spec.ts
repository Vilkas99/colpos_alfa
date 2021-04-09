import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPerfilInformacionComponent } from './security-perfil-informacion.component';

describe('SecurityPerfilInformacionComponent', () => {
  let component: SecurityPerfilInformacionComponent;
  let fixture: ComponentFixture<SecurityPerfilInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityPerfilInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityPerfilInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
