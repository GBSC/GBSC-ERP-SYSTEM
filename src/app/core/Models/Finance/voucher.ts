import { VoucherDetail } from "./voucherDetail";
import { FinancialYear } from "./financialYear";
import { VoucherType } from "./vouchertype";

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
}