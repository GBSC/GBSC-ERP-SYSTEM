import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SetupService } from '../../core';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';

@Component({
    selector: 'app-update-voucher',
    templateUrl: './update-voucher.component.html',
    styleUrls: ['./update-voucher.component.scss']
})
export class UpdateVoucherComponent implements OnInit {

    public debitTotal = 0;
    public creditTotal = 0;

    public disableDebit;
    public disableCredit;

    public departments: any;
    public financialYear: any;
    public Detail: any[] = [];
    public detailAccount: any;
    public VoucherDetailForm: any;
    public VoucherForm: any;
    public voucherType: any;
    public Vouchers: any;
    public Voucher: any;
    public isDisabled: any;
    @Input('voucherId') id: number;

    constructor(private toastr: ToastrService, public router: Router, private fb: FormBuilder, public activatedRoute: ActivatedRoute, public financeSetupService: FinanceSetupService,
        public financeService: FinanceService, public SetupService: SetupService) { }

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
            ChequeNumber: [''],
            Total: [''],
            IsFinal: [''],
            VoucherTypeId: ['']

        })

        this.voucherType = await this.financeSetupService.getVoucherTypes();
        this.detailAccount = await this.financeSetupService.getDetailAccounts();
        this.financialYear = await this.financeSetupService.getFinancialYears();

        // this.departments = await this.HrmService.getAllDepartments();

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];

        });


        if (this.isUpdate() === true) {
            this.financeService.getVoucher(this.id).subscribe((resp: any) => {
                this.Voucher = resp;
                console.log(this.Voucher);
                this.Detail = this.Voucher.voucherDetails;
                let control = <FormArray>this.VoucherDetailForm.controls['VoucherDetails'];
                control.push(this.initItemRows());
                setTimeout(() => {
                    console.log(this.Detail);
                    console.log(resp);
                    console.log(this.VoucherDetailForm);
                    for (let c of this.VoucherDetailForm.controls.VoucherDetails.controls) {
                        for (let key in c.controls) {
                            for (let v in resp.voucherDetails) {
                                // console.log(resp.voucherDetails[v])
                                for (let vv in resp.voucherDetails[v]) {
                                    console.log(resp.voucherDetails[v][vv])
                                    console.log(c.controls[key].value = resp.voucherDetails[v][vv]);
                                    c.controls[key].value = resp.voucherDetails[v][vv]
                                }
                            }

                        }
                        console.log(c.controls);
                    }
                }, 1000);
                let a = this.Voucher.voucherDetails;
                this.Detail = a.map(b => {
                    delete b.voucherDetailId;
                    delete b.voucherId;
                    return b;
                });
                this.patchValues(this.Voucher);
            });
            console.log(this.Detail)
        }

    }

    initItemRows() {
        return this.fb.group({
            DetailAccountId: [''],
            DebitAmount: [''],
            CreditAmount: [''],
            DepartmentName: [''],
            UniqueName: [''],
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
        // this.financeService.DeleteVoucher(value.key);
        control.removeAt(index);
    }

    async addVoucher(value) {
        if (this.creditTotal === this.debitTotal) {

            this.VoucherForm.value.voucherDetails = this.VoucherDetailForm.value.VoucherDetails;
            await this.financeService.addVoucher(value);
            this.toastr.success("Successfuly! Voucher Added")
            console.log(value);
        }
        else {
            this.toastr.error("Credit Debit Amount not equal");
        }

    }

    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    async updatevoucherDetail(value) {
        console.log(value);

    }

    async update(value) {
        value.voucherId = this.id;
        // value.VoucherDetails.push() = this.Detail; 
        if (this.creditTotal === this.debitTotal) {
            console.log(this.VoucherDetailForm.value.VoucherDetails);
            console.log(value);

            this.VoucherForm.value.voucherDetails = this.VoucherDetailForm.value.VoucherDetails;
            this.financeService.updateVoucher(value).subscribe(resp => {
                console.log(value);
                this.toastr.success("Voucher Updated");
                this.router.navigate(['finance/voucher-detail']);
            })
        }
        else {
            this.toastr.error("Credit Debit Amount not equal");
        }
    }

    patchValues(voucher: any) {

        this.VoucherForm.patchValue({

            Date: voucher.date,
            VoucherCode: voucher.voucherCode,
            Description: voucher.description,
            ChequeNumber: voucher.chequeNumber,
            VoucherTypeId: voucher.voucherTypeId
        })
    }
}
