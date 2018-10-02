import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { LeaveSetupService } from '../leaveSetup.service';

@Component({
  selector: 'app-leaveapproval',
  templateUrl: './leaveapproval.component.html',
  styleUrls: ['./leaveapproval.component.scss']
})
export class LeaveapprovalComponent implements OnInit {
  public leaveapproval;

  constructor(public leaveservice:LeaveService,public leavesetupservice:LeaveSetupService) { }

  async ngOnInit() {
 
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
 
  }

  async deleteleaveapproval(value) { 
    this.leaveservice.Deleteleaveapproval(value.key); 
 
 
  }

}
