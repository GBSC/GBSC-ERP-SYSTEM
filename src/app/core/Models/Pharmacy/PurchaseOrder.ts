import { PurchaseOrderItem } from "./PurchaseOrderItem";

export interface PurchaseOrder {
    PurchaseOrderId: number,
    OrderNumber: string,
    OrderDate: Date,
    OrderType: string,
    OrderRemarks: string,
    IssueDate: Date,
    IsIssued: boolean,
    ApprovedDate: Date,
    IsApproved: boolean,
    ProcessedDate: Date,
    IsProcessed: boolean,
    VendorBillNumber: string,
    BillDate: Date,
    Origin: string,
    CurrencyId: number,
    ExchangeRate: number,
    Remarks: string,
    Status: boolean,
    SupplierId: number,
    UserId: number,
    PurchaseOrderDetails: PurchaseOrderItem[]
}