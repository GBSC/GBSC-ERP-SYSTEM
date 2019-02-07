import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentWiseAttendanceComponent } from './department-wise-attendance.component';

describe('DepartmentWiseAttendanceComponent', () => {
  let component: DepartmentWiseAttendanceComponent;
  let fixture: ComponentFixture<DepartmentWiseAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentWiseAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentWiseAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
