import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceSetupService } from '../../../core/Services/Finance/financeSetup.service';

@Component({
    selector: 'app-second-sub-account',
    templateUrl: './second-sub-account.component.html',
    styleUrls: ['./second-sub-account.component.scss']
})
export class SecondSubAccountComponent implements OnInit {

    public secondSubAccount: any;
    public SecondSubAccountForm: any;
    public subAccount: any;
    public UpdatingSecondsubAccount: any;

    constructor(private fb: FormBuilder, public financeService: FinanceSetupService) { }

    async ngOnInit() {

        this.SecondSubAccountForm = this.fb.group({
            SecondSubAccountCode: [''],
            Name: [''],
            SubAccountId: ['']
        });

        this.secondSubAccount = await this.financeService.getSecondSubAccounts();

        this.subAccount = await this.financeService.getSubAccounts();
    }

    async addSecondSubaccount() {

        await this.financeService.addSecondSubAccount(this.SecondSubAccountForm.value);
        this.secondSubAccount = await this.financeService.getSecondSubAccounts();
        this.SecondSubAccountForm.reset();
    }

    async updatingSecondSubaccount(value) {

        this.UpdatingSecondsubAccount = { ...value.oldData, ...value.newData };
    }
    async updateSecondSubaccount() {

        await this.financeService.updateSecondSubAccount(this.UpdatingSecondsubAccount);
    }

    async deleteSecondSubaccount(value) {

      await this.financeService.DeleteSecondSubAccount(value.key);
  }

}