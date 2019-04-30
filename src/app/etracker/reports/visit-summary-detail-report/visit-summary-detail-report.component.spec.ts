import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitSummaryDetailReportComponent } from './visit-summary-detail-report.component';

describe('VisitSummaryDetailReportComponent', () => {
  let component: VisitSummaryDetailReportComponent;
  let fixture: ComponentFixture<VisitSummaryDetailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitSummaryDetailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitSummaryDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
