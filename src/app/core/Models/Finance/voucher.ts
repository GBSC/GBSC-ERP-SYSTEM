import { VoucherDetail } from "./voucherDetail";

export class Voucher {

    Date: Date;
    Description: string;
    ChequeNumber: string;
    Total: number;
    IsFinal: boolean;
    VoucherTypeId : number;
    VoucherDetails : VoucherDetail[];
}