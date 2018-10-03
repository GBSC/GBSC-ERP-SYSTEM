import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';
@Component({
  selector: 'app-leavingreason',
  templateUrl: './leavingreason.component.html',
  styleUrls: ['./leavingreason.component.scss']
})
export class LeavingreasonComponent implements OnInit {

  public leavingReason: any; 
  constructor(public payrollsetupservice: PayrollSetupService) { }

 async ngOnInit() {
      await this.payrollsetupservice.getleavingreasons();
      this.leavingReason = this.payrollsetupservice.leavingreason;
    }
  
    async addLeavingReason(value) {
      await this.payrollsetupservice.addleavingreason(value.data);
    }
  
    async updateLeavingReason(value) {
      console.log(value);
      await this.payrollsetupservice.updateleavingreason(value);
    }
  
    async deleteLeavingReason(value) {
      await this.payrollsetupservice.Deleteleavingreason(value.key);
    }
  
  }