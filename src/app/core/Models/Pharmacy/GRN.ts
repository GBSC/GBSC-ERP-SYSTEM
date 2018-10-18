import { GRNItem } from "./GRNItem";

export interface GRN {
    GrnId: number,
    GrnNumber: string,
    GrnDate: Date,
    PurchaseOrderId : number,
    Remarks : string,
    TotalExpectedAmount : number,
    TotalPaymentAmount : number,
    TotalDifferenceAmount : number,
    TotalExpectedQUantity : number,
    TotalReceivedQuantity : number,
    TotalDifferenceQuantity : number,
    Supplier : string,
    GrnItems : GRNItem[]
}