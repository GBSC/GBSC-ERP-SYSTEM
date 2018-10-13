import { Component, OnInit } from '@angular/core';
import { LeaveService, LeaveSetupService } from '../../../core';

@Component({
    selector: 'app-leaveapproval',
    templateUrl: './leaveapproval.component.html',
    styleUrls: ['./leaveapproval.component.scss']
})
export class LeaveapprovalComponent implements OnInit {
    public leaveapproval: any;
    public leaveApprover: any;
    public leaveRequest: any;

    constructor(public leaveservice: LeaveService, public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {

        this.leaveapproval = await this.leaveservice.getLeaveApprovals();

        this.leaveApprover = await this.leavesetupservice.getLeaveApprovers();

        this.leaveRequest = await this.leaveservice.getAllleaverequest();
    }

    async addleaveapproval(value) {
        this.leaveservice.addLeaveApproval(value.data);
    }

    async updateleaveapproval(value) {
        this.leaveservice.updateLeaveApproval(value);

    }

    async deleteleaveapproval(value) {
        this.leaveservice.DeleteLeaveAapproval(value.key);
    }

}
