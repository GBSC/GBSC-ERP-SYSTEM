import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
  selector: 'app-tax-adjustment-reason',
  templateUrl: './tax-adjustment-reason.component.html',
  styleUrls: ['./tax-adjustment-reason.component.scss']
})
export class TaxAdjustmentReasonComponent implements OnInit {

  public taxAdjustmentReason: any;
    Updatingreason: any;
  
  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
      await this.payrollsetupservice.gettaxadjustmentreasons();
      this.taxAdjustmentReason = this.payrollsetupservice.taxadjustmentreason;
  }

  async addTaxAdjustmentReason(value) {
      await this.payrollsetupservice.addtaxadjustmentreason(value.data);
  }
  
  updatingAdjustmentReason(value){
    this.Updatingreason = {...value.oldData, ...value.newData}; 
  }
  
  async updateTaxAdjustmentReason() { 
      await this.payrollsetupservice.updatetaxadjustmentreason(this.Updatingreason);
  }

  async deleteTaxAdjustmentReason(value) {
      await this.payrollsetupservice.Deletetaxadjustmentreason(value.key);
  }

}