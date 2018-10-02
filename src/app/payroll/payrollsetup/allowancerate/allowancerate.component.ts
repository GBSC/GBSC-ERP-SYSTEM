import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../hrm/payroll/services/payrollsetup.service';

@Component({
    selector: 'app-allowancerate',
    templateUrl: './allowancerate.component.html',
    styleUrls: ['./allowancerate.component.css']
})
export class AllowancerateComponent implements OnInit {
    public allowancerate: any; 
    
    constructor(public payrollsetupservice: PayrollSetupService) { }
  
    async ngOnInit() {
      await this.payrollsetupservice.getallowancerates();
      this.allowancerate = this.payrollsetupservice.allowancerate;
  
    }
  
    async addAllowanceRate(value) {
      await this.payrollsetupservice.addallowancerate(value.data);
    }
  
    async updateAllowanceRate(value) {
      console.log(value);
      await this.payrollsetupservice.updateallowancerate(value);
    }
  
    async deleteAllowanceRate(value) {
      await this.payrollsetupservice.Deleteallowancerate(value.key);
    }
  
  }