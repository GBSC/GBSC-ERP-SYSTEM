import { VoucherDetail } from "./voucherDetail";
import { FinancialYear } from "./financialYear";
import { VoucherType } from "./vouchertype";

<<<<<<< HEAD
export class Voucher {

    Date: Date;
    Description: string;
    ChequeNumber: string;
    Total: number;
    IsFinal: boolean;
    VoucherTypeId: number;
    VoucherDetails: VoucherDetail[];
=======
export interface Voucher {
    voucherId: number,
    voucher: Voucher,
    date: Date,
    description: string,
    totalCreditAmount: number,
    totalDebitAmount: number,
    isFinal: boolean,
    financialYearId: number,
    financialYear: FinancialYear,
    voucherTypeId: number,
    voucherType: VoucherType,
    unpostedVoucherId: number,
    postedVoucherId: number,
    voucherDetails: VoucherDetail[]
>>>>>>> 989fc8cb58daeccd112ddd1a19627eb3494c5d9d
}