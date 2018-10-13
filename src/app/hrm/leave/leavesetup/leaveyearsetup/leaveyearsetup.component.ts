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
<<<<<<< HEAD
        console.log(value.data);
        this.leavesetupservice.addleaveyear(value.data);
    }

    async updateleaveyear(value) {
        this.leavesetupservice.updateleaveyear(value);

    }

    async deleteleaveyear(value) {
        console.log(value);
        this.leavesetupservice.Deleteleavyear(value.key);


=======
        this.leavesetupservice.addLeaveYear(value.data);
>>>>>>> master
    }

    async updateleaveyear(value) {
        this.leavesetupservice.updateLeaveYear(value);
    }

    async deleteleaveyear(value) {
        this.leavesetupservice.DeleteLeaveYear(value.key);
    }
}
