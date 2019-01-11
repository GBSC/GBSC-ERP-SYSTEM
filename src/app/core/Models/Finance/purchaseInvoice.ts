import { PurchaseInvoiceDetail } from "./purchaseInvoiceDetail";

export class PurchaseInvoice {

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
    FinancePurchaseReturnId: number;
    DetailAccountId: number;
    FinancePurchaseInvoiceDetails: PurchaseInvoiceDetail[];
}