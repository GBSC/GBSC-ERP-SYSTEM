import { VoucherDetail } from "./voucherDetail";

export class Voucher {
    date: Date;
    description: string;
    chequeNumber: string;
    total: number;
    isFinal: boolean;
    voucherTypeId: number;
    voucherDetails: VoucherDetail[];
}