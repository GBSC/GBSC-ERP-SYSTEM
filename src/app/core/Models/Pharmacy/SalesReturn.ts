import { SalesReturnItem } from "../Pharmacy/SalesReturnItem";

export interface SalesReturn {
    SalesReturnId: number,
    ReturnNumber: string,
    ReturnDate: Date,
    Remarks: string,
    TotalReturnAmount: number,
    ReturnReasonId: number,
    SalesReturnItems : SalesReturnItem[]
}