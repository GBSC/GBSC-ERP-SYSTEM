import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPatientComponent } from './find-patient.component';

describe('FindPatientComponent', () => {
  let component: FindPatientComponent;
  let fixture: ComponentFixture<FindPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
