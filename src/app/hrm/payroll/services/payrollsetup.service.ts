import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PayrollSetupService {

//private baseUrl: string = "http://gbsc-erp.azurewebsites.net/SystemAdmin/api";
 private baseUrl: string = "http://localhost:58090/api/";
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

 constructor(private httpClient: HttpClient) { }

                            /** Payroll Setups */
async getallowances() {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

 this.allowance = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetAllowances`).toPromise();
 console.log(this.allowance);
 return this.allowance;
}

async getdataToUpdate(allowanceId, allowanceUrl) {
 return await this.httpClient.get(`${this.baseUrl}/${allowanceUrl}/${allowanceId}`).toPromise();
}

 
async addallowance(data) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json' } }
 let newallowance = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddAllowance`, data, headers).toPromise();
 console.log(newallowance);

}

async updateallowance(data) {

 let allowance= await this.getdataToUpdate(data.key, 'GetAllowance');
 allowance = { ...allowance, ...data.data }  
 let headers = {headers: {'Content-Type':'application/json'}}
 return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateAllowance`, allowance,headers).toPromise();
}

async Deleteallowance(allowanceId) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
 return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteAllowance/${allowanceId}`).toPromise();
}

async getallowancearrears() {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

 this.allowancearrear = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetAllowanceArrears`).toPromise();
 console.log(this.allowancearrear);
 return this.allowancearrear;
}


async addallowancearrear(data) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json' } }
 let newallowancearrear = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddAllowanceArrear`, data, headers).toPromise();
 console.log(newallowancearrear);

}

async updateallowancearrear(data) {

 let allowancearrear= await this.getdataToUpdate(data.key, 'GetAllowanceArrear');
 allowancearrear = { ...allowancearrear, ...data.data }  
 let headers = {headers: {'Content-Type':'application/json'}}
 return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateAllowanceArrear`, allowancearrear,headers).toPromise();
}

async Deleteallowancearrear(allowancearrearId) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
 return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteAllowanceArrear/${allowancearrearId}`).toPromise();
}

async getallowancedeductions() {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

 this.allowancededuction = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetAllowancedeductions`).toPromise();
 console.log(this.allowancededuction);
 return this.allowancededuction;
}


async addallowancededuction(data) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json' } }
 let newallowancededuction = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddAllowancededuction`, data, headers).toPromise();
 console.log(newallowancededuction);

}

async updateallowancededuction(data) {

 let allowancededuction= await this.getdataToUpdate(data.key, 'GetAllowancededuction');
 allowancededuction = { ...allowancededuction, ...data.data }  
 let headers = {headers: {'Content-Type':'application/json'}}
 return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateAllowancededuction`, allowancededuction,headers).toPromise();
}

async Deleteallowancededuction(allowancedeductionId) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
 return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteAllowancededuction/${allowancedeductionId}`).toPromise();
}

async getallowancecalculationtypes() {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

 this.allowancecalculationtype = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetAllowanceCalculationTypes`).toPromise();
 console.log(this.allowancecalculationtype);
 return this.allowancecalculationtype;
}


async addallowancecalculationtype(data) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json' } }
 let newallowancecalculationtype = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddAllowanceCalculationType`, data, headers).toPromise();
 console.log(newallowancecalculationtype);

}

async updateallowancecalculationtype(data) {

 let allowancecalculationtype= await this.getdataToUpdate(data.key, 'GetAllowanceCalculationType');
 allowancecalculationtype = { ...allowancecalculationtype, ...data.data }  
 let headers = {headers: {'Content-Type':'application/json'}}
 return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateAllowanceCalculationType`, allowancecalculationtype,headers).toPromise();
}

async Deleteallowancecalculationtype(allowancecalculationtypeId) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
 return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteAllowanceCalculationType/${allowancecalculationtypeId}`).toPromise();
}
async getallowancerates() {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

 this.allowancerate = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetAllowanceRates`).toPromise();
 console.log(this.allowancerate);
 return this.allowancerate;
}


async addallowancerate(data) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json' } }
 let newallowancerate = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddAllowanceRate`, data, headers).toPromise();
 console.log(newallowancerate);

}

async updateallowancerate(data) {

 let allowancerate= await this.getdataToUpdate(data.key, 'GetAllowanceRate');
 allowancerate = { ...allowancerate, ...data.data }  
 let headers = {headers: {'Content-Type':'application/json'}}
 return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateAllowanceRate`, allowancerate,headers).toPromise();
}

async Deleteallowancerate(allowancerateId) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
 return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteAllowanceRate/${allowancerateId}`).toPromise();
}

async getbenefits() {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

 this.benefits = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetBenefits`).toPromise();
 console.log(this.benefits);
 return this.benefits;
}


async addbenefit(data) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json' } }
 let newbenefit = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddBenefit`, data, headers).toPromise();
 console.log(newbenefit);

}

async updatebenefit(data) {

 let benefit= await this.getdataToUpdate(data.key, 'GetBenefit');
 benefit = { ...benefit, ...data.data }  
 let headers = {headers: {'Content-Type':'application/json'}}
 return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateBenefit`, benefit,headers).toPromise();
}

async Deletebenefit(benefitId) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
 return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteBenefit/${benefitId}`).toPromise();
}

async getbankadvicetemplates() {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

 this.bankadvicetemplate = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetBankAdviceTemplates`).toPromise();
 console.log(this.bankadvicetemplate);
 return this.bankadvicetemplate;
}


async addbankadvicetemplate(data) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json' } }
 let newbankadvicetemplate = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddBankAdviceTemplate`, data, headers).toPromise();
 console.log(newbankadvicetemplate);

}

async updatebankadvicetemplate(data) {

 let bankadvicetemplate= await this.getdataToUpdate(data.key, 'GetBankAdviceTemplate');
 bankadvicetemplate = { ...bankadvicetemplate, ...data.data }  
 let headers = {headers: {'Content-Type':'application/json'}}
 return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateBankAdviceTemplate`, bankadvicetemplate,headers).toPromise();
}

async Deletebankadvicetemplate(bankadvicetemplateId) {

 let authToken = localStorage.getItem('auth_token');
 let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
 return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteBankAdviceTemplate/${bankadvicetemplateId}`).toPromise();
}

async getchequetemplates() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.chequetemplate = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetChequeTemplates`).toPromise();
    console.log(this.chequetemplate);
    return this.chequetemplate;
  }
   

  async addchequetemplate(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newchequetemplate = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddChequeTemplate`, data, headers).toPromise();
    console.log(newchequetemplate);
  
  }
  
  async updatechequetemplate(data) {
   
    let chequetemplate= await this.getdataToUpdate(data.key, 'GetChequeTemplate');
    chequetemplate = { ...chequetemplate, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateChequeTemplate`, chequetemplate,headers).toPromise();
  }
   
  async Deletechequetemplate(chequetemplateId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteChequeTemplate/${chequetemplateId}`).toPromise();
  }

  async getcompensationtransactions() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.compensationtransaction = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetCompensationTransactions`).toPromise();
    console.log(this.compensationtransaction);
    return this.compensationtransaction;
  }
   

  async addcompensationtransaction(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newcompensationtransaction = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddCompensationTransaction`, data, headers).toPromise();
    console.log(newcompensationtransaction);
  
  }
  
  async updatecompensationtransaction(data) {
   
    let compensationtransaction= await this.getdataToUpdate(data.key, 'GetCompensationTransaction');
    compensationtransaction = { ...compensationtransaction, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateCompensationTransaction`, compensationtransaction,headers).toPromise();
  }
   
  async Deletecompensationtransaction(compensationtransactionId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteCompensationTransaction/${compensationtransactionId}`).toPromise();
  }
  
  async getCurrencies() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.Currency = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetCurrencies`).toPromise();
    console.log(this.Currency);
    return this.Currency;
  }
   

  async addCurrency(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newCurrency = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddCurrency`, data, headers).toPromise();
    console.log(newCurrency);
  
  }
  
  async updateCurrency(data) {
   
    let Currency= await this.getdataToUpdate(data.key, 'GetCurrency');
    Currency = { ...Currency, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateCurrency`, Currency,headers).toPromise();
  }
   
  async DeleteCurrency(CurrencyId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteCurrency/${CurrencyId}`).toPromise();
  }
  
  async getfrequencies() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.frequency = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetFrequencies`).toPromise();
    console.log(this.frequency);
    return this.frequency;
  }
   

  async addfrequency(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newfrequency = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddFrequency`, data, headers).toPromise();
    console.log(newfrequency);
  
  }
  
  async updatefrequency(data) {
   
    let frequency= await this.getdataToUpdate(data.key, 'GetFrequency');
    frequency = { ...frequency, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateFrequency`, frequency,headers).toPromise();
  }
   
  async Deletefrequency(frequencyId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteFrequency/${frequencyId}`).toPromise();
  }

  async getfundsetups() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.fundsetup = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetFundSetups`).toPromise();
    console.log(this.fundsetup);
    return this.fundsetup;
  }
   

  async addfundsetup(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newfundsetup = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddFundSetup`, data, headers).toPromise();
    console.log(newfundsetup);
  
  }
  
  async updatefundsetup(data) {
   
    let fundsetup= await this.getdataToUpdate(data.key, 'GetFundSetup');
    fundsetup = { ...fundsetup, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateFundSetup`, fundsetup,headers).toPromise();
  }
   
  async Deletefundsetup(fundsetupId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteFundSetup/${fundsetupId}`).toPromise();
  }

  async getgratuityslabs() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.gratuityslab = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetGratuitySlabs`).toPromise();
    console.log(this.gratuityslab);
    return this.gratuityslab;
  }
   

  async addgratuityslab(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newgratuityslab = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddGratuitySlab`, data, headers).toPromise();
    console.log(newgratuityslab);
  
  }
  
  async updategratuityslab(data) {
   
    let gratuityslab= await this.getdataToUpdate(data.key, 'GetGratuitySlab');
    gratuityslab = { ...gratuityslab, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateGratuitySlab`, gratuityslab,headers).toPromise();
  }
   
  async Deletegratuityslab(gratuityslabId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteGratuitySlab/${gratuityslabId}`).toPromise();
  }
  
  async getgratuitytypes() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.gratuitytype = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetGratuityTypes`).toPromise();
    console.log(this.gratuitytype);
    return this.gratuitytype;
  }
   

  async addgratuitytype(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newgratuitytype = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddGratuityType`, data, headers).toPromise();
    console.log(newgratuitytype);
  
  }
  
  async updategratuitytype(data) {
   
    let gratuitytype= await this.getdataToUpdate(data.key, 'GetGratuityType');
    gratuitytype = { ...gratuitytype, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateGratuityType`, gratuitytype,headers).toPromise();
  }
   
  async Deletegratuitytype(gratuitytypeId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteGratuityType/${gratuitytypeId}`).toPromise();
  }
  
  async getgratuityslabGratuities() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.gratuityslabGratuity = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetGratuitySlabGratuities`).toPromise();
    console.log(this.gratuityslabGratuity);
    return this.gratuityslabGratuity;
  }
   

  async addgratuityslabGratuity(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newgratuityslabGratuity = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddGratuitySlabGratuity`, data, headers).toPromise();
    console.log(newgratuityslabGratuity);
  
  }
  
  async updategratuityslabGratuity(data) {
   
    let gratuityslabGratuity= await this.getdataToUpdate(data.key, 'GetGratuitySlabGratuity');
    gratuityslabGratuity = { ...gratuityslabGratuity, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateGratuitySlabGratuity`, gratuityslabGratuity,headers).toPromise();
  }
   
  async DeletegratuityslabGratuity(gratuityslabGratuityId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteGratuitySlabGratuity/${gratuityslabGratuityId}`).toPromise();
  }

  async getleavingreasons() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.leavingreason = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetLeavingReasons`).toPromise();
    console.log(this.leavingreason);
    return this.leavingreason;
  }
   

  async addleavingreason(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newleavingreason = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddLeavingReason`, data, headers).toPromise();
    console.log(newleavingreason);
  
  }
  
  async updateleavingreason(data) {
   
    let leavingreason= await this.getdataToUpdate(data.key, 'GetLeavingReason');
    leavingreason = { ...leavingreason, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateLeavingReason`, leavingreason,headers).toPromise();
  }
   
  async Deleteleavingreason(leavingreasonId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteLeavingReason/${leavingreasonId}`).toPromise();
  }
  
  async getmasterpayrolls() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.masterpayroll = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetMasterPayrolls`).toPromise();
    console.log(this.masterpayroll);
    return this.masterpayroll;
  }
   

  async addmasterpayroll(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newmasterpayroll = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddMasterPayroll`, data, headers).toPromise();
    console.log(newmasterpayroll);
  
  }
  
  async updatemasterpayroll(data) {
   
    let masterpayroll= await this.getdataToUpdate(data.key, 'GetMasterPayroll');
    masterpayroll = { ...masterpayroll, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateMasterPayroll`, masterpayroll,headers).toPromise();
  }
   
  async Deletemasterpayroll(masterpayrollId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteMasterPayroll/${masterpayrollId}`).toPromise();
  }


  async getmasterpayrolldetails() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.masterpayrolldetail = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetMasterPayrollDetails`).toPromise();
    console.log(this.masterpayrolldetail);
    return this.masterpayrolldetail;
  }
   

  async addmasterpayrolldetail(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newmasterpayroll = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddMasterPayrollDetail`, data, headers).toPromise();
    console.log(newmasterpayroll);
  
  }
  
  async updatemasterpayrolldetail(data) {
   
    let masterpayroll= await this.getdataToUpdate(data.key, 'GetMasterPayroll');
    masterpayroll = { ...masterpayroll, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateMasterPayrollDetail`, masterpayroll,headers).toPromise();
  }
   
  async Deletemasterpayrolldetail(masterdetailId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteMasterPayrollDetail/${masterdetailId}`).toPromise();
  }


  async getpayrolls() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.payroll = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetPayrolls`).toPromise();
    console.log(this.payroll);
    return this.payroll;
  }
   

  async addpayroll(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newpayroll = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddPayroll`, data, headers).toPromise();
    console.log(newpayroll);
  
  }
  
  async updatepayroll(data) {
   
    let payroll= await this.getdataToUpdate(data.key, 'GetPayroll');
    payroll = { ...payroll, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdatePayroll`, payroll,headers).toPromise();
  }
   
  async Deletepayroll(payrollId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeletePayroll/${payrollId}`).toPromise();
  }

  async getpayrollbanks() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.payrollbank = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetPayrollBanks`).toPromise();
    console.log(this.payrollbank);
    return this.payrollbank;
  }
   

  async addpayrollbank(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newpayrollbank = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddPayrollBank`, data, headers).toPromise();
    console.log(newpayrollbank);
  
  }
  
  async updatepayrollbank(data) {
   
    let payrollbank= await this.getdataToUpdate(data.key, 'Getpayrollbank');
    payrollbank = { ...payrollbank, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdatePayrollBank`, payrollbank,headers).toPromise();
  }
   
  async Deletepayrollbank(payrollbankId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeletePayrollBank/${payrollbankId}`).toPromise();
  }

  async getpayrolltypes() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.payrolltype = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetPayrollTypes`).toPromise();
    console.log(this.payrolltype);
    return this.payrolltype;
  }
   

  async addpayrolltype(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newpayrolltype = await this.httpClient.post(`${this.baseUrl}payrolltypeSetup/AddPayrollType`, data, headers).toPromise();
    console.log(newpayrolltype);
  
  }
  
  async updatepayrolltype(data) {
   
    let payrolltype= await this.getdataToUpdate(data.key, 'GetPayrollType');
    payrolltype = { ...payrolltype, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdatePayrollType`, payrolltype,headers).toPromise();
  }
   
  async Deletepayrolltype(payrolltypeId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeletePayrollType/${payrolltypeId}`).toPromise();
  }

  async getpayrollyears() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    return await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetPayrollYears`).toPromise();
  }
   

  async addpayrollyear(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newpayrollyear = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddPayrollYear`, data, headers).toPromise();
    console.log(newpayrollyear);
  
  }
  
  async updatepayrollyear(data) {
   
    let payrollyear= await this.getdataToUpdate(data.key, 'Getpayrollyear');
    payrollyear = { ...payrollyear, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdatePayrollYear`, payrollyear,headers).toPromise();
  }
   
  async Deletepayrollyear(payrollyearId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeletePayrollYear/${payrollyearId}`).toPromise();
  }

  async getpfpayments() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.pfpayment = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetPfPayments`).toPromise();
    console.log(this.pfpayment);
    return this.pfpayment;
  }
   

  async addpfpayment(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newpfpayment = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddPfPayment`, data, headers).toPromise();
    console.log(newpfpayment);
  
  }
  
  async updatepfpayment(data) {
   
    let pfpayment= await this.getdataToUpdate(data.key, 'GetPfPayment');
    pfpayment = { ...pfpayment, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdatePfPayment`, pfpayment,headers).toPromise();
  }
   
  async Deletepfpayment(pfpaymentId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeletePfPayment/${pfpaymentId}`).toPromise();
  }

  async getsalarycalculationtypes() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.salarycalculationtype = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetSalaryCalculationTypes`).toPromise();
    console.log(this.salarycalculationtype);
    return this.salarycalculationtype;
  }
   

  async addsalarycalculationtype(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newsalarycalculationtype = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddSalaryCalculationType`, data, headers).toPromise();
    console.log(newsalarycalculationtype);
  
  }
  
  async updatesalarycalculationtype(data) {
   
    let salarycalculationtype= await this.getdataToUpdate(data.key, 'GetSalaryCalculationType');
    salarycalculationtype = { ...salarycalculationtype, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateSalaryCalculationType`, salarycalculationtype,headers).toPromise();
  }
   
  async Deletesalarycalculationtype(salarycalculationtypeId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteSalaryCalculationType/${salarycalculationtypeId}`).toPromise();
  }
  
  async getsalarystructures() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.salarystructure = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetSalaryStructures`).toPromise();
    console.log(this.salarystructure);
    return this.salarystructure;
  }
   

  async addsalarystructure(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newsalarystructure = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddSalaryStructure`, data, headers).toPromise();
    console.log(newsalarystructure);
  
  }
  
  async updatesalarystructure(data) {
   
    let salarystructure= await this.getdataToUpdate(data.key, 'GetSalaryStructure');
    salarystructure = { ...salarystructure, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateSalaryStructure`, salarystructure,headers).toPromise();
  }
   
  async Deletesalarystructure(salarystructureId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteSalaryStructure/${salarystructureId}`).toPromise();
  }

  async getsalarystructuredetails() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.salarystructuredetail = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetSalaryStructureDetails`).toPromise();
    console.log(this.salarystructuredetail);
    return this.salarystructuredetail;
  }
   

  async addsalarystructuredetail(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newsalarystructuredetail = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddSalaryStructureDetail`, data, headers).toPromise();
    console.log(newsalarystructuredetail);
  
  }
  
  async updatesalarystructuredetail(data) {
   
    let salarystructuredetail= await this.getdataToUpdate(data.key, 'GetSalaryStructureDetail');
    salarystructuredetail = { ...salarystructuredetail, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateSalaryStructureDetail`, salarystructuredetail,headers).toPromise();
  }
   
  async Deletesalarystructuredetail(salarystructuredetailId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteSalaryStructureDetail/${salarystructuredetailId}`).toPromise();
  }
  
  async getusersalaries() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.usersalary = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetUserSalaries`).toPromise();
    console.log(this.usersalary);
    return this.usersalary;
  }
   

  async addusersalary(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newusersalary = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddUserSalary`, data, headers).toPromise();
    console.log(newusersalary);
  
  }
  
  async updateusersalary(data) {
   
    let usersalary= await this.getdataToUpdate(data.key, 'GetUserSalary');
    usersalary = { ...usersalary, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateUserSalary`, usersalary,headers).toPromise();
  }
   
  async Deleteusersalary(usersalaryId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteUserSalary/${usersalaryId}`).toPromise();
  }



                                   /** Tax Setups */

  async getincometaxrules() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.incometaxrule = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetIncomeTaxRules`).toPromise();
    console.log(this.incometaxrule);
    return this.incometaxrule;
  }
   
  
  async addincometaxrule(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newincometaxrule = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddIncomeTaxRule`, data, headers).toPromise();
    console.log(newincometaxrule);
  
  }
  
  async updateincometaxrule(data) {
   
    let incometaxrule= await this.getdataToUpdate(data.key, 'GetIncomeTaxRule');
    incometaxrule = { ...incometaxrule, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateIncomeTaxRule`, incometaxrule,headers).toPromise();
  }
   
  async Deleteincometaxrule(incometaxruleId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteIncomeTaxRule/${incometaxruleId}`).toPromise();
  }
      
  
  async gettaxableincomeadjustments() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.taxableincomeadjustment = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetTaxableIncomeAdjustments`).toPromise();
    console.log(this.taxableincomeadjustment);
    return this.taxableincomeadjustment;
  }
   
  
  async addtaxableincomeadjustment(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newtaxableincomeadjustment = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddTaxableIncomeAdjustment`, data, headers).toPromise();
    console.log(newtaxableincomeadjustment);
  
  }
  
  async updatetaxableincomeadjustment(data) {
   
    let taxableincomeadjustment= await this.getdataToUpdate(data.key, 'GetTaxableIncomeAdjustment');
    taxableincomeadjustment = { ...taxableincomeadjustment, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateTaxableIncomeAdjustment`, taxableincomeadjustment,headers).toPromise();
  }
   
  async Deletetaxableincomeadjustment(taxableincomeadjustmentId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteTaxableIncomeAdjustment/${taxableincomeadjustmentId}`).toPromise();
  }

  async gettaxadjustmentreasons() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.taxadjustmentreason = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetTaxAdjustmentReasons`).toPromise();
    console.log(this.taxadjustmentreason);
    return this.taxadjustmentreason;
  }
   
  
  async addtaxadjustmentreason(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newtaxadjustmentreason = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddTaxAdjustmentReason`, data, headers).toPromise();
    console.log(newtaxadjustmentreason);
  
  }
  
  async updatetaxadjustmentreason(data) {
   
    let taxadjustmentreason= await this.getdataToUpdate(data.key, 'GetTaxAdjustmentReason');
    taxadjustmentreason = { ...taxadjustmentreason, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateTaxAdjustmentReason`, taxadjustmentreason,headers).toPromise();
  }
   
  async Deletetaxadjustmentreason(taxadjustmentreasonId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteTaxAdjustmentReason/${taxadjustmentreasonId}`).toPromise();
  }

  async gettaxbenefits() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.taxbenefit = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetTaxBenefits`).toPromise();
    console.log(this.taxbenefit);
    return this.taxbenefit;
  }
   
  
  async addtaxbenefit(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newtaxbenefit = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddTaxBenefit`, data, headers).toPromise();
    console.log(newtaxbenefit);
  
  }
  
  async updatetaxbenefit(data) {
   
    let taxbenefit= await this.getdataToUpdate(data.key, 'GetTaxBenefit');
    taxbenefit = { ...taxbenefit, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateTaxBenefit`, taxbenefit,headers).toPromise();
  }
   
  async Deletetaxbenefit(taxbenefitId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteTaxBenefit/${taxbenefitId}`).toPromise();
  }
  
  async gettaxreliefs() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.taxrelief = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetTaxReliefs`).toPromise();
    console.log(this.taxrelief);
    return this.taxrelief;
  }
   
  
  async addtaxrelief(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newtaxrelief = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddTaxRelief`, data, headers).toPromise();
    console.log(newtaxrelief);
  
  }
  
  async updatetaxrelief(data) {
   
    let taxrelief= await this.getdataToUpdate(data.key, 'GetTaxRelief');
    taxrelief = { ...taxrelief, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateTaxRelief`, taxrelief,headers).toPromise();
  }
   
  async Deletetaxrelief(taxreliefId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteTaxRelief/${taxreliefId}`).toPromise();
  }

  async gettaxschedules() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.taxschedule = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetTaxSchedules`).toPromise();
    console.log(this.taxschedule);
    return this.taxschedule;
  }
   
  
  async addtaxschedule(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newtaxschedule = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddTaxSchedule`, data, headers).toPromise();
    console.log(newtaxschedule);
  
  }
  
  async updatetaxschedule(data) {
   
    let taxschedule= await this.getdataToUpdate(data.key, 'GetTaxSchedule');
    taxschedule = { ...taxschedule, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateTaxSchedule`, taxschedule,headers).toPromise();
  }
   
  async Deletetaxschedule(taxscheduleId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteTaxSchedule/${taxscheduleId}`).toPromise();
  }


  async gettaxyears() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.taxyear = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetTaxYears`).toPromise();
    console.log(this.taxyear);
    return this.taxyear;
  }
  
  async addtaxyear(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newtaxyear = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddTaxYear`, data, headers).toPromise();
    console.log(newtaxyear);
  
  }
  
  async updatetaxyear(data) {
   
    let taxyear= await this.getdataToUpdate(data.key, 'Gettaxyear');
    taxyear = { ...taxyear, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateTaxYear`, taxyear,headers).toPromise();
  }
   
  async Deletetaxyear(taxyearId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteTaxYear/${taxyearId}`).toPromise();
  }
 
                            /** Loan Setups */


  async getloantypes() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.loantype = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetLoanTypes`).toPromise();
    console.log(this.loantype);
    return this.loantype;
  }
   
  
  async addloantype(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newloantype = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddLoanType`, data, headers).toPromise();
    console.log(newloantype);
  
  }
  
  async updateloantype(data) {
   
    let loantype= await this.getdataToUpdate(data.key, 'Getloantype');
    loantype = { ...loantype, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateLoanType`, loantype,headers).toPromise();
  }
   
  async Deleteloantype(loantypeId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteLoanType/${loantypeId}`).toPromise();
  }

  async getuserloans() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
  
    this.userloan = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetUserLoans`).toPromise();
    console.log(this.userloan);
    return this.userloan;
  }
   
  
  async adduserloan(data) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newuserloan = await this.httpClient.post(`${this.baseUrl}PayrollSetup/AddUserLoan`, data, headers).toPromise();
    console.log(newuserloan);
  
  }
  
  async updateuserloan(data) {
   
    let userloan= await this.getdataToUpdate(data.key, 'GetUserLoan');
    userloan = { ...userloan, ...data.data }  
    let headers = {headers: {'Content-Type':'application/json'}}
    return await this.httpClient.put(`${this.baseUrl}PayrollSetup/UpdateUserLoan`, userloan,headers).toPromise();
  }
   
  async Deleteuserloan(userloanId) {
  
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}PayrollSetup/DeleteUserLoan/${userloanId}`).toPromise();
  }
  
}
