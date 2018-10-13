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
<<<<<<< HEAD
        await this.payrollsetupservice.getloantypes();
        this.LoanType = this.payrollsetupservice.loantype;
=======
        this.LoanType = await this.payrollsetupservice.getLoanTypes();
>>>>>>> master

    }

    async addLoanType(value) {
<<<<<<< HEAD
        await this.payrollsetupservice.addloantype(value.data);
=======
        await this.payrollsetupservice.addLoanType(value.data);
>>>>>>> master
    }


    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async updateLoanType() {
<<<<<<< HEAD
        return await this.payrollsetupservice.updateloantype(this.UpdatedModel);
    }

    async deleteLoanType(value) {
        await this.payrollsetupservice.Deleteloantype(value.key);
=======
        await this.payrollsetupservice.updateLoanType(this.UpdatedModel);
    }

    async deleteLoanType(value) {
        await this.payrollsetupservice.deleteLoanType(value.key);
>>>>>>> master
    }
}