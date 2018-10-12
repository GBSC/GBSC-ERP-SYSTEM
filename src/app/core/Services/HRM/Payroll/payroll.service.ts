import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';


@Injectable()
export class PayrollService {

    private baseUrl: string = "SystemAdmin/api/Payroll";

    constructor(private ApiService: ApiService) { }

    async getStopSalaries() {

        return await this.ApiService.get(`${this.baseUrl}/GetStopSalaries`).toPromise();
    }

    async addStopSalary(data) {

        let newstopsalary = await this.ApiService.post(`${this.baseUrl}/AddStopSalary`, data).toPromise();
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

    async addGratuity(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddGratuity`, data).toPromise();
    }

    async updateGratuity(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateGratuity`, data).toPromise();
    }

    async deleteGratuity(Id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuity/${Id}`).toPromise();
    }

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
    }

    async deletePayslip(Id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeletePaySlip/${Id}`).toPromise();
    }
}