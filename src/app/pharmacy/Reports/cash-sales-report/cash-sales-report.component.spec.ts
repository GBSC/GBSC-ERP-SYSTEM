import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashSalesReportComponent } from './cash-sales-report.component';

describe('CashSalesReportComponent', () => {
  let component: CashSalesReportComponent;
  let fixture: ComponentFixture<CashSalesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashSalesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
