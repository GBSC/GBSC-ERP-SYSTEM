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

}