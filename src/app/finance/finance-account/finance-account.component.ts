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
	private SelectedParentAccount : Account;
	private AccountUpdateSelected : Account;
	private AccountForm : FormGroup;

	private RequestAccount : AccountViewModel;
	
	private IsUpdate : boolean = false;
	private IsOpeningBalanceDiabaled : boolean = false;
	private IsGeneralAccountUpdate : boolean = false;
	private IsDetailAccountUpdate : boolean = false;
 
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
		this.IsGeneralAccountUpdate = value.data.isGeneralOrDetail;

    this.AccountForm.patchValue({
			ParentAccountCode : value.data.parentAccountCode,
			ParentAccountLevel : Number.parseInt(value.data.accountLevel) - 1,
			IsGeneralOrDetail : value.data.isGeneralOrDetail
    });
  }

  deleteAccount() {

	}
	
	ResetBools() {
		// this.IsUpdate = false;
		// this.IsOpeningBalanceDiabaled = false;
		// this.IsGeneralAccountUpdate = false;
		// this.IsDetailAccountUpdate = false;
	}

	SendRequest(value) {
    // console.log(value);
    
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
        // console.log(res);
        this.FinanceService.getAccounts().subscribe((res : Account[]) => {
          console.log(res);
          this.Accounts = res;
        });
      });
    } else if(this.IsUpdate === true) {

    }
	}

}
