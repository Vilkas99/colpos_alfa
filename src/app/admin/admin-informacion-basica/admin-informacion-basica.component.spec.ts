import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInformacionBasicaComponent } from './admin-informacion-basica.component';

describe('AdminInformacionBasicaComponent', () => {
  let component: AdminInformacionBasicaComponent;
  let fixture: ComponentFixture<AdminInformacionBasicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInformacionBasicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInformacionBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
