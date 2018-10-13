import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-taxyear',
    templateUrl: './taxyear.component.html',
    styleUrls: ['./taxyear.component.scss']
})
export class TaxyearComponent implements OnInit {

    public TaxYear: any;
<<<<<<< HEAD
    taxyear: any;
=======
    public taxyear: any;
>>>>>>> master

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
<<<<<<< HEAD
        await this.payrollsetupservice.gettaxyears();
        this.TaxYear = this.payrollsetupservice.taxyear;
    }

    async addTaxYear(value) {
        await this.payrollsetupservice.addtaxyear(value.data);
    }

    updatingTaxYear(value) {
        this.taxyear = { ...value.olddata, ...value.newdata };
    }
    async updateTaxYear() {
        await this.payrollsetupservice.updatetaxyear(this.taxyear);
    }

    async deleteTaxYear(value) {
        await this.payrollsetupservice.Deletetaxyear(value.key);
=======
        this.TaxYear = await this.payrollsetupservice.gettTaxYears();
    }

    async addTaxYear(value) {
        await this.payrollsetupservice.addtTaxYear(value.data);
    }

    updatingTaxYear(value) {
        this.taxyear = { ...value.oldData, ...value.newData };
    }
    async updateTaxYear() {
        await this.payrollsetupservice.updateTaxYear(this.taxyear);
    }

    async deleteTaxYear(value) {
        await this.payrollsetupservice.deleteTaxYear(value.key);
>>>>>>> master
    }
}