import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';


@Injectable()
export class PayrollService {

  private baseUrl: string = "SystemAdmin/api/Payroll";
  //private baseUrl: string = "http://localhost:58090/api/Payroll";
  public stopsalary;
  public getGratuity: Object;
  public monthlyUserSalary: Object;
  Payslip: any;

  constructor(private ApiService: ApiService) { }

  async getstopsalaries() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

    this.stopsalary = await this.ApiService.get(`${this.baseUrl}/GetStopSalaries`).toPromise();
    console.log(this.stopsalary);
    return this.stopsalary;
  }

  // async getdataToUpdate(payrollId, payrollUrl) {
  //   return await this.ApiService.get(`${this.baseUrl}/${payrollUrl}/${payrollId}`).toPromise();
  // }


  async addstopsalary(data) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newstopsalary = await this.ApiService.post(`${this.baseUrl}/AddStopSalary`, data).toPromise();
    console.log(newstopsalary);

  }

  async updatestopsalary(data) {

    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.ApiService.put(`${this.baseUrl}/UpdateStopSalary`, data).toPromise();
  }

  async Deletestopsalary(stopsalaryId) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.ApiService.delete(`${this.baseUrl}/DeleteStopSalary/${stopsalaryId}`).toPromise();
  }


  async getgratuities() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    this.getGratuity = await this.ApiService.get(`${this.baseUrl}/GetGratuities`).toPromise();
    return this.getGratuity;
  }

  async addgratuity(data) {
    console.log(data);
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newgratuity = await this.ApiService.post(`${this.baseUrl}/AddGratuity`, data).toPromise();
    return newgratuity;
  }

  async updategratuity(data) {

    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.ApiService.put(`${this.baseUrl}/UpdateGratuity`, data).toPromise();
  }

  async Deletegratuity(Id) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuity/${Id}`).toPromise();
  }

  async getMonthlySalaries() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    this.monthlyUserSalary = await this.ApiService.get(`${this.baseUrl}/GetMonthlyUserSalaries`).toPromise();
    return this.monthlyUserSalary;
  }

  async addMonthlySalary(data) {
    console.log(data);
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newmonthlyUserSalary = await this.ApiService.post(`${this.baseUrl}/AddMonthlyUserSalary`, data).toPromise();
    return newmonthlyUserSalary;
  }

  async updateMonthlySalary(data) {

    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.ApiService.put(`${this.baseUrl}/UpdateMonthlyUserSalary`, data).toPromise();
  }

  async DeleteMonthlySalary(Id) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.ApiService.delete(`${this.baseUrl}/DeleteMonthlyUserSalary/${Id}`).toPromise();
  }


  async getpayslips() {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    this.Payslip = await this.ApiService.get(`${this.baseUrl}/GetPaySlips`).toPromise();
    return this.Payslip;
  }

  async addpayslip(data) {
    console.log(data);
    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json' } }
    let newpayslip = await this.ApiService.post(`${this.baseUrl}/AddPayslip`, data).toPromise();
    return newpayslip;
  }

  async updatepayslip(data) {

    let headers = { headers: { 'Content-Type': 'application/json' } }
    return await this.ApiService.put(`${this.baseUrl}/UpdatePaySlip`, data).toPromise();
  }

  async Deletepayslip(Id) {

    let authToken = localStorage.getItem('auth_token');
    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    return await this.ApiService.delete(`${this.baseUrl}/DeletePaySlip/${Id}`).toPromise();
  }
}