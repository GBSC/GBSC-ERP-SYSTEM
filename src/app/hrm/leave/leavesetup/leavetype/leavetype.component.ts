import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leavetype',
    templateUrl: './leavetype.component.html',
    styleUrls: ['./leavetype.component.scss']
})
export class LeavetypeComponent implements OnInit {

    public levetype: any;

    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {
<<<<<<< HEAD
        this.levetype = await this.leavesetupservice.getAllleavetype();


=======
        this.levetype = await this.leavesetupservice.getLeaveTypes();
>>>>>>> master
    }

    async addleavetype(value) {
        this.leavesetupservice.addLeaveType(value.data);
    }

    async updateleavetype(value) {
        this.leavesetupservice.updateLeaveType(value);
    }

    async deleteleavetype(value) {
        this.leavesetupservice.deleteLeaveType(value.key);
    }

}
