import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentreceiptComponent } from './paymentreceipt.component';

describe('PaymentreceiptComponent', () => {
  let component: PaymentreceiptComponent;
  let fixture: ComponentFixture<PaymentreceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentreceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
