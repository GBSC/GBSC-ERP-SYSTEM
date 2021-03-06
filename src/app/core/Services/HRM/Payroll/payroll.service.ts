import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { MonthlyUserSalary } from '../../../Models/HRM/monthlyUserSalary';
import { Gratuity } from '../../../Models/HRM/gratuity';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class PayrollService {

    public baseUrl: string = "SystemAdmin/api/Payroll";

    constructor(public ApiService: ApiService, private http: HttpClient) { }

     getUserSalaries() : Observable<any> {

        return this.ApiService.get(`${this.baseUrl}/GetUserSalaries`);
    }

     addUserSalary(data) : Observable<any> {
        console.log(data); 
        return this.ApiService.post(`${this.baseUrl}/AddUserSalary`, data);
    }

    async updateUserSalary(data) {
 
        return await this.ApiService.put(`${this.baseUrl}/UpdateUserSalary`, data).toPromise();
    }

    async deleteUserSalary(usersalaryId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteUserSalary/${usersalaryId}`).toPromise();
    }

    getMonthlyRecord(payrollyear) : Observable <any> {
        console.log(payrollyear); 
        let params = new HttpParams(); 
        params = params.append("payrollyear", payrollyear);
        console.log(params);
        // return this.http.get(`http://localhost:58090/api/Payroll/GetMonthlyDetail?` + params);
        return this.ApiService.get(`${this.baseUrl}/GetMonthlyDetail?` + params);
    }

    
     addMonthlyRecords(data) : Observable <any> {
        return this.ApiService.post(`${this.baseUrl}/AddMonthlyUserProcess`, data);
    }

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

        return await this.ApiService.delete(`${this.baseUrl}/DeleteStopSalary/${stopsalaryId}`).toPromise();
    }


    async getGratuities() {

        return await this.ApiService.get(`${this.baseUrl}/GetGratuities`).toPromise();
    }

    getGratuity(id): Observable<Gratuity> {
        return this.ApiService.get(this.baseUrl + '/GetGratuity/' + id);
    }

    async addGratuity(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddGratuity`, data).toPromise();
    }

    updateGratuity(data: Gratuity): Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/UpdateGratuity`, data);
    }

    async deleteGratuity(Id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuity/${Id}`).toPromise();
    }

    async getMonthlySalaries() {
        return await this.ApiService.get(`${this.baseUrl}/GetMonthlyUserSalaries`).toPromise();
    }

    getmonthlyUserSalary(id): Observable<MonthlyUserSalary> {

        return this.ApiService.get(this.baseUrl + '/GetMonthlyUserSalary/' + id);
    }

    async addMonthlySalary(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddMonthlyUserSalary`, data).toPromise();
    }

    updateMonthlySalary(data: MonthlyUserSalary): Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/UpdateMonthlyUserSalary`, data);
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
    }

    async deletePayslip(Id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeletePaySlip/${Id}`).toPromise();
    }
}