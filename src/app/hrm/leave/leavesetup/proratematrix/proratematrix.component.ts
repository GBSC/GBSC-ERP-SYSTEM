import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../leaveSetup.service';

@Component({
  selector: 'app-proratematrix',
  templateUrl: './proratematrix.component.html',
  styleUrls: ['./proratematrix.component.scss']
})
export class ProratematrixComponent implements OnInit {
  public proratematrix: any;
  constructor(public leavesetupservice:LeaveSetupService) { }

  async ngOnInit() {
      await this.leavesetupservice.getproratematrix(); 
      this.proratematrix = this.leavesetupservice.proratematrix
      console.log(this.proratematrix);
      
      await this.leavesetupservice.getAllleavepolicy();
      let typeofleave = this.leavesetupservice.leavepolicy;
    
  }

  async addprmatrix(value) { 
      this.leavesetupservice.addproratematrix(value.data);
    }
    
    async updateprmatrix(value) { 
      this.leavesetupservice.updateproratematrix(value);   
    }

    async deleteprmatrix(value) { 
      this.leavesetupservice.Deleteproratematrix(value.key); 
    }
  }