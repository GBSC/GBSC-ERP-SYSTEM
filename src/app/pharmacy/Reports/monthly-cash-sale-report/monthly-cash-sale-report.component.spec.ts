import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCashSaleReportComponent } from './monthly-cash-sale-report.component';

describe('MonthlyCashSaleReportComponent', () => {
  let component: MonthlyCashSaleReportComponent;
  let fixture: ComponentFixture<MonthlyCashSaleReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyCashSaleReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyCashSaleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
