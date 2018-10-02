import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../leaveSetup.service';

@Component({
    selector: 'app-leaveyearsetup',
    templateUrl: './leaveyearsetup.component.html',
    styleUrls: ['./leaveyearsetup.component.css']
})
export class LeaveyearsetupComponent implements OnInit {
    public leveyear: any;
    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {
        await this.leavesetupservice.getAllleaveyear();
        this.leveyear = this.leavesetupservice.leaveyear
        console.log(this.leveyear);

    }

<<<<<<< HEAD
    async addleaveyear(lyear) {
        console.log(lyear.data);
        this.leavesetupservice.addleaveyear(lyear.data);
    }

    async updateleaveyear(levyear) {
        console.log(levyear);
        this.leavesetupservice.updateleaveyear(levyear);
        console.log('in updated year')

    }

    async deleteleaveyear(lvyear) {
        console.log(lvyear);
        this.leavesetupservice.Deleteleavyear(lvyear.key);


    }
=======
    async addleaveyear(value) {
        console.log(value.data);
        this.leavesetupservice.addleaveyear(value.data);
      }
      
      async updateleaveyear(value) { 
        this.leavesetupservice.updateleaveyear(value);  
     
      }

      async deleteleaveyear(value) {
        console.log(value); 
        this.leavesetupservice.Deleteleavyear(value.key); 
     
     
      }
>>>>>>> master


}
