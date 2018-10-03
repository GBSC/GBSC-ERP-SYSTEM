import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../leaveSetup.service';

@Component({
    selector: 'app-leavetype',
    templateUrl: './leavetype.component.html',
    styleUrls: ['./leavetype.component.scss']
})
export class LeavetypeComponent implements OnInit {

    public levetype: any;
    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {
        this.levetype =  await this.leavesetupservice.getAllleavetype();
    //    this.leavesetupservice.leavetype
    //     console.log(this.levetype);

    }

    async addleavetype(value) {
        console.log(value.data);
        this.leavesetupservice.addleavetype(value.data);
    }

    async updateleavetype(value) {
        console.log(value);
        this.leavesetupservice.updateleavetype(value);

    }

    async deleteleavetype(value) {
        console.log(value);
        this.leavesetupservice.Deleteleavetype(value.key);


    }

}
