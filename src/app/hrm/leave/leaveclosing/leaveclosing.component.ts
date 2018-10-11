import { Component, OnInit } from '@angular/core';
import { LeaveService, SystemAdministrationService, LeaveSetupService, SetupService } from '../../../core';

@Component({
    selector: 'app-leaveclosing',
    templateUrl: './leaveclosing.component.html',
    styleUrls: ['./leaveclosing.component.scss']
})
export class LeaveclosingComponent implements OnInit {

  public group: any;
  public leaveyear: any;
  public leaveclose: any;

  constructor(public leaveservice: LeaveService, public systemadminservice: SystemAdministrationService,
    public leavesetupservice: LeaveSetupService, public setupservice: SetupService) { }

  async ngOnInit() {

    await this.leaveservice.getleaveclosings();
    this.leaveclose = this.leaveservice.leaveclosing
    console.log(this.leaveclose);

    await this.leavesetupservice.getAllleaveyear();
    this.leaveyear = this.leavesetupservice.leaveyear
    console.log(this.leaveyear);

    this.group = await this.setupservice.getAllGroups();

    await this.systemadminservice.getDepartments();
    let department = this.systemadminservice.departments;
  }

  async addleaveclosing(value) {
    console.log(value.data);
    let x = await this.leaveservice.addleaveclosing(value.data);
    console.log(x)
  }

  async updateleaveclosing(value) {
    this.leaveservice.updateleaveclosing(value);

  }

  async deleteleaveclosing(value) {
    this.leaveservice.Deleteleaveclosing(value.key);


  }
}
