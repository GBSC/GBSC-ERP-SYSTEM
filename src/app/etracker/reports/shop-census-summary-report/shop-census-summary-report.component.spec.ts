import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCensusSummaryReportComponent } from './shop-census-summary-report.component';

describe('ShopCensusSummaryReportComponent', () => {
  let component: ShopCensusSummaryReportComponent;
  let fixture: ComponentFixture<ShopCensusSummaryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCensusSummaryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCensusSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
