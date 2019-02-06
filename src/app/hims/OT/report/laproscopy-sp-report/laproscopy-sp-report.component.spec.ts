import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaproscopySpReportComponent } from './laproscopy-sp-report.component';

describe('LaproscopySpReportComponent', () => {
  let component: LaproscopySpReportComponent;
  let fixture: ComponentFixture<LaproscopySpReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaproscopySpReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaproscopySpReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
