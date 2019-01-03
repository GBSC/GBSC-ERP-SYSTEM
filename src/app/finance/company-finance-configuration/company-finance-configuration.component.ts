import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../core';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../../core/Models/Finance/Account';

@Component({
    selector: 'app-company-finance-configuration',
    templateUrl: './company-finance-configuration.component.html',
    styleUrls: ['./company-finance-configuration.component.scss']
})
export class CompanyFinanceConfigurationComponent implements OnInit {

    public ConfigForm: FormGroup;
    public MasterAccounts: Account[] = [];

    constructor(public Auth: AuthService, private FB: FormBuilder, private FinanceService: FinanceService, private Toastr: ToastrService) {

        this.ConfigForm = this.FB.group({
            NTN: [''],
            AssestsAccountId: [],
            ExpenseAccountId: [],
            RevenueAccountId: [],
            LiabilitiesAccountId: [],
            EquityAccountId: []
        });

    }

    ngOnInit() {
        // this.FinanceService.getMasterAccountsByCompany(this.Auth.getUserCompanyId()).subscribe((res: Account[]) => {
        //     this.MasterAccounts = res;
        //     console.log(res);
        // });

        this.FinanceService.getAccounts().subscribe((res: Account[]) => {
            this.MasterAccounts = res;
            console.log(res);
        });
    }

    onSubmit(value) {
        console.log(value);

        let a : any = {
            companyId : this.Auth.getUserCompanyId(),
            nTN : value.NTN,
            assestsAccountId : Number.parseInt(value.AssestsAccountId),
            expenseAccountId : Number.parseInt(value.ExpenseAccountId),
            revenueAccountId : Number.parseInt(value.RevenueAccountId),
            liabilitiesAccountId : Number.parseInt(value.LiabilitiesAccountId),
            equityAccountId : Number.parseInt(value.EquityAccountId)
        };

        this.FinanceService.configureCompanyFinanceDetails(a).subscribe(
            res => this.Toastr.success(res),
            err => this.Toastr.error(err)
        );
    }

}
