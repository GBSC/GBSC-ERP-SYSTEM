import { Component, OnInit } from '@angular/core';
import { AttendanceService, EmployeeService, AttendancesetupService } from '../../../core';

@Component({
  selector: 'app-create-attendancerequest',
  templateUrl: './create-attendancerequest.component.html',
  styleUrls: ['./create-attendancerequest.component.scss']
})
export class CreateAttendancerequestComponent implements OnInit {

  public employee : any;
  public employees : any;
  
  constructor(public attendanceservice: AttendanceService, public attendanceSetupservice: AttendancesetupService,
    public Employeeservice: EmployeeService) { }


  async ngOnInit() {
    
    this.employees = await this.Employeeservice.GetAllEmployees();
  }

  getDataByEmployee(a){
    console.log(a);
    
    // this.Employeeservice.GetEmployee(a).subscribe(
    //   x=> this.employee = x)

  }
}
