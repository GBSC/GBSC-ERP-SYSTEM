import { Component, OnInit } from '@angular/core';
import { LeaveService, SystemAdministrationService, LeaveSetupService, SetupService } from '../../../core';

@Component({
    selector: 'app-leaveclosing',
    templateUrl: './leaveclosing.component.html',
    styleUrls: ['./leaveclosing.component.scss']
})
export class LeaveclosingComponent implements OnInit {

    public departments: any;
    public groups: any;
    public leaveYears: any;
    public leaveclose: any;

    constructor(public leaveservice: LeaveService, public systemadminservice: SystemAdministrationService,
        public leavesetupservice: LeaveSetupService, public setupservice: SetupService) { }

    async ngOnInit() {

        this.leaveclose = await this.leaveservice.getLeaveClosings();

        this.leaveYears = await this.leavesetupservice.getLeaveYears();

        this.groups = await this.setupservice.getAllGroups();

        this.departments = await this.systemadminservice.getDepartments();
    }

    async addleaveclosing(value) {

      await this.leaveservice.addLeaveClosing(value.data);
      this.leaveclose = await this.leaveservice.getLeaveClosings();
    }

    async updateleaveclosing(value) {
        await this.leaveservice.updateLeaveClosing(value);

    }

    async deleteleaveclosing(value) {
        this.leaveservice.DeleteLeaveClosing(value.key);


    }
}
