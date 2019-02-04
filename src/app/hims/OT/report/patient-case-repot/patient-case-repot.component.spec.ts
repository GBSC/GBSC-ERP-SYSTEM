import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCaseRepotComponent } from './patient-case-repot.component';

describe('PatientCaseRepotComponent', () => {
  let component: PatientCaseRepotComponent;
  let fixture: ComponentFixture<PatientCaseRepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCaseRepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCaseRepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
