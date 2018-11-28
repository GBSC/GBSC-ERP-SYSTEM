import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-taxyear',
    templateUrl: './taxyear.component.html',
    styleUrls: ['./taxyear.component.scss']
})
export class TaxyearComponent implements OnInit {

    public TaxYear: any;
    public taxyear: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.TaxYear = await this.payrollsetupservice.gettTaxYears();
    }

    async addTaxYear(value) {
        
        await this.payrollsetupservice.addtTaxYear(value.data);
        this.TaxYear = await this.payrollsetupservice.gettTaxYears();
    }

    updatingTaxYear(value) {
        this.taxyear = { ...value.oldData, ...value.newData };
    }
    async updateTaxYear() {
        await this.payrollsetupservice.updateTaxYear(this.taxyear);
    }

    async deleteTaxYear(value) {
        await this.payrollsetupservice.deleteTaxYear(value.key);
    }
}