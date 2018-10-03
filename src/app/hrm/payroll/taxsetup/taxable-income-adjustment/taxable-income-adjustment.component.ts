import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, SetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-taxable-income-adjustment',
    templateUrl: './taxable-income-adjustment.component.html',
    styleUrls: ['./taxable-income-adjustment.component.scss']
})
export class TaxableIncomeAdjustmentComponent implements OnInit {

    public taxableIncomeAdjustment: any;
    updatingincomeAdjustment: any;
    constructor(public payrollsetupservice: PayrollSetupService, public setupservice: SetupService,
        public employeeservice: EmployeeService) { }

    async ngOnInit() {
        await this.payrollsetupservice.gettaxableincomeadjustments();
        this.taxableIncomeAdjustment = this.payrollsetupservice.taxableincomeadjustment;

        await this.payrollsetupservice.gettaxyears();
        let Taxyear = this.payrollsetupservice.taxyear;

        await this.payrollsetupservice.getpayrolltypes();
        let PayrollType = this.payrollsetupservice.payrolltype;

        await this.payrollsetupservice.gettaxadjustmentreasons();
        let TaxAdjustmentReason = this.payrollsetupservice.taxadjustmentreason;

        await this.setupservice.getAllGroups();
        let group = this.setupservice.group;

        await this.employeeservice.GetAllEmployees();
        let user = this.employeeservice.employeereg;
    }

    async addTaxableincomeAdjustment(value) {
        await this.payrollsetupservice.addtaxableincomeadjustment(value.data);
    }

    updatingTaxableincomeAdjustment(value) {
        this.updatingincomeAdjustment = { ...value.oldData, ...value.newData };
    }

    async updateTaxableincomeAdjustment() {
        await this.payrollsetupservice.updatetaxableincomeadjustment(this.updatingincomeAdjustment);
    }

    async deleteTaxableincomeAdjustment(value) {
        await this.payrollsetupservice.Deletetaxableincomeadjustment(value.key);
    }

}