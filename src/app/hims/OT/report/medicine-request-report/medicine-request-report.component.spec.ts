import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineRequestReportComponent } from './medicine-request-report.component';

describe('MedicineRequestReportComponent', () => {
  let component: MedicineRequestReportComponent;
  let fixture: ComponentFixture<MedicineRequestReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineRequestReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineRequestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
