import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HystroscopyReportComponent } from './hystroscopy-report.component';

describe('HystroscopyReportComponent', () => {
  let component: HystroscopyReportComponent;
  let fixture: ComponentFixture<HystroscopyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HystroscopyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HystroscopyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
