import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { PurchaseInvoiceDetail } from '../../core/Models/Finance/purchaseInvoiceDetail';
import { PurchaseInvoice } from '../../core/Models/Finance/purchaseInvoice';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss']
})
export class PurchaseInvoiceComponent implements OnInit {

  public InvoiceDetail: any;
  public purchaseinvoice: any;
  public purchasereturn: any;
  public voucher: any;
  public detailAccount: any;
  public PurchaseInvoiceForm: any;
  public purchaseInvoiceDetail: PurchaseInvoiceDetail[];

  constructor(private fb: FormBuilder, public financeSetupService: FinanceSetupService,
    public financeService: FinanceService) { }

  async ngOnInit() {

    this.purchaseInvoiceDetail = [];

    this.PurchaseInvoiceForm = this.fb.group({

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
      FinancePurchaseReturnId: [''],
      DetailAccountId: ['']

    })

    this.purchaseinvoice = await this.financeService.getPurchaseInvoices();

    this.InvoiceDetail = await this.financeService.getPurchaseInvoiceDetails();

    this.purchasereturn = await this.financeService.getPurchaseReturns();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();
  }

  async addPurchaseInvoiceDetail(value) {
    let data = value.data;
    this.purchaseInvoiceDetail.push(data);
  }

  async addPurchaseInvoice(value) {
    let invoicedetail = new PurchaseInvoice();
    invoicedetail= { ...invoicedetail, ...value };
    invoicedetail.FinancePurchaseInvoiceDetails = this.purchaseInvoiceDetail;
     await this.financeService.addPurchaseInvoice(invoicedetail);     
  }

}