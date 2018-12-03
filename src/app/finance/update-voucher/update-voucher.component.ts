import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SetupService } from '../../core';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { VoucherDetail } from '../../core/Models/Finance/voucherDetail';

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

    this.departments = await this.SetupService.getAllDepartments();

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

    });


    if (this.isUpdate() === true) {
      this.financeService.getVoucher(this.id).subscribe((resp : any) => {
        this.Voucher = resp;
        // console.log(this.Voucher);
        // this.Detail = this.Voucher.voucherDetails;
        let a = this.Voucher.voucherDetails;
        this.Detail = a.map(b => {
          delete b.voucherDetailId;
          delete b.voucherId;
          return b;
        });
        this.patchValues(this.Voucher);
      }); 
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

    let debit : number = 0;
    let credit : number = 0;

    this.Detail.forEach(element => {
      debit += element.debitAmount;
      credit += element.creditAmount;
    });
    if (debit === credit) {
      this.VoucherForm.value.voucherDetails = this.Detail;
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
