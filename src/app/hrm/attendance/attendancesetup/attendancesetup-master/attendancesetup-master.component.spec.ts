import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancesetupMasterComponent } from './attendancesetup-master.component';

describe('AttendancesetupMasterComponent', () => {
  let component: AttendancesetupMasterComponent;
  let fixture: ComponentFixture<AttendancesetupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancesetupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancesetupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
