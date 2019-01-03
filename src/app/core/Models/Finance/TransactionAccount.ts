export interface TransactionAccount {
    transactionAccountId: number,
    accountId: number,
    financialYearId: number,
    accountCode: string,
    parentAccountCode: string,
    accountLevel: number,
    description: string,
    totalTransactionsAgainstThisAccount: number,
    openingBalance: number,
    totalCredit: number,
    totalDebit: number,
    currentBalance: number
}