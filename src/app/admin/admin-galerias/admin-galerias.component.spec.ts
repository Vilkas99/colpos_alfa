import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGaleriasComponent } from './admin-galerias.component';

describe('AdminGaleriasComponent', () => {
  let component: AdminGaleriasComponent;
  let fixture: ComponentFixture<AdminGaleriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGaleriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGaleriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
