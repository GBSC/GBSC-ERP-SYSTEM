import { SalesInvoiceDetail } from "./salesInvoiceDetail";

export class SalesInvoice {

    FinanceSalesInvoiceId: number;
    Date: Date;
    Description: string;
    BillNumber: string;
    CreditDays: number;
    VoucherNumber: string;
    InvoiceNumber: string;
    Expenses: number;
    GstAmount: number;
    GstPercentage: number;
    DiscountAmount: number;
    DiscountPercentage: number;
    TaxPercentage: number;
    TaxAmount: number;
    WithholdingTaxPercentage: number;
    WihtholdingTaxAmount: number;
    TotalAmount: number;
    FinanceSalesReturnId: number;
    DetailAccountId: number;
    FinanceSalesInvoiceDetails: SalesInvoiceDetail[]
}