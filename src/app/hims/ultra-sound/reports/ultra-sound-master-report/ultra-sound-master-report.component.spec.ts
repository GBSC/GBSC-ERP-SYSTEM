import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraSoundMasterReportComponent } from './ultra-sound-master-report.component';

describe('UltraSoundMasterReportComponent', () => {
  let component: UltraSoundMasterReportComponent;
  let fixture: ComponentFixture<UltraSoundMasterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltraSoundMasterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltraSoundMasterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
