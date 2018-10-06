import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
  selector: 'app-taxrelief',
  templateUrl: './taxrelief.component.html',
  styleUrls: ['./taxrelief.component.scss']
})
export class TaxreliefComponent implements OnInit {

  public taxRelief: any;
  public  updatingtaxRelief: any;

  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
      await this.payrollsetupservice.gettaxreliefs();
      this.taxRelief = this.payrollsetupservice.taxrelief;

      await this.payrollsetupservice.getincometaxrules();
      let incomeTaxrule = this.payrollsetupservice.incometaxrule;
  }

  async addTaxRelief(value) {
      await this.payrollsetupservice.addtaxrelief(value.data);
  }

  updatingTaxRelief(value){
    this.updatingtaxRelief = {...value.oldData, ...value.newData}; 
  }

  async updateTaxRelief() { 
      await this.payrollsetupservice.updatetaxrelief(this.updatingtaxRelief);
  }

  async deleteTaxRelief(value) {
      await this.payrollsetupservice.Deletetaxrelief(value.key);
  }
}