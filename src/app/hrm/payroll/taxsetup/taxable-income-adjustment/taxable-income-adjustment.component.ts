import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, SetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-taxable-income-adjustment',
    templateUrl: './taxable-income-adjustment.component.html',
    styleUrls: ['./taxable-income-adjustment.component.scss']
})
export class TaxableIncomeAdjustmentComponent implements OnInit {

    public taxableIncomeAdjustment: any;
    public taxAdjustmentReason: any;
    public payrollType: any;
    public users: any;
    public taxYears: any;
    public groups: any;
    updatingincomeAdjustment: any;

    constructor(public payrollsetupservice: PayrollSetupService, public setupservice: SetupService,
        public employeeservice: EmployeeService) { }

    async ngOnInit() {
        this.taxableIncomeAdjustment = await this.payrollsetupservice.getTaxableIncomeAdjustments();

        this.taxYears = await this.payrollsetupservice.gettTaxYears();

        this.payrollType = await this.payrollsetupservice.getPayrollTypes();

        this.taxAdjustmentReason = await this.payrollsetupservice.getTaxAdjustmentReasons();

        this.groups = await this.setupservice.getAllGroups();

        this.users = await this.employeeservice.GetAllEmployees();
    }

    async addTaxableincomeAdjustment(value) {
        await this.payrollsetupservice.addTaxableIncomeAdjustment(value.data);
        this.taxableIncomeAdjustment = await this.payrollsetupservice.getTaxableIncomeAdjustments();
    }

    updatingTaxableincomeAdjustment(value) {
        this.updatingincomeAdjustment = { ...value.oldData, ...value.newData };
    }

    async updateTaxableincomeAdjustment() {
        await this.payrollsetupservice.updateTaxableIncomeAdjustment(this.updatingincomeAdjustment);
    }

    async deleteTaxableincomeAdjustment(value) {
        await this.payrollsetupservice.deleteTaxableIncomeAdjustment(value.key);
    }

}