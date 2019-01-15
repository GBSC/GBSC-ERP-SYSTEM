import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraSoundPelvisReportComponent } from './ultra-sound-pelvis-report.component';

describe('UltraSoundPelvisReportComponent', () => {
  let component: UltraSoundPelvisReportComponent;
  let fixture: ComponentFixture<UltraSoundPelvisReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltraSoundPelvisReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltraSoundPelvisReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
