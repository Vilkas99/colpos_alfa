import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoHomeComponent } from './foro-home.component';

describe('ForoHomeComponent', () => {
  let component: ForoHomeComponent;
  let fixture: ComponentFixture<ForoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
