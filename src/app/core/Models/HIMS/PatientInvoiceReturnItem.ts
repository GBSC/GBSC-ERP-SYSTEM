import { PatientInvoiceReturn } from "./PatientInvoiceReturn";

export interface PatientInvoiceReturnItem {
    PatientInvoiceReturnItemsId: number,
    Nature: string,
    UnitPrice: number,
    NameId: number,
    Name: string,
    SaleQuantity: number,
    DiscountPercentage: number,
    SaleGrossAmount: number,
    SaleDiscountAmount: number,
    SaleNetAmount: number,
    ReturnQuantity: number,
    DiscountDeductionAmount: number,
    ReturnNetAmount: number,
    Remarks: string,
    PatientInvoiceReturnId: number,
    PatientInvoiceReturn: PatientInvoiceReturn
}