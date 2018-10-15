import { Injectable } from '@angular/core';
import { ApiService } from '../api.service'; 
import { FinancialYear } from '../../Models/Finance/financialYear';
import { VoucherType } from '../../Models/Finance/vouchertype';
import { MasterAccount } from '../../Models/Finance/masterAccount';
import { DetailAccount } from '../../Models/Finance/detailAccount';
import { SubAccount } from '../../Models/Finance/subAccount';
import { SecondSubAccount } from '../../Models/Finance/secondSubAccount';

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

    async getFinancialYears() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetFinancialYears`).toPromise();
    }

    async addFinancialYear(financialYear : FinancialYear) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddFinancialYear`, financialYear).toPromise();
    }

    async updateFinancialYear(financialYear : FinancialYear) {
 
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateFinancialYear`, financialYear).toPromise();

    }

    async DeleteFinancialYear(id) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteFinancialYear/${id}`).toPromise();
    }

    async getVoucherTypes() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetVoucherTypes`).toPromise();
    }

    async addVoucherType(vouchertype : VoucherType) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddVoucherType`, vouchertype).toPromise();
    }

    async updateVoucherType(vouchertype : VoucherType) {
 
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateVoucherType`, vouchertype).toPromise();

    }

    async DeleteVoucherType(id) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteVoucherType/${id}`).toPromise();
    }

    async getMasterAccounts() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetMasterAccounts`).toPromise();
    }

    async addMasterAccount(masterAccount : MasterAccount) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddMasterAccount`, masterAccount).toPromise();
    }

    async updateMasterAccount(masterAccount : MasterAccount) {
 
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateMasterAccount`, masterAccount).toPromise();

    }

    async DeleteMasterAccount(id) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteMasterAccount/${id}`).toPromise();
    }

    async getDetailAccounts() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetDetailAccounts`).toPromise();
    }

    async addDetailAccount(detailAccount : DetailAccount) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddDetailAccount`, detailAccount).toPromise();
    }

    async updateDetailAccount(detailAccount : DetailAccount) {
 
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateDetailAccount`, detailAccount).toPromise();

    }

    async DeleteDetailAccount(id) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteDetailAccount/${id}`).toPromise();
    }

    async getSubAccounts() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetSubAccountss`).toPromise();
    }

    async addSubAccounts(subAccount : SubAccount) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddSubAccounts`, subAccount).toPromise();
    }

    async updateSubAccounts(subAccount : SubAccount) {
 
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateSubAccounts`, subAccount).toPromise();

    }

    async DeleteSubAccounts(id) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteSubAccounts/${id}`).toPromise();
    }

    async getSecondSubAccounts() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetSecondSubAccountss`).toPromise();
    }

    async addSecondSubAccount(secondSubAccount : SecondSubAccount) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddSecondSubAccount`, secondSubAccount).toPromise();
    }

    async updateSecondSubAccount(secondSubAccount : SecondSubAccount) {
 
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateSecondSubAccount`, secondSubAccount).toPromise();

    }

    async DeleteSecondSubAccount(id) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteSecondSubAccount/${id}`).toPromise();
    }
}