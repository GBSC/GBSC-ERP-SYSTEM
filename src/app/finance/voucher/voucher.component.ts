import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { Voucher } from '../../core/Models/Finance/voucher';
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

  public departments: any;
  public financialYear: any;
  public Detail: any[] = [];
  public voucherType: any;
  public voucher: any;
  public detailAccount: any;
  public VoucherForm: any;
  public Voucher: any;
  public voucherDetail: VoucherDetail[];

  @Input('voucherId') id:number;
  @Output() updateMessage = new EventEmitter();

  constructor(private toastr: ToastrService, public router: Router, private fb: FormBuilder, public activatedRoute: ActivatedRoute, public financeSetupService: FinanceSetupService,
    public financeService: FinanceService, public SetupService: SetupService) { }

  async ngOnInit() {

    this.voucherDetail = [];

    this.VoucherForm = this.fb.group({

      VoucherCode: [''],
      Date: [''],
      Description: [''],
      ChequeNumber: [''],
      TotalCreditAmount: [''],
      TotalDebitAmount: [''],
      DepartmentName: [''],
      DepartmentCode: [''],
      IsFinal: [''],
      VoucherTypeId: [''],
      FinancialYearId: [''],
      DepartmentId: ['']

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
        this.Detail = this.Voucher.voucherDetails;
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

   addVoucherDetail(value) {
    let data = value.data;
    this.voucherDetail.push(data);
  }

  async addVoucher(value) {
    let v = new Voucher();
    v = { ...v, ...value };
    v.VoucherDetails = this.voucherDetail;
    let r = await this.financeService.addVoucher(v);
    console.log(r);
    console.log(v);
    
  }

  async updatevoucherDetail(value) {
    console.log(value);
  }

  async update(value){

    value.voucherId = this.id;
    value.VoucherDetails = this.Detail;
    console.log(value);
    this.financeService.updateVoucher(value).subscribe(resp=>{
      this.showSuccess("Voucher Updated"); 
      console.log(this.showSuccess);
      console.log(resp);
      // this.router.navigate(['finance/voucher-detail']);
    })
  }

  showSuccess(message) {

    this.updateMessage.emit(message);
}

  patchValues(voucher: any) {

    this.VoucherForm.patchValue({

      Date: voucher.date,
      VoucherCode: voucher.voucherCode,
      DepartmentName: voucher.departmentName,
      DepartmentCode: voucher.departmentCode,
      Description: voucher.description,
      ChequeNumber: voucher.chequeNumber,
      TotalCreditAmount: voucher.totalCreditAmount,
      TotalDebitAmount: voucher.totalDebitAmount,
      IsFinal: voucher.isFinal,
      VoucherTypeId: voucher.voucherTypeId,
      FinancialYearId: voucher.financialYearId 

    })

  }
}
