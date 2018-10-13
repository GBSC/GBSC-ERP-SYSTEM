import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-allowance',
    templateUrl: './allowance.component.html',
    styleUrls: ['./allowance.component.scss']
})
export class AllowanceComponent implements OnInit {
    public allowance: any;
<<<<<<< HEAD
    Allowance: any;
=======
    public allowanceTypes: any;
    public Allowance: any;
    public allowanceDeductions: any;
>>>>>>> master

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
<<<<<<< HEAD
        await this.payrollsetupservice.getallowances();
        this.allowance = this.payrollsetupservice.allowance;

        await this.payrollsetupservice.getallowancedeductions();
        let allowancededuction = this.payrollsetupservice.allowancededuction;

        await this.payrollsetupservice.getallowancecalculationtypes();
        let allowancetype = this.payrollsetupservice.allowancecalculationtype;
    }

    async addallowance(value) {
        await this.payrollsetupservice.addallowance(value.data);
    }

    async updatingallowance(value) {
        this.Allowance = { ...value.oldData, ...value.newData };
    }
    async updateallowance() {
        await this.payrollsetupservice.updateallowance(this.Allowance);
    }

    async deleteallowance(value) {
        await this.payrollsetupservice.Deleteallowance(value.key);
=======
        this.allowance = await this.payrollsetupservice.getAllowances();

        this.allowanceDeductions = await this.payrollsetupservice.getAllowanceDeductions();

        this.allowanceTypes = await this.payrollsetupservice.getAllowanceCalculationTypes();
    }

    async addallowance(value) {
        await this.payrollsetupservice.addAllowance(value.data);
    }

    updatingallowance(value) {
        this.Allowance = { ...value.oldData, ...value.newData };
    }
    async updateallowance() {
        await this.payrollsetupservice.updateAllowance(this.Allowance);
    }

    async deleteallowance(value) {
        await this.payrollsetupservice.deleteAllowance(value.key);
>>>>>>> master
    }

}
