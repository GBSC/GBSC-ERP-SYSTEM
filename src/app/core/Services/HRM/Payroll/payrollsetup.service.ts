import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';


@Injectable()
export class PayrollSetupService {

    private baseUrl: string = "SystemAdmin/api/PayrollSetup";
<<<<<<< HEAD
    //private baseUrl: string = "http://localhost:58090/api/PayrollSetup";
    public allowance;
    public allowancearrear;
    public allowancededuction;
    public allowancecalculationtype;
    public allowancerate;
    public benefits;
    public bankadvicetemplate;
    public chequetemplate;
    public compensationtransaction;
    public Currency;
    public frequency;
    public fundsetup;
    public gratuityslab;
    public gratuitytype;
    public gratuityslabGratuity;
    public leavingreason;
    public masterpayroll;
    public payroll;
    public payrollbank;
    public payrolltype;
    public payrollyear;
    public pfpayment;
    public salarycalculationtype;
    public salarystructure;
    public salarystructuredetail;
    public usersalary;
    public incometaxrule;
    public taxableincomeadjustment;
    public taxadjustmentreason;
    public taxbenefit;
    public taxrelief;
    public taxschedule;
    public taxyear;
    public loantype;
    public userloan;
    masterpayrolldetail: any;

    constructor(private ApiService: ApiService) { }

    /** Payroll Setups */
    async getallowances() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.allowance = await this.ApiService.get(`${this.baseUrl}/GetAllowances`).toPromise();
        console.log(this.allowance);
        return this.allowance;
=======

    constructor(private ApiService: ApiService) { }

    async getAllowances() {
        return await this.ApiService.get(`${this.baseUrl}/GetAllowances`).toPromise();
>>>>>>> master
    }

    async getdataToUpdate(payrollId, payrollUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${payrollUrl}/${payrollId}`).toPromise();
    }
<<<<<<< HEAD


    async addallowance(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newallowance = await this.ApiService.post(`${this.baseUrl}/AddAllowance`, data).toPromise();
        console.log(newallowance);

    }

    async updateallowance(data) {

        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowance`, data).toPromise();
    }

    async Deleteallowance(allowanceId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowance/${allowanceId}`).toPromise();
    }

    async getallowancearrears() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.allowancearrear = await this.ApiService.get(`${this.baseUrl}/GetAllowanceArrears`).toPromise();
        console.log(this.allowancearrear);
        return this.allowancearrear;
    }
=======

    async addAllowance(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddAllowance`, data).toPromise();

    }

    async updateAllowance(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowance`, data).toPromise();
    }

    async deleteAllowance(allowanceId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowance/${allowanceId}`).toPromise();
    }

    async getAllowanceArrears() {

        return await this.ApiService.get(`${this.baseUrl}/GetAllowanceArrears`).toPromise();
    }


    async addAllowanceArrear(data) {
>>>>>>> master

        return await this.ApiService.post(`${this.baseUrl}/AddAllowanceArrear`, data).toPromise();
    }

<<<<<<< HEAD
    async addallowancearrear(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newallowancearrear = await this.ApiService.post(`${this.baseUrl}/AddAllowanceArrear`, data).toPromise();
        console.log(newallowancearrear);

    }

    async updateallowancearrear(data) {

        let allowancearrear = await this.getdataToUpdate(data.key, 'GetAllowanceArrear');
        allowancearrear = { ...allowancearrear, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceArrear`, allowancearrear).toPromise();
    }

    async Deleteallowancearrear(allowancearrearId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceArrear/${allowancearrearId}`).toPromise();
    }

    async getallowancedeductions() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.allowancededuction = await this.ApiService.get(`${this.baseUrl}/GetAllowancedeductions`).toPromise();
        console.log(this.allowancededuction);
        return this.allowancededuction;
    }
=======
    async updateAllowanceArrear(data) {

        let allowancearrear = await this.getdataToUpdate(data.key, 'GetAllowanceArrear');
        allowancearrear = { ...allowancearrear, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceArrear`, allowancearrear).toPromise();
    }

    async deleteAllowanceArrear(allowancearrearId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceArrear/${allowancearrearId}`).toPromise();
    }

    async getAllowanceDeductions() {

        return await this.ApiService.get(`${this.baseUrl}/GetAllowancedeductions`).toPromise();
    }


    async addAllowanceDeduction(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddAllowanceDeduction`, data).toPromise();
    }

    async updateAllowanceDeduction(data) {
>>>>>>> master

        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceDeduction`, data).toPromise();
    }

<<<<<<< HEAD
    async addallowancededuction(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newallowancededuction = await this.ApiService.post(`${this.baseUrl}/AddAllowanceDeduction`, data).toPromise();
        console.log(newallowancededuction);

    }

    async updateallowancededuction(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceDeduction`, data).toPromise();
    }

    async Deleteallowancededuction(allowancedeductionId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceDeduction/${allowancedeductionId}`).toPromise();
    }

    async getallowancecalculationtypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.allowancecalculationtype = await this.ApiService.get(`${this.baseUrl}/GetAllowanceCalculationTypes`).toPromise();
        console.log(this.allowancecalculationtype);
        return this.allowancecalculationtype;
=======
    async DeleteAllowanceDeduction(allowancedeductionId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceDeduction/${allowancedeductionId}`).toPromise();
    }

    async getAllowanceCalculationTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetAllowanceCalculationTypes`).toPromise();
    }


    async addAllowanceCalculationType(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddAllowanceCalculationType`, data).toPromise();
    }

    async updateAllowanceCalculationType(data) {

        let allowancecalculationtype = await this.getdataToUpdate(data.key, 'GetAllowanceCalculationType');
        allowancecalculationtype = { ...allowancecalculationtype, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceCalculationType`, allowancecalculationtype).toPromise();
>>>>>>> master
    }

    async DeleteAllowanceCalculationType(allowancecalculationtypeId) {

<<<<<<< HEAD
    async addallowancecalculationtype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newallowancecalculationtype = await this.ApiService.post(`${this.baseUrl}/AddAllowanceCalculationType`, data).toPromise();
        console.log(newallowancecalculationtype);

    }

    async updateallowancecalculationtype(data) {

        let allowancecalculationtype = await this.getdataToUpdate(data.key, 'GetAllowanceCalculationType');
        allowancecalculationtype = { ...allowancecalculationtype, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceCalculationType`, allowancecalculationtype).toPromise();
    }

    async Deleteallowancecalculationtype(allowancecalculationtypeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceCalculationType/${allowancecalculationtypeId}`).toPromise();
    }
    async getallowancerates() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.allowancerate = await this.ApiService.get(`${this.baseUrl}/GetAllowanceRates`).toPromise();
        console.log(this.allowancerate);
        return this.allowancerate;
    }
=======
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceCalculationType/${allowancecalculationtypeId}`).toPromise();
    }

    async getAllowanceRates() {

        return await this.ApiService.get(`${this.baseUrl}/GetAllowanceRates`).toPromise();
    }


    async addAllowanceRate(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddAllowanceRate`, data).toPromise();
    }

    async updateAllowanceRate(data) {

        let allowancerate = await this.getdataToUpdate(data.key, 'GetAllowanceRate');
        allowancerate = { ...allowancerate, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceRate`, allowancerate).toPromise();
    }

    async deleteAallowanceRate(allowancerateId) {
>>>>>>> master

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceRate/${allowancerateId}`).toPromise();
    }

<<<<<<< HEAD
    async addallowancerate(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newallowancerate = await this.ApiService.post(`${this.baseUrl}/AddAllowanceRate`, data).toPromise();
        console.log(newallowancerate);

    }

    async updateallowancerate(data) {

        let allowancerate = await this.getdataToUpdate(data.key, 'GetAllowanceRate');
        allowancerate = { ...allowancerate, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceRate`, allowancerate).toPromise();
    }

    async Deleteallowancerate(allowancerateId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceRate/${allowancerateId}`).toPromise();
    }

    async getbenefits() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.benefits = await this.ApiService.get(`${this.baseUrl}/GetBenefits`).toPromise();
        console.log(this.benefits);
        return this.benefits;
    }


    async addbenefit(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newbenefit = await this.ApiService.post(`${this.baseUrl}/AddBenefit`, data).toPromise();
        console.log(newbenefit);

    }

    async updatebenefit(data) {

        let benefit = await this.getdataToUpdate(data.key, 'GetBenefit');
        benefit = { ...benefit, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateBenefit`, benefit).toPromise();
    }

    async Deletebenefit(benefitId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteBenefit/${benefitId}`).toPromise();
    }

    async getbankadvicetemplates() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.bankadvicetemplate = await this.ApiService.get(`${this.baseUrl}/GetBankAdviceTemplates`).toPromise();
        console.log(this.bankadvicetemplate);
        return this.bankadvicetemplate;
    }
=======
    async getBenefits() {
        return await this.ApiService.get(`${this.baseUrl}/GetBenefits`).toPromise();
    }


    async addBenefit(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddBenefit`, data).toPromise();
    }

    async updateBenefit(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateBenefit`, data).toPromise();
    }

    async deleteBenefit(benefitId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteBenefit/${benefitId}`).toPromise();
    }

    async getBankAdviceTemplates() {

        return await this.ApiService.get(`${this.baseUrl}/GetBankAdviceTemplates`).toPromise();
    }


    async addBankAdviceTemplate(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddBankAdviceTemplate`, data).toPromise();
    }

    async updateBankAdviceTemplate(data) {

        let bankadvicetemplate = await this.getdataToUpdate(data.key, 'GetBankAdviceTemplate');
        bankadvicetemplate = { ...bankadvicetemplate, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateBankAdviceTemplate`, bankadvicetemplate).toPromise();
    }

    async deleteBankAdviceTemplate(bankadvicetemplateId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteBankAdviceTemplate/${bankadvicetemplateId}`).toPromise();
    }

    async getChequeTemplates() {

        return await this.ApiService.get(`${this.baseUrl}/GetChequeTemplates`).toPromise();
    }


    async addChequeTemplate(data) {
>>>>>>> master

        return await this.ApiService.post(`${this.baseUrl}/AddChequeTemplate`, data).toPromise();
    }

<<<<<<< HEAD
    async addbankadvicetemplate(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newbankadvicetemplate = await this.ApiService.post(`${this.baseUrl}/AddBankAdviceTemplate`, data).toPromise();
        console.log(newbankadvicetemplate);

    }

    async updatebankadvicetemplate(data) {

        let bankadvicetemplate = await this.getdataToUpdate(data.key, 'GetBankAdviceTemplate');
        bankadvicetemplate = { ...bankadvicetemplate, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateBankAdviceTemplate`, bankadvicetemplate).toPromise();
    }

    async Deletebankadvicetemplate(bankadvicetemplateId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteBankAdviceTemplate/${bankadvicetemplateId}`).toPromise();
    }

    async getchequetemplates() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.chequetemplate = await this.ApiService.get(`${this.baseUrl}/GetChequeTemplates`).toPromise();
        console.log(this.chequetemplate);
        return this.chequetemplate;
    }
=======
    async updateChequeTemplate(data) {

        let chequetemplate = await this.getdataToUpdate(data.key, 'GetChequeTemplate');
        chequetemplate = { ...chequetemplate, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateChequeTemplate`, chequetemplate).toPromise();
    }

    async deleteChequeTemplate(chequetemplateId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteChequeTemplate/${chequetemplateId}`).toPromise();
    }

    async getCompensationTransactions() {

        return await this.ApiService.get(`${this.baseUrl}/GetCompensationTransactions`).toPromise();
    }


    async addCompensationTransaction(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddCompensationTransaction`, data).toPromise();
    }

    async updateCompensationTransaction(data) {
>>>>>>> master

        return await this.ApiService.put(`${this.baseUrl}/UpdateCompensationTransaction`, data).toPromise();
    }

<<<<<<< HEAD
    async addchequetemplate(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newchequetemplate = await this.ApiService.post(`${this.baseUrl}/AddChequeTemplate`, data).toPromise();
        console.log(newchequetemplate);

    }

    async updatechequetemplate(data) {

        let chequetemplate = await this.getdataToUpdate(data.key, 'GetChequeTemplate');
        chequetemplate = { ...chequetemplate, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateChequeTemplate`, chequetemplate).toPromise();
    }

    async Deletechequetemplate(chequetemplateId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteChequeTemplate/${chequetemplateId}`).toPromise();
    }

    async getcompensationtransactions() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.compensationtransaction = await this.ApiService.get(`${this.baseUrl}/GetCompensationTransactions`).toPromise();
        console.log(this.compensationtransaction);
        return this.compensationtransaction;
=======
    async deleteCompensationTransaction(compensationtransactionId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteCompensationTransaction/${compensationtransactionId}`).toPromise();
    }

    async getCurrencies() {

        return await this.ApiService.get(`${this.baseUrl}/GetCurrencies`).toPromise();
    }

    async addCurrency(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddCurrency`, data).toPromise();
    }

    async updateCurrency(data) {

        let Currency = await this.getdataToUpdate(data.key, 'GetCurrency');
        Currency = { ...Currency, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateCurrency`, Currency).toPromise();
    }

    async deleteCurrency(CurrencyId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteCurrency/${CurrencyId}`).toPromise();
>>>>>>> master
    }

    async getFrequencies() {

<<<<<<< HEAD
    async addcompensationtransaction(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newcompensationtransaction = await this.ApiService.post(`${this.baseUrl}/AddCompensationTransaction`, data).toPromise();
        console.log(newcompensationtransaction);

    }

    async updatecompensationtransaction(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateCompensationTransaction`, data).toPromise();
    }

    async Deletecompensationtransaction(compensationtransactionId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteCompensationTransaction/${compensationtransactionId}`).toPromise();
    }

    async getCurrencies() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.Currency = await this.ApiService.get(`${this.baseUrl}/GetCurrencies`).toPromise();
        console.log(this.Currency);
        return this.Currency;
    }
=======
        return await this.ApiService.get(`${this.baseUrl}/GetFrequencies`).toPromise();
    }


    async addFrequency(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddFrequency`, data).toPromise();
    }

    async updateFrequency(data) {

        let frequency = await this.getdataToUpdate(data.key, 'GetFrequency');
        frequency = { ...frequency, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateFrequency`, frequency).toPromise();
    }

    async deleteFrequency(frequencyId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteFrequency/${frequencyId}`).toPromise();
    }

    async getFundSetups() {
>>>>>>> master

        return await this.ApiService.get(`${this.baseUrl}/GetFundSetups`).toPromise();
    }

<<<<<<< HEAD
    async addCurrency(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newCurrency = await this.ApiService.post(`${this.baseUrl}/AddCurrency`, data).toPromise();
        console.log(newCurrency);

    }

    async updateCurrency(data) {

        let Currency = await this.getdataToUpdate(data.key, 'GetCurrency');
        Currency = { ...Currency, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateCurrency`, Currency).toPromise();
    }

    async DeleteCurrency(CurrencyId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteCurrency/${CurrencyId}`).toPromise();
    }

    async getfrequencies() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.frequency = await this.ApiService.get(`${this.baseUrl}/GetFrequencies`).toPromise();
        console.log(this.frequency);
        return this.frequency;
    }
=======

    async addFundSetup(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddFundSetup`, data).toPromise();
    }

    async updateFundSetup(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateFundSetup`, data).toPromise();
    }

    async deleteFundSetup(fundsetupId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteFundSetup/${fundsetupId}`).toPromise();
    }

    async getGratuitySlabs() {

        return await this.ApiService.get(`${this.baseUrl}/GetGratuitySlabs`).toPromise();
    }

>>>>>>> master

    async addGratuitySlab(data) {

<<<<<<< HEAD
    async addfrequency(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newfrequency = await this.ApiService.post(`${this.baseUrl}/AddFrequency`, data).toPromise();
        console.log(newfrequency);

    }

    async updatefrequency(data) {

        let frequency = await this.getdataToUpdate(data.key, 'GetFrequency');
        frequency = { ...frequency, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateFrequency`, frequency).toPromise();
    }

    async Deletefrequency(frequencyId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteFrequency/${frequencyId}`).toPromise();
    }

    async getfundsetups() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.fundsetup = await this.ApiService.get(`${this.baseUrl}/GetFundSetups`).toPromise();
        console.log(this.fundsetup);
        return this.fundsetup;
    }
=======
        return await this.ApiService.post(`${this.baseUrl}/AddGratuitySlab`, data).toPromise();

    }

    async updateGratuitySlab(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateGratuitySlab`, data).toPromise();
    }

    async deleteGratuitySlab(gratuityslabId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuitySlab/${gratuityslabId}`).toPromise();
    }

    async getGratuityTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetGratuityTypes`).toPromise();
    }


    async addGratuityType(data) {
>>>>>>> master

        return await this.ApiService.post(`${this.baseUrl}/AddGratuityType`, data).toPromise();
    }

<<<<<<< HEAD
    async addfundsetup(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newfundsetup = await this.ApiService.post(`${this.baseUrl}/AddFundSetup`, data).toPromise();
        console.log(newfundsetup);

    }

    async updatefundsetup(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateFundSetup`, data).toPromise();
    }

    async Deletefundsetup(fundsetupId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteFundSetup/${fundsetupId}`).toPromise();
    }

    async getgratuityslabs() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.gratuityslab = await this.ApiService.get(`${this.baseUrl}/GetGratuitySlabs`).toPromise();
        console.log(this.gratuityslab);
        return this.gratuityslab;
=======
    async updateGratuityType(data) {

        let gratuitytype = await this.getdataToUpdate(data.key, 'GetGratuityType');
        gratuitytype = { ...gratuitytype, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateGratuityType`, gratuitytype).toPromise();
    }

    async deleteGratuityType(gratuitytypeId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuityType/${gratuitytypeId}`).toPromise();
    }

    async getGratuitySlabGratuities() {

        return await this.ApiService.get(`${this.baseUrl}/GetGratuitySlabGratuities`).toPromise();
    }


    async addGratuitySlabGratuity(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddGratuitySlabGratuity`, data).toPromise();
>>>>>>> master
    }

    async updateGratuitySlabGratuity(data) {

<<<<<<< HEAD
    async addgratuityslab(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newgratuityslab = await this.ApiService.post(`${this.baseUrl}/AddGratuitySlab`, data).toPromise();
        console.log(newgratuityslab);

    }

    async updategratuityslab(data) {

        let gratuityslab = await this.getdataToUpdate(data.key, 'GetGratuitySlab');
        gratuityslab = { ...gratuityslab, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateGratuitySlab`, gratuityslab).toPromise();
    }

    async Deletegratuityslab(gratuityslabId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuitySlab/${gratuityslabId}`).toPromise();
    }

    async getgratuitytypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.gratuitytype = await this.ApiService.get(`${this.baseUrl}/GetGratuityTypes`).toPromise();
        console.log(this.gratuitytype);
        return this.gratuitytype;
    }
=======
        let gratuityslabGratuity = await this.getdataToUpdate(data.key, 'GetGratuitySlabGratuity');
        gratuityslabGratuity = { ...gratuityslabGratuity, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateGratuitySlabGratuity`, gratuityslabGratuity).toPromise();
    }

    async deleteGratuitySlabGratuity(gratuityslabGratuityId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuitySlabGratuity/${gratuityslabGratuityId}`).toPromise();
    }

    async getLeavingReasons() {

        return await this.ApiService.get(`${this.baseUrl}/GetLeavingReasons`).toPromise();
    }

    async addLeavingReason(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddLeavingReason`, data).toPromise();
    }

    async updateLeavingReason(data) {

        let leavingreason = await this.getdataToUpdate(data.key, 'GetLeavingReason');
        leavingreason = { ...leavingreason, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeavingReason`, leavingreason).toPromise();
    }

    async deleteLeavingReason(leavingreasonId) {
>>>>>>> master

        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeavingReason/${leavingreasonId}`).toPromise();
    }

<<<<<<< HEAD
    async addgratuitytype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newgratuitytype = await this.ApiService.post(`${this.baseUrl}/AddGratuityType`, data).toPromise();
        console.log(newgratuitytype);

    }

    async updategratuitytype(data) {

        let gratuitytype = await this.getdataToUpdate(data.key, 'GetGratuityType');
        gratuitytype = { ...gratuitytype, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateGratuityType`, gratuitytype).toPromise();
    }

    async Deletegratuitytype(gratuitytypeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuityType/${gratuitytypeId}`).toPromise();
    }

    async getgratuityslabGratuities() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.gratuityslabGratuity = await this.ApiService.get(`${this.baseUrl}/GetGratuitySlabGratuities`).toPromise();
        console.log(this.gratuityslabGratuity);
        return this.gratuityslabGratuity;
    }
=======
    async getMasterPayrolls() {

        return await this.ApiService.get(`${this.baseUrl}/GetMasterPayrolls`).toPromise();
    }

    async addMasterPayroll(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddMasterPayroll`, data).toPromise();
    }

    async updateMasterPayroll(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateMasterPayroll`, data).toPromise();
    }

    async deleteMasterPayroll(masterpayrollId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteMasterPayroll/${masterpayrollId}`).toPromise();
    }


    async getMasterPayrollDetails() {
>>>>>>> master

        return await this.ApiService.get(`${this.baseUrl}/GetMasterPayrollDetails`).toPromise();
    }

<<<<<<< HEAD
    async addgratuityslabGratuity(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newgratuityslabGratuity = await this.ApiService.post(`${this.baseUrl}/AddGratuitySlabGratuity`, data).toPromise();
        console.log(newgratuityslabGratuity);

    }

    async updategratuityslabGratuity(data) {

        let gratuityslabGratuity = await this.getdataToUpdate(data.key, 'GetGratuitySlabGratuity');
        gratuityslabGratuity = { ...gratuityslabGratuity, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateGratuitySlabGratuity`, gratuityslabGratuity).toPromise();
    }

    async DeletegratuityslabGratuity(gratuityslabGratuityId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuitySlabGratuity/${gratuityslabGratuityId}`).toPromise();
    }

    async getleavingreasons() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavingreason = await this.ApiService.get(`${this.baseUrl}/GetLeavingReasons`).toPromise();
        console.log(this.leavingreason);
        return this.leavingreason;
=======

    async addMasterPayrollDetail(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddMasterPayrollDetail`, data).toPromise();
    }

    async updateMasterPayrollDetail(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateMasterPayrollDetail`, data).toPromise();
    }

    async deleteMasterPayrollDetail(masterdetailId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteMasterPayrollDetail/${masterdetailId}`).toPromise();
    }


    async getPayrolls() {

        return await this.ApiService.get(`${this.baseUrl}/GetPayrolls`).toPromise();
>>>>>>> master
    }

    async addPayroll(data) {

<<<<<<< HEAD
    async addleavingreason(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavingreason = await this.ApiService.post(`${this.baseUrl}/AddLeavingReason`, data).toPromise();
        console.log(newleavingreason);

    }

    async updateleavingreason(data) {

        let leavingreason = await this.getdataToUpdate(data.key, 'GetLeavingReason');
        leavingreason = { ...leavingreason, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeavingReason`, leavingreason).toPromise();
    }

    async Deleteleavingreason(leavingreasonId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeavingReason/${leavingreasonId}`).toPromise();
    }

    async getmasterpayrolls() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.masterpayroll = await this.ApiService.get(`${this.baseUrl}/GetMasterPayrolls`).toPromise();
        console.log(this.masterpayroll);
        return this.masterpayroll;
    }
=======
        return await this.ApiService.post(`${this.baseUrl}/AddPayroll`, data).toPromise();
    }

    async updatePayroll(data) {

        let payroll = await this.getdataToUpdate(data.key, 'GetPayroll');
        payroll = { ...payroll, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdatePayroll`, payroll).toPromise();
    }

    async deletePayroll(payrollId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeletePayroll/${payrollId}`).toPromise();
    }

    async getPayrollBanks() {

        return await this.ApiService.get(`${this.baseUrl}/GetPayrollBanks`).toPromise();
    }

    async addPayrollBank(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddPayrollBank`, data).toPromise();
    }

    async updatePayrollBank(data) {
>>>>>>> master

        return await this.ApiService.put(`${this.baseUrl}/UpdatePayrollBank`, data).toPromise();
    }

<<<<<<< HEAD
    async addmasterpayroll(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newmasterpayroll = await this.ApiService.post(`${this.baseUrl}/AddMasterPayroll`, data).toPromise();
        console.log(newmasterpayroll);

    }

    async updatemasterpayroll(data) {

        let masterpayroll = await this.getdataToUpdate(data.key, 'GetMasterPayroll');
        masterpayroll = { ...masterpayroll, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateMasterPayroll`, masterpayroll).toPromise();
    }

    async Deletemasterpayroll(masterpayrollId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteMasterPayroll/${masterpayrollId}`).toPromise();
    }
=======
    async deletePayrollBank(payrollbankId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeletePayrollBank/${payrollbankId}`).toPromise();
    }

    async getPayrollTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetPayrollTypes`).toPromise();
    }

    async addPayrollType(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddPayrollType`, data).toPromise();
    }

    async updatePayrollType(data) {
>>>>>>> master

        let payrolltype = await this.getdataToUpdate(data.key, 'GetPayrollType');
        payrolltype = { ...payrolltype, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdatePayrollType`, payrolltype).toPromise();
    }

<<<<<<< HEAD
    async getmasterpayrolldetails() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.masterpayrolldetail = await this.ApiService.get(`${this.baseUrl}/GetMasterPayrollDetails`).toPromise();
        console.log(this.masterpayrolldetail);
        return this.masterpayrolldetail;
    }
=======
    async deletePayrollType(id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeletePayrollType/${id}`).toPromise();
    }

>>>>>>> master

    async getPayrollYears() {

<<<<<<< HEAD
    async addmasterpayrolldetail(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newmasterpayroll = await this.ApiService.post(`${this.baseUrl}/AddMasterPayrollDetail`, data).toPromise();
        console.log(newmasterpayroll);

    }

    async updatemasterpayrolldetail(data) {

        let masterpayroll = await this.getdataToUpdate(data.key, 'GetMasterPayroll');
        masterpayroll = { ...masterpayroll, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateMasterPayrollDetail`, masterpayroll).toPromise();
    }

    async Deletemasterpayrolldetail(masterdetailId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteMasterPayrollDetail/${masterdetailId}`).toPromise();
    }
=======
        return await this.ApiService.get(`${this.baseUrl}/GetPayrollYears`).toPromise();
    }


    async addPayrollYear(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddPayrollYear`, data).toPromise();
    }

    async updatePayrollYear(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdatePayrollYear`, data).toPromise();
    }

    async deletePayrollYear(payrollyearId) {
>>>>>>> master

        return await this.ApiService.delete(`${this.baseUrl}/DeletePayrollYear/${payrollyearId}`).toPromise();
    }

<<<<<<< HEAD
    async getpayrolls() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.payroll = await this.ApiService.get(`${this.baseUrl}/GetPayrolls`).toPromise();
        console.log(this.payroll);
        return this.payroll;
    }


    async addpayroll(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newpayroll = await this.ApiService.post(`${this.baseUrl}/AddPayroll`, data).toPromise();
        console.log(newpayroll);

    }

    async updatepayroll(data) {

        let payroll = await this.getdataToUpdate(data.key, 'GetPayroll');
        payroll = { ...payroll, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdatePayroll`, payroll).toPromise();
    }

    async Deletepayroll(payrollId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeletePayroll/${payrollId}`).toPromise();
    }

    async getpayrollbanks() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.payrollbank = await this.ApiService.get(`${this.baseUrl}/GetPayrollBanks`).toPromise();
        console.log(this.payrollbank);
        return this.payrollbank;
    }
=======

    async getPfPayments() {

        return await this.ApiService.get(`${this.baseUrl}/GetPfPayments`).toPromise();
    }


    async addPfPayment(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddPfPayment`, data).toPromise();
    }

    async updatePfPayment(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdatePfPayment`, data).toPromise();
    }

    async DeletePfPayment(pfpaymentId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeletePfPayment/${pfpaymentId}`).toPromise();
    }

    async getSalaryCalculationTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetSalaryCalculationTypes`).toPromise();
    }


    async addSalaryCalculationType(data) {
>>>>>>> master

        return await this.ApiService.post(`${this.baseUrl}/AddSalaryCalculationType`, data).toPromise();
    }

<<<<<<< HEAD
    async addpayrollbank(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newpayrollbank = await this.ApiService.post(`${this.baseUrl}/AddPayrollBank`, data).toPromise();
        console.log(newpayrollbank);

    }

    async updatepayrollbank(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdatePayrollBank`, data).toPromise();
    }

    async Deletepayrollbank(payrollbankId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeletePayrollBank/${payrollbankId}`).toPromise();
    }

    async getpayrolltypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.payrolltype = await this.ApiService.get(`${this.baseUrl}/GetPayrollTypes`).toPromise();
        console.log(this.payrolltype);
        return this.payrolltype;
=======
    async updateSalaryCalculationType(data) {

        let salarycalculationtype = await this.getdataToUpdate(data.key, 'GetSalaryCalculationType');
        salarycalculationtype = { ...salarycalculationtype, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateSalaryCalculationType`, salarycalculationtype).toPromise();
    }

    async deleteSalaryCalculationType(id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteSalaryCalculationType/${id}`).toPromise();
    }

    async getSalaryStructures() {

        return await this.ApiService.get(`${this.baseUrl}/GetSalaryStructures`).toPromise();
    }


    async addSalaryStructure(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddSalaryStructure`, data).toPromise();
>>>>>>> master
    }

    async updateSalaryStructure(data) {

<<<<<<< HEAD
    async addpayrolltype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newpayrolltype = await this.ApiService.post(`${this.baseUrl}/AddPayrollType`, data).toPromise();
        console.log(newpayrolltype);

    }

    async updatepayrolltype(data) {

        let payrolltype = await this.getdataToUpdate(data.key, 'GetPayrollType');
        payrolltype = { ...payrolltype, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdatePayrollType`, payrolltype).toPromise();
    }

    async Deletepayrolltype(payrolltypeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeletePayrollType/${payrolltypeId}`).toPromise();
=======
        let salarystructure = await this.getdataToUpdate(data.key, 'GetSalaryStructure');
        salarystructure = { ...salarystructure, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateSalaryStructure`, salarystructure).toPromise();
    }

    async deleteSalaryStructure(salarystructureId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteSalaryStructure/${salarystructureId}`).toPromise();
    }

    async getSalaryStructureDetails() {

        return await this.ApiService.get(`${this.baseUrl}/GetSalaryStructureDetails`).toPromise();
    }

    async addSalaryStructureDetail(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddSalaryStructureDetail`, data).toPromise();
>>>>>>> master
    }

    async updateSalaryStructureDetail(data) {

<<<<<<< HEAD
    async getpayrollyears() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.payrollyear = await this.ApiService.get(`${this.baseUrl}/GetPayrollYears`).toPromise();
        console.log(this.payrollyear);
        return this.payrollyear;
=======
        let salarystructuredetail = await this.getdataToUpdate(data.key, 'GetSalaryStructureDetail');
        salarystructuredetail = { ...salarystructuredetail, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateSalaryStructureDetail`, salarystructuredetail).toPromise();
    }

    async deleteSalaryStructureDetail(salarystructuredetailId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteSalaryStructureDetail/${salarystructuredetailId}`).toPromise();
>>>>>>> master
    }

    async getUserSalaries() {

<<<<<<< HEAD
    async addpayrollyear(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newpayrollyear = await this.ApiService.post(`${this.baseUrl}/AddPayrollYear`, data).toPromise();
        console.log(newpayrollyear);

    }

    async updatepayrollyear(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdatePayrollYear`, data).toPromise();
    }

    async Deletepayrollyear(payrollyearId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeletePayrollYear/${payrollyearId}`).toPromise();
=======
        return await this.ApiService.get(`${this.baseUrl}/GetUserSalaries`).toPromise();
    }


    async addUserSalary(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddUserSalary`, data).toPromise();
    }

    async updateUserSalary(data) {

        let usersalary = await this.getdataToUpdate(data.key, 'GetUserSalary');
        usersalary = { ...usersalary, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateUserSalary`, usersalary).toPromise();
>>>>>>> master
    }

    async deleteUserSalary(usersalaryId) {

<<<<<<< HEAD
    async getpfpayments() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.pfpayment = await this.ApiService.get(`${this.baseUrl}/GetPfPayments`).toPromise();
        console.log(this.pfpayment);
        return this.pfpayment;
=======
        return await this.ApiService.delete(`${this.baseUrl}/DeleteUserSalary/${usersalaryId}`).toPromise();
    }

    async getIncomeTaxRules() {

        return await this.ApiService.get(`${this.baseUrl}/GetIncomeTaxRules`).toPromise();
>>>>>>> master
    }

    async addIncomeTaxRule(data) {

<<<<<<< HEAD
    async addpfpayment(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newpfpayment = await this.ApiService.post(`${this.baseUrl}/AddPfPayment`, data).toPromise();
        console.log(newpfpayment);

    }

    async updatepfpayment(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdatePfPayment`, data).toPromise();
    }

    async Deletepfpayment(pfpaymentId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeletePfPayment/${pfpaymentId}`).toPromise();
    }

    async getsalarycalculationtypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.salarycalculationtype = await this.ApiService.get(`${this.baseUrl}/GetSalaryCalculationTypes`).toPromise();
        console.log(this.salarycalculationtype);
        return this.salarycalculationtype;
=======
        return await this.ApiService.post(`${this.baseUrl}/AddIncomeTaxRule`, data).toPromise();
    }

    async updateIncomeTaxRule(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateIncomeTaxRule`, data).toPromise();
    }

    async Deleteincometaxrule(incometaxruleId) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteIncomeTaxRule/${incometaxruleId}`).toPromise();
    }


    async getTaxableIncomeAdjustments() {

        return await this.ApiService.get(`${this.baseUrl}/GetTaxableIncomeAdjustments`).toPromise();
    }

    async addTaxableIncomeAdjustment(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddTaxableIncomeAdjustment`, data).toPromise();
>>>>>>> master
    }

    async updateTaxableIncomeAdjustment(data) {

<<<<<<< HEAD
    async addsalarycalculationtype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newsalarycalculationtype = await this.ApiService.post(`${this.baseUrl}/AddSalaryCalculationType`, data).toPromise();
        console.log(newsalarycalculationtype);

    }

    async updatesalarycalculationtype(data) {

        let salarycalculationtype = await this.getdataToUpdate(data.key, 'GetSalaryCalculationType');
        salarycalculationtype = { ...salarycalculationtype, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateSalaryCalculationType`, salarycalculationtype).toPromise();
    }

    async Deletesalarycalculationtype(salarycalculationtypeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteSalaryCalculationType/${salarycalculationtypeId}`).toPromise();
    }

    async getsalarystructures() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.salarystructure = await this.ApiService.get(`${this.baseUrl}/GetSalaryStructures`).toPromise();
        console.log(this.salarystructure);
        return this.salarystructure;
=======
        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxableIncomeAdjustment`, data).toPromise();
    }

    async deleteTaxableIncomeAdjustment(taxableincomeadjustmentId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxableIncomeAdjustment/${taxableincomeadjustmentId}`).toPromise();
    }

    async getTaxAdjustmentReasons() {

        return await this.ApiService.get(`${this.baseUrl}/GetTaxAdjustmentReasons`).toPromise();
    }


    async addTaxAdjustmentReason(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddTaxAdjustmentReason`, data).toPromise();
    }

    async updateTaxAdjustmentReason(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxAdjustmentReason`, data).toPromise();
>>>>>>> master
    }

    async DeleteTaxAdjustmentReason(taxadjustmentreasonId) {

<<<<<<< HEAD
    async addsalarystructure(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newsalarystructure = await this.ApiService.post(`${this.baseUrl}/AddSalaryStructure`, data).toPromise();
        console.log(newsalarystructure);

    }

    async updatesalarystructure(data) {

        let salarystructure = await this.getdataToUpdate(data.key, 'GetSalaryStructure');
        salarystructure = { ...salarystructure, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateSalaryStructure`, salarystructure).toPromise();
    }

    async Deletesalarystructure(salarystructureId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteSalaryStructure/${salarystructureId}`).toPromise();
    }

    async getsalarystructuredetails() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.salarystructuredetail = await this.ApiService.get(`${this.baseUrl}/GetSalaryStructureDetails`).toPromise();
        console.log(this.salarystructuredetail);
        return this.salarystructuredetail;
    }
=======
        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxAdjustmentReason/${taxadjustmentreasonId}`).toPromise();
    }

    async getTaxBenefits() {

        return await this.ApiService.get(`${this.baseUrl}/GetTaxBenefits`).toPromise();
    }

    async addTaxBenefit(data) {

        let newtaxbenefit = await this.ApiService.post(`${this.baseUrl}/AddTaxBenefit`, data).toPromise();
    }

    async updateTaxBenefit(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxBenefit`, data).toPromise();
    }

    async DeleteTaxBenefit(taxbenefitId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxBenefit/${taxbenefitId}`).toPromise();
    }

    async getTaxReliefs() {
>>>>>>> master

        return await this.ApiService.get(`${this.baseUrl}/GetTaxReliefs`).toPromise();
    }

<<<<<<< HEAD
    async addsalarystructuredetail(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newsalarystructuredetail = await this.ApiService.post(`${this.baseUrl}/AddSalaryStructureDetail`, data).toPromise();
        console.log(newsalarystructuredetail);

    }

    async updatesalarystructuredetail(data) {

        let salarystructuredetail = await this.getdataToUpdate(data.key, 'GetSalaryStructureDetail');
        salarystructuredetail = { ...salarystructuredetail, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateSalaryStructureDetail`, salarystructuredetail).toPromise();
    }

    async Deletesalarystructuredetail(salarystructuredetailId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteSalaryStructureDetail/${salarystructuredetailId}`).toPromise();
    }

    async getusersalaries() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.usersalary = await this.ApiService.get(`${this.baseUrl}/GetUserSalaries`).toPromise();
        console.log(this.usersalary);
        return this.usersalary;
    }
=======
    async addTaxRelief(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddTaxRelief`, data).toPromise();
    }

    async updateTaxRelief(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxRelief`, data).toPromise();
    }

    async deleteTaxRelief(taxreliefId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxRelief/${taxreliefId}`).toPromise();
    }

    async getTaxSchedules() {

        return await this.ApiService.get(`${this.baseUrl}/GetTaxSchedules`).toPromise();
    }


    async addTaxSchedule(data) {
>>>>>>> master

        return await this.ApiService.post(`${this.baseUrl}/AddTaxSchedule`, data).toPromise();
    }

<<<<<<< HEAD
    async addusersalary(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newusersalary = await this.ApiService.post(`${this.baseUrl}/AddUserSalary`, data).toPromise();
        console.log(newusersalary);

    }

    async updateusersalary(data) {

        let usersalary = await this.getdataToUpdate(data.key, 'GetUserSalary');
        usersalary = { ...usersalary, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateUserSalary`, usersalary).toPromise();
    }

    async Deleteusersalary(usersalaryId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteUserSalary/${usersalaryId}`).toPromise();
=======
    async updateTaxSchedule(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxSchedule`, data).toPromise();
    }

    async deleteTaxSchedule(taxscheduleId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxSchedule/${taxscheduleId}`).toPromise();
    }


    async gettTaxYears() {

        return await this.ApiService.get(`${this.baseUrl}/GetTaxYears`).toPromise();
>>>>>>> master
    }

    async addtTaxYear(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddTaxYear`, data).toPromise();
    }

<<<<<<< HEAD
    /** Tax Setups */

    async getincometaxrules() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.incometaxrule = await this.ApiService.get(`${this.baseUrl}/GetIncomeTaxRules`).toPromise();
        console.log(this.incometaxrule);
        return this.incometaxrule;
=======
    async updateTaxYear(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxYear`, data).toPromise();
    }

    async deleteTaxYear(taxyearId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxYear/${taxyearId}`).toPromise();
>>>>>>> master
    }

    async getLoanTypes() {

<<<<<<< HEAD
    async addincometaxrule(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newincometaxrule = await this.ApiService.post(`${this.baseUrl}/AddIncomeTaxRule`, data).toPromise();
        console.log(newincometaxrule);

    }

    async updateincometaxrule(data) {

        //let incometaxrule = await this.getdataToUpdate(data.key, 'GetIncomeTaxRule');
        //incometaxrule = { ...incometaxrule, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateIncomeTaxRule`, data).toPromise();
    }

    async Deleteincometaxrule(incometaxruleId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteIncomeTaxRule/${incometaxruleId}`).toPromise();
=======
        return await this.ApiService.get(`${this.baseUrl}/GetLoanTypes`).toPromise();
    }

    async addLoanType(data) {

        let newloantype = await this.ApiService.post(`${this.baseUrl}/AddLoanType`, data).toPromise();
    }

    async updateLoanType(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateLoanType`, data).toPromise();
    }

    async deleteLoanType(loantypeId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteLoanType/${loantypeId}`).toPromise();
>>>>>>> master
    }

    async getUserLoans() {

<<<<<<< HEAD
    async gettaxableincomeadjustments() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.taxableincomeadjustment = await this.ApiService.get(`${this.baseUrl}/GetTaxableIncomeAdjustments`).toPromise();
        console.log(this.taxableincomeadjustment);
        return this.taxableincomeadjustment;
    }
=======
        return await this.ApiService.get(`${this.baseUrl}/GetUserLoans`).toPromise();
    }


    async addUserLoan(data) {
>>>>>>> master

        return await this.ApiService.post(`${this.baseUrl}/AddUserLoan`, data).toPromise();
    }

<<<<<<< HEAD
    async addtaxableincomeadjustment(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newtaxableincomeadjustment = await this.ApiService.post(`${this.baseUrl}/AddTaxableIncomeAdjustment`, data).toPromise();
        console.log(newtaxableincomeadjustment);

    }

    async updatetaxableincomeadjustment(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxableIncomeAdjustment`, data).toPromise();
    }

    async Deletetaxableincomeadjustment(taxableincomeadjustmentId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxableIncomeAdjustment/${taxableincomeadjustmentId}`).toPromise();
    }

    async gettaxadjustmentreasons() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.taxadjustmentreason = await this.ApiService.get(`${this.baseUrl}/GetTaxAdjustmentReasons`).toPromise();
        console.log(this.taxadjustmentreason);
        return this.taxadjustmentreason;
    }


    async addtaxadjustmentreason(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newtaxadjustmentreason = await this.ApiService.post(`${this.baseUrl}/AddTaxAdjustmentReason`, data).toPromise();
        console.log(newtaxadjustmentreason);

    }

    async updatetaxadjustmentreason(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxAdjustmentReason`, data).toPromise();
    }

    async Deletetaxadjustmentreason(taxadjustmentreasonId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxAdjustmentReason/${taxadjustmentreasonId}`).toPromise();
    }

    async gettaxbenefits() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.taxbenefit = await this.ApiService.get(`${this.baseUrl}/GetTaxBenefits`).toPromise();
        console.log(this.taxbenefit);
        return this.taxbenefit;
    }


    async addtaxbenefit(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newtaxbenefit = await this.ApiService.post(`${this.baseUrl}/AddTaxBenefit`, data).toPromise();
        console.log(newtaxbenefit);

    }

    async updatetaxbenefit(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxBenefit`, data).toPromise();
    }

    async Deletetaxbenefit(taxbenefitId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxBenefit/${taxbenefitId}`).toPromise();
    }

    async gettaxreliefs() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.taxrelief = await this.ApiService.get(`${this.baseUrl}/GetTaxReliefs`).toPromise();
        console.log(this.taxrelief);
        return this.taxrelief;
    }


    async addtaxrelief(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newtaxrelief = await this.ApiService.post(`${this.baseUrl}/AddTaxRelief`, data).toPromise();
        console.log(newtaxrelief);

    }

    async updatetaxrelief(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxRelief`, data).toPromise();
    }

    async Deletetaxrelief(taxreliefId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxRelief/${taxreliefId}`).toPromise();
    }

    async gettaxschedules() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.taxschedule = await this.ApiService.get(`${this.baseUrl}/GetTaxSchedules`).toPromise();
        console.log(this.taxschedule);
        return this.taxschedule;
    }


    async addtaxschedule(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newtaxschedule = await this.ApiService.post(`${this.baseUrl}/AddTaxSchedule`, data).toPromise();
        console.log(newtaxschedule);

    }

    async updatetaxschedule(data) {

        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxSchedule`, data).toPromise();
    }

    async Deletetaxschedule(taxscheduleId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxSchedule/${taxscheduleId}`).toPromise();
    }


    async gettaxyears() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.taxyear = await this.ApiService.get(`${this.baseUrl}/GetTaxYears`).toPromise();
        console.log(this.taxyear);
        return this.taxyear;
    }

    async addtaxyear(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newtaxyear = await this.ApiService.post(`${this.baseUrl}/AddTaxYear`, data).toPromise();
        console.log(newtaxyear);

    }

    async updatetaxyear(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxYear`, data).toPromise();
    }

    async Deletetaxyear(taxyearId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxYear/${taxyearId}`).toPromise();
    }

    /** Loan Setups */


    async getloantypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.loantype = await this.ApiService.get(`${this.baseUrl}/GetLoanTypes`).toPromise();
        console.log(this.loantype);
        return this.loantype;
    }



    async addloantype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newloantype = await this.ApiService.post(`${this.baseUrl}/AddLoanType`, data).toPromise();
        console.log(newloantype);

    }

    async updateloantype(data) {

        //let loantype = await this.getdataToUpdate(data.key, 'Getloantype');
        //loantype = { ...loantype, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateLoanType`, data).toPromise();
    }

    async Deleteloantype(loantypeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLoanType/${loantypeId}`).toPromise();
    }

    async getuserloans() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.userloan = await this.ApiService.get(`${this.baseUrl}/GetUserLoans`).toPromise();
        console.log(this.userloan);
        return this.userloan;
    }


    async adduserloan(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newuserloan = await this.ApiService.post(`${this.baseUrl}/AddUserLoan`, data).toPromise();
        console.log(newuserloan);

    }

    async updateuserloan(data) {

        // let userloan = await this.getdataToUpdate(data.key, 'GetUserLoan');
        // userloan = { ...userloan, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateUserLoan`, data).toPromise();
    }

    async Deleteuserloan(userloanId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
=======
    async updateUserLoan(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateUserLoan`, data).toPromise();
    }

    async deleteUserLoan(userloanId) {

>>>>>>> master
        return await this.ApiService.delete(`${this.baseUrl}/DeleteUserLoan/${userloanId}`).toPromise();
    }

}
