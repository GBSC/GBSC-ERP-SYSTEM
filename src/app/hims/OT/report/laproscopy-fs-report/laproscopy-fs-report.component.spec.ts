import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaproscopyFsReportComponent } from './laproscopy-fs-report.component';

describe('LaproscopyFsReportComponent', () => {
  let component: LaproscopyFsReportComponent;
  let fixture: ComponentFixture<LaproscopyFsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaproscopyFsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaproscopyFsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
