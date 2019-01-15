export interface AccountViewModel {
    parentAccountCode: string,
    parentAccountLevel: number,
    accountCode: string,
    isGeneralOrDetail: boolean,
    accountLevel: number,
    description: string,
    financialYearId: number,
    openingBalance: number,
    isBankAccount: boolean
}