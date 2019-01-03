export interface PostedVoucher {
    postedVoucherId: number
    voucherId: number,
    voucherCode: string,
    date: Date,
    description: string,
    totalCreditAmount: number,
    totalDebitAmount: number,
    financialYearId: number,
    voucherTypeId: number
}