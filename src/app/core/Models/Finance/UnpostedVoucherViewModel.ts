import { FinancialYear } from "./financialYear";
import { VoucherType } from "./vouchertype";
import { VoucherDetail } from "./voucherDetail";

export interface UnpostedVoucherViewModel {
	unpostedVoucherId : number,
	voucherId : number,
	voucherCode : string,
	date : Date,
	description : string,
	totalCreditAmount : number,
	totalDebitAmount : number,
	financialYearId : number,
	financialYear : FinancialYear,
	voucherTypeId : number,
	voucherType : VoucherType,
	voucherDetails : VoucherDetail[],
	posted : boolean
}