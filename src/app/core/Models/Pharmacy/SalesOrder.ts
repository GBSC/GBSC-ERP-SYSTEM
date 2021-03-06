import { InventoryItem } from "./InventoryItem";
import { SalesOrderItem } from "./SalesOrderItem";

export interface SalesOrder {
    salesOrderId: number,
    salesOrderCode: string,
    issueDate: Date,
    isIssued: boolean,
    approvedDate: Date,
    isApproved: boolean,
    processedDate: Date,
    isProcessed: boolean,
    remarks: string,
    slipNumber: string,
    status: boolean,
    contactPerson: string,
    contactPersonNumber: string,
    againstLotNumber: string,
    deliveryDate: Date,
    totalQuantity: number,
    extendedAmount: number,
    discountedAmount: number,
    shipped: boolean,
    discountAmount: number,
    salesTaxAmount: number,
    orderAmount: number,
    specialDiscountPercentage: number,
    specialDiscountAmount: number,
    extraDiscountPercentage: number,
    extraDiscountAmount: number,
    userId: number,
    salesOrderItems: SalesOrderItem[]
}