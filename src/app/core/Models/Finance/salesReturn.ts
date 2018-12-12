import { SalesReturnDetail } from "./salesReturnDetail";

export class SalesReturn {

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
    FinanceSalesInvoiceId: number;
    DetailAccountId: number;
    FinanceSalesReturnDetails: SalesReturnDetail[];
}