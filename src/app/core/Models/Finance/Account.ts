import { FinancialYear } from "./financialYear";
import { VoucherDetail } from "./voucherDetail";

export interface Account {
    accountId: number,
    parentAccountCode: string,
    accountCode: string,
    isGeneralOrDetail: boolean,
    accountLevel: number,
    description: string,
    openingBalance: number,
    isBankAccount: boolean,
    showInBalanceSheet: boolean,
    masterAccountType: string,
    isProcessed: boolean,
    financialYearId: number,
    financialYear: FinancialYear,
    voucherDetails: VoucherDetail[],
    closingBalance: number,
    totalCredit: number,
    totalDebit: number,
    oldAccountId: number,
    totalTransactionsAgainstThisAccount: number,
    comapnyId: number
}