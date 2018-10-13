import { Component, OnInit } from '@angular/core';
import { LeaveService, LeaveSetupService } from '../../../core';

@Component({
    selector: 'app-leaveapproval',
    templateUrl: './leaveapproval.component.html',
    styleUrls: ['./leaveapproval.component.scss']
})
export class LeaveapprovalComponent implements OnInit {
<<<<<<< HEAD
    public leaveapproval;
=======
    public leaveapproval: any;
    public leaveApprover: any;
    public leaveRequest: any;
>>>>>>> master

    constructor(public leaveservice: LeaveService, public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {

<<<<<<< HEAD
        await this.leaveservice.getleaveapprovals();
        this.leaveapproval = this.leaveservice.leaveapproval
        console.log(this.leaveapproval);

        await this.leavesetupservice.getleaveapprover();
        let leaveapprovr = this.leavesetupservice.leaveapprover;

        await this.leaveservice.getAllleaverequest();
        let leavereqst = this.leaveservice.leaverequest;
    }

    async addleaveapproval(value) {
        this.leaveservice.addleaveapproval(value.data);
    }

    async updateleaveapproval(value) {
        this.leaveservice.updateleaveapproval(value);
=======
        this.leaveapproval = await this.leaveservice.getLeaveApprovals();

        this.leaveApprover = await this.leavesetupservice.getLeaveApprovers();

        this.leaveRequest = await this.leaveservice.getAllleaverequest();
    }

    async addleaveapproval(value) {
        this.leaveservice.addLeaveApproval(value.data);
    }

    async updateleaveapproval(value) {
        this.leaveservice.updateLeaveApproval(value);
>>>>>>> master

    }

    async deleteleaveapproval(value) {
<<<<<<< HEAD
        this.leaveservice.Deleteleaveapproval(value.key);


=======
        this.leaveservice.DeleteLeaveAapproval(value.key);
>>>>>>> master
    }

}
