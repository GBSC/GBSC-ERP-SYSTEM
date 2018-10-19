import { Component, OnInit } from '@angular/core';
import { SalesInvoice } from '../../core/Models/Finance/salesInvoice';
import { FormBuilder } from '@angular/forms';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { SalesInvoiceDetail } from '../../core/Models/Finance/salesInvoiceDetail';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.scss']
})
export class SalesInvoiceComponent implements OnInit {

  public InvoiceDetail: any;
  public SalesReturn: any;
  public salesInvoice: any;
  public detailAccount: any;
  public salesInvoiceForm: any;
  public salesInvoiceDetail: SalesInvoiceDetail[];

  constructor(private fb: FormBuilder, public financeSetupService: FinanceSetupService,
    public financeService: FinanceService) { }

  async ngOnInit() {

    this.salesInvoiceDetail = [];

    this.salesInvoiceForm = this.fb.group({

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
      FinanceSalesReturnId: [''],
      DetailAccountId: ['']

    })

    this.salesInvoice = await this.financeService.getSalesInvoices();

    this.InvoiceDetail = await this.financeService.getSalesInvoiceDetails();

    this.SalesReturn = await this.financeService.getSalesReturns();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();
  }

  async getsalesInvoiceById(value) {
 
    await this.financeService.getSalesInvoiceByID(value.key);
  }

  async addsalesInvoiceDetail(value) {
    let data = value.data;
    this.salesInvoiceDetail.push(data);
  }

  async addsalesInvoice(value) {

    let salesInvoicedetail = new SalesInvoice();
    salesInvoicedetail = { ...salesInvoicedetail, ...value };
    salesInvoicedetail.FinanceSalesInvoiceDetails = this.salesInvoiceDetail;
    await this.financeService.addSalesInvoice(salesInvoicedetail);
  }

  async update(value) {
    this.financeService.updateSalesInvoice(value);
  }
  
  patchValues(salesinvoice: any) {

    this.salesInvoiceForm.patchValue({

      Date: salesinvoice.date,
      Description: salesinvoice.description,
      BillNumber: salesinvoice.billNumber,
      CreditDays: salesinvoice.creditDays,
      VoucherNumber: salesinvoice.voucherNumber,
      InvoiceNumber: salesinvoice.invoiceNumber,
      Expenses: salesinvoice.expenses,
      GstAmount: salesinvoice.gstAmount,
      GstPercentage: salesinvoice.gstPercentage,
      DiscountAmount: salesinvoice.discountAmount,
      DiscountPercentage: salesinvoice.discountPercentage,
      TaxPercentage: salesinvoice.taxPercentage,
      TaxAmount: salesinvoice.taxAmount,
      WithholdingTaxPercentage: salesinvoice.withholdingTaxPercentage,
      WihtholdingTaxAmount: salesinvoice.wihtholdingTaxAmount,
      TotalAmount: salesinvoice.totalAmount,
      FinanceSalesReturnId: salesinvoice.financeSalesReturnId,
      DetailAccountId: salesinvoice.detailAccountId

    })

  }

}

