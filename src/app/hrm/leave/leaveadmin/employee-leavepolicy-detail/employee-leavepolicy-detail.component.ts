import { Component, OnInit } from '@angular/core';
import { SetupService, EmployeeService, LeaveService, LeaveSetupService } from '../../../../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-leavepolicy-detail',
  templateUrl: './employee-leavepolicy-detail.component.html',
  styleUrls: ['./employee-leavepolicy-detail.component.css']
})
export class EmployeeLeavepolicyDetailComponent implements OnInit {

  public empleavepolicy: any;
  public employees: any;
  public leaveyear: any;
  public leavepolicy: any;
  public leaveTypes: any;
  public leavePolicyEmployeeWiseId: any;

  constructor(public setupService: SetupService, public activatedRoute: ActivatedRoute, public leaveservice: LeaveService, public leavesetupservice: LeaveSetupService,
    public empservice: EmployeeService, public hrsetupservice: SetupService, public router: Router) { }

  async ngOnInit() {

    this.empleavepolicy = await this.leaveservice.getLeavePolicyEmployee();

    this.leavepolicy = await this.leavesetupservice.getLeavePolicies();

    this.employees = await this.empservice.GetAllEmployees();

    this.leaveyear = await this.leavesetupservice.getLeaveYears();

    this.leaveTypes = await this.leavesetupservice.getLeaveTypes();

  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.addEmployeeLeavePolicy.bind(this)
        }
      });
  }
  addEmployeeLeavePolicy() {
    this.router.navigate(['/hrm/leave/leaveadmin/employeeleavepolicy']);
  }

  empLeavePolicyData(d) { 
    this.leavePolicyEmployeeWiseId = d.key;
    this.router.navigate(['/hrm/leave/leaveadmin/update-employeeleavepolicy/' + this.leavePolicyEmployeeWiseId]);
  }
}
