import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../hrm/payroll/services/payrollsetup.service';

@Component({
    selector: 'app-salarystructure',
    templateUrl: './salarystructure.component.html',
    styleUrls: ['./salarystructure.component.css']
})
export class SalarystructureComponent implements OnInit {

    public salaryStructure: any;
    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getsalarystructures();
        this.salaryStructure = this.payrollsetupservice.salarystructure;
    }

    async addSalaryStructure(value) {
        await this.payrollsetupservice.addsalarystructure(value.data);
    }

    async updateSalaryStructure(value) {
        console.log(value);
        await this.payrollsetupservice.updatesalarystructure(value);
    }

    async deleteSalaryStructure(value) {
        await this.payrollsetupservice.Deletesalarystructure(value.key);
    }

}