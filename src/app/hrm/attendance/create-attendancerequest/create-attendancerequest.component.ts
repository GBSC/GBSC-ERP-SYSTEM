import { Component, OnInit, Input } from '@angular/core';
import { AttendanceService, EmployeeService, AttendancesetupService } from '../../../core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-attendancerequest',
  templateUrl: './create-attendancerequest.component.html',
  styleUrls: ['./create-attendancerequest.component.scss']
})
export class CreateAttendancerequestComponent implements OnInit {

  public employee: any;
  public attendancerequestForm: any;
  public employees: any;
  public assignrosters: any;
  public currentUserAttendance = [];
  public rosterattendance: any;
  public updatingModel: any;
  public userRosterattendance: any;

  constructor(private fb: FormBuilder, public attendanceservice: AttendanceService, public attendanceSetupservice: AttendancesetupService,
    public Employeeservice: EmployeeService) { }


  async ngOnInit() {

    this.attendancerequestForm = this.fb.group({
      UserId: [''],
      AttendanceDate: ['']
    });

    this.employees = await this.Employeeservice.GetAllEmployees();

    this.rosterattendance = await this.attendanceservice.getUserRosterAttendances();

    this.assignrosters = await this.attendanceSetupservice.getAsignRoster(22);
    // .filter(s=> s.userId)
  }

  GetUserattendance(value) {
    this.currentUserAttendance = this.rosterattendance.filter(ul => ul.userId == value)
    // console.log(this.assignrosters);
    // console.log(this.assignrosters.shiftsId);
    // console.log(this.assignrosters.userAssignRosters);

    let usersWithShifts = this.assignrosters.userAssignRosters.map(r => {
      r.shiftsId = this.assignrosters.shiftsId;
      return r;
    });
    // usersWithShifts.foreach(
      
    // )
    console.log(usersWithShifts);
  }


  async updatingattendance(value) {
    this.updatingModel = { ...value.oldData, ...value.newData };
  }


  async updateuserRosterattendance() {
    this.attendanceservice.updateUserRosterAttendance(this.updatingModel);
  }
}
