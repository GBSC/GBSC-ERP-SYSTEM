import { Voucher } from "./voucher";
import { Account } from "./Account";

<<<<<<< HEAD
export class VoucherDetail {

    CreditAmount: number;
    DebitAmount: number;
    DepartmentName: string;
    DetailAccountId: number;
    VoucherId: number;
=======
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
>>>>>>> 989fc8cb58daeccd112ddd1a19627eb3494c5d9d
}
