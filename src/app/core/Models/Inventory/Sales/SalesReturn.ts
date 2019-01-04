export interface SalesReturn {
    SalesReturnId: number,
    ReturnNumber: string,
    ReturnDate: Date,
    Remarks: string,
    TotalReturnAmount: number,
    SalesInvoiceId: number,
    ReturnReasonId: number
}