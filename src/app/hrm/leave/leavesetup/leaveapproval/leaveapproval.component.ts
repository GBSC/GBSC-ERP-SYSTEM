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
        // await this.leavesetupservice.getAllleaveapproval(); 
        // this.leveapproval = this.leavesetupservice.leaveapproval
        // console.log(this.leveapproval);

    }

    // async addleaveapproval(lapproval) {
    //     console.log(lapproval.data);
    //     this.leavesetupservice.addleaveapproval(lapproval.data);
    //   }

    //   async updateleaveapproval(levapproval) {
    //     console.log(levapproval); 
    //     this.leavesetupservice.updateleaveapproval(levapproval); 
    //     console.log('in updated year')

    //   }

    //   async deleteleaveapproval(lvapproval) {
    //     console.log(lvapproval); 
    //     this.leavesetupservice.Deleteleaveapproval(lvapproval); 


    //   }

}
