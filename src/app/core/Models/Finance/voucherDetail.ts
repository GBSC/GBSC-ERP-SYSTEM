import { Voucher } from "./voucher";
import { Account } from "./Account";

export interface VoucherDetail {
    voucherDetailId: number,
    departmentName: number,
    creditAmount: number,
    debitAmount: string,
    uniqueName: number,
    description: number,
    chequeNumber: string,
    accountBalanceAmountBeforePosting: number,
    accountBalanceAmountAfterPosting: number,
    voucherId: number,
    voucher: Voucher,
    accountId: number,
    account: Account
}
