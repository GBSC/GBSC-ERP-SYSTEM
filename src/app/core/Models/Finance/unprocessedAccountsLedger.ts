export interface UnProcessedAccountsLedger  {

    AccountId : number,
    FinancialYearId : number,
    AccountCode : string,
    ParentAccountCode : string,
    IsGeneralOrDetail : boolean,
    AccountLevel : number,
    Description : string,
    IsBankAccount : boolean ,
    OpeningBalance : number,
    TotalCredit : number,
    TotalDebit : number,
    ClosingBalance : number
}