import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SetupService {

      //private baseUrl: string = "http://gbsc-erp.azurewebsites.net/SystemAdmin/api";
      private baseUrl: string = "http://localhost:58090/api/";
  allowance: Object;
  allowancearrear: Object;
  allowancededuction: Object;
  allowancecalculationtype: Object;
  allowancerate: Object;
  benefit: Object;
  bankadvicetemplate: Object;

  constructor(private httpClient: HttpClient) { }

   
 
 /** Allowance CRUD METHODS */
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


// DEMO ONLY, you can find working methods below
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
 
// DEMO ONLY, you can find working methods below
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
 
// DEMO ONLY, you can find working methods below
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
 
// DEMO ONLY, you can find working methods below
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
 
// DEMO ONLY, you can find working methods below
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

  this.benefit = await this.httpClient.get(`${this.baseUrl}PayrollSetup/GetBenefits`).toPromise();
  console.log(this.benefit);
  return this.benefit;
}
 
// DEMO ONLY, you can find working methods below
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
 
// DEMO ONLY, you can find working methods below
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
}
