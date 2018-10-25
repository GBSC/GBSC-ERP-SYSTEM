import { Component, OnInit } from '@angular/core';
import { LeaveSetupService, LeaveService, EmployeeService } from '../../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewleaverequest',
  templateUrl: './viewleaverequest.component.html',
  styleUrls: ['./viewleaverequest.component.scss']
})
export class ViewleaverequestComponent implements OnInit {


  public leaverequestdetail: any;
  public leaveYear: any;
  public employees: any;
  public leaveType: any;
  public leaveApprovr: any;
  public leaverequest: any;
  public leaveOpening: any;

  constructor(public leavesetupservice: LeaveSetupService, public empservice: EmployeeService,
      public router: Router, public leaveservice: LeaveService) { }


  async ngOnInit() {
    this.leaverequestdetail = await this.leaveservice.getLeaveRequestDetails();

    this.leaverequest = await this.leaveservice.getAllleaverequest();

    this.leaveOpening = await this.leaveservice.getLeaveOpening();

    this.employees = await this.empservice.GetAllEmployees();

    this.leaveApprovr = await this.leavesetupservice.getLeaveApprovers();

    this.leaveYear = await this.leavesetupservice.getLeaveYears();

    this.leaveType = await this.leavesetupservice.getLeaveTypes();

  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
       {
            location: 'after',
            widget: 'dxButton',
            options: {
                icon: 'add',
                onClick: this.addleaveRequest.bind(this)
            }
        });
      }


  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length)
        e.component.selectRowsByIndexes(0);
}

selectionChanged(e) {
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);    
}

addleaveRequest(){
  this.router.navigate(['/hrm/leave/createleaverequest']);
}

}
