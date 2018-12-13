import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { ToastrService } from 'ngx-toastr';
import { FinancialYear } from '../../core/Models/Finance/financialYear';
import { Account } from '../../core/Models/Finance/Account';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountViewModel } from '../../core/Models/Finance/AccountViewModel';

@Component({
  selector: 'app-finance-account',
  templateUrl: './finance-account.component.html',
  styleUrls: ['./finance-account.component.scss']
})

export class FinanceAccountComponent implements OnInit {
  private Accounts : Account[] = [];
  private FinancialYears : FinancialYear[] = [];
	private AccountForm : FormGroup;

  private RequestAccount : AccountViewModel;
  private UpdateAccount : Account;
	
	private IsUpdate : boolean = false;
 
  constructor(private fb: FormBuilder, private FinanceService : FinanceService, private FinanceSetupService : FinanceSetupService, private Toastr : ToastrService) {

  }

  ngOnInit() {
    this.FinanceService.getAccounts().subscribe((res : Account[]) => {
      console.log(res);
      this.Accounts = res;
    });

    this.FinanceSetupService.GetFinancialYears().subscribe((res : FinancialYear[]) => {
      console.log(res);
      this.FinancialYears = res;
    });

    this.AccountForm = this.fb.group({
      ParentAccountCode: [''],
      ParentAccountLevel: [''],
      AccountCode: [''],
      IsGeneralOrDetail: [''],
      AccountLevel: [''],
      Description: [''],
      FinancialYearId: [''],
      OpeningBalance : ['']
    });

  }

  addAccount(value) {

    if(value.data.isGeneralOrDetail == false) {
      this.Toastr.error("Can't add child accounts for detail account");
      this.AccountForm.reset();
      return;
    }

		console.log(value);
		this.IsUpdate = false;

		this.AccountForm.patchValue({
			ParentAccountCode : value.data.accountCode,
			ParentAccountLevel : value.data.accountLevel,
		});
	}

  updateAccount(value) {
		console.log(value);
		this.IsUpdate = true;

    this.AccountForm.patchValue({
			ParentAccountCode : value.data.parentAccountCode,
			ParentAccountLevel : Number.parseInt(value.data.accountLevel) - 1,
      IsGeneralOrDetail : value.data.isGeneralOrDetail,
      AccountCode : value.data.accountCode,
      FinancialYearId : value.data.financialYearId,
      OpeningBalance : value.data.openingBalance,
      Description : value.data.description
    });
  }

  deleteAccount() {

	}
	
	ResetBools() {
		this.AccountForm.reset();
	}

	SendRequest(value) {
    console.log(value);

    if(value.ParentAccountCode == null || value.ParentAccountCode == "") {
      value.ParentAccountLevel = 0;
      value.IsGeneralOrDetail = true;
      value.OpeningBalance = null;
    }

    if(value.IsGeneralOrDetail == true) {
      value.OpeningBalance = null;
    }
    
		if(this.IsUpdate === false) {
      var a : any = {
        parentAccountCode : value.ParentAccountCode,
        parentAccountLevel : Number.parseInt(value.ParentAccountLevel),
        isGeneralOrDetail : value.IsGeneralOrDetail,
        description : value.Description,
        financialYearId : Number.parseInt(value.FinancialYearId),
        openingBalance : Number.parseFloat(value.OpeningBalance)
      };

      this.RequestAccount = a;
      console.log(this.RequestAccount);

      this.FinanceService.addAccount(this.RequestAccount).subscribe((res : any) => {
        console.log(res);
        this.FinanceService.getAccounts().subscribe((res : Account[]) => {
          console.log(res);
          this.Accounts = res;
          this.Toastr.success("Account Added Successfully");
          this.AccountForm.reset();
        });
      });

    } else if(this.IsUpdate === true) {

      let a : Account = this.Accounts.find(a => a.accountCode == value.AccountCode);
      a.description = value.Description;
      a.openingBalance = Number.parseFloat(value.OpeningBalance) || null;

      this.UpdateAccount = a;

      this.FinanceService.updateAccount(this.UpdateAccount).subscribe((res : any) => {
        console.log(res);
        this.FinanceService.getAccounts().subscribe((res : Account[]) => {
          this.Accounts = res;
          console.log(res);
          this.Toastr.success("Account information updated successfully");
          this.AccountForm.reset();
        });
      });

    }
	}

}
