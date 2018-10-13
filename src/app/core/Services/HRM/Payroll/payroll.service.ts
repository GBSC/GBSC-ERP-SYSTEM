import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';


@Injectable()
export class PayrollService {

    private baseUrl: string = "SystemAdmin/api/Payroll";
<<<<<<< HEAD
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
=======

    constructor(private ApiService: ApiService) { }

    async getStopSalaries() {
        return await this.ApiService.get(`${this.baseUrl}/GetStopSalaries`).toPromise();
    }

    async addStopSalary(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddStopSalary`, data).toPromise();
    }

    async updateStopSalary(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateStopSalary`, data).toPromise();
    }

    async deleteStopSalary(stopsalaryId) {
>>>>>>> master

        return await this.ApiService.delete(`${this.baseUrl}/DeleteStopSalary/${stopsalaryId}`).toPromise();
    }

<<<<<<< HEAD
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
=======

    async getGratuities() {

        return await this.ApiService.get(`${this.baseUrl}/GetGratuities`).toPromise();
    }

    async addGratuity(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddGratuity`, data).toPromise();
    }

    async updateGratuity(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateGratuity`, data).toPromise();
    }

    async deleteGratuity(Id) {
>>>>>>> master

        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuity/${Id}`).toPromise();
    }

<<<<<<< HEAD
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
=======
    async getMonthlySalaries() {

        return await this.ApiService.get(`${this.baseUrl}/GetMonthlyUserSalaries`).toPromise();
    }

    async addMonthlySalary(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddMonthlyUserSalary`, data).toPromise();
    }

    async updateMonthlySalary(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateMonthlyUserSalary`, data).toPromise();
    }

    async DeleteMonthlySalary(Id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteMonthlyUserSalary/${Id}`).toPromise();
    }

    async getPayslips() {

        return await this.ApiService.get(`${this.baseUrl}/GetPaySlips`).toPromise();
    }

    async addPayslip(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddPayslip`, data).toPromise();
    }

    async updatePayslip(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdatePaySlip`, data).toPromise();
>>>>>>> master
    }

    async deletePayslip(Id) {

<<<<<<< HEAD
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
=======
>>>>>>> master
        return await this.ApiService.delete(`${this.baseUrl}/DeletePaySlip/${Id}`).toPromise();
    }
}