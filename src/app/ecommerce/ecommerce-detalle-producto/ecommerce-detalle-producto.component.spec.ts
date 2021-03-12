import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceDetalleProductoComponent } from './ecommerce-detalle-producto.component';

describe('EcommerceDetalleProductoComponent', () => {
  let component: EcommerceDetalleProductoComponent;
  let fixture: ComponentFixture<EcommerceDetalleProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceDetalleProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceDetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
