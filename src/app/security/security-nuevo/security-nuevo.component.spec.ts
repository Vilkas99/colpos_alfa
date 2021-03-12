import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityNuevoComponent } from './security-nuevo.component';

describe('SecurityNuevoComponent', () => {
  let component: SecurityNuevoComponent;
  let fixture: ComponentFixture<SecurityNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
