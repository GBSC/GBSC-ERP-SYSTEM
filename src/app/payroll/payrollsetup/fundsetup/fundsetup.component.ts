import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../hrm/payroll/services/payrollsetup.service';

@Component({
    selector: 'app-fundsetup',
    templateUrl: './fundsetup.component.html',
    styleUrls: ['./fundsetup.component.css']
})
export class FundsetupComponent implements OnInit {

    public fundSetup: any; 
    constructor(public payrollsetupservice: PayrollSetupService) { }

   async ngOnInit() {
        await this.payrollsetupservice.getfundsetups();
        this.fundSetup = this.payrollsetupservice.fundsetup;
      }
    
      async addFundSetup(value) {
        await this.payrollsetupservice.addfundsetup(value.data);
      }
    
      async updateFundSetup(value) {
        console.log(value);
        await this.payrollsetupservice.updatefundsetup(value);
      }
    
      async deleteFundSetup(value) {
        await this.payrollsetupservice.Deletefundsetup(value.key);
      }
    
    }