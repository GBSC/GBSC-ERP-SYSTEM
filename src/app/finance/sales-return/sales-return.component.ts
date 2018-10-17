import { Component, OnInit } from '@angular/core';
import { SalesReturn } from '../../core/Models/Finance/salesReturn';
import { FormBuilder } from '@angular/forms';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { SalesReturnDetail } from '../../core/Models/Finance/salesReturnDetail';

@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.component.html',
  styleUrls: ['./sales-return.component.scss']
})
export class SalesReturnComponent implements OnInit {

  public PurchaseDetail: any;
  public SalesInvoice: any;
  public salesReturn: any;
  public detailAccount: any;
  public salesReturnForm: any;
  public salesReturnDetail: SalesReturnDetail[];

  constructor(private fb: FormBuilder, public financeSetupService: FinanceSetupService,
    public financeService: FinanceService) { }

  async ngOnInit() {

    this.salesReturnDetail = [];

    this.salesReturnForm = this.fb.group({

      BillNumber: [''],
      Date: [''],
      Description: [''],
      CreditDays: [''],
      VoucherNumber: [''],
      InvoiceNumber: [''],
      Expenses: [''],
      GstAmount: [''],
      GstPercentage: [''],
      DiscountAmount: [''],
      DiscountPercentage: [''],
      TaxPercentage: [''],
      TaxAmount: [''],
      WithholdingTaxPercentage: [''],
      WihtholdingTaxAmount: [''],
      TotalAmount: [''],
      FinanceSalesInvoiceId: [''],
      DetailAccountId: ['']

    })

    this.salesReturn = await this.financeService.getSalesReturns();

    this.PurchaseDetail = await this.financeService.getSalesReturnDetails();

    this.SalesInvoice = await this.financeService.getSalesInvoices();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();
  }

  async addsalesReturnDetail(value) {
    let data = value.data;
    this.salesReturnDetail.push(data);
  }

  async addsalesReturn(value) {
    let salesReturndetail = new SalesReturn();
    salesReturndetail = { ...salesReturndetail, ...value };
    salesReturndetail.FinanceSalesReturnDetails = this.salesReturnDetail;
    await this.financeService.addSalesReturn(salesReturndetail);
    console.log(salesReturndetail);
    
  }

}