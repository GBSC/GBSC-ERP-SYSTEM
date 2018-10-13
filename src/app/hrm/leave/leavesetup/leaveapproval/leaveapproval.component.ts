import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leaveapproval',
    templateUrl: './leaveapproval.component.html',
    styleUrls: ['./leaveapproval.component.scss']
})
export class LeaveapprovalComponent implements OnInit {

    public leveapproval: any;
    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {
         

    }

   
}
