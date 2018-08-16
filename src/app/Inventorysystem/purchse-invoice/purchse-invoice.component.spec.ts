import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchseInvoiceComponent } from './purchse-invoice.component';

describe('PurchseInvoiceComponent', () => {
  let component: PurchseInvoiceComponent;
  let fixture: ComponentFixture<PurchseInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchseInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchseInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
