import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-salary-calculation-type',
    templateUrl: './salary-calculation-type.component.html',
    styleUrls: ['./salary-calculation-type.component.scss']
})
export class SalaryCalculationTypeComponent implements OnInit {

    public salaryCalculationType: any;
    
    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
    
        this.salaryCalculationType = await this.payrollsetupservice.getSalaryCalculationTypes();
        }

    async addSalaryCalculationType(value) {
        await this.payrollsetupservice.addSalaryCalculationType(value.data);
    }

    async updateSalaryCalculationType(value) { 
        await this.payrollsetupservice.updateSalaryCalculationType(value);
    }

    async deleteSalaryCalculationType(value) {
        await this.payrollsetupservice.deleteSalaryCalculationType(value.key);
    }

}