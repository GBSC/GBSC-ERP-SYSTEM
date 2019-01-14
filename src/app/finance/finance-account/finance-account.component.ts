import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { ToastrService } from 'ngx-toastr';
import { FinancialYear } from '../../core/Models/Finance/financialYear';
import { Account } from '../../core/Models/Finance/Account';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountViewModel } from '../../core/Models/Finance/AccountViewModel';
import { AuthService } from '../../core';

@Component({
    selector: 'app-finance-account',
    templateUrl: './finance-account.component.html',
    styleUrls: ['./finance-account.component.scss']
})

export class FinanceAccountComponent implements OnInit {
    public Accounts: Account[] = [];
    public FinancialYears: FinancialYear[] = [];
    public AccountForm: FormGroup;

    public RequestAccount: AccountViewModel;
    public UpdateAccount: Account;

    public IsUpdate: boolean = false;
    public IsGeneral : boolean = true;

    constructor(public fb: FormBuilder, public Auth : AuthService, public FinanceService: FinanceService, public FinanceSetupService: FinanceSetupService, public Toastr: ToastrService) {

    }

    ngOnInit() {
        // this.FinanceService.getAccounts().subscribe((res: Account[]) => {
        //     console.log(res);
        //     this.Accounts = res;
        // });

        // console.log(this.Auth.getUser());

        this.FinanceService.getAccountsByCompany(this.Auth.getUserCompanyId()).subscribe((res: Account[]) => {
            // console.log(res);
            this.Accounts = res;
        });

        this.FinanceSetupService.GetFinancialYearsByCompany(this.Auth.getUserCompanyId()).subscribe((res: FinancialYear[]) => {
            // console.log(res);
            this.FinancialYears = res.filter(a => a.isActive == true);
        });

        this.AccountForm = this.fb.group({
            ParentAccountCode: [],
            ParentAccountLevel: [''],
            AccountCode: [''],
            IsBankAccount: [''],
            ShowInBalanceSheet: [''],
            IsGeneralOrDetail: [''],
            AccountLevel: [''],
            Description: [''],
            FinancialYearId: [''],
            OpeningBalance: ['']
        });

    }

    addAccount(value) {
        // console.log(value);
        if (value.data.isGeneralOrDetail == false) {
            this.Toastr.error("Can't add child accounts for detail account");
            this.AccountForm.reset();
            return;
        }

        this.IsUpdate = false;

        this.AccountForm.patchValue({
            ParentAccountCode: value.data.accountCode,
            ParentAccountLevel: value.data.accountLevel,
        });
    }

    updateAccount(value) {
        // console.log(value);
        this.IsUpdate = true;
        if(value.data.openingBalance != undefined && value.data.openingBalance != null && value.data.openingBalance != 0 && value.data.openingBalance != '' && value.data.openingBalance != ' ') {
            this.IsGeneral = false;
        } else {
            this.IsGeneral = true;
        }

        this.AccountForm.patchValue({
            ParentAccountCode: value.data.parentAccountCode,
            ParentAccountLevel: Number.parseInt(value.data.accountLevel) - 1,
            IsBankAccount : value.data.isBankAccount,
            IsGeneralOrDetail: value.data.isGeneralOrDetail,
            AccountCode: value.data.accountCode,
            FinancialYearId: value.data.financialYearId,
            OpeningBalance: value.data.openingBalance,
            Description: value.data.description
        });
    }

    deleteAccount() {
        this.Toastr.error("Restricted");
    }

    ResetBools() {
        this.AccountForm.reset();
    }

    isGeneral(value : string) {
        if(value == 'true')
            this.IsGeneral = true;
        else
            this.IsGeneral = false;
    }

    SendRequest(value) {
        console.log(value);

        if (value.ParentAccountCode == null || value.ParentAccountCode == "" || value.ParentAccountCode == " " || value.ParentAccountCode.length < 2) {
            delete value.parentAccountCode;
            delete value.OpeningBalance;
            value.ParentAccountLevel = 0;
            value.IsGeneralOrDetail = true;
        }

        if (value.IsGeneralOrDetail == true) {
            delete value.OpeningBalance;
        }

        if (this.IsUpdate === false) {
            var a: any = {
                companyId : this.Auth.getUserCompanyId(),
                parentAccountCode: value.ParentAccountCode || null,
                parentAccountLevel: Number.parseInt(value.ParentAccountLevel),
                isGeneralOrDetail: value.IsGeneralOrDetail,
                description: value.Description,
                financialYearId: Number.parseInt(value.FinancialYearId),
                openingBalance: Number.parseFloat(value.OpeningBalance),
                showInBalanceSheet: value.ShowInBalanceSheet
            };

            this.RequestAccount = a;
            // console.log(this.RequestAccount);

            this.FinanceService.addAccount(this.RequestAccount).subscribe((res: any) => {
                // console.log(res);
                this.FinanceService.getAccountsByCompany(this.Auth.getUserCompanyId()).subscribe((res: Account[]) => {
                    // console.log(res);
                    this.Accounts = res;
                    this.AccountForm.reset();
                });
                this.Toastr.success("Account Added Successfully");
            });

        } else if (this.IsUpdate === true) {

            let a: Account = this.Accounts.find(a => a.accountCode == value.AccountCode);
            a.description = value.Description;
            a.openingBalance = Number.parseFloat(value.OpeningBalance) || null;
            a.showInBalanceSheet = value.ShowInBalanceSheet;
            // a.isBankAccount = value.IsBankAccount;

            this.UpdateAccount = a;
            // console.log(a);
            this.FinanceService.updateAccount(this.UpdateAccount).subscribe((res: any) => {
                // console.log(res);
                this.FinanceService.getAccountsByCompany(this.Auth.getUserCompanyId()).subscribe((res: Account[]) => {
                    this.Accounts = res;
                    // console.log(res);
                    this.Toastr.success("Account information updated successfully");
                    this.AccountForm.reset();
                });
            });

        }
    }
}
