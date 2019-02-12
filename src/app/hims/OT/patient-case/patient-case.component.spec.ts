import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCaseComponent } from './patient-case.component';

describe('PatientCaseComponent', () => {
  let component: PatientCaseComponent;
  let fixture: ComponentFixture<PatientCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
