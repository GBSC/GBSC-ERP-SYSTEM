export interface SalesIndent {
    SalesIndentId: number,
    Date: Date,
    SalesIndentNumber: string,
    TotalTradePrice: number,
    TotalTradeOfferDiscount: number,
    TotalTradeOffer: number,
    IssueDate: Date,
    IsIssued: boolean,
    ApprovedDate: Date,
    IsApproved: boolean,
    ProcessedDate: Date,
    IsProcessed: boolean,
    UserId: number,
    SalesOrderId: number,
    DeliveryOrderId: number,
    SalesInvoiceId: number,
    DeliveryChallanId: number
}