import { VoucherDetail } from "./voucherDetail";

export interface PostedVouchers  {


    voucherId : number,
    voucherCode : number,
    dateTime : Date,
    description : string,
    totalCreditAmount : number,
    totalDebitAmount : number,
    financialYearId : number,
    voucherTypeId : number ,
    voucherDetail : VoucherDetail[]
    posted : boolean
}