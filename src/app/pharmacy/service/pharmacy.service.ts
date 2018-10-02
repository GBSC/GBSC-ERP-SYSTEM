import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';
import { SalesOrder } from '../models/SalesOrder';
import { SalesOrderItem } from '../models/SalesOrderItem';
import { PurchaseOrder } from '../models/PurchaseOrder';
import { PurchaseOrderItem } from '../models/PurchaseOrderItem';
import { GRN } from '../models/GRN';
import { Inventory } from '../models/Inventory';
import { InventoryItem } from '../models/InventoryItem';
import { InventoryItemCategory } from '../models/InventoryItemCategory';
import { Supplier } from '../models/Supplier';
import { Unit } from '../models/Unit';

@Injectable()
export class PharmacyService {

    private readonly API_URL = 'http://gbsc-erp.azurewebsites.net/inventory/api/';
    constructor(private http: HttpClient) {

    }

    //SalesOrder
    async GetSalesOrders() {
        return await this.http.get<SalesOrder>(this.API_URL + 'Sales/GetSalesOrders').toPromise();
    }

    async AddSalesOrder(SalesOrder: SalesOrder) {
        return await this.http.post(this.API_URL + "Sales/AddSalesOrder", SalesOrder).toPromise();
    }

    async UpdateSalesOrder(SalesOrder: SalesOrder) {
        return await this.http.put(this.API_URL + 'Sales/UpdateSalesOrder', SalesOrder).toPromise();
    }

    async DeleteSalesOrder(id) {
        return await this.http.delete(this.API_URL + 'Sales/DeleteSalesOrder/' + id).toPromise();
    }

    //SalesOrderItem

    async GetSalesOrderItems() {
        return await this.http.get<SalesOrderItem>(this.API_URL + 'Sales/GetSalesOrderItems').toPromise();
    }

    async AddSalesOrderItem(SalesOrderItem: SalesOrderItem) {
        return await this.http.post(this.API_URL + "Sales/AddSalesOrderItem", SalesOrderItem).toPromise();
    }

    async UpdateSalesOrderItem(SalesOrderItem: SalesOrderItem) {
        return await this.http.put(this.API_URL + 'Sales/UpdateSalesOrderItem', SalesOrderItem).toPromise();
    }

    async DeleteSalesOrderItem(id) {
        return await this.http.delete(this.API_URL + 'Sales/DeleteSalesOrderItem/' + id).toPromise();
    }

    //PurchaseOrder
    async GetPurchaseOrders() {
        return await this.http.get<PurchaseOrder>(this.API_URL + 'Purchase/GetPurchaseOrders').toPromise();
    }

    async AddPurchaseOrder(PurchaseOrder: PurchaseOrder) {
        return await this.http.post(this.API_URL + 'Purchase/AddPurchaseOrder', PurchaseOrder).toPromise();
    }

    async UpdatePurchaseOrder(PurchaseOrder: PurchaseOrder) {
        return await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseOrder', PurchaseOrder).toPromise();
    }

    async DeletePurchaseOrder(id) {
        return await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseOrder/' + id).toPromise();
    }

    //PurchaseOrderItem
    async GetPurchaseOrderItems() {
        return await this.http.get<PurchaseOrderItem>(this.API_URL + 'Purchase/GetPurchaseOrderItems').toPromise();
    }

    async AddPurchaseOrderItem(PurchaseOrderItem: PurchaseOrderItem) {
        return await this.http.post(this.API_URL + 'Purchase/AddPurchaseOrderItem', PurchaseOrderItem).toPromise();
    }

    async UpdatePurchaseOrderItem(PurchaseOrderItem: PurchaseOrderItem) {
        return await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseOrderItem', PurchaseOrderItem).toPromise();
    }

    async DeletePurchaseOrderItem(id) {
        return await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseOrderItem/' + id).toPromise();
    }

    //GRN
    async GetGRN() {
        return await this.http.get<GRN>(this.API_URL + 'Purchase/GetGRNs').toPromise();
    }

    async AddGRN(GRN: GRN) {
        return await this.http.post(this.API_URL + "Purchase/AddGRN", GRN).toPromise();
    }

    async UpdateGRN(GRN: GRN) {
        return await this.http.put(this.API_URL + 'Purchase/UpdateGRN', GRN).toPromise();
    }

    async DeleteGRN(id) {
        return await this.http.delete(this.API_URL + 'Purchase/DeleteGRN' + id).toPromise();
    }

    //Inventory
    async GetInventories() {
        return await this.http.get<Inventory>(this.API_URL + 'Setup/GetInventories').toPromise();
    }

    async AddInventory(Inventory: Inventory) {
        return await this.http.post(this.API_URL + 'Setup/AddInventory', Inventory).toPromise();
    }

    async UpdateInventory(Inventory: Inventory) {
        return await this.http.put(this.API_URL + 'Setup/UpdateInventory', Inventory).toPromise();
    }

    async DeleteInventory(id) {
        return await this.http.delete(this.API_URL + 'Setup/DeleteInventory/' + id).toPromise();
    }

    //InventoryItem
    async GetInventoryItems() {
        return await this.http.get<InventoryItem>(this.API_URL + 'Setup/GetInventoryItems').toPromise();
    }

    async AddInventoryItem(InventoryItem: InventoryItem) {
        return await this.http.post(this.API_URL + 'Setup/AddInventoryItem', InventoryItem).toPromise();
    }

    async UpdateInventoryItem(InventoryItem: InventoryItem) {
        return await this.http.put(this.API_URL + 'Setup/UpdateInventoryItem', InventoryItem).toPromise();
    }

    async DeleteInventoryItem(id) {
        return await this.http.delete(this.API_URL + 'Setup/DeleteInventoryItem/' + id).toPromise();
    }

    //InventoryItemCategory
    async GetInventoryItemCategories() {
        return await this.http.get<InventoryItemCategory>(this.API_URL + 'Setup/GetCategories').toPromise();
    }

    async AddInventoryItemCategory(InventoryItemCategory: InventoryItemCategory) {
        return await this.http.post(this.API_URL + 'Setup/AddCategory', InventoryItemCategory).toPromise();
    }

    async UpdateInventoryItemCategory(InventoryItemCategory: InventoryItemCategory) {
        return await this.http.put(this.API_URL + 'Setup/UpdateCategory', InventoryItemCategory).toPromise();
    }

    async DeleteInventoryItemCategory(id) {
        return await this.http.delete(this.API_URL + 'Setup/DeleteCategory/' + id).toPromise();
    }

    //Supplier
    async GetSuppliers() {
        return await this.http.get<Supplier>(this.API_URL + 'Setup/GetSuppliers').toPromise();
    }

    async AddSupplier(Supplier: Supplier) {
        return await this.http.post(this.API_URL + 'Setup/AddSupplier', Supplier).toPromise();
    }

    async UpdateSupplier(Supplier: Supplier) {
        return await this.http.put(this.API_URL + 'Setup/UpdateSupplier', Supplier).toPromise();
    }

    async DeleteSupplier(id) {
        return await this.http.delete(this.API_URL + 'Setup/DeleteSupplier/' + id).toPromise();
    }

    //Unit
    async GetUnits() {
        return await this.http.get<Unit>(this.API_URL + 'Setup/GetUnits').toPromise();
    }

    async AddUnit(Unit: Unit) {
        return await this.http.post(this.API_URL + 'Setup/AddUnit', Unit).toPromise();
    }

    async UpdateUnit(Unit: Unit) {
        return await this.http.put(this.API_URL + 'Setup/UpdateUnit', Unit).toPromise();
    }

    async DeleteUnit(id) {
        return await this.http.delete(this.API_URL + 'Setup/DeleteUnit/' + id).toPromise();
    }

}