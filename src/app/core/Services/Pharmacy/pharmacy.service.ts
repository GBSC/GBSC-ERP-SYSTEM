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


@Injectable()
export class PharmacyService {

    private readonly API_URL = 'inventory/api/';
    constructor(private http: HttpClient, private ApiService : ApiService) {

    }

    //SalesOrder
    GetSalesOrders() : Observable<SalesOrder> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesOrders');
    }

    AddSalesOrder(SalesOrder: SalesOrder) : Observable<SalesOrder> {
        return this.ApiService.post(this.API_URL + "Sales/AddSalesOrder", SalesOrder);
    }

    UpdateSalesOrder(SalesOrder: SalesOrder) : Observable<SalesOrder> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesOrder', SalesOrder);
    }

    DeleteSalesOrder(id) : Observable<SalesOrder> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesOrder/' + id);
    }

    //SalesOrderItem

    GetSalesOrderItems() : Observable<SalesOrderItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesOrderItems');
    }

    AddSalesOrderItem(SalesOrderItem: SalesOrderItem) : Observable<SalesOrderItem> {
        return this.ApiService.post(this.API_URL + "Sales/AddSalesOrderItem", SalesOrderItem);
    }

    UpdateSalesOrderItem(SalesOrderItem: SalesOrderItem) : Observable<SalesOrderItem> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesOrderItem', SalesOrderItem);
    }

    DeleteSalesOrderItem(id) : Observable<SalesOrderItem> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesOrderItem/' + id);
    }

    //PurchaseOrder
    GetPurchaseOrders() : Observable<PurchaseOrder> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrders');
    }

    AddPurchaseOrder(PurchaseOrder: PurchaseOrder) : Observable<PurchaseOrder> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseOrder', PurchaseOrder);
    }

    UpdatePurchaseOrder(PurchaseOrder: PurchaseOrder) : Observable<PurchaseOrder> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseOrder', PurchaseOrder);
    }

    DeletePurchaseOrder(id) : Observable<PurchaseOrder> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseOrder/' + id);
    }

    //PurchaseOrderItem
    GetPurchaseOrderItems() : Observable<PurchaseOrderItem> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrderItems');
    }

    AddPurchaseOrderItem(PurchaseOrderItem: PurchaseOrderItem) : Observable<PurchaseOrderItem> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseOrderItem', PurchaseOrderItem);
    }

    UpdatePurchaseOrderItem(PurchaseOrderItem: PurchaseOrderItem) : Observable<PurchaseOrderItem> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseOrderItem', PurchaseOrderItem);
    }

    DeletePurchaseOrderItem(id) : Observable<PurchaseOrderItem> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseOrderItem/' + id);
    }

    //GRN
    GetGRN() : Observable<GRN> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetGRNs');
    }

    AddGRN(GRN: GRN) : Observable<GRN> {
        return this.ApiService.post(this.API_URL + "Purchase/AddGRN", GRN);
    }

    UpdateGRN(GRN: GRN) : Observable<GRN> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdateGRN', GRN);
    }

    DeleteGRN(id) : Observable<GRN> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeleteGRN' + id);
    }

    //Inventory
    GetInventories() : Observable<Inventory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventories');
    }

    AddInventory(Inventory: Inventory) : Observable<Inventory> {
        return this.ApiService.post(this.API_URL + 'Setup/AddInventory', Inventory);
    }

    UpdateInventory(Inventory: Inventory) : Observable<Inventory> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateInventory', Inventory);
    }

    DeleteInventory(id) : Observable<Inventory> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteInventory/' + id);
    }

    //InventoryItem
    GetInventoryItems() : Observable<InventoryItem> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventoryItems');
    }

    AddInventoryItem(InventoryItem: InventoryItem) : Observable<InventoryItem> {
        return this.ApiService.post(this.API_URL + 'Setup/AddInventoryItem', InventoryItem);
    }

    UpdateInventoryItem(InventoryItem: InventoryItem) : Observable<InventoryItem> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateInventoryItem', InventoryItem);
    }

    DeleteInventoryItem(id) : Observable<InventoryItem> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteInventoryItem/' + id);
    }

    //InventoryItemCategory
    GetInventoryItemCategories() : Observable<InventoryItemCategory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCategories');
    }

    AddInventoryItemCategory(InventoryItemCategory: InventoryItemCategory) : Observable<SalesOrder> {
        return this.ApiService.post(this.API_URL + 'Setup/AddCategory', InventoryItemCategory);
    }

    UpdateInventoryItemCategory(InventoryItemCategory: InventoryItemCategory) : Observable<SalesOrder> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateCategory', InventoryItemCategory);
    }

    DeleteInventoryItemCategory(id) : Observable<InventoryItemCategory> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteCategory/' + id);
    }

    //Supplier
    GetSuppliers() : Observable<Supplier> {
        return this.ApiService.get(this.API_URL + 'Setup/GetSuppliers');
    }

    AddSupplier(Supplier: Supplier) : Observable<Supplier> {
        return this.ApiService.post(this.API_URL + 'Setup/AddSupplier', Supplier);
    }

    UpdateSupplier(Supplier: Supplier) : Observable<Supplier> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateSupplier', Supplier);
    }

    DeleteSupplier(id) : Observable<Supplier> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteSupplier/' + id);
    }

    //Unit
    GetUnits() : Observable<Unit> {
        return this.ApiService.get(this.API_URL + 'Setup/GetUnits');
    }

    AddUnit(Unit: Unit) : Observable<Unit> {
        return this.ApiService.post(this.API_URL + 'Setup/AddUnit', Unit);
    }

    UpdateUnit(Unit: Unit) : Observable<Unit> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateUnit', Unit);
    }

    DeleteUnit(id) : Observable<Unit> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteUnit/' + id);
    }

}