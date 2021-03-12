import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceProductosComponent } from './ecommerce-productos.component';

describe('EcommerceProductosComponent', () => {
  let component: EcommerceProductosComponent;
  let fixture: ComponentFixture<EcommerceProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
