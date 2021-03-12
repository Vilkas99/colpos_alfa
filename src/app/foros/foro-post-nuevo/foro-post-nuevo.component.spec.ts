import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoPostNuevoComponent } from './foro-post-nuevo.component';

describe('ForoPostNuevoComponent', () => {
  let component: ForoPostNuevoComponent;
  let fixture: ComponentFixture<ForoPostNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoPostNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoPostNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
