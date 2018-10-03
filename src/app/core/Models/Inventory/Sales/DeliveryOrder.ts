export interface DeliveryOrder {
    DeliveryOrderId: number,
    DeliveryOrderCode: string,
    DateNow: Date,
    SalesOrderReceiveDate: Date,
    IssueDate: Date,
    IsIssued: boolean,
    ApprovedDate: Date,
    IsApproved: boolean,
    ProcessedDate: Date,
    IsProcessed: boolean,
    NewDescription: string,
    SalesOrderId: number,
    DeliveryChallanId: number,
    UserId: number
}