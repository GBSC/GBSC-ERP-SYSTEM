import { VoucherDetail } from "./voucherDetail";

export interface UnpostedVouchers  {


    VoucherId : number,
    VoucherCode : number,
    DateTime : Date,
    Description : string,
    TotalCreditAmount : number,
    TotalDebitAmount : number,
    FinancialYearId : number,
    VoucherTypeId : number ,
    VoucherDetail : VoucherDetail[]
    Posted : boolean
}