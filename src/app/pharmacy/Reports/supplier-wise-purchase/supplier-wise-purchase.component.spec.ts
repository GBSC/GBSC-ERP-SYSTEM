import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierWisePurchaseComponent } from './supplier-wise-purchase.component';

describe('SupplierWisePurchaseComponent', () => {
  let component: SupplierWisePurchaseComponent;
  let fixture: ComponentFixture<SupplierWisePurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierWisePurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierWisePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
