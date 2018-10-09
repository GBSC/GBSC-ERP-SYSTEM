import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';


@Injectable()
export class PayrollSetupService {

  private baseUrl: string = "SystemAdmin/api/PayrollSetup";
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
  }

  async getdataToUpdate(payrollId, payrollUrl) {
    return await this.ApiService.get(`${this.baseUrl}/${payrollUrl}/${payrollId}`).toPromise();
  }


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
  }


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
    return this.benefits;
  }


  async addbenefit(data) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newbenefit = await this.ApiService.post(`${this.baseUrl}/AddBenefit`, data).toPromise();

  }

  async updatebenefit(data) {
    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.ApiService.put(`${this.baseUrl}/UpdateBenefit`, data).toPromise();
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
  }


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
  }


  async addgratuityslab(data) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newgratuityslab = await this.ApiService.post(`${this.baseUrl}/AddGratuitySlab`, data).toPromise();
    console.log(newgratuityslab);

  }

  async updategratuityslab(data) {
    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.ApiService.put(`${this.baseUrl}/UpdateGratuitySlab`, data).toPromise();
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
  }


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


  async addmasterpayroll(data) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newmasterpayroll = await this.ApiService.post(`${this.baseUrl}/AddMasterPayroll`, data).toPromise();
    console.log(newmasterpayroll);

  }

  async updatemasterpayroll(data) { 
    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.ApiService.put(`${this.baseUrl}/UpdateMasterPayroll`, data).toPromise();
  }

  async Deletemasterpayroll(masterpayrollId) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.ApiService.delete(`${this.baseUrl}/DeleteMasterPayroll/${masterpayrollId}`).toPromise();
  }


  async getmasterpayrolldetails() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

    this.masterpayrolldetail = await this.ApiService.get(`${this.baseUrl}/GetMasterPayrollDetails`).toPromise();
    console.log(this.masterpayrolldetail);
    return this.masterpayrolldetail;
  }


  async addmasterpayrolldetail(data) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newmasterpayroll = await this.ApiService.post(`${this.baseUrl}/AddMasterPayrollDetail`, data).toPromise();
    console.log(newmasterpayroll);

  }

  async updatemasterpayrolldetail(data) {

    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.ApiService.put(`${this.baseUrl}/UpdateMasterPayrollDetail`, data).toPromise();
  }

  async Deletemasterpayrolldetail(masterdetailId) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.ApiService.delete(`${this.baseUrl}/DeleteMasterPayrollDetail/${masterdetailId}`).toPromise();
  }


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
  }


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
  }


  async getpayrollyears() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

    this.payrollyear = await this.ApiService.get(`${this.baseUrl}/GetPayrollYears`).toPromise();
    console.log(this.payrollyear);
    return this.payrollyear;
  }


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
  }


  async getpfpayments() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

    this.pfpayment = await this.ApiService.get(`${this.baseUrl}/GetPfPayments`).toPromise();
    console.log(this.pfpayment);
    return this.pfpayment;
  }


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
  }


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
  }


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
  }



  /** Tax Setups */

  async getincometaxrules() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

    this.incometaxrule = await this.ApiService.get(`${this.baseUrl}/GetIncomeTaxRules`).toPromise();
    console.log(this.incometaxrule);
    return this.incometaxrule;
  }


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
  }


  async gettaxableincomeadjustments() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

    this.taxableincomeadjustment = await this.ApiService.get(`${this.baseUrl}/GetTaxableIncomeAdjustments`).toPromise();
    console.log(this.taxableincomeadjustment);
    return this.taxableincomeadjustment;
  }


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
    return await this.ApiService.delete(`${this.baseUrl}/DeleteUserLoan/${userloanId}`).toPromise();
  }

}
