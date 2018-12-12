import { PurchaseOrderItem } from "./PurchaseOrderItem";
import { Supplier } from "./Supplier";

export interface PurchaseOrder {
    purchaseOrderId: number,
    orderNumber: string,
    orderDate: Date,
    orderType: string,
    orderRemarks: string,
    issueDate: Date,
    isIssued: boolean,
    approvedDate: Date,
    isApproved: boolean,
    processedDate: Date,
    isProcessed: boolean,
    vendorBillNumber: string,
    billDate: Date,
    origin: string,
    currencyId: number,
    exchangeRate: number,
    remarks: string,
    status: boolean,
    supplierId: number,
    supplier: Supplier,
    userId: number,
    purchaseOrderItems: PurchaseOrderItem[]
}