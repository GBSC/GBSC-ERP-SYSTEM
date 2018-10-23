import { Component, OnInit, Input } from '@angular/core';
import { SalesInvoice } from '../../core/Models/Finance/salesInvoice';
import { FormBuilder } from '@angular/forms';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { SalesInvoiceDetail } from '../../core/Models/Finance/salesInvoiceDetail';
import { ActivatedRoute } from '@angular/router';
import { DataGrid } from 'primeng/primeng';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.scss']
})
export class SalesInvoiceComponent implements OnInit {

  public InvoiceDetail: any[] = [];
  public detailarray: any;
  public SalesReturn: any;
  public salesInvoice: any[] = [];
  public detailAccount: any;
  public Invoice: any;
  public salesInvoiceForm: any;
  public updatingdetail: any;
  public salesInvoiceDetail: SalesInvoiceDetail[];

  @Input('salesInvoiceId') id: number;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, public financeSetupService: FinanceSetupService,
    public financeService: FinanceService) { }

  async updatesalesInvoiceDetail(value) {
    console.log(value);
  }

  async update(value) { 
    value.FinanceSalesInvoiceId = this.id;
    value.FinanceSalesInvoiceDetails = this.InvoiceDetail;
    console.log(value);
    this.financeService.updateSalesInvoice(value).subscribe(resp => {
      console.log(resp);
    });
  }

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

    this.detailAccount = await this.financeSetupService.getDetailAccounts();

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.isUpdate() === true) {

      this.financeService.getSalesInvoiceByID(this.id).subscribe(resp => {

        this.Invoice = resp;
        this.InvoiceDetail = this.Invoice.financeSalesInvoiceDetails;
        // this.InvoiceDetail = a.map(b => {
        //   // delete b.financeSalesInvoiceDetailId;
        //   // delete b.financeSalesInvoiceId;
        //   return b;
        // });
        // console.log(this.InvoiceDetail);
        this.patchValues(this.Invoice);
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

