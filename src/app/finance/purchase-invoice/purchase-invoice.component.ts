import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { PurchaseInvoiceDetail } from '../../core/Models/Finance/purchaseInvoiceDetail';
import { PurchaseInvoice } from '../../core/Models/Finance/purchaseInvoice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss']
})
export class PurchaseInvoiceComponent implements OnInit {

  public InvoiceDetail: any[] = [];
  public purchaseinvoice: any;
  public purchasereturn: any;
  public voucher: any;
  public detailAccount: any;
  public PurchaseInvoiceForm: any;
  public PurchaseInvoice: any;
  public purchaseInvoiceDetail: PurchaseInvoiceDetail[];

  @Input('purchaseInvoiceId') id: number;

  constructor(private fb: FormBuilder,public activatedRoute: ActivatedRoute, public financeSetupService: FinanceSetupService,
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

    this.detailAccount = await this.financeSetupService.getDetailAccounts();

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.isUpdate() === true) {

      this.financeService.getPurchaseInvoice(this.id).subscribe(resp => {

        this.PurchaseInvoice = resp;
        this.InvoiceDetail  = this.PurchaseInvoice.financePurchaseInvoiceDetails; 
        this.patchValues(this.PurchaseInvoice);
      });
    }

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

  isUpdate(): boolean {

    if (this.id > 0) {
      return true;
    }
    else
      return false;
  }

  async updatepurchaseInvoiceDetail(value) {
    console.log(value);
  }

  async update(value){

    value.FinancePurchaseInvoiceId = this.id;
    value.financePurchaseInvoiceDetails = this.InvoiceDetail;
    console.log(value);
    this.financeService.updatePurchaseInvoice(value).subscribe(resp=>{
      console.log(resp);
    })
  }


  patchValues(purchaseinvoice: any) {

    this.PurchaseInvoiceForm.patchValue({

      Date: purchaseinvoice.date,
      Description: purchaseinvoice.description,
      BillNumber: purchaseinvoice.billNumber,
      CreditDays: purchaseinvoice.creditDays,
      VoucherNumber: purchaseinvoice.voucherNumber,
      InvoiceNumber: purchaseinvoice.invoiceNumber,
      Expenses: purchaseinvoice.expenses,
      GstAmount: purchaseinvoice.gstAmount,
      GstPercentage: purchaseinvoice.gstPercentage,
      DiscountAmount: purchaseinvoice.discountAmount,
      DiscountPercentage: purchaseinvoice.discountPercentage,
      TaxPercentage: purchaseinvoice.taxPercentage,
      TaxAmount: purchaseinvoice.taxAmount,
      WithholdingTaxPercentage: purchaseinvoice.withholdingTaxPercentage,
      WihtholdingTaxAmount: purchaseinvoice.wihtholdingTaxAmount,
      TotalAmount: purchaseinvoice.totalAmount,
      DetailAccountId: purchaseinvoice.detailAccountId

    })

  }
}