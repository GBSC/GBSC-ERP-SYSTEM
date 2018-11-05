import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leaveyearsetup',
    templateUrl: './leaveyearsetup.component.html',
    styleUrls: ['./leaveyearsetup.component.css']
})
export class LeaveyearsetupComponent implements OnInit {
    public leveyear: any;
    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {
        this.leveyear = await this.leavesetupservice.getLeaveYears();
    }

    async addleaveyear(value) {
        this.leavesetupservice.addLeaveYear(value.data);
        this.leveyear = await this.leavesetupservice.getLeaveYears();
    }

    async updateleaveyear(value) {
        this.leavesetupservice.updateLeaveYear(value);
    }

    async deleteleaveyear(value) {
        this.leavesetupservice.DeleteLeaveYear(value.key);
    }
}
