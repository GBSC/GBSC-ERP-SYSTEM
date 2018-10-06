import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
  selector: 'app-taxschedule',
  templateUrl: './taxschedule.component.html',
  styleUrls: ['./taxschedule.component.scss']
})
export class TaxscheduleComponent implements OnInit {

  public taxSchedule: any;
  private taxScheduling: any;

  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    await this.payrollsetupservice.gettaxschedules();
    this.taxSchedule = this.payrollsetupservice.taxschedule;

    await this.payrollsetupservice.getincometaxrules();
    let incomeTaxrule = this.payrollsetupservice.incometaxrule;
  }


  async addTaxSchedule(value) {
    await this.payrollsetupservice.addtaxschedule(value.data);
  }

  updatingTaxSchedule(value) {
    this.taxScheduling = { ...value.oldData, ...value.newData };
  }

  async updateTaxSchedule() { 
    await this.payrollsetupservice.updatetaxschedule(this.taxScheduling);
  }

  async deleteTaxSchedule(value) {
    await this.payrollsetupservice.Deletetaxschedule(value.key);
  }
}