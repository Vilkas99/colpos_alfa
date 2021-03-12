import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNoticiasComponent } from './home-noticias.component';

describe('HomeNoticiasComponent', () => {
  let component: HomeNoticiasComponent;
  let fixture: ComponentFixture<HomeNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
