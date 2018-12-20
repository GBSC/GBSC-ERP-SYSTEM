import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { PurchaseInvoice } from '../../Models/Finance/purchaseInvoice';
import { PurchaseInvoiceDetail } from '../../Models/Finance/purchaseInvoiceDetail';
import { PurchaseReturn } from '../../Models/Finance/purchaseReturn';
import { PurchaseReturnDetail } from '../../Models/Finance/purchaseReturnDetail';
import { Voucher } from '../../Models/Finance/voucher';
import { VoucherDetail } from '../../Models/Finance/voucherDetail';
import { SalesInvoice } from '../../Models/Finance/salesInvoice';
import { SalesInvoiceDetail } from '../../Models/Finance/salesInvoiceDetail';
import { SalesReturn } from '../../Models/Finance/salesReturn';
import { SalesReturnDetail } from '../../Models/Finance/salesReturnDetail';
import { Account } from '../../Models/Finance/Account';
import { AccountViewModel } from '../../Models/Finance/AccountViewModel';
import { UnpostedVoucher } from '../../Models/Finance/UnpostedVoucher';
import { UnpostedVoucherViewModel } from '../../Models/Finance/UnpostedVoucherViewModel';
import { PostedVoucherViewModel } from '../../Models/Finance/PostedVoucherViewModel';
import { TransactionAccount } from '../../Models/Finance/TransactionAccount';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';

@Injectable()

export class FinanceService {

    private baseUrl: string = "Finance/api";

    constructor(private ApiService: ApiService) { }

    async getPurchaseInvoices() {

        return await this.ApiService.get(`${this.baseUrl}/FinancePurchase/GetFinancePurchaseInvoices`).toPromise();
    }

    getPurchaseInvoice(id): Observable<PurchaseInvoice> {

        return this.ApiService.get(this.baseUrl + '/FinancePurchase/GetFinancePurchaseInvoice/' + id);
    }

    async addPurchaseInvoice(PurchaseInvoice: PurchaseInvoice) {

        return await this.ApiService.post(`${this.baseUrl}/FinancePurchase/AddFinancePurchaseInvoice`, PurchaseInvoice).toPromise();
    }

    updatePurchaseInvoice(data: PurchaseInvoice): Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/FinancePurchase/UpdateFinancePurchaseInvoice`, data);

    }

    async DeletePurchaseInvoice(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinancePurchase/DeleteFinancePurchaseInvoice/${id}`).toPromise();
    }

    async getPurchaseInvoiceDetails() {

        return await this.ApiService.get(`${this.baseUrl}/FinancePurchase/GetFinancePurchaseInvoiceDetails`).toPromise();
    }

    async addPurchaseInvoiceDetail(PurchaseInvoiceDetail: PurchaseInvoiceDetail) {

        return await this.ApiService.post(`${this.baseUrl}/FinancePurchase/AddFinancePurchaseInvoiceDetail`, PurchaseInvoiceDetail).toPromise();
    }

    async updatePurchaseInvoiceDetail(PurchaseInvoiceDetail: PurchaseInvoiceDetail) {

        return await this.ApiService.put(`${this.baseUrl}/FinancePurchase/UpdateFinancePurchaseInvoiceDetail`, PurchaseInvoiceDetail).toPromise();

    }

    async DeletePurchaseInvoiceDetail(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinancePurchase/DeleteFinancePurchaseInvoiceDetail/${id}`).toPromise();
    }

    async getPurchaseReturns() {

        return await this.ApiService.get(`${this.baseUrl}/FinancePurchase/GetFinancePurchaseReturns`).toPromise();
    }

    getPurchaseReturn(id): Observable<PurchaseReturn> {

        return this.ApiService.get(this.baseUrl + '/FinancePurchase/GetFinancePurchaseReturn/' + id);
    }

    async addPurchaseReturn(PurchaseReturn: PurchaseReturn) {

        return await this.ApiService.post(`${this.baseUrl}/FinancePurchase/AddFinancePurchaseReturn`, PurchaseReturn).toPromise();
    }

    updatePurchaseReturn(data: PurchaseReturn): Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/FinancePurchase/UpdateFinancePurchaseReturn`, data);

    }

    async DeletePurchaseReturn(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinancePurchase/DeleteFinancePurchaseReturn/${id}`).toPromise();
    }

    async getPurchaseReturnDetails() {

        return await this.ApiService.get(`${this.baseUrl}/FinancePurchase/GetFinancePurchaseReturnDetails`).toPromise();
    }

    async addPurchaseReturnDetail(PurchaseReturnDetail: PurchaseReturnDetail) {

        return await this.ApiService.post(`${this.baseUrl}/FinancePurchase/AddFinancePurchaseReturnDetail`, PurchaseReturnDetail).toPromise();
    }

    async updatePurchaseReturnDetail(PurchaseReturnDetail: PurchaseReturnDetail) {

        return await this.ApiService.put(`${this.baseUrl}/FinancePurchase/UpdateFinancePurchaseReturnDetail`, PurchaseReturnDetail).toPromise();

    }

    async DeletePurchaseReturnDetail(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinancePurchase/DeleteFinancePurchaseReturnDetail/${id}`).toPromise();
    }

    async getVouchers() {

        return await this.ApiService.get(`${this.baseUrl}/Finance/GetVouchers`).toPromise();
    }

    async addVoucher(Voucher: Voucher) {

        return await this.ApiService.post(`${this.baseUrl}/Finance/AddVoucher`, Voucher).toPromise();
    }

    updateVoucher(data: Voucher): Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/Finance/UpdateVoucher`, data);

    }

    async DeleteVoucher(id) {
        return await this.ApiService.delete(`${this.baseUrl}/Finance/DeleteVoucher/${id}`).toPromise();
    }

    async getVoucherDetails() {

        return await this.ApiService.get(`${this.baseUrl}/Finance/GetVoucherDetails`).toPromise();
    }

    getVoucherDetail(id):Observable<any>{
        return this.ApiService.get(this.baseUrl+'/Finance/GetVoucherDetail/'+id);
    }
    getVoucher(id): Observable<Voucher> {

        return this.ApiService.get(this.baseUrl + '/Finance/GetVoucher/' + id);
    }

    async addVoucherDetail(VoucherDetail: VoucherDetail) {

        return await this.ApiService.post(`${this.baseUrl}/Finance/AddVoucherDetail`, VoucherDetail).toPromise();
    }

    async updateVoucherDetail(VoucherDetail: VoucherDetail) {

        return await this.ApiService.put(`${this.baseUrl}/Finance/UpdateVoucherDetail`, VoucherDetail).toPromise();

    }

    updateVoucherDetails(value):Observable<VoucherDetail>{
        return this.ApiService.put(this.baseUrl+'/Finance/UpdateVoucherDetails',value);
    }

    async DeleteVoucherDetail(id) {
        return await this.ApiService.delete(`${this.baseUrl}/Finance/DeleteVoucherDetail/${id}`).toPromise();
    }

    async getSalesInvoices() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSales/GetFinanceSalesInvoices`).toPromise();
    }

    getSalesInvoiceByID(id): Observable<SalesInvoice> {

        return this.ApiService.get(this.baseUrl + '/FinanceSales/GetFinanceSalesInvoice/' + id);
    }

    async addSalesInvoice(FinanceSalesInvoice: SalesInvoice) {

        return await this.ApiService.post(`${this.baseUrl}/FinanceSales/AddFinanceSalesInvoice`, FinanceSalesInvoice).toPromise();
    }

    updateSalesInvoice(data: SalesInvoice): Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/FinanceSales/UpdateFinanceSalesInvoice`, data);

    }

    async DeleteSalesInvoice(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinanceSales/DeleteFinanceSalesInvoice/${id}`).toPromise();
    }

    async getSalesInvoiceDetails() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSales/GetFinanceSalesInvoiceDetails`).toPromise();
    }

    async addSalesInvoiceDetail(SalesInvoiceDetail: SalesInvoiceDetail) {

        return await this.ApiService.post(`${this.baseUrl}/FinanceSales/AddFinanceSalesInvoiceDetail`, SalesInvoiceDetail).toPromise();
    }

    async updateSalesInvoiceDetail(SalesInvoiceDetail: SalesInvoiceDetail) {

        return await this.ApiService.put(`${this.baseUrl}/FinanceSales/UpdateFinanceSalesInvoiceDetail`, SalesInvoiceDetail).toPromise();

    }

    async DeleteSalesInvoiceDetail(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinanceSales/DeleteFinanceSalesInvoiceDetail/${id}`).toPromise();
    }

    async getSalesReturns() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSales/GetFinanceSalesReturns`).toPromise();
    }

    getSalesReturn(id): Observable<SalesReturn> {

        return this.ApiService.get(this.baseUrl + '/FinanceSales/GetFinanceSalesReturn/' + id);
    }

    async addSalesReturn(SalesReturn: SalesReturn) {

        return await this.ApiService.post(`${this.baseUrl}/FinanceSales/AddFinanceSalesReturn`, SalesReturn).toPromise();
    }

    updateSalesReturn(data: SalesReturn): Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/FinanceSales/UpdateFinanceSalesReturn`, data);

    }

    async DeleteSalesReturn(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinanceSales/DeleteFinanceSalesReturn/${id}`).toPromise();
    }

    async getSalesReturnDetails() {

        return await this.ApiService.get(`${this.baseUrl}/FinanceSales/GetFinanceSalesReturnDetails`).toPromise();
    }

    async addSalesReturnDetail(SalesReturnDetail: SalesReturnDetail) {

        return await this.ApiService.post(`${this.baseUrl}/FinanceSales/AddFinanceSalesReturnDetail`, SalesReturnDetail).toPromise();
    }

    async updateSalesReturnDetail(SalesReturnDetail: SalesReturnDetail) {

        return await this.ApiService.put(`${this.baseUrl}/FinanceSales/UpdateFinanceSalesReturnDetail`, SalesReturnDetail).toPromise();

    }

    async DeleteSalesReturnDetail(id) {
        return await this.ApiService.delete(`${this.baseUrl}/FinanceSales/DeleteFinanceSalesReturnDetail/${id}`).toPromise();
    }

    //++++++++++++++++++++++Account Start++++++++++++++++++++++++++++++//

    getAccounts() : Observable<Account[]> {
        return this.ApiService.get(this.baseUrl + '/Finance/GetAccounts');
    }

    getAccount(id : number) : Observable<Account> {
        return this.ApiService.get(this.baseUrl + '/Finance/GetAccount/' + id);
    }

    addAccount(newaccountviewmodel : AccountViewModel) : Observable<any> {
        return this.ApiService.post(this.baseUrl + '/Finance/AddAccount', newaccountviewmodel);
    }

    updateAccount(account : Account) : Observable<any> {
        return this.ApiService.put(this.baseUrl + '/Finance/UpdateAccount', account);
    }

    deleteAccount(id : number) : Observable<any> {
        return this.ApiService.delete(this.baseUrl + '/Finance/DeleteAccount/' + id);
    }

    processAccountsForLedger(value):Observable<any>{
        return this.ApiService.post(this.baseUrl+'/Finance/ProcessAccountsForLedger',value);
    }

    getTransactionAccounts() : Observable<TransactionAccount[]> {
        return this.ApiService.get(this.baseUrl+'/Finance/GetTransactionAccounts');
    }

    getTransactionAccountById(id : number) : Observable<TransactionAccount> {
        return this.ApiService.get(this.baseUrl+'/Finance/GetTransactionAccount/'+id)
    }

    updateTransactionAccount(model : TransactionAccount) : Observable<any> {
        return this.ApiService.put(this.baseUrl + '/Finance/UpdateTransactionAccount', model);
    }

    addTransactionAccounts(models : TransactionAccount[]) : Observable<any>{
        return this.ApiService.post(this.baseUrl+'/Finance/AddTransactionAccounts', models);
    }

    deleteTransactionAccount(id : number) : Observable<any>{
        return this.ApiService.delete(this.baseUrl+'/Finance/DeleteTransactionAccount/'+id);
    }

    getUnpostedVouchers() : Observable<UnpostedVoucherViewModel[]>{
        return this.ApiService.get(this.baseUrl+'/Finance/GetUnpostedVouchers');
    }

    getUnpostedVoucher(id : number) : Observable<UnpostedVoucherViewModel>{
        return this.ApiService.get(this.baseUrl+'/Finance/GetUnpostedVoucher/'+id);
    }

    updateUnpostedVoucher(value : UnpostedVoucherViewModel) : Observable<any>{
        return this.ApiService.put(this.baseUrl+'/Finance/UpdateUnpostedVoucher',value);
    }

    deleteUnpostedVoucher(id : number) : Observable<any>{
        return this.ApiService.delete(this.baseUrl+'/Finance/DeleteUnpostedVoucher/'+id)
    }

    postUnpostedVouchers(models : UnpostedVoucherViewModel[]) : Observable<any> {
        return this.ApiService.post(this.baseUrl + '/Finance/PostUnpostedVouchers', models);
    }

    postUnpostedVoucher(model : UnpostedVoucherViewModel) : Observable<any> {
        return this.ApiService.post(this.baseUrl + '/Finance/PostUnpostedVoucher', model);
    }

    getPostedVouchers():Observable<PostedVoucherViewModel[]>{
        return this.ApiService.get(this.baseUrl+'/Finance/GetPostedVouchers');
    }

    getPostedVouchersByFinancialYear(id : number) : Observable<PostedVoucherViewModel[]>{
        return this.ApiService.get(this.baseUrl+'/Finance/GetPostedVouchersByFinancialYear/'+id);
    }

    getPostedVouchersByDateRange(fromdate : Date , todate : Date) : Observable<PostedVoucherViewModel[]>{
        return this.ApiService.get(this.baseUrl+'/Finance/GetPostedVouchersByDateRange/' + fromdate + '/' + todate);
    }

    getPostedVouchersByDate(date : Date) : Observable<PostedVoucherViewModel[]>{
        return this.ApiService.get(this.baseUrl+'/Finance/GetPostedVouchersByDate/' + date);
    }

    private FormatDate(date : Date) {
        return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    }
}
