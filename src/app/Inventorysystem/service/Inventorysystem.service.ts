import { Injectable } from '@angular/core'; 
import { Supplier } from '../../Inventorysystem/models/supplier';
import { PurchaseOrder } from '../../Inventorysystem/models/purchaseorder';

import { Unit } from '../../Inventorysystem/models/units';
import { Category } from '../../Inventorysystem/models/categories';
import { InventoryItem } from '../../Inventorysystem/models/inventoryitems';
import { HttpClient } from '@angular/common/http';
 
// import { LOCAL_STORAGE } from 'angular-webstorage-service';

@Injectable()
export class InventorysystemService {

    public Suppliers: any;
    public Purchaseorders: any;
    public units: any;
    public catogories: any;
    public inventoryitems: any;

    private API_URL: string = "http://localhost:63446/api/Setup";
    // private readonly API_URL = 'httpClient://gbsc-erp.azurewebsites.net/inventory/api/';

    dialogData: any;

    constructor(private httpClient: HttpClient) {

    }

    async GetSuppliers() {
        this.Suppliers = await this.httpClient.get<Supplier>(this.API_URL + '/suppliers/getsuppliers').toPromise();
        console.log(this.Suppliers);

    }

    async AddSupplier(supplier: Supplier) {
        let x = await this.httpClient.post(this.API_URL + '/suppliers/AddSupplier', supplier).toPromise();
        console.log(x);
        return x;
    }

    async UpdateSupplier(supplier: Supplier) {
        let y = await this.httpClient.put(`${this.API_URL}/suppliers/UpdateSupplier/`, supplier).toPromise();
        console.log(y);
        return y;

    }

    async DeleteSupplier(id) {
        let x = await this.httpClient.delete(this.API_URL + '/suppliers/DeleteSupplier/' + id).toPromise();
        console.log(x);
        return x;

    }


    async getpurchaseorders() {
        this.Purchaseorders = await this.httpClient.get<PurchaseOrder>(this.API_URL + '/purchaseorders/getpurchaseorders').toPromise();
        console.log(this.Purchaseorders);
        return this.Purchaseorders;

    }

    async AddPurchaseOrder(purchaseOrder: PurchaseOrder) {
        let x = await this.httpClient.post(this.API_URL + '/purchaseorders/AddPurchaseOrder', purchaseOrder).toPromise();
        console.log(x);
        return x;

    }

    async UpdatePurchaseOrder(purchaseOrder: PurchaseOrder) {
        let y = await this.httpClient.put(`${this.API_URL}/purchaseorders/UpdatePurchaseOrder/`, purchaseOrder).toPromise();
        console.log(y);
        return y;

    }


    async DeletePurchaseOrder(id) {
        let z = await this.httpClient.delete(this.API_URL + '/purchaseorders/DeletePurchaseOrder/' + id).toPromise();
        console.log(z);
        return z;

    }

    async GetUnits() {
        this.units = await this.httpClient.get<Unit>(this.API_URL + '/setup/GetUnits').toPromise();
        console.log(this.units);
        return this.units;
    }


    async AddUnits(unit: Unit) {
        let x = await this.httpClient.post(this.API_URL + '/setup/AddUnit', unit).toPromise();
        console.log(x);
        return x;
    }


    async UpdateUnit(unit: Unit) {
        let y = await this.httpClient.put(`${this.API_URL}/setup/updateunit/`, unit).toPromise();
        console.log(y);
        return y;
    }

    async DeleteUnit(id) {
        let x = await this.httpClient.delete(this.API_URL + '/setup/Deleteunit/' + id).toPromise();
        console.log(x);
        return x;
    }


    async Getcategories() {
        this.catogories = await this.httpClient.get(`${this.API_URL}/GetCategories`).toPromise();
        console.log(this.catogories);
        return this.catogories;
    }
    

    async AddCategory(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newcategory = await this.httpClient.post(`${this.API_URL}/AddCategory`, data).toPromise();
        console.log(newcategory);
        return newcategory;
    }

    async UpdateCategory(category) {
        let x = await this.httpClient.put(`${this.API_URL}/setup/updatecategory/`, category).toPromise();
        console.log(x);
        return x;

    }

    async DeleteCategory(id) {

        let x = await this.httpClient.delete(this.API_URL + '/setup/deletecategory/' + id).toPromise();
        console.log(x);
        return x;

    }


    async GetInventoryitems() {
        this.inventoryitems = await this.httpClient.get<InventoryItem>(this.API_URL + '/setup/getinventoryitems').toPromise();
        console.log(this.inventoryitems);
        return this.inventoryitems;
    }

    async AddInventoryitem(inventoryItem: InventoryItem) {
        let x = await this.httpClient.post(this.API_URL + '/setup/Addinventoryitem', inventoryItem).toPromise();
        console.log(x);
        return x;
    }

    async UpdateInventoryitem(inventoryItem: InventoryItem) {
        let x = await this.httpClient.put(`${this.API_URL}/setup/UpdateInventoryitem/`, inventoryItem).toPromise();
        console.log(x);
        return x;
    }

    async DeleteInventoryitem(id) {
        let x = await this.httpClient.delete(this.API_URL + '/setup/deleteInventoryitem/' + id).toPromise();
        console.log(x);
        return x;
    }

}

//this.API_URL+'/setup/deleteInventoryitem/'+id
