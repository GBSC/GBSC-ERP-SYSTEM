import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
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

@Injectable()

export class FinanceService {

  private baseUrl: string = "Finance/api";
  constructor(private ApiService: ApiService) { }

  async getPurchaseInvoices() {

    return await this.ApiService.get(`${this.baseUrl}/FinancePurchase/GetPurchaseInvoices`).toPromise();
  }

  async addPurchaseInvoice(PurchaseInvoice: PurchaseInvoice) {

    return await this.ApiService.post(`${this.baseUrl}/FinancePurchase/AddPurchaseInvoice`, PurchaseInvoice).toPromise();
  }

  async updatePurchaseInvoice(PurchaseInvoice: PurchaseInvoice) {

    return await this.ApiService.put(`${this.baseUrl}/FinancePurchase/UpdatePurchaseInvoice`, PurchaseInvoice).toPromise();

  }

  async DeletePurchaseInvoice(id) {
    return await this.ApiService.delete(`${this.baseUrl}/FinancePurchase/DeletePurchaseInvoice/${id}`).toPromise();
  }

  async getPurchaseInvoiceDetails() {

    return await this.ApiService.get(`${this.baseUrl}/FinancePurchase/GetPurchaseInvoiceDetails`).toPromise();
  }

  async addPurchaseInvoiceDetail(PurchaseInvoiceDetail: PurchaseInvoiceDetail) {

    return await this.ApiService.post(`${this.baseUrl}/FinancePurchase/AddPurchaseInvoiceDetail`, PurchaseInvoiceDetail).toPromise();
  }

  async updatePurchaseInvoiceDetail(PurchaseInvoiceDetail: PurchaseInvoiceDetail) {

    return await this.ApiService.put(`${this.baseUrl}/FinancePurchase/UpdatePurchaseInvoiceDetail`, PurchaseInvoiceDetail).toPromise();

  }

  async DeletePurchaseInvoiceDetail(id) {
    return await this.ApiService.delete(`${this.baseUrl}/FinancePurchase/DeletePurchaseInvoiceDetail/${id}`).toPromise();
  }

  async getPurchaseReturns() {

    return await this.ApiService.get(`${this.baseUrl}/FinancePurchase/GetPurchaseReturns`).toPromise();
  }

  async addPurchaseReturn(PurchaseReturn: PurchaseReturn) {

    return await this.ApiService.post(`${this.baseUrl}/FinancePurchase/AddPurchaseReturn`, PurchaseReturn).toPromise();
  }

  async updatePurchaseReturn(PurchaseReturn: PurchaseReturn) {

    return await this.ApiService.put(`${this.baseUrl}/FinancePurchase/UpdatePurchaseReturn`, PurchaseReturn).toPromise();

  }

  async DeletePurchaseReturn(id) {
    return await this.ApiService.delete(`${this.baseUrl}/FinancePurchase/DeletePurchaseReturn/${id}`).toPromise();
  }

  async getPurchaseReturnDetails() {

    return await this.ApiService.get(`${this.baseUrl}/FinancePurchase/GetPurchaseReturnDetails`).toPromise();
  }

  async addPurchaseReturnDetail(PurchaseReturnDetail: PurchaseReturnDetail) {

    return await this.ApiService.post(`${this.baseUrl}/FinancePurchase/AddPurchaseReturnDetail`, PurchaseReturnDetail).toPromise();
  }

  async updatePurchaseReturnDetail(PurchaseReturnDetail: PurchaseReturnDetail) {

    return await this.ApiService.put(`${this.baseUrl}/FinancePurchase/UpdatePurchaseReturnDetail`, PurchaseReturnDetail).toPromise();

  }

  async DeletePurchaseReturnDetail(id) {
    return await this.ApiService.delete(`${this.baseUrl}/FinancePurchase/DeletePurchaseReturnDetail/${id}`).toPromise();
  }

  async getVouchers() {

    return await this.ApiService.get(`${this.baseUrl}/Finance/GetVouchers`).toPromise();
  }

  async addVoucher(Voucher: Voucher) {

    return await this.ApiService.post(`${this.baseUrl}/Finance/AddVoucher`, Voucher).toPromise();
  }

  async updateVoucher(Voucher: Voucher) {

    return await this.ApiService.put(`${this.baseUrl}/Finance/UpdateVoucher`, Voucher).toPromise();

  }

  async DeleteVoucher(id) {
    return await this.ApiService.delete(`${this.baseUrl}/Finance/DeleteVoucher/${id}`).toPromise();
  }

  async getVoucherDetails() {

    return await this.ApiService.get(`${this.baseUrl}/Finance/GetVoucherDetails`).toPromise();
  }

  async addVoucherDetail(VoucherDetail: VoucherDetail) {

    return await this.ApiService.post(`${this.baseUrl}/Finance/AddVoucherDetail`, VoucherDetail).toPromise();
  }

  async updateVoucherDetail(VoucherDetail: VoucherDetail) {

    return await this.ApiService.put(`${this.baseUrl}/Finance/UpdateVoucherDetail`, VoucherDetail).toPromise();

  }

  async DeleteVoucherDetail(id) {
    return await this.ApiService.delete(`${this.baseUrl}/Finance/DeleteVoucherDetail/${id}`).toPromise();
  }

  async getSalesInvoices() {

    return await this.ApiService.get(`${this.baseUrl}/FinanceSales/GetFinanceSalesInvoices`).toPromise();
  }

  async addSalesInvoice(FinanceSalesInvoice: SalesInvoice) {

    return await this.ApiService.post(`${this.baseUrl}/FinanceSales/AddFinanceSalesInvoice`, FinanceSalesInvoice).toPromise();
  }

  async updateSalesInvoice(FinanceSalesInvoice: SalesInvoice) {

    return await this.ApiService.put(`${this.baseUrl}/FinanceSales/UpdateFinanceSalesInvoice`, FinanceSalesInvoice).toPromise();

  }

  async DeleteSalesInvoice(id) {
    return await this.ApiService.delete(`${this.baseUrl}/FinanceSales/DeleteFinanceSalesInvoice/${id}`).toPromise();
  }

  async getSalesInvoiceDetails() {

    return await this.ApiService.get(`${this.baseUrl}/FinanceSales/GetSalesInvoiceDetails`).toPromise();
  }

  async addSalesInvoiceDetail(SalesInvoiceDetail: SalesInvoiceDetail) {

    return await this.ApiService.post(`${this.baseUrl}/FinanceSales/AddSalesInvoiceDetail`, SalesInvoiceDetail).toPromise();
  }

  async updateSalesInvoiceDetail(SalesInvoiceDetail: SalesInvoiceDetail) {

    return await this.ApiService.put(`${this.baseUrl}/FinanceSales/UpdateSalesInvoiceDetail`, SalesInvoiceDetail).toPromise();

  }

  async DeleteSalesInvoiceDetail(id) {
    return await this.ApiService.delete(`${this.baseUrl}/FinanceSales/DeleteSalesInvoiceDetail/${id}`).toPromise();
  }

  async getSalesReturns() {

    return await this.ApiService.get(`${this.baseUrl}/FinanceSales/GetSalesReturns`).toPromise();
  }

  async addSalesReturn(SalesReturn: SalesReturn) {

    return await this.ApiService.post(`${this.baseUrl}/FinanceSales/AddSalesReturn`, SalesReturn).toPromise();
  }

  async updateSalesReturn(SalesReturn: SalesReturn) {

    return await this.ApiService.put(`${this.baseUrl}/FinanceSales/UpdateSalesReturn`, SalesReturn).toPromise();

  }

  async DeleteSalesReturn(id) {
    return await this.ApiService.delete(`${this.baseUrl}/FinanceSales/DeleteSalesReturn/${id}`).toPromise();
  }

  async getSalesReturnDetails() {

    return await this.ApiService.get(`${this.baseUrl}/FinanceSales/GetSalesReturnDetails`).toPromise();
  }

  async addSalesReturnDetail(SalesReturnDetail: SalesReturnDetail) {

    return await this.ApiService.post(`${this.baseUrl}/FinanceSales/AddSalesReturnDetail`, SalesReturnDetail).toPromise();
  }

  async updateSalesReturnDetail(SalesReturnDetail: SalesReturnDetail) {

    return await this.ApiService.put(`${this.baseUrl}/FinanceSales/UpdateSalesReturnDetail`, SalesReturnDetail).toPromise();

  }

  async DeleteSalesReturnDetail(id) {
    return await this.ApiService.delete(`${this.baseUrl}/FinanceSales/DeleteSalesReturnDetail/${id}`).toPromise();
  }

}
