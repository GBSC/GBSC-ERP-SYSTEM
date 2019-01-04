import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-allowancecalculationtype',
    templateUrl: './allowancecalculationtype.component.html',
    styleUrls: ['./allowancecalculationtype.component.scss']
})
export class AllowancecalculationtypeComponent implements OnInit {
    public allowanceCalculationtype: any;
    newtype: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.allowanceCalculationtype = await this.payrollsetupservice.getAllowanceCalculationTypes();
    }

    async addAllowanceCalculationType(value) {
        await this.payrollsetupservice.addAllowanceCalculationType(value.data);
        this.allowanceCalculationtype = await this.payrollsetupservice.getAllowanceCalculationTypes();
    }

    async updateAllowanceCalculationType(value) {
        await this.payrollsetupservice.updateAllowanceCalculationType(value);
    }

    async deleteallowanceCalculationType(value) {
        await this.payrollsetupservice.DeleteAllowanceCalculationType(value.key);
    }

}