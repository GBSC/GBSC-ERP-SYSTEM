import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent implements OnInit {

  public benefit: any;
  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getbenefits();
    this.benefit = this.payrollsetupservice.benefits;
  }

  async addBenefit(value) {
    await this.payrollsetupservice.addbenefit(value.data);
  }

  async updateBenefit(value) {
    console.log(value);
    await this.payrollsetupservice.updatebenefit(value);
  }

  async deleteBenefit(value) {
    await this.payrollsetupservice.Deletebenefit(value.key);
  }

}