import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-taxyear',
    templateUrl: './taxyear.component.html',
    styleUrls: ['./taxyear.component.scss']
})
export class TaxyearComponent implements OnInit {

    public TaxYear: any;
    taxyear: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        await this.payrollsetupservice.gettaxyears();
        this.TaxYear = this.payrollsetupservice.taxyear;
    }

    async addTaxYear(value) {
        await this.payrollsetupservice.addtaxyear(value.data);
    }

  updatingTaxYear(value){
    this.taxyear = {...value.oldData, ...value.newData};
  }
  async updateTaxYear() { 
    await this.payrollsetupservice.updatetaxyear(this.taxyear);
  }

    async deleteTaxYear(value) {
        await this.payrollsetupservice.Deletetaxyear(value.key);
    }
}