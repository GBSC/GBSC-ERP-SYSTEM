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
            // ChequeNumber: [''],
            Total: [''],
            IsFinal: [''],
            VoucherTypeId: ['']

        })

        // this.Vouchers = await this.financeService.getVouchers();

        this.voucherType = await this.financeSetupService.getVoucherTypes();

        // this.detailAccount = await this.financeSetupService.getDetailAccounts();

        this.financeService.getAccounts().subscribe((res : Account[]) => {
            this.detailAccount = res.filter(a => a.isGeneralOrDetail == false);
        });

        this.financeSetupService.GetFinancialYears().subscribe((res : FinancialYear[]) => {
            this.financialYear = res.filter(a => a.isActive == true);
        });

        this.departments = await this.HrmService.getAllDepartments();
    }

    initItemRows() {
        // let disCre = this.disableCredit;
        // let disDec = this.disableDebit;
        return this.fb.group({
            AccountId: [''],
            // DebitAmount: [{value: '', disabled: disDec}],
            // CreditAmount: [{value: '', disabled: disCre}],
            DebitAmount: [''],
            CreditAmount: [''],
            DepartmentName: [''],
            UniqueName: [''],
            ChequeNumber: [''],
            Description: ['']
        });
    }
    public disableDebit;
    public disableCredit;
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
            console.log(this.VoucherDetailForm.controls.VoucherDetails.controls)
            control.push(this.initItemRows());
            console.log(control)
        }
    }

    deleteRow(index: number) {
        const control = <FormArray>this.VoucherDetailForm.controls['VoucherDetails'];
        control.removeAt(index);
    }

    async addVoucher(value) {
        if (this.creditTotal === this.debitTotal) {

            this.VoucherForm.value.voucherDetails = this.VoucherDetailForm.value.VoucherDetails;
            await this.financeService.addVoucher(value);
            this.toastr.success("Successfuly! Voucher Added")
            this.router.navigate(['finance/voucher-detail']);
        }
        else {
            this.toastr.error("Credit Debit Amount not equal");
        }

    }
}
