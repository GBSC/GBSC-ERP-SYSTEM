import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, SetupService } from '../../../../core';

@Component({
    selector: 'app-salarystructure',
    templateUrl: './salarystructure.component.html',
    styleUrls: ['./salarystructure.component.scss']
})
export class SalarystructureComponent implements OnInit {

    public payrollTypes: any;
    public salarystructure: any;
    public groups: any;

    constructor(public payrollsetupservice: PayrollSetupService, public setupservice: SetupService) { }

    async ngOnInit() {

        this.salarystructure = await this.payrollsetupservice.getSalaryStructures();

        this.payrollTypes = await this.payrollsetupservice.getPayrollTypes();

        this.groups = await this.setupservice.getAllGroups();
    }

    async addSalaryStructure(value) {
        await this.payrollsetupservice.addSalaryStructure(value.data);
    }

    async updateSalaryStructure(value) {
        await this.payrollsetupservice.updateSalaryStructure(value);
    }

    async deleteSalaryStructure(value) {
        await this.payrollsetupservice.deleteSalaryStructure(value.key);
    }

}