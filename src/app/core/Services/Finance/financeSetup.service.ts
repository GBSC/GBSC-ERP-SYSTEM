import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { FinancialYear } from '../../Models/Finance/financialYear';
import { VoucherType } from '../../Models/Finance/vouchertype';
import { MasterAccount } from '../../Models/Finance/masterAccount';
import { DetailAccount } from '../../Models/Finance/detailAccount';
import { SubAccount } from '../../Models/Finance/subAccount';
import { SecondSubAccount } from '../../Models/Finance/secondSubAccount';
import { Observable } from 'rxjs';

@Injectable()
export class FinanceSetupService {

    public baseUrl: string = "Finance/api";

    constructor(public ApiService: ApiService) { }

    async getFinancialYears() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetFinancialYears`).toPromise();
    }

    GetFinancialYears(): Observable<FinancialYear[]> {
        return this.ApiService.get(this.baseUrl + '/FinanceSetup/GetFinancialYears');
    }

    GetFinancialYearsByCompany(companyid : number): Observable<FinancialYear[]> {
        return this.ApiService.get(this.baseUrl + '/FinanceSetup/GetFinancialYearsByCompany/' + companyid);
    }

    async addFinancialYear(financialYear: FinancialYear) {
        return await this.ApiService.post(`${this.baseUrl}/FinanceSetup/AddFinancialYear`, financialYear).toPromise();
    }

    AddFinancialYear(financialYear: FinancialYear) : Observable<any> {
        return this.ApiService.post(`${this.baseUrl}/FinanceSetup/AddFinancialYear`, financialYear);
    }

    async updateFinancialYear(financialYear: FinancialYear) {
        return await this.ApiService.put(`${this.baseUrl}/FinanceSetup/UpdateFinancialYear`, financialYear).toPromise();
    }

    UpdateFinancialYear(financialYear: FinancialYear) : Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/FinanceSetup/UpdateFinancialYear`, financialYear);

    }

    async DeleteFinancialYear(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinanceSetup/DeleteFinancialYear/${id}`).toPromise();
    }

    deleteFinancialYear(id)  : Observable<any> {
        return this.ApiService.delete(`${this.baseUrl}/FinanceSetup/DeleteFinancialYear/${id}`);
    }

    async getVoucherTypes() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetVoucherTypes`).toPromise();
    }

    GetVoucherTypes(): Observable<VoucherType[]> {
        return this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetVoucherTypes`);
    }

    GetVoucherTypesByCompany(companyid : number): Observable<VoucherType[]> {
        return this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetVoucherTypesByCompany/` + companyid);
    }

    async addVoucherType(vouchertype: VoucherType) {
        return await this.ApiService.post(`${this.baseUrl}/FinanceSetup/AddVoucherType`, vouchertype).toPromise();
    }

    AddVoucherType(vouchertype: VoucherType) : Observable<any> {
        return this.ApiService.post(`${this.baseUrl}/FinanceSetup/AddVoucherType`, vouchertype);
    }

    async updateVoucherType(vouchertype: VoucherType) {
        return await this.ApiService.put(`${this.baseUrl}/FinanceSetup/UpdateVoucherType`, vouchertype).toPromise();
    }

    UpdateVoucherType(vouchertype: VoucherType) : Observable<any> {
        return this.ApiService.put(`${this.baseUrl}/FinanceSetup/UpdateVoucherType`, vouchertype);
    }

    async DeleteVoucherType(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinanceSetup/DeleteVoucherType/${id}`).toPromise();
    }

    deleteVoucherType(id) : Observable<any> {
        return this.ApiService.delete(`${this.baseUrl}/FinanceSetup/DeleteVoucherType/${id}`);
    }

    async getMasterAccounts() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetMasterAccounts`).toPromise();
    }

    async addMasterAccount(masterAccount: MasterAccount) {

        return await this.ApiService.post(`${this.baseUrl}/FinanceSetup/AddMasterAccount`, masterAccount).toPromise();
    }

    async updateMasterAccount(masterAccount: MasterAccount) {

        return await this.ApiService.put(`${this.baseUrl}/FinanceSetup/UpdateMasterAccount`, masterAccount).toPromise();

    }

    async DeleteMasterAccount(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinanceSetup/DeleteMasterAccount/${id}`).toPromise();
    }

    async getDetailAccounts() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetDetailAccounts`).toPromise();
    }

    async addDetailAccount(detailAccount: DetailAccount) {

        return await this.ApiService.post(`${this.baseUrl}/FinanceSetup/AddDetailAccount`, detailAccount).toPromise();
    }

    async updateDetailAccount(detailAccount: DetailAccount) {

        return await this.ApiService.put(`${this.baseUrl}/FinanceSetup/UpdateDetailAccount`, detailAccount).toPromise();

    }

    async DeleteDetailAccount(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinanceSetup/DeleteDetailAccount/${id}`).toPromise();
    }

    async getSubAccounts() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetSubAccounts`).toPromise();
    }

    async addSubAccount(subAccount: SubAccount) {

        return await this.ApiService.post(`${this.baseUrl}/FinanceSetup/AddSubAccount`, subAccount).toPromise();
    }

    async updateSubAccount(subAccount: SubAccount) {

        return await this.ApiService.put(`${this.baseUrl}/FinanceSetup/UpdateSubAccount`, subAccount).toPromise();

    }

    async DeleteSubAccount(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinanceSetup/DeleteSubAccount/${id}`).toPromise();
    }

    async getSecondSubAccounts() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSetup/GetSecondSubAccounts`).toPromise();
    }

    async addSecondSubAccount(secondSubAccount: SecondSubAccount) {

        return await this.ApiService.post(`${this.baseUrl}/FinanceSetup/AddSecondSubAccount`, secondSubAccount).toPromise();
    }

    async updateSecondSubAccount(secondSubAccount: SecondSubAccount) {

        return await this.ApiService.put(`${this.baseUrl}/FinanceSetup/UpdateSecondSubAccount`, secondSubAccount).toPromise();

    }

    async DeleteSecondSubAccount(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinanceSetup/DeleteSecondSubAccount/${id}`).toPromise();
    }
}