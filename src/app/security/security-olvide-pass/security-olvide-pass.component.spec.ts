import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityOlvidePassComponent } from './security-olvide-pass.component';

describe('SecurityOlvidePassComponent', () => {
  let component: SecurityOlvidePassComponent;
  let fixture: ComponentFixture<SecurityOlvidePassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityOlvidePassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityOlvidePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
