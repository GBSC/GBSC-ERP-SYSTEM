import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-loantype',
    templateUrl: './loantype.component.html',
    styleUrls: ['./loantype.component.scss']
})
export class LoantypeComponent implements OnInit {
    private UpdatedModel: any;

    public LoanType: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.LoanType = await this.payrollsetupservice.getLoanTypes();
    }

    async addLoanType(value) {
        
        await this.payrollsetupservice.addLoanType(value.data);
        this.LoanType = await this.payrollsetupservice.getLoanTypes();
    }


    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async updateLoanType() {
        await this.payrollsetupservice.updateLoanType(this.UpdatedModel);
    }

    async deleteLoanType(value) {
        await this.payrollsetupservice.deleteLoanType(value.key);
    }
}