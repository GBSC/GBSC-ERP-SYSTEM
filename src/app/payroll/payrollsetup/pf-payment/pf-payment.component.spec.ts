import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfPaymentComponent } from './pf-payment.component';

describe('PfPaymentComponent', () => {
  let component: PfPaymentComponent;
  let fixture: ComponentFixture<PfPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
