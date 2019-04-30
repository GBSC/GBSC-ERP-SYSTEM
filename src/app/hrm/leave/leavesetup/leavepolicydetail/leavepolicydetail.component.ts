import { Component, OnInit } from '@angular/core';
import { LeaveSetupService, EmployeeService, SetupService } from '../../../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leavepolicydetail',
  templateUrl: './leavepolicydetail.component.html',
  styleUrls: ['./leavepolicydetail.component.css']
})
export class LeavepolicydetailComponent implements OnInit {

  public groups: any;
  public leaveYears: any;
  public leaveTypes: any;
  public LeavePolicies: any;
  public leavePolicyId: any;

  constructor(public leavesetupservice: LeaveSetupService, public empservice: EmployeeService, public hrsetupservice: SetupService, public router: Router) { }

  async ngOnInit() {

    this.LeavePolicies = await this.leavesetupservice.getLeavePolicies();

    this.leaveTypes = await this.leavesetupservice.getLeaveTypes();

    this.leaveYears = await this.leavesetupservice.getLeaveYears();

    this.groups = await this.hrsetupservice.getAllGroups();
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.addLeavePolicy.bind(this)
        }
      });
  }
  addLeavePolicy() {
    this.router.navigate(['/hrm/leave/leavepolicy']);
  }

  getLeavePolicy(d) { 
    this.leavePolicyId = d.key.leavePolicyId;
    this.router.navigate(['/hrm/leave/update-leavepolicy/' + this.leavePolicyId]);
  }
}
