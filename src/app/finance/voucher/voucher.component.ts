import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { VoucherDetail } from '../../core/Models/Finance/voucherDetail';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { SetupService } from '../../core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  public Voucher: any;

  @Input('voucherId') id: number;

  constructor(private toastr: ToastrService, public router: Router, private fb: FormBuilder, public activatedRoute: ActivatedRoute, public financeSetupService: FinanceSetupService,
    public financeService: FinanceService, public SetupService: SetupService) { }

  async ngOnInit() {

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
      VoucherTypeId: [''],
      //VoucherDetails: this.fb.array([])

    })

    this.voucherType = await this.financeSetupService.getVoucherTypes();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();

    this.financialYear = await this.financeSetupService.getFinancialYears();

    this.departments = await this.SetupService.getAllDepartments();

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.isUpdate() === true) {

      this.financeService.getVoucher(this.id).subscribe(resp => {

        this.Voucher = resp;
        console.log(this.Voucher);

        let a = this.Voucher.voucherDetails;
        this.Detail = a.filter(b => {
          delete b.voucherDetailId;
          delete b.voucherId;
          return b;
        });
        this.patchValues(this.Voucher);
      });
    }

  }

  initItemRows() {
    // let disCre = this.disableCredit;
    // let disDec = this.disableDebit;
    return this.fb.group({
      DetailAccountId: [''],
      // DebitAmount: [{value: '', disabled: disDec}],
      // CreditAmount: [{value: '', disabled: disCre}],
      DebitAmount: [''],
      CreditAmount: [''],
      DepartmentName: [''],
      UniqueName: [''],
      Description: ['']
    });
  }
  public disableDebit;
  public disableCredit ;
  
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
    if (this.creditTotal === this.debitTotal){

    this.VoucherForm.value.voucherDetails = this.VoucherDetailForm.value.VoucherDetails;
    await this.financeService.addVoucher(value);
    this.toastr.success("Successfuly! Voucher Added")
    console.log(value);
    }
    else{
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

  async update(value) {

    value.voucherId = this.id;
    value.VoucherDetails = this.Detail;
    this.financeService.updateVoucher(value).subscribe(resp => {
      this.toastr.success("Voucher Updated");
      this.router.navigate(['finance/voucher-detail']);
    })
  }

  patchValues(voucher: any) {

    this.VoucherForm.patchValue({

      Date: voucher.date,
      VoucherCode: voucher.voucherCode,
      Description: voucher.description,
      ChequeNumber: voucher.chequeNumber,
      VoucherTypeId: voucher.voucherTypeId,
      DetailAccountId: voucher.detailAccountId,
      CreditAmount: voucher.creditAmount,
      DebitAmount: voucher.debitAmount,
      DepartmentName: voucher.departmentName,
      UniqueName: voucher.uniqueName

    })

  }

}
