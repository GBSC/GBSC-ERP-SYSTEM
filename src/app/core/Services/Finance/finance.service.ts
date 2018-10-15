import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service'; 
import { HttpClient } from '@angular/common/http';

export class Company {
    SNo: number;
    Description: string;
}

let companies: Company[] = [{
    "SNo": 1,
    "Description": "HRMS"
}, {
    "SNo": 2,
    "Description": "Inventory System"
}, {
    "SNo": 3,
    "Description": "HIMS"
}, {
    "SNo": 4,
    "Description": "Lab"
}, {
    "SNo": 5,
    "Description": "Finance"
}];

@Injectable()
export class FinanceService {
    private baseUrl: string = "/SystemAdmin/api";

    constructor(private ApiService: ApiService) { }

    getCompanies() {
        return companies;
    }

    async getFinancialYear() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetFinancialYears`).toPromise();
    }

    async addFinancialYear(data) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddFinancialYear`, data).toPromise();
    }

    async updateFinancialYear(data) {
 
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateFinancialYear`, data).toPromise();

    }

    async DeleteFinancialYear(id) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteFinancialYear/${id}`).toPromise();
    }

}