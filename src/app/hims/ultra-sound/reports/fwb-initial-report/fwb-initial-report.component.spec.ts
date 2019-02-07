import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwbInitialReportComponent } from './fwb-initial-report.component';

describe('FwbInitialReportComponent', () => {
  let component: FwbInitialReportComponent;
  let fixture: ComponentFixture<FwbInitialReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwbInitialReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwbInitialReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
