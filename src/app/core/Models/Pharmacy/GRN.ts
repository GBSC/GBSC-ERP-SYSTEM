import { GRNItem } from "./GRNItem";

export interface GRN {
    grnId: number,
    grnNumber: string,
    grnDate: Date,
    purchaseOrderId: number,
    remarks: string,
    totalExpectedAmount: number,
    totalPaymentAmount: number,
    totalDifferenceAmount: number,
    totalExpectedQUantity: number,
    totalReceivedQuantity: number,
    totalDifferenceQuantity: number,
    supplier: string,
    grnItems: GRNItem[]
}