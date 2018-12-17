import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceSetupService } from '../../../core/Services/Finance/financeSetup.service';

@Component({
    selector: 'app-sub-account',
    templateUrl: './sub-account.component.html',
    styleUrls: ['./sub-account.component.scss']
})
export class SubAccountComponent implements OnInit {

    public subAccount: any;
    public SubAccountForm: any;
    public masterAccount: any;
    public UpdatingsubAccount: any;

    constructor(public fb: FormBuilder, public financeService: FinanceSetupService) { }

    async ngOnInit() {

        this.SubAccountForm = this.fb.group({
            SubAccountCode: [''],
            Name: [''],
            MasterAccountId: ['']
        });

        this.subAccount = await this.financeService.getSubAccounts();

        this.masterAccount = await this.financeService.getMasterAccounts();
    }

    async addSubaccount() {

        await this.financeService.addSubAccount(this.SubAccountForm.value);
        this.subAccount = await this.financeService.getSubAccounts();
        this.SubAccountForm.reset();

    }

    async updatingSubaccount(value) {

        this.UpdatingsubAccount = { ...value.oldData, ...value.newData };
    }
    async updateSubaccount() {

        await this.financeService.updateSubAccount(this.UpdatingsubAccount);
    }

    async deleteSubaccount(value) {

        await this.financeService.DeleteSubAccount(value.key);
    }

}