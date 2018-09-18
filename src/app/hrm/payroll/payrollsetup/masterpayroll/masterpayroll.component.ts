import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-masterpayroll',
  templateUrl: './masterpayroll.component.html',
  styleUrls: ['./masterpayroll.component.scss']
})
export class MasterpayrollComponent implements OnInit {

  public masterPayroll: any; 
  constructor(public payrollsetupservice: PayrollSetupService) { }

 async ngOnInit() {
      await this.payrollsetupservice.getmasterpayrolls();
      this.masterPayroll = this.payrollsetupservice.masterpayroll;
    }
  
    async addMasterPayroll(value) {
      await this.payrollsetupservice.addmasterpayroll(value.data);
    }
  
    async updateMasterPayroll(value) {
      console.log(value);
      await this.payrollsetupservice.updatemasterpayroll(value);
    }
  
    async deleteMasterPayroll(value) {
      await this.payrollsetupservice.Deletemasterpayroll(value.key);
    }
  
  }