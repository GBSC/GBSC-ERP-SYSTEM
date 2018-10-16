import { VoucherDetail } from "./voucherDetail";

export class Voucher {

    Date : Date;
    Description: string;
    ChequeNumber: string;
    TotalCreditAmount: number;
    TotalDebitAmount: number;
    IsFinal: boolean;
    VoucherTypeId : number;
    FinancialYearId : number;
    DepartmentId : number;
    VoucherDetails : VoucherDetail[];

}