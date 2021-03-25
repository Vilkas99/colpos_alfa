import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosVideosComponent } from './cursos-videos.component';

describe('CursosVideosComponent', () => {
  let component: CursosVideosComponent;
  let fixture: ComponentFixture<CursosVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
