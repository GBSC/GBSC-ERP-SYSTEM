import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryDetailComponent } from './order-summary-detail.component';

describe('OrderSummaryDetailComponent', () => {
  let component: OrderSummaryDetailComponent;
  let fixture: ComponentFixture<OrderSummaryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSummaryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
