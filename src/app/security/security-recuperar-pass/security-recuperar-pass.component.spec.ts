import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRecuperarPassComponent } from './security-recuperar-pass.component';

describe('SecurityRecuperarPassComponent', () => {
  let component: SecurityRecuperarPassComponent;
  let fixture: ComponentFixture<SecurityRecuperarPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityRecuperarPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityRecuperarPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
