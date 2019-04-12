import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leaveyearsetup',
    templateUrl: './leaveyearsetup.component.html',
    styleUrls: ['./leaveyearsetup.component.css']
})
export class LeaveyearsetupComponent implements OnInit {
    public updatingModel: any;
    public leveyear: any;

    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {
        this.leveyear = await this.leavesetupservice.getLeaveYears();
    }

    async addleaveyear(value) {
        await this.leavesetupservice.addLeaveYear(value.data);
        this.leveyear = await this.leavesetupservice.getLeaveYears();
    }

    async updatingLeaveyear(value) {
        this.updatingModel = { ...value.oldData, ...value.newData };
    }

    async updateleaveyear() {
        await this.leavesetupservice.updateLeaveYear(this.updatingModel);
        this.leveyear = await this.leavesetupservice.getLeaveYears();
    }

    async deleteleaveyear(value) {
        await this.leavesetupservice.DeleteLeaveYear(value.key);
    }
}
