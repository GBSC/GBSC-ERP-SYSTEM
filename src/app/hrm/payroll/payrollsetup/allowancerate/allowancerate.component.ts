import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-allowancerate',
    templateUrl: './allowancerate.component.html',
    styleUrls: ['./allowancerate.component.css']
})
export class AllowancerateComponent implements OnInit {
    
    public allowance: any;
    public allowances: any;
    public allowancerate: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.allowancerate = await this.payrollsetupservice.getAllowanceRates();
        
        this.allowances = await this.payrollsetupservice.getAllowanceDeductions();

        this.allowance = await this.allowances.filter(a => (a.type === "Allowance"));
    }

    async addAllowanceRate(value) {
        await this.payrollsetupservice.addAllowanceRate(value.data);
        this.allowancerate = await this.payrollsetupservice.getAllowanceRates();
    }

    async updateAllowanceRate(value) {
        await this.payrollsetupservice.updateAllowanceRate(value);
    }

    async deleteAllowanceRate(value) {
        await this.payrollsetupservice.deleteAallowanceRate(value.key);
    }

}