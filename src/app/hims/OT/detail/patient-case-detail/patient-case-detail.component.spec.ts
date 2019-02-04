import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCaseDetailComponent } from './patient-case-detail.component';

describe('PatientCaseDetailComponent', () => {
  let component: PatientCaseDetailComponent;
  let fixture: ComponentFixture<PatientCaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
