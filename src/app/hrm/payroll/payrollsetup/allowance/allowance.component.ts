import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-allowance',
    templateUrl: './allowance.component.html',
    styleUrls: ['./allowance.component.scss']
})
export class AllowanceComponent implements OnInit {
    public allowance: any;
    public allowanceTypes: any;
    public Allowance: any;
    public allowanceDeductions: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        this.allowance = await this.payrollsetupservice.getAllowances();

        this.allowanceDeductions = await this.payrollsetupservice.getAllowanceDeductions();

        this.allowanceTypes = await this.payrollsetupservice.getAllowanceCalculationTypes();
    }

    async addallowance(value) {
        await this.payrollsetupservice.addAllowance(value.data);
        this.allowance = await this.payrollsetupservice.getAllowances();

    }

    updatingallowance(value) {
        this.Allowance = { ...value.oldData, ...value.newData };
    }
    async updateallowance() {
        await this.payrollsetupservice.updateAllowance(this.Allowance);
    }

    async deleteallowance(value) {
        await this.payrollsetupservice.deleteAllowance(value.key);
    }

}
