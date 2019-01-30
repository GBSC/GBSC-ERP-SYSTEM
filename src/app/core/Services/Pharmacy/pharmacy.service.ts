import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { SalesOrder } from '../../Models/Pharmacy/SalesOrder';
import { SalesOrderItem } from '../../Models/Pharmacy/SalesOrderItem';
import { PurchaseOrder } from '../../Models/Pharmacy/PurchaseOrder';
import { PurchaseOrderItem } from '../../Models/Pharmacy/PurchaseOrderItem';
import { GRN } from '../../Models/Pharmacy/GRN';
import { Inventory } from '../../Models/Pharmacy/Inventory';
import { InventoryItem } from '../../Models/Pharmacy/InventoryItem';
import { InventoryItemCategory } from '../../Models/Pharmacy/InventoryItemCategory';
import { Supplier } from '../../Models/Pharmacy/Supplier';
import { Unit } from '../../Models/Pharmacy/Unit';
import { PackageType } from '../../Models/Pharmacy/PackageType';
import { PackCategory } from '../../Models/Pharmacy/PackCategory';
import { PackSize } from '../../Models/Pharmacy/PackSize';
import { PackType } from '../../Models/Pharmacy/PackType';
import { ProductType } from '../../Models/Pharmacy/ProductType';
import { ReturnReason } from '../../Models/Pharmacy/ReturnReason';
import { SalesReturnItem } from '../../Models/Pharmacy/SalesReturnItem';
import { SalesReturn } from '../../Models/Pharmacy/SalesReturn';
import { Customer } from '../../Models/Pharmacy/Customer';
import { Currency } from '../../Models/Pharmacy/Currency';
import { SalesIndent } from '../../Models/Pharmacy/SalesIndent';
import { SalesIndentItem } from '../../Models/Pharmacy/SalesIndentItem';
import { SalesIndentViewModel } from '../../Models/Pharmacy/IndentViewModel';


@Injectable()
export class PharmacyService {

    public readonly API_URL = 'inventory/api/';
    constructor(public http: HttpClient, public ApiService: ApiService) {

    }

    //SalesIndent
    GetSalesIndents(): Observable<SalesIndent> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndents');
    }

    AddSalesIndent(SalesIndent: SalesIndent): Observable<SalesIndent> {
        return this.ApiService.post(this.API_URL + "Sales/AddSalesIndent", SalesIndent);
    }

    UpdateSalesIndent(SalesIndent: SalesIndent): Observable<SalesIndent> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesIndent', SalesIndent);
    }

    DeleteSalesIndent(id: number): Observable<SalesIndent> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesIndent/' + id);
    }

    GetSalesIndentDetailsByCode(code: string): Observable<SalesIndent> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentDetailsByCode/' + code);
    }

    async GetSalesIndentDetailsByCodeAsync(code: string) {
        return await this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentDetailsByCode/' + code).toPromise();
    }

    //SalesIndentItem

    GetSalesIndentItems(): Observable<SalesIndentItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentItems');
    }

    AddSalesIndentItem(SalesIndentItem: SalesIndentItem): Observable<SalesIndentItem> {
        return this.ApiService.post(this.API_URL + "Sales/AddSalesIndentItem", SalesIndentItem);
    }

    UpdateSalesIndentItem(SalesIndentItem: SalesIndentItem): Observable<SalesIndentItem> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesIndentItem', SalesIndentItem);
    }

    DeleteSalesIndentItem(id: number): Observable<SalesIndentItem> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesIndentItem/' + id);
    }

    //SalesOrder
    GetSalesOrders(): Observable<SalesOrder> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesOrders');
    }

    AddSalesOrder(SalesOrder: SalesOrder): Observable<SalesOrder> {
        return this.ApiService.post(this.API_URL + "Sales/AddSalesOrder", SalesOrder);
    }

    UpdateSalesOrder(SalesOrder: SalesOrder): Observable<SalesOrder> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesOrder', SalesOrder);
    }

    DeleteSalesOrder(id: number): Observable<SalesOrder> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesOrder/' + id);
    }

    GetSalesOrderItemsBySalesOrderID(id: number): Observable<SalesOrderItem[]> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesOrderItemsBySalesOrderID/' + id);
    }

    GetSalesOrderDetailsByCode(code: string): Observable<SalesOrder> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesOrderDetailsByCode/' + code);
    }

    async GetSalesOrderByCodeAsync(code: string) {
        return await this.ApiService.get(this.API_URL + 'Sales/GetSalesOrderbyCode/' + code).toPromise();
    }

    async GetSalesOrderItemsBySalesOrderIDAsync(id: number) {
        return await this.ApiService.get(this.API_URL + 'Sales/GetSalesOrderItemsBySalesOrderID/' + id).toPromise();
    }

    //SalesOrderItem

    GetSalesOrderItems(): Observable<SalesOrderItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesOrderItems');
    }

    AddSalesOrderItem(SalesOrderItem: SalesOrderItem): Observable<SalesOrderItem> {
        return this.ApiService.post(this.API_URL + "Sales/AddSalesOrderItem", SalesOrderItem);
    }

    UpdateSalesOrderItem(SalesOrderItem: SalesOrderItem): Observable<SalesOrderItem> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesOrderItem', SalesOrderItem);
    }

    DeleteSalesOrderItem(id: number): Observable<SalesOrderItem> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesOrderItem/' + id);
    }

    //SalesReturn
    GetSalesReturns(): Observable<SalesReturn> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesReturns');
    }

    AddSalesReturn(SalesReturn: SalesReturn): Observable<SalesReturn> {
        return this.ApiService.post(this.API_URL + "Sales/AddSalesReturn", SalesReturn);
    }

    UpdateSalesReturn(SalesReturn: SalesReturn): Observable<SalesReturn> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesReturn', SalesReturn);
    }

    DeleteSalesReturn(id: number): Observable<SalesReturn> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesReturn/' + id);
    }

    // async GetSalesReturnDetailsByCode(code){
    //     return await this.ApiService.get(this.API_URL + 'Sales/GetSalesReturnDetailsByCode/' + code).toPromise();
    // }

    GetSalesReturnDetailsByCode(code: string): Observable<SalesReturnItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesReturnDetailsByCode/' + code);
    }

    //SalesReturnItem
    GetSalesReturnItems(): Observable<SalesReturnItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesReturnItems');
    }

    AddSalesReturnItem(SalesReturnItem: SalesReturnItem): Observable<SalesReturnItem> {
        return this.ApiService.post(this.API_URL + "Sales/AddSalesReturnItem", SalesReturnItem);
    }

    UpdateSalesReturnItem(SalesReturnItem: SalesReturnItem): Observable<SalesReturnItem> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesReturnItem', SalesReturnItem);
    }

    DeleteSalesReturnItem(id): Observable<SalesReturnItem> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesReturnItem/' + id);
    }

    //PurchaseOrder
    GetPurchaseOrders(): Observable<PurchaseOrder> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrders');
    }

    AddPurchaseOrder(PurchaseOrder: PurchaseOrder): Observable<PurchaseOrder> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseOrder', PurchaseOrder);
    }

    UpdatePurchaseOrder(PurchaseOrder: PurchaseOrder): Observable<PurchaseOrder> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseOrder', PurchaseOrder);
    }

    DeletePurchaseOrder(id: number): Observable<PurchaseOrder> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseOrder/' + id);
    }

    GetPurchaseOrderDetailsByCode(code: string): Observable<PurchaseOrder> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrderDetailsByCode/' + code);
    }

    async GetPurchaseOrderDetailsByCodeAsync(code: string) {
        return await this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrderDetailsByCode/' + code).toPromise();
    }

    //PurchaseOrderItem
    GetPurchaseOrderItems(): Observable<PurchaseOrderItem> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrderItems');
    }

    AddPurchaseOrderItem(PurchaseOrderItem: PurchaseOrderItem): Observable<PurchaseOrderItem> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseOrderItem', PurchaseOrderItem);
    }

    UpdatePurchaseOrderItem(PurchaseOrderItem: PurchaseOrderItem): Observable<PurchaseOrderItem> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseOrderItem', PurchaseOrderItem);
    }

    DeletePurchaseOrderItem(id: number): Observable<PurchaseOrderItem> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseOrderItem/' + id);
    }

    //PurchaseInvoice
    GetPurchaseInvoices(): Observable<any> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseInvoices');
    }

    GetPurchaseInvoicesByCompany(companyId: number): Observable<any> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseInvoicesByCompany/' + companyId);
    }

    AddPurchaseInvoice(PurchaseInvoice: any): Observable<any> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseInvoice', PurchaseInvoice);
    }

    UpdatePurchaseInvoice(PurchaseInvoice: any): Observable<any> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseInvoice', PurchaseInvoice);
    }

    DeletePurchaseInvoice(id): Observable<any> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseInvoice/' + id);
    }

    //GRN
    GetGRN(): Observable<GRN> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetGRNs');
    }

    AddGRN(GRN: GRN): Observable<GRN> {
        return this.ApiService.post(this.API_URL + "Purchase/AddGRN", GRN);
    }

    UpdateGRN(GRN: GRN): Observable<GRN> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdateGRN', GRN);
    }

    DeleteGRN(id: number): Observable<GRN> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeleteGRN/' + id);
    }

    GetGrnDetailsByCode(code: string): Observable<any> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetGrnDetailsByCode/' + code);
    }

    //Inventory
    GetInventories(): Observable<Inventory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventories');
    }

    AddInventory(Inventory: Inventory): Observable<Inventory> {
        return this.ApiService.post(this.API_URL + 'Setup/AddInventory', Inventory);
    }

    UpdateInventory(Inventory: Inventory): Observable<Inventory> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateInventory', Inventory);
    }

    DeleteInventory(id): Observable<Inventory> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteInventory/' + id);
    }

    GetInventoryByItemId(id): Observable<Inventory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventoryByItemId/' + id);
    }

    UpdateInventories(Inventories: Inventory[]): Observable<any> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateInventories', Inventories);
    }

    //InventoryItem
    GetInventoryItems(): Observable<InventoryItem> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventoryItems');
    }

    GetInventoryItemsByCompany(companyId: number): Observable<any[]> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventoryItemsByCompany/' + companyId);
    }

    GetInventoryItem(id: number): Observable<InventoryItem> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventoryItem/' + id);
    }

    GetInventoryItemsArray(): Observable<InventoryItem[]> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventoryItems');
    }

    async GetInventoryItemstest() {
        return await this.ApiService.get(this.API_URL + 'Setup/GetInventoryItems').toPromise();
    }

    AddInventoryItem(InventoryItem: InventoryItem): Observable<InventoryItem> {
        console.log(InventoryItem);
        return this.ApiService.post(this.API_URL + 'Setup/AddInventoryItem', InventoryItem);
    }

    UpdateInventoryItem(InventoryItem: InventoryItem): Observable<InventoryItem> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateInventoryItem', InventoryItem);
    }

    DeleteInventoryItem(id: number): Observable<InventoryItem> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteInventoryItem/' + id);
    }

    //InventoryItemCategory
    GetInventoryItemCategories(): Observable<InventoryItemCategory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCategories');
    }

    AddInventoryItemCategory(InventoryItemCategory: InventoryItemCategory): Observable<InventoryItemCategory> {
        return this.ApiService.post(this.API_URL + 'Setup/AddCategory', InventoryItemCategory);
    }

    UpdateInventoryItemCategory(InventoryItemCategory: InventoryItemCategory): Observable<InventoryItemCategory> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateCategory', InventoryItemCategory);
    }

    DeleteInventoryItemCategory(id: number): Observable<InventoryItemCategory> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteCategory/' + id);
    }

    //Currency
    GetCurrency(): Observable<Currency[]> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventoryCurrencies');
    }

    getInventoryCurrenciesByCompany(companyId : number): Observable<Currency[]> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventoryCurrenciesByCompany/' + companyId);
    }

    AddCurrency(Currency: Currency): Observable<Currency> {
        return this.ApiService.post(this.API_URL + 'Setup/AddInventoryCurrency', Currency);
    }

    UpdateCurrency(Currency: Currency): Observable<Currency> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateInventoryCurrency', Currency);
    }

    DeleteCurrency(id: number): Observable<Currency> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteInventoryCurrency/' + id);
    }

    //PackageType
    GetPackageTypes(): Observable<PackageType> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackageTypes');
    }

    AddPackageType(PackageType: PackageType): Observable<PackageType> {
        return this.ApiService.post(this.API_URL + 'Setup/AddPackageType', PackageType);
    }

    UpdatePackageType(PackageType: PackageType): Observable<PackageType> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdatePackageType', PackageType);
    }

    DeletePackageType(id: number): Observable<PackageType> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeletePackageType/' + id);
    }

    //PackCategory
    GetPackCategories(): Observable<PackCategory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackCategories');
    }

    AddPackCategory(PackCategory: PackCategory): Observable<PackCategory> {
        return this.ApiService.post(this.API_URL + 'Setup/AddPackCategory', PackCategory);
    }

    UpdatePackCategory(PackCategory: PackCategory): Observable<PackCategory> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdatePackCategory', PackCategory);
    }

    DeletePackCategory(id: number): Observable<PackCategory> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeletePackCategory/' + id);
    }

    //PackSize
    GetPackSizes(): Observable<PackSize> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackSizes');
    }

    GetPackSizesByCompany(companyId: number): Observable<PackSize> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackSizesByCompany/' + companyId);
    }

    AddPackSize(PackSize: PackSize): Observable<PackSize> {
        return this.ApiService.post(this.API_URL + 'Setup/AddPackSize', PackSize);
    }

    UpdatePackSize(PackSize: PackSize): Observable<PackSize> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdatePackSize', PackSize);
    }

    DeletePackSize(id: number): Observable<PackSize> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeletePackSize/' + id);
    }

    //PackType
    GetPackTypes(): Observable<PackType> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackTypes');
    }

    AddPackType(PackType: PackType): Observable<PackType> {
        return this.ApiService.post(this.API_URL + 'Setup/AddPackType', PackType);
    }

    UpdatePackType(PackType: PackType): Observable<PackType> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdatePackType', PackType);
    }

    DeletePackType(id: number): Observable<PackType> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeletePackType/' + id);
    }

    //ProductType
    GetProductTypes(): Observable<ProductType> {
        return this.ApiService.get(this.API_URL + 'Setup/GetProductTypes');
    }

    AddProductType(ProductType: ProductType): Observable<ProductType> {
        return this.ApiService.post(this.API_URL + 'Setup/AddProductType', ProductType);
    }

    UpdateProductType(ProductType: ProductType): Observable<ProductType> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateProductType', ProductType);
    }

    DeleteProductType(id: number): Observable<ProductType> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteProductType/' + id);
    }

    //ReturnReason
    GetReturnReasons(): Observable<ReturnReason> {
        return this.ApiService.get(this.API_URL + 'Setup/GetReturnReasons');
    }

    AddReturnReason(ReturnReason: ReturnReason): Observable<ReturnReason> {
        return this.ApiService.post(this.API_URL + 'Setup/AddReturnReason', ReturnReason);
    }

    UpdateReturnReason(ReturnReason: ReturnReason): Observable<ReturnReason> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateReturnReason', ReturnReason);
    }

    DeleteReturnReason(id: number): Observable<ReturnReason> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteReturnReason/' + id);
    }

    //Supplier
    GetSuppliers(): Observable<any> {
        return this.ApiService.get(this.API_URL + 'Setup/GetSuppliers');
    }

    GetSuppliersByCompany(companyId: number): Observable<Supplier> {
        return this.ApiService.get(this.API_URL + 'Setup/GetSuppliersByCompany/' + companyId);
    }

    AddSupplier(Supplier: Supplier): Observable<Supplier> {
        return this.ApiService.post(this.API_URL + 'Setup/AddSupplier', Supplier);
    }

    UpdateSupplier(Supplier: Supplier): Observable<Supplier> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateSupplier', Supplier);
    }

    DeleteSupplier(id: number): Observable<Supplier> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteSupplier/' + id);
    }

    //Unit
    GetUnits(): Observable<Unit> {
        return this.ApiService.get(this.API_URL + 'Setup/GetUnits');
    }

    AddUnit(Unit: Unit): Observable<Unit> {
        return this.ApiService.post(this.API_URL + 'Setup/AddUnit', Unit);
    }

    UpdateUnit(Unit: Unit): Observable<Unit> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateUnit', Unit);
    }

    DeleteUnit(id: number): Observable<Unit> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteUnit/' + id);
    }

    getCustomers(): Observable<Customer> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomers');
    }


    /******************************************************************************************************************/

    async  GetSalesIndentsByDayAsync(date) {
        return await this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentsByDay/' + date).toPromise();
    }

    async GetSalesIndentDetailsByDayAsync(date) {
        return await this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentDetailsByDay/' + date).toPromise();
    }

    async  GetSalesIndentsByMonthAsync(date) {
        return await this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentsByMonth/' + date).toPromise();
    }

    async GetSalesIndentDetailsByMonthAsync(date) {
        return await this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentDetailsByMonth/' + date).toPromise();
    }

    async  GetSalesOrdersByDateAsync(date) {
        return await this.ApiService.get(this.API_URL + 'Sales/GetSalesOrdersByMonth/' + date).toPromise();
    }

    async  GetSalesReturnsForMonthAsync(date) {
        return await this.ApiService.get(this.API_URL + 'Sales/GetSalesReturnsForMonth/' + date).toPromise();
    }

    async  GetPurchaseOrdersByDateAsync(date) {
        return await this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrdersByMonth/' + date).toPromise();
    }

    async  GetGRNsByDateAsync(date) {
        return await this.ApiService.get(this.API_URL + 'Purchase/GetGRNsByMonth/' + date).toPromise();
    }

    GetSalesIndentsByMonth(date): Observable<SalesIndent[]> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentsByMonth/' + date);
    }

    GetSalesIndentDetailsByMonth(date): Observable<SalesIndentViewModel[]> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentDetailsByMonth/' + date);
    }

    GetSalesIndentsByDay(date): Observable<SalesIndent[]> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentsByDay/' + date);
    }

    GetSalesIndentDetailsByDay(date): Observable<SalesIndentViewModel[]> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentDetailsByDay/' + date);
    }

    GetSalesOrdersByMonth(date): Observable<SalesOrder> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesOrdersByMonth/' + date);
    }

    GetSalesReturnsByMonth(date): Observable<SalesReturn> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesReturnsByMonth/' + date);
    }

    GetPurchaseOrdersByMonth(date): Observable<PurchaseOrder> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrdersByMonth/' + date);
    }

    GetGRNsByMonth(date): Observable<GRN> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetGRNsByMonth/' + date);
    }

    GetPurchaseInvoicesByMonth(date): Observable<any> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseInvoicesByMonth/' + date);
    }

    GetPurchaseInvoicesByMonthAndCompany(date, companyid): Observable<any> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseInvoicesByMonthAndCompany/' + date + '/' + companyid);
    }
}