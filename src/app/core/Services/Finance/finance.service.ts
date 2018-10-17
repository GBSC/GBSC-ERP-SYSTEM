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

    return await this.ApiService.get(`${this.baseUrl}/FinancePurchase/GetFinancePurchaseInvoices`).toPromise();
  }

  async addPurchaseInvoice(PurchaseInvoice: PurchaseInvoice) {

    return await this.ApiService.post(`${this.baseUrl}/FinancePurchase/AddFinancePurchaseInvoice`, PurchaseInvoice).toPromise();
  }

  async updatePurchaseInvoice(PurchaseInvoice: PurchaseInvoice) {

    return await this.ApiService.put(`${this.baseUrl}/FinancePurchase/UpdateFinancePurchaseInvoice`, PurchaseInvoice).toPromise();

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

  async addPurchaseReturn(PurchaseReturn: PurchaseReturn) {

    return await this.ApiService.post(`${this.baseUrl}/FinancePurchase/AddFinancePurchaseReturn`, PurchaseReturn).toPromise();
  }

  async updatePurchaseReturn(PurchaseReturn: PurchaseReturn) {

    return await this.ApiService.put(`${this.baseUrl}/FinancePurchase/UpdateFinancePurchaseReturn`, PurchaseReturn).toPromise();

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

  async addSalesReturn(SalesReturn: SalesReturn) {

    return await this.ApiService.post(`${this.baseUrl}/FinanceSales/AddFinanceSalesReturn`, SalesReturn).toPromise();
  }

  async updateSalesReturn(SalesReturn: SalesReturn) {

    return await this.ApiService.put(`${this.baseUrl}/FinanceSales/UpdateFinanceSalesReturn`, SalesReturn).toPromise();

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

}
