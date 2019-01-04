import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-salarystructuredetail',
    templateUrl: './salarystructuredetail.component.html',
    styleUrls: ['./salarystructuredetail.component.scss']
})
export class SalarystructuredetailComponent implements OnInit {

    public salaryStructureDetail: any;
    public salaryCalculationtype: any;
    public benefit: any;
    public allowance: any;
    public salarystructure: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        this.salaryStructureDetail = await this.payrollsetupservice.getSalaryStructureDetails();

        this.salaryCalculationtype = await this.payrollsetupservice.getSalaryCalculationTypes();

        this.benefit = await this.payrollsetupservice.getBenefits();

        this.allowance = await this.payrollsetupservice.getAllowances();

        this.salarystructure = await this.payrollsetupservice.getSalaryStructures();
    }

    async addSalaryStructureDetail(value) {
        await this.payrollsetupservice.addSalaryStructureDetail(value.data);
        this.salaryStructureDetail = await this.payrollsetupservice.getSalaryStructureDetails();
    }

    async updateSalaryStructureDetail(value) {
        await this.payrollsetupservice.updateSalaryStructureDetail(value);
    }

    async deleteSalaryStructureDetail(value) {
        await this.payrollsetupservice.deleteSalaryStructureDetail(value.key);
    }

}