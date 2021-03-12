import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceCategoriasComponent } from './ecommerce-categorias.component';

describe('EcommerceCategoriasComponent', () => {
  let component: EcommerceCategoriasComponent;
  let fixture: ComponentFixture<EcommerceCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
