import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { SetupService, HrmsService } from '../../core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VoucherDetail } from '../../core/Models/Finance/voucherDetail';
import { Account } from '../../core/Models/Finance/Account';
import { FinancialYear } from '../../core/Models/Finance/financialYear';
import { TransactionAccount } from '../../core/Models/Finance/TransactionAccount';

@Component({
    selector: 'app-voucher',
    templateUrl: './voucher.component.html',
    styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {

    public debitTotal = 0;
    public creditTotal = 0;
    public departments: any;
    public financialYear: any;
    public Detail: any[] = [];
    public detailAccount: any;
    public VoucherDetailForm: any;
    public VoucherForm: any;
    public voucherType: any;
    public Vouchers: any;
    public Voucher: any;
    public PatchDetail: any;
    public isDisabled: any;
    @Input('voucherId') id: number;

    constructor(private toastr: ToastrService, public router: Router, private fb: FormBuilder, public activatedRoute: ActivatedRoute, public financeSetupService: FinanceSetupService,
        public financeService: FinanceService, public HrmService: HrmsService) { }

    async ngOnInit() {

        this.Detail = [];
        //init new row
        this.VoucherDetailForm = this.fb.group({
            VoucherDetails: this.fb.array([this.initItemRows()])

        });

        this.VoucherForm = this.fb.group({
            VoucherCode: [''],
            Date: [''],
            Description: [''],
            FinancialYearId: [''],
            TotalDebitAmount: [''],
            TotalCreditAmount: [''],
            IsFinal: [''],
            VoucherTypeId: ['']

        })

        this.voucherType = await this.financeSetupService.getVoucherTypes();

        this.financeService.getTransactionAccounts().subscribe((res: TransactionAccount[]) => {
            this.detailAccount = res;
            console.log(this.detailAccount);
        });

        this.financeSetupService.GetFinancialYears().subscribe((res: FinancialYear[]) => {
            this.financialYear = res.filter(a => a.isActive == true);
        });
    }

    initItemRows() {
        return this.fb.group({
            AccountId: [''],
            DebitAmount: [''],
            CreditAmount: [''],
            DepartmentName: [''],
            UniqueName: [''],
            ChequeNumber: [''],
            Description: ['']
        });
    }

    sumDebit() {
        this.debitTotal = 0;
        const control = this.VoucherDetailForm.controls['VoucherDetails'].controls;
        for (let d of control) {
            this.debitTotal += (+d.value.DebitAmount);
        }
    }

    sumCredit() {
        this.creditTotal = 0;
        const control = this.VoucherDetailForm.controls['VoucherDetails'].controls;
        for (let c of control) {
            this.creditTotal += (+c.value.CreditAmount);
        }
    }

    addNewRow(e, i) {
        const control: any = <FormArray>this.VoucherDetailForm.controls['VoucherDetails'];
        if ((e.keyCode === 9 || e.keyCode === 13)
            && e.target.value && (i == this.VoucherDetailForm.controls.VoucherDetails.controls.length - 1)) {
            control.push(this.initItemRows());
        }
    }

    deleteRow(index: number) {
        const control = <FormArray>this.VoucherDetailForm.controls['VoucherDetails'];
        control.removeAt(index);
    }

    async addVoucher(value: any, detailsvalue: any) {

        if (this.creditTotal === this.debitTotal) {

            let VDs: VoucherDetail[] = [];
            console.log(detailsvalue);

            detailsvalue.VoucherDetails.forEach((element: any) => {
                if (element.AccountId != null && element.AccountId != undefined && element.AccountId != '' && element.DebitAmount != null && element.DebitAmount != undefined && element.DebitAmount != '' && element.CreditAmount != null && element.CreditAmount != undefined && element.CreditAmount != '') {
                    let a: any = {
                        departmentName: element.DepartmentName,
                        creditAmount: element.CreditAmount,
                        debitAmount: element.DebitAmount,
                        uniqueName: element.UniqueName,
                        description: element.Description,
                        chequeNumber: element.ChequeNumber,
                        accountId: element.AccountId
                    };
                    VDs.push(a);
                } else {
                    this.toastr.error("Empty details removed!! Account, Credit Amount & Debit Amount are required.");
                }
            });

            value.VoucherDetails = VDs;
            value.TotalCreditAmount = this.creditTotal;
            value.TotalDebitAmount = this.debitTotal;
            let a: Date = new Date(value.Date);
            value.Date = a.toLocaleDateString();
            console.log(value);
            await this.financeService.addVoucher(value);
            this.toastr.success("Successfull! Voucher Added")
            // this.router.navigate(['finance/voucher-detail']);
        }
        else {
            this.toastr.error("Credit Debit Amount not equal");
        }

    }
}
