import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leavetype',
    templateUrl: './leavetype.component.html',
    styleUrls: ['./leavetype.component.scss']
})
export class LeavetypeComponent implements OnInit {

    public levesubtype: any;
    public levetype: any;

    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {

        this.levetype = await this.leavesetupservice.getLeaveTypes();

        this.levesubtype = await this.leavesetupservice.getLeaveSubTypes();
    }

    async addleavetype(value) {

        await this.leavesetupservice.addLeaveType(value.data);
        this.levetype = await this.leavesetupservice.getLeaveTypes();
    }

    async updateleavetype(value) {
        await this.leavesetupservice.updateLeaveType(value);
    }

    async deleteleavetype(value) {
        await this.leavesetupservice.deleteLeaveType(value.key);
    }

}
