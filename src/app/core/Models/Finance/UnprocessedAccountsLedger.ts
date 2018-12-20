export interface UnprocessedAccountsLedger {
	unprocessedAccountsLedgerId : number,
	accountId : number,
	financialYearId : number,
	accountCode : string,
	parentAccountCode : string,
	isGeneralOrDetail : boolean,
	accountLevel : number,
	description : string,
	isBankAccount : boolean,
	openingBalance : number,
	totalCredit : number,
	totalDebit : number,
	currentBalance : number
}