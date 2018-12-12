import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceSetupService } from '../../../core/Services/Finance/financeSetup.service';


@Component({
    selector: 'app-detail-account',
    templateUrl: './detail-account.component.html',
    styleUrls: ['./detail-account.component.scss']
})
export class DetailAccountComponent implements OnInit {

    public detailAccount: any;
    public DetailAccountForm: any;
    public secondSubAccount: any;
    public UpdatingdetailAccount: any;

    constructor(private fb: FormBuilder, public financeService: FinanceSetupService) { }

    async ngOnInit() {

        this.DetailAccountForm = this.fb.group({
            DetailAccountCode: [''],
            Name: [''],
            OpeningBalance: [''],
            SecondSubAccountId: ['']
        });

        this.detailAccount = await this.financeService.getDetailAccounts();

        this.secondSubAccount = await this.financeService.getSecondSubAccounts();
    }

    async addDetailaccount() {

        await this.financeService.addDetailAccount(this.DetailAccountForm.value);
        this.detailAccount = await this.financeService.getDetailAccounts();
        this.DetailAccountForm.reset();
    }

    async updatingDetailaccount(value) {

        this.UpdatingdetailAccount = { ...value.oldData, ...value.newData };
    }
    async updateDetailaccount() {

        await this.financeService.updateDetailAccount(this.UpdatingdetailAccount);
    }

    async deleteDetailaccount(value) {

        await this.financeService.DeleteDetailAccount(value.key);
    }

}