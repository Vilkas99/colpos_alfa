import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoPostsComponent } from './foro-posts.component';

describe('ForoPostsComponent', () => {
  let component: ForoPostsComponent;
  let fixture: ComponentFixture<ForoPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
