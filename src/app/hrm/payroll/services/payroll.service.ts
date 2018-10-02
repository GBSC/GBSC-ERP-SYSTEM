import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PayrollService {

  //private baseUrl: string = "http://gbsc-erp.azurewebsites.net/SystemAdmin/api/Payroll";
  private baseUrl: string = "http://localhost:58090/api/Payroll";
  public stopsalary;
  public getGratuity: Object;
  public monthlyUserSalary: Object;
  Payslip: any;

  constructor(private httpClient: HttpClient) { }

  async getstopsalaries() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

    this.stopsalary = await this.httpClient.get(`${this.baseUrl}/GetStopSalaries`).toPromise();
    console.log(this.stopsalary);
    return this.stopsalary;
  }

  // async getdataToUpdate(payrollId, payrollUrl) {
  //   return await this.httpClient.get(`${this.baseUrl}/${payrollUrl}/${payrollId}`).toPromise();
  // }


  async addstopsalary(data) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newstopsalary = await this.httpClient.post(`${this.baseUrl}/AddStopSalary`, data, headers).toPromise();
    console.log(newstopsalary);

  }

  async updatestopsalary(data) {

    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.httpClient.put(`${this.baseUrl}/UpdateStopSalary`, data, headers).toPromise();
  }

  async Deletestopsalary(stopsalaryId) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}/DeleteStopSalary/${stopsalaryId}`).toPromise();
  }


  async getgratuities() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    this.getGratuity = await this.httpClient.get(`${this.baseUrl}/GetGratuities`).toPromise();
    return this.getGratuity;
  }

  async addgratuity(data) {
    console.log(data);
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newgratuity = await this.httpClient.post(`${this.baseUrl}/AddGratuity`, data).toPromise();
    return newgratuity;
  }

  async updategratuity(data) {

    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.httpClient.put(`${this.baseUrl}/UpdateGratuity`, data, headers).toPromise();
  }

  async Deletegratuity(Id) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}/DeleteGratuity/${Id}`).toPromise();
  }

  async getMonthlySalaries() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    this.monthlyUserSalary = await this.httpClient.get(`${this.baseUrl}/GetMonthlyUserSalaries`).toPromise();
    return this.monthlyUserSalary;
  }

  async addMonthlySalary(data) {
    console.log(data);
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newmonthlyUserSalary = await this.httpClient.post(`${this.baseUrl}/AddMonthlyUserSalary`, data).toPromise();
    return newmonthlyUserSalary;
  }

  async updateMonthlySalary(data) {

    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.httpClient.put(`${this.baseUrl}/UpdateMonthlyUserSalary`, data, headers).toPromise();
  }

  async DeleteMonthlySalary(Id) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}/DeleteMonthlyUserSalary/${Id}`).toPromise();
  }


  async getpayslips() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    this.Payslip = await this.httpClient.get(`${this.baseUrl}/GetPaySlips`).toPromise();
    return this.Payslip;
  }

  async addpayslip(data) {
    console.log(data);
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newpayslip = await this.httpClient.post(`${this.baseUrl}/AddPayslip`, data).toPromise();
    return newpayslip;
  }

  async updatepayslip(data) {

    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.httpClient.put(`${this.baseUrl}/UpdatePaySlip`, data, headers).toPromise();
  }

  async Deletepayslip(Id) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.httpClient.delete(`${this.baseUrl}/DeletePaySlip/${Id}`).toPromise();
  }
}