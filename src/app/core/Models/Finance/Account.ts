export interface Account {
	accountId: number,
	parentAccountCode : string,
	accountCode : string,
	isGeneralOrDetail : boolean,
	accountLevel : number,
	description : string,
	financialYearId : number,
	openingBalance : number
}