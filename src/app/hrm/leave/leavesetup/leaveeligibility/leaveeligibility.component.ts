import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../leaveSetup.service';

@Component({
  selector: 'app-leaveeligibility',
  templateUrl: './leaveeligibility.component.html',
  styleUrls: ['./leaveeligibility.component.scss']
})
export class LeaveeligibilityComponent implements OnInit {

  public leaveeligibility: any;
  constructor(public leavesetupservice:LeaveSetupService) { }

  async ngOnInit() {
      await this.leavesetupservice.getAllleaveeligibility(); 
      this.leaveeligibility = this.leavesetupservice.leaveeligibility
      console.log(this.leaveeligibility);
      
  }

  async addleaveeligibility(leligibility) {
      console.log(leligibility.data);
      this.leavesetupservice.addleaveeligibility(leligibility.data);
    }
    
    async updateleaveeligibility(leveligibility) {
      console.log(leveligibility); 
      this.leavesetupservice.updateleaveeligibility(leveligibility); 
      console.log('in updated year')
   
    }

    async deleteleaveeligibility(lveligibility) {
      console.log(lveligibility); 
      this.leavesetupservice.Deleteleaveeligibility(lveligibility.key); 
   
   
    }
    
}
