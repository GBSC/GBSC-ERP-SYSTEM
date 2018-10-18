import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { Voucher } from '../../core/Models/Finance/voucher';
import { VoucherDetail } from '../../core/Models/Finance/voucherDetail';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { SetupService } from '../../core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {

  public departments: any;
  public financialYear: any;
  public voucherType: any;
  public voucher: any;
  public detailAccount: any;
  public VoucherForm: any;
  public voucherDetail: VoucherDetail[];

  constructor(private fb: FormBuilder, public financeSetupService: FinanceSetupService,
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
      IsFinal: [''],
      VoucherTypeId: [''],
      FinancialYearId: [''],
      DepartmentId: ['']

    })

    this.voucher = await this.financeService.getVouchers();


    this.voucherDetail = await this.financeService.getVoucherDetails();

    this.voucherType = await this.financeSetupService.getVoucherTypes();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();

    this.financialYear = await this.financeSetupService.getFinancialYears();

    this.departments = await this.SetupService.getAllDepartments();    
  }

  async addVoucherDetail(value) {
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

}
