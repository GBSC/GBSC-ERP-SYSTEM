import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';

import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { SalesIndent } from '../../Models/Inventory/Sales/SalesIndent';
import { SalesIndentItem } from '../../Models/Inventory/Sales/SalesIndentItem';
import { DeliveryOrder } from '../../Models/Inventory/Sales/DeliveryOrder';
import { DeliveryOrderItem } from '../../Models/Inventory/Sales/DeliveryOrderItem';
import { DeliveryNote } from '../../Models/Inventory/Sales/DeliveryNote';
import { SalesInvoice } from '../../Models/Inventory/Sales/SalesInvoice';
import { SalesReturn } from '../../Models/Inventory/Sales/SalesReturn';
import { SalesReturnItem } from '../../Models/Inventory/Sales/SalesReturnItem';
import { PurchaseIndent } from '../../Models/Inventory/Purchase/PurchaseIndent';
import { PurchaseIndentItem } from '../../Models/Inventory/Purchase/PurchaseIndentItem';
import { PurchaseInvoice } from '../../Models/Inventory/Purchase/PurchaseInvoice';
import { PurchaseReturn } from '../../Models/Inventory/Purchase/PurchaseReturn';
import { PurchaseReturnItem } from '../../Models/Inventory/Purchase/PurchaseReturnItem';
import { Area } from '../../Models/Inventory/Setup/Area';
import { Brand } from '../../Models/Inventory/Setup/Brand';
import { Comission } from '../../Models/Inventory/Setup/Comission';
import { Customer } from '../../Models/Inventory/Setup/Customer';
import { CustomerAccount } from '../../Models/Inventory/Setup/CustomerAccount';
import { CustomerBank } from '../../Models/Inventory/Setup/CustomerBank';
import { CustomerPricePickLevel } from '../../Models/Inventory/Setup/CustomerPricePickLevel';
import { CustomerType } from '../../Models/Inventory/Setup/CustomerType';
import { CustomerWarehouse } from '../../Models/Inventory/Setup/CustomerWarehouse';
import { ItemPriceStructure } from '../../Models/Inventory/Setup/ItemPriceStructure';
import { ModeOfPayment } from '../../Models/Inventory/Setup/ModeOfPayment';
import { PackageType } from '../../Models/Inventory/Setup/PackageType';
import { PackCategory } from '../../Models/Inventory/Setup/PackCategory';
import { PackSize } from '../../Models/Inventory/Setup/PackSize';
import { PackType } from '../../Models/Inventory/Setup/PackType';
import { ProductType } from '../../Models/Inventory/Setup/ProductType';
import { Region } from '../../Models/Inventory/Setup/Region';
import { ReturnReason } from '../../Models/Inventory/Setup/ReturnReason';
import { SalesPerson } from '../../Models/Inventory/Setup/SalesPerson';
import { Tax } from '../../Models/Inventory/Setup/Tax';
import { Territory } from '../../Models/Inventory/Setup/Territory';
import { SalesOrder } from '../../Models/Inventory/Sales/SalesOrder';
import { SalesOrderItem } from '../../Models/Inventory/Sales/SalesOrderItem';
import { PurchaseOrder } from '../../Models/Inventory/Purchase/PurchaseOrder';
import { PurchaseOrderItem } from '../../Models/Inventory/Purchase/PurchaseOrderItem';
import { GRN } from '../../Models/Inventory/Purchase/GRN';
import { Distributor } from '../../Models/Inventory/Setup/Distributor';
import { Inventory } from '../../Models/Inventory/Setup/Inventory';
import { InventoryItem } from '../../Models/Inventory/Setup/InventoryItem';
import { InventoryItemCategory } from '../../Models/Inventory/Setup/InventoryItemCategory';
import { Supplier } from '../../Models/Inventory/Setup/Supplier';
import { Unit } from '../../Models/Inventory/Setup/Unit';
import { componentFactoryName } from '@angular/compiler';
import { Transport } from '../../Models/Inventory/Setup/Transport';
import { City } from '../../Models/HRM/city';


@Injectable()
export class InventorysystemService {

    public readonly API_URL = 'inventory/api/';
    public readonly TerritoryApi_Url = 'etracker/api/';
    constructor(public http: HttpClient, public ApiService: ApiService) {

    }

    //****************************************Sales************************************//

    //SalesIndent
    GetSalesIndents(): Observable<SalesIndent> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndents');
        //this.SalesIndent = await this.http.get<SalesIndent>(this.API_URL + 'Sales/GetSalesIndents').toPromise();
        //console.log(this.SalesOrder);
        // return this.SalesIndent;
    }

    GetSalesIndent(id : number): Observable<SalesIndent> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndent/' + id);
    }

    GetUnprocessedSalesIndents(): Observable<SalesIndent[]> {
        return this.ApiService.get(this.API_URL + 'Sales/GetUnprocessedSalesIndents');
    }

    UpdateSalesIndents(indents : SalesIndent[]): Observable<any> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesIndents', indents);
    }

    GetSalesIndentsByCompany(companyid: number): Observable<SalesIndent> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentsByCompany/' + companyid);
        //this.SalesIndent = await this.http.get<SalesIndent>(this.API_URL + 'Sales/GetSalesIndents').toPromise();
        //console.log(this.SalesOrder);
        // return this.SalesIndent;
    }

    AddSalesIndent(SalesIndent: SalesIndent): Observable<any> {
        return this.ApiService.post(this.API_URL + 'Sales/AddSalesIndent', SalesIndent);
        // let x = await this.http.post(this.API_URL + "Sales/AddSalesIndent", SalesIndent).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateSalesIndent(SalesIndent: SalesIndent): Observable<any> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesIndent', SalesIndent);
        // let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesIndent', SalesIndent).toPromise();
        // console.log(a);
        // return a;
    }

    DeleteSalesIndent(id): Observable<any> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesIndent/' + id);
        // let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesIndent/' + id).toPromise();
        // console.log(c);
        // return c;
    }

    //SalesIndentItem
    GetSalesIndentItems(): Observable<SalesIndentItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentItems');
        // this.SalesIndentItem = await this.http.get<SalesIndentItem>(this.API_URL + 'Sales/GetSalesIndentItems').toPromise();
        //console.log(this.SalesIndentItem);
    }

    GetSalesIndentItemsByCompany(companyid: number): Observable<SalesIndentItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesIndentItemsByCompany/' + companyid);
        // this.SalesIndentItem = await this.http.get<SalesIndentItem>(this.API_URL + 'Sales/GetSalesIndentItems').toPromise();
        //console.log(this.SalesIndentItem);
    }

    AddSalesIndentItem(SalesIndentItem: SalesIndentItem): Observable<SalesIndent> {
        return this.ApiService.post(this.API_URL + 'Sales/AddSalesIndentItem', SalesIndentItem);
        // let x = await this.http.post(this.API_URL + "Sales/AddSalesIndentItem", SalesIndentItem).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateSalesIndentItem(SalesIndentItem: SalesIndentItem): Observable<SalesIndent> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesIndentItem', SalesIndentItem);
        // let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesIndentItem', SalesIndentItem).toPromise();
        // console.log(a);
        // return a;
    }

    DeleteSalesIndentItem(id): Observable<SalesIndent> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesIndentItem/' + id);
        // let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesIndentItem/' + id).toPromise();
        // console.log(c);
        // return c;
    }

    //SalesOrder
    GetSalesOrders(): Observable<SalesOrder> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesOrders');
        //this.SalesOrder = await this.http.get<SalesOrder>(this.API_URL + 'Sales/GetSalesOrders').toPromise();
        //console.log(this.SalesOrder);
        // return this.SalesOrder;
    }

    GetSalesOrdersByCompany(companyid: number): Observable<SalesOrder> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesOrdersByCompany/' + companyid);
        //this.SalesOrder = await this.http.get<SalesOrder>(this.API_URL + 'Sales/GetSalesOrders').toPromise();
        //console.log(this.SalesOrder);
        // return this.SalesOrder;
    }

    AddSalesOrder(SalesOrder: SalesOrder): Observable<any> {
        return this.ApiService.post(this.API_URL + 'Sales/AddSalesOrder', SalesOrder);
        //return await this.ApiService.post(this.API_URL + 'Sales/AddSalesOrder', SalesOrder).toPromise();
        // let x = await this.http.post(this.API_URL + "Sales/AddSalesOrder", SalesOrder).toPromise();
        // console.log(x);
        // return x;
    }

    AddSalesOrders(SalesOrders: SalesOrder[]): Observable<any> {
        return this.ApiService.post(this.API_URL + 'Sales/AddSalesOrders', SalesOrders);
    }

    UpdateSalesOrder(SalesOrder: SalesOrder): Observable<any> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesOrder', SalesOrder);
        // let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesOrder', SalesOrder).toPromise();
        // console.log(a);
        // return a;
    }

    DeleteSalesOrder(id): Observable<SalesIndent> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesOrder/' + id);
        // let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesOrder/' + id).toPromise();
        // console.log(c);
        // return c;
    }

    //SalesOrderItem

    GetSalesOrderItems(): Observable<SalesOrderItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesOrderItems');
        //console.log(this.SalesOrderItem);
        // return this.SalesOrderItem;
    }

    GetSalesOrderItemsByCompany(companyId: number): Observable<SalesOrderItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesOrderItemsByCompany/' + companyId);
        //console.log(this.SalesOrderItem);
        // return this.SalesOrderItem;
    }

    AddSalesOrderItem(SalesOrderItem: SalesOrderItem): Observable<SalesOrderItem> {
        return this.ApiService.post(this.API_URL + 'Sales/AddSalesOrderItem', SalesOrderItem);
        // let x = await this.http.post(this.API_URL + "Sales/AddSalesOrderItem", SalesOrderItem).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateSalesOrderItem(SalesOrderItem: SalesOrderItem): Observable<SalesOrderItem> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesOrderItem', SalesOrderItem);
        // let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesOrderItem', SalesOrderItem).toPromise();
        // console.log(a);
        // return a;
    }

    DeleteSalesOrderItem(id): Observable<SalesOrderItem> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesOrderItem/' + id);
        // let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesOrderItem/' + id).toPromise();
        // console.log(c);
        // return c;
    }

    //DeliveryOrder
    GetDeliveryOrders(): Observable<DeliveryOrder> {
        return this.ApiService.get(this.API_URL + 'Sales/GetDeliveryOrders');
        // this.DeliveryOrder = await this.http.get<DeliveryOrder>(this.API_URL + 'Sales/GetDeliveryOrders').toPromise();
        // //console.log(this.DeliveryOrder);
        // return this.DeliveryOrder;
    }

    GetDeliveryOrdersByCompany(companyId: number): Observable<DeliveryOrder> {
        return this.ApiService.get(this.API_URL + 'Sales/GetDeliveryOrdersByCompany/' + companyId);
        // this.DeliveryOrder = await this.http.get<DeliveryOrder>(this.API_URL + 'Sales/GetDeliveryOrders').toPromise();
        // //console.log(this.DeliveryOrder);
        // return this.DeliveryOrder;
    }

    AddDeliveryOrder(DeliveryOrder: DeliveryOrder): Observable<DeliveryOrder> {
        return this.ApiService.post(this.API_URL + "Sales/AddDevliveryOrder", DeliveryOrder);
        // let x = await this.http.post(this.API_URL + "Sales/AddDevliveryOrder", DeliveryOrder).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateDeliveryOrder(DeliveryOrder: DeliveryOrder): Observable<DeliveryOrder> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateDeliveryOrder', DeliveryOrder);
        // let a = await this.http.put(this.API_URL + 'Sales/UpdateDeliveryOrder', DeliveryOrder).toPromise();
        // console.log(a);
        // return a;
    }

    DeleteDeliveryOrder(id): Observable<DeliveryOrder> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteDeliveryOrder/' + id);
        // let c = await this.http.delete(this.API_URL + 'Sales/DeleteDeliveryOrder/' + id).toPromise();
        // console.log(c);
        // return c;
    }


    //DeliveryOrderItem
    GetDeliveryOrderItems(): Observable<DeliveryOrderItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetDeliveryOrderItems');
        // this.DeliveryOrderItem = await this.http.get<DeliveryOrderItem>(this.API_URL + 'Sales/GetDeliveryOrderItems').toPromise();
        // //console.log(this.DeliveryOrderItem);
        // return this.DeliveryOrderItem;
    }

    GetDeliveryOrderItemsByCompany(companyId: number): Observable<DeliveryOrderItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetDeliveryOrderItemsByCompany/' + companyId);
        // this.DeliveryOrderItem = await this.http.get<DeliveryOrderItem>(this.API_URL + 'Sales/GetDeliveryOrderItems').toPromise();
        // //console.log(this.DeliveryOrderItem);
        // return this.DeliveryOrderItem;
    }

    AddDeliveryOrderItem(DeliveryOrderItem: DeliveryOrderItem): Observable<DeliveryOrderItem> {
        return this.ApiService.post(this.API_URL + "Sales/AddDevliveryOrderItem", DeliveryOrderItem);
        // let x = await this.http.post(this.API_URL + "Sales/AddDevliveryOrderItem", DeliveryOrderItem).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateDeliveryOrderItem(DeliveryOrderItem: DeliveryOrderItem): Observable<DeliveryOrderItem> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateDeliveryOrderItem', DeliveryOrderItem);
        // let a = await this.http.put(this.API_URL + 'Sales/UpdateDeliveryOrderItem', DeliveryOrderItem).toPromise();
        // console.log(a);
        // return a;
    }

    DeleteDeliveryOrderItem(id): Observable<DeliveryOrderItem> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteDeliveryOrderItem/' + id);
        // let c = await this.http.delete(this.API_URL + 'Sales/DeleteDeliveryOrderItem/' + id).toPromise();
        // console.log(c);
        // return c;
    }

    //DeliveryNote
    GetDeliveryNotes(): Observable<DeliveryNote> {
        return this.ApiService.get(this.API_URL + 'Sales/GetDeliveryChallans');
        // this.DeliveryOrder = await this.http.get<DeliveryNote>(this.API_URL + 'Sales/GetDeliveryChallans').toPromise();
        // //console.log(this.DeliveryNote);
        // return this.DeliveryNote;
    }

    GetDeliveryNotesByCompany(companyId: number): Observable<DeliveryNote> {
        return this.ApiService.get(this.API_URL + 'Sales/GetDeliveryChallansByCompany/' + companyId);
        // this.DeliveryOrder = await this.http.get<DeliveryNote>(this.API_URL + 'Sales/GetDeliveryChallans').toPromise();
        // //console.log(this.DeliveryNote);
        // return this.DeliveryNote;
    }

    AddDeliveryNote(DeliveryNote: DeliveryNote): Observable<DeliveryNote> {
        return this.ApiService.post(this.API_URL + "Sales/AddDevliveryChallan", DeliveryNote);
        // let x = await this.http.post(this.API_URL + "Sales/AddDevliveryChallan", DeliveryNote).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateDeliveryNote(DeliveryNote: DeliveryNote): Observable<DeliveryNote> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateDeliveryChallan', DeliveryNote);
        // let a = await this.http.put(this.API_URL + 'Sales/UpdateDeliveryChallan', DeliveryNote).toPromise();
        // console.log(a);
        // return a;
    }

    DeleteDeliveryNote(id): Observable<DeliveryNote> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteDeliveryChallan/' + id);
        // let c = await this.http.delete(this.API_URL + 'Sales/DeleteDeliveryChallan/' + id).toPromise();
        // console.log(c);
        // return c;
    }

    //SalesInvoice
    GetSalesInvoices(): Observable<SalesInvoice> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesInvoices');
        // this.SalesInvoice = await this.http.get<SalesInvoice>(this.API_URL + 'Sales/GetSalesInvoices').toPromise();
        // //console.log(this.SalesInvoice);
        // return this.SalesInvoice;
    }

    GetSalesInvoicesByCompany(companyId: number): Observable<SalesInvoice> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesInvoicesByCompany/' + companyId);
        // this.SalesInvoice = await this.http.get<SalesInvoice>(this.API_URL + 'Sales/GetSalesInvoices').toPromise();
        // //console.log(this.SalesInvoice);
        // return this.SalesInvoice;
    }

    AddSalesInvoice(SalesInvoice: SalesInvoice): Observable<SalesInvoice> {
        return this.ApiService.post(this.API_URL + "Sales/AddSalesInvoice", SalesInvoice);
        // let x = await this.http.post(this.API_URL + "Sales/AddSalesInvoice", SalesInvoice).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateSalesInvoice(SalesInvoice: SalesInvoice): Observable<SalesInvoice> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesInvoice', SalesInvoice);
        // let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesInvoice', SalesInvoice).toPromise();
        // console.log(a);
        // return a;
    }

    DeleteSalesInvoice(id): Observable<SalesInvoice> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesInvoice/' + id);
        // let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesInvoice/' + id).toPromise();
        // console.log(c);
        // return c;
    }

    //SalesReturn
    GetSalesReturns(): Observable<SalesReturn> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesReturns');
        // this.SalesReturn = await this.http.get<SalesReturn>(this.API_URL + 'Sales/GetSalesReturns').toPromise();
        // //console.log(this.DeliveryOrder);
        // return this.SalesReturn;
    }

    GetSalesReturnsByCompany(companyId: number): Observable<SalesReturn> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesReturnsByCompany/' + companyId);
        // this.SalesReturn = await this.http.get<SalesReturn>(this.API_URL + 'Sales/GetSalesReturns').toPromise();
        // //console.log(this.DeliveryOrder);
        // return this.SalesReturn;
    }

    AddSalesReturn(SalesReturn: SalesReturn): Observable<SalesReturn> {
        return this.ApiService.post(this.API_URL + "Sales/AddSalesReturn", SalesReturn);
        // let x = await this.http.post(this.API_URL + "Sales/AddSalesReturn", SalesReturn).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateSalesReturn(SalesReturn: SalesReturn): Observable<SalesReturn> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesReturn', SalesReturn);
        // let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesReturn', SalesReturn).toPromise();
        // console.log(a);
        // return a;
    }

    DeleteSalesReturn(id): Observable<SalesReturn> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesReturn/' + id);
        // let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesReturn/' + id).toPromise();
        // console.log(c);
        // return c;
    }


    //SalesReturnItem
    GetSalesReturnItems(): Observable<SalesReturnItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesReturnItems');
        // this.SalesReturnItem = await this.http.get<SalesReturnItem>(this.API_URL + 'Sales/GetSalesReturnItems').toPromise();
        // //console.log(this.SalesReturnItem);
        // return this.SalesReturnItem;
    }

    GetSalesReturnItemsByCompany(companyId: number): Observable<SalesReturnItem> {
        return this.ApiService.get(this.API_URL + 'Sales/GetSalesReturnItemsByCompany/' + companyId);
        // this.SalesReturnItem = await this.http.get<SalesReturnItem>(this.API_URL + 'Sales/GetSalesReturnItems').toPromise();
        // //console.log(this.SalesReturnItem);
        // return this.SalesReturnItem;
    }

    AddSalesReturnItem(SalesReturnItem: SalesReturnItem): Observable<SalesReturnItem> {
        return this.ApiService.post(this.API_URL + "Sales/AddSalesReturnItem", SalesReturnItem);
        // let x = await this.http.post(this.API_URL + "Sales/AddSalesReturnItem", SalesReturnItem).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateSalesReturnItem(SalesReturnItem: SalesReturnItem): Observable<SalesReturnItem> {
        return this.ApiService.put(this.API_URL + 'Sales/UpdateSalesReturnItem', SalesReturnItem);
        // let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesReturnItem', SalesReturnItem).toPromise();
        // console.log(a);
        // return a;
    }

    DeleteSalesReturnItem(id): Observable<SalesReturnItem> {
        return this.ApiService.delete(this.API_URL + 'Sales/DeleteSalesReturnItem/' + id);
        // let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesReturnItem/' + id).toPromise();
        // console.log(c);
        // return c;
    }

    //******************************************Purchase***********************************************//

    //PurchaseIndent
    GetPurchaseIndents(): Observable<PurchaseIndent> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseIndents');
        // this.PurchaseIndent = await this.http.get<PurchaseIndent>(this.API_URL + 'Purchase/GetPurchaseIndents').toPromise();
        // //console.log(this.PurchaseIndent);
        // return this.PurchaseIndent;
    }

    GetPurchaseIndentsByCompany(companyId: number): Observable<PurchaseIndent> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseIndentsByCompany/' + companyId);
        // this.PurchaseIndent = await this.http.get<PurchaseIndent>(this.API_URL + 'Purchase/GetPurchaseIndents').toPromise();
        // //console.log(this.PurchaseIndent);
        // return this.PurchaseIndent;
    }

    AddPurchaseIndent(PurchaseIndent: PurchaseIndent): Observable<PurchaseIndent> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseIndent', PurchaseIndent);
        // let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseIndent', PurchaseIndent).toPromise();
        // console.log(x);
        // return x;
    }

    UpdatePurchaseIndent(PurchaseIndent: PurchaseIndent): Observable<PurchaseIndent> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseIndent', PurchaseIndent);
        // let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseIndent', PurchaseIndent).toPromise();
        // console.log(y);
        // return y;
    }

    DeletePurchaseIndent(id): Observable<PurchaseIndent> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseIndent/' + id);
        // let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseIndent/' + id).toPromise();
        // console.log(z);
        // return z;
    }

    //PurchaseIndentItem
    GetPurchaseIndentItems(): Observable<PurchaseIndentItem> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseIndentItems');
        // this.PurchaseIndentItem = await this.http.get<PurchaseIndentItem>(this.API_URL + 'Purchase/GetPurchaseIndentItems').toPromise();
        // //console.log(this.PurchaseIndentItem);
        // return this.PurchaseOrderItem;
    }

    GetPurchaseIndentItemsByCompany(companyId: number): Observable<PurchaseIndentItem> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseIndentItemsByCompany/' + companyId);
        // this.PurchaseIndentItem = await this.http.get<PurchaseIndentItem>(this.API_URL + 'Purchase/GetPurchaseIndentItems').toPromise();
        // //console.log(this.PurchaseIndentItem);
        // return this.PurchaseOrderItem;
    }

    AddPurchaseIndentItem(PurchaseIndentItem: PurchaseIndentItem): Observable<PurchaseIndentItem> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseIndentItem', PurchaseIndentItem);
        // let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseIndentItem', PurchaseIndentItem).toPromise();
        // console.log(x);
        // return x;
    }

    UpdatePurchaseIndentItem(PurchaseIndentItem: PurchaseIndentItem): Observable<PurchaseIndentItem> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseIndentItem', PurchaseIndentItem);
        // let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseIndentItem', PurchaseIndentItem).toPromise();
        // console.log(y);
        // return y;
    }

    DeletePurchaseIndentItem(id): Observable<PurchaseIndentItem> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseIndentItem/' + id);
        // let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseIndentItem/' + id).toPromise();
        // console.log(z);
        // return z;
    }

    //PurchaseOrder
    GetPurchaseOrders(): Observable<PurchaseOrder> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrders');
        // this.PurchaseOrder = await this.http.get<PurchaseOrder>(this.API_URL + 'Purchase/GetPurchaseOrders').toPromise();
        // //console.log(this.PurchaseOrder);
        // return this.PurchaseOrder;
    }

    GetPurchaseOrdersByCompany(companyId: number): Observable<PurchaseOrder> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrdersByCompany/' + companyId);
        // this.PurchaseOrder = await this.http.get<PurchaseOrder>(this.API_URL + 'Purchase/GetPurchaseOrders').toPromise();
        // //console.log(this.PurchaseOrder);
        // return this.PurchaseOrder;
    }

    AddPurchaseOrder(PurchaseOrder: PurchaseOrder): Observable<PurchaseOrder> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseOrder', PurchaseOrder);
        // let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseOrder', PurchaseOrder).toPromise();
        // console.log(x);
        // return x;
    }

    UpdatePurchaseOrder(PurchaseOrder: PurchaseOrder): Observable<PurchaseOrder> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseOrder', PurchaseOrder);
        // let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseOrder', PurchaseOrder).toPromise();
        // console.log(y);
        // return y;
    }

    DeletePurchaseOrder(id): Observable<PurchaseOrder> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseOrder/' + id);
        // let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseOrder/' + id).toPromise();
        // console.log(z);
        // return z;
    }

    //PurchaseOrderItem
    GetPurchaseOrderItems(): Observable<PurchaseOrderItem> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrderItems');
        // this.PurchaseOrderItem = await this.http.get<PurchaseOrderItem>(this.API_URL + 'Purchase/GetPurchaseOrderItems').toPromise();
        // //console.log(this.PurchaseOrderItem);
        // return this.PurchaseOrderItem;
    }

    GetPurchaseOrderItemsByCompany(companyId: number): Observable<PurchaseOrderItem> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseOrderItemsByCompany/' + companyId);
        // this.PurchaseOrderItem = await this.http.get<PurchaseOrderItem>(this.API_URL + 'Purchase/GetPurchaseOrderItems').toPromise();
        // //console.log(this.PurchaseOrderItem);
        // return this.PurchaseOrderItem;
    }

    AddPurchaseOrderItem(PurchaseOrderItem: PurchaseOrderItem): Observable<PurchaseOrderItem> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseOrderItem', PurchaseOrderItem);
        // let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseOrderItem', PurchaseOrderItem).toPromise();
        // console.log(x);
        // return x;
    }

    UpdatePurchaseOrderItem(PurchaseOrderItem: PurchaseOrderItem): Observable<PurchaseOrderItem> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseOrderItem', PurchaseOrderItem);
        // let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseOrderItem', PurchaseOrderItem).toPromise();
        // console.log(y);
        // return y;
    }

    DeletePurchaseOrderItem(id): Observable<PurchaseOrderItem> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseOrderItem/' + id);
        // let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseOrderItem/' + id).toPromise();
        // console.log(z);
        // return z;
    }

    //PurchaseInvoice
    GetPurchaseInvoices(): Observable<PurchaseInvoice> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseInvoices');
        // this.PurchaseInvoice = await this.http.get<PurchaseInvoice>(this.API_URL + 'Purchase/GetPurchaseInvoices').toPromise();
        // //console.log(this.PurchaseInvoice);
        // return this.PurchaseInvoice;
    }

    GetPurchaseInvoicesByCompany(companyId: number): Observable<PurchaseInvoice> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseInvoicesByCompany/' + companyId);
        // this.PurchaseInvoice = await this.http.get<PurchaseInvoice>(this.API_URL + 'Purchase/GetPurchaseInvoices').toPromise();
        // //console.log(this.PurchaseInvoice);
        // return this.PurchaseInvoice;
    }

    AddPurchaseInvoice(PurchaseInvoice: PurchaseInvoice): Observable<PurchaseInvoice> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseInvoice', PurchaseInvoice);
        // let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseInvoice', PurchaseInvoice).toPromise();
        // console.log(x);
        // return x;
    }

    UpdatePurchaseInvoice(PurchaseInvoice: PurchaseInvoice): Observable<PurchaseInvoice> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseInvoice', PurchaseInvoice);
        // let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseInvoice', PurchaseInvoice).toPromise();
        // console.log(y);
        // return y;
    }

    DeletePurchaseInvoice(id): Observable<PurchaseInvoice> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseInvoice/' + id);
        // let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseInvoice/' + id).toPromise();
        // console.log(z);
        // return z;
    }

    //GRN
    GetGRN(): Observable<GRN> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetGRNs');
        // this.GRN = await this.http.get<GRN>(this.API_URL + 'Purchase/GetGRNs').toPromise();
        // //console.log(this.GRN);
        // return this.GRN;
    }

    GetGRNByCompany(companyId: number): Observable<GRN> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetGRNsByCompany/' + companyId);
        // this.GRN = await this.http.get<GRN>(this.API_URL + 'Purchase/GetGRNs').toPromise();
        // //console.log(this.GRN);
        // return this.GRN;
    }

    AddGRN(GRN: GRN): Observable<GRN> {
        return this.ApiService.post(this.API_URL + "Purchase/AddGRN", GRN);
        // let x = await this.http.post(this.API_URL + "Purchase/AddGRN", GRN).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateGRN(GRN: GRN): Observable<GRN> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdateGRN', GRN);
        // let a = await this.http.put(this.API_URL + 'Purchase/UpdateGRN', GRN).toPromise();
        // console.log(a);
        // return a;
    }

    DeleteGRN(id): Observable<GRN> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeleteGRN' + id);
        // let c = await this.http.delete(this.API_URL + 'Purchase/DeleteGRN' + id).toPromise();
        // console.log(c);
        // return c;
    }

    //PurchaseReturn
    GetPurchaseReturns(): Observable<PurchaseReturn> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseReturns');
        // this.PurchaseReturn = await this.http.get<PurchaseReturn>(this.API_URL + 'Purchase/GetPurchaseReturns').toPromise();
        // //console.log(this.PurchaseReturn);
        // return this.PurchaseReturn;
    }

    GetPurchaseReturnsByCompany(companyId: number): Observable<PurchaseReturn> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseReturnsByCompany/' + companyId);
        // this.PurchaseReturn = await this.http.get<PurchaseReturn>(this.API_URL + 'Purchase/GetPurchaseReturns').toPromise();
        // //console.log(this.PurchaseReturn);
        // return this.PurchaseReturn;
    }

    AddPurchaseReturn(PurchaseReturn: PurchaseReturn): Observable<PurchaseReturn> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseReturn', PurchaseReturn);
        // let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseReturn', PurchaseReturn).toPromise();
        // console.log(x);
        // return x;
    }

    UpdatePurchaseReturn(PurchaseReturn: PurchaseReturn): Observable<PurchaseReturn> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseReturn', PurchaseReturn);
        // let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseReturn', PurchaseReturn).toPromise();
        // console.log(y);
        // return y;
    }

    DeletePurchaseReturn(id): Observable<PurchaseReturn> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseReturn/' + id);
        // let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseReturn/' + id).toPromise();
        // console.log(z);
        // return z;
    }

    //PurchaseReturnItem
    GetPurchaseReturnItems(): Observable<PurchaseReturnItem> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseReturnItems');
        // this.PurchaseReturnItem = await this.http.get<PurchaseReturnItem>(this.API_URL + 'Purchase/GetPurchaseReturnItems').toPromise();
        // //console.log(this.PurchaseReturnItem);
        // return this.PurchaseReturnItem;
    }

    GetPurchaseReturnItemsByCompany(companyId: number): Observable<PurchaseReturnItem> {
        return this.ApiService.get(this.API_URL + 'Purchase/GetPurchaseReturnItemsByCompany/' + companyId);
        // this.PurchaseReturnItem = await this.http.get<PurchaseReturnItem>(this.API_URL + 'Purchase/GetPurchaseReturnItems').toPromise();
        // //console.log(this.PurchaseReturnItem);
        // return this.PurchaseReturnItem;
    }

    AddPurchaseReturnItem(PurchaseReturnItem: PurchaseReturnItem): Observable<PurchaseReturnItem> {
        return this.ApiService.post(this.API_URL + 'Purchase/AddPurchaseReturnItem', PurchaseReturnItem);
        // let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseReturnItem', PurchaseReturnItem).toPromise();
        // console.log(x);
        // return x;
    }

    UpdatePurchaseReturnItem(PurchaseReturnItem: PurchaseReturnItem): Observable<PurchaseReturnItem> {
        return this.ApiService.put(this.API_URL + 'Purchase/UpdatePurchaseReturnItem', PurchaseReturnItem);
        // let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseReturnItem', PurchaseReturnItem).toPromise();
        // console.log(y);
        // return y;
    }

    DeletePurchaseReturnItem(id): Observable<PurchaseReturnItem> {
        return this.ApiService.delete(this.API_URL + 'Purchase/DeletePurchaseReturnItem/' + id);
        // let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseReturnItem/' + id).toPromise();
        // console.log(z);
        // return z;
    }

    //**************************Setup *********************************//

    //Area
    GetAreas(): Observable<Area> {
        return this.ApiService.get(this.API_URL + 'Setup/GetAreas');
        // this.Area = await this.http.get<Area>(this.API_URL + 'Setup/GetAreas').toPromise();
        // //console.log(this.Area);
        // return this.Area;
    }

    getAreasByCompany(companyId: any) {
        return this.ApiService.get(this.API_URL + 'Setup/GetAreasByCompany/' + companyId);
    }

    getAreasByUser(userId: any) {
        return this.ApiService.get(this.API_URL + 'Setup/GetAreasByUser/' + userId);
    }

    AddArea(Area: Area): Observable<Area> {
        return this.ApiService.post(this.API_URL + 'Setup/AddArea', Area);
        // let x = await this.http.post(this.API_URL + 'Setup/AddArea', Area).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateArea(Area: Area): Observable<Area> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateArea', Area);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateArea', Area).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteArea(id): Observable<Area> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteArea/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteArea/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //Brand
    GetBrands(): Observable<Brand> {
        return this.ApiService.get(this.API_URL + 'Setup/GetBrands');
        // this.Brand = await this.http.get<Brand>(this.API_URL + 'Setup/GetBrands').toPromise();
        // //console.log(this.Brand);
        // return this.Brand;
    }

    GetBrandsByCompany(companyId: number): Observable<Brand> {
        return this.ApiService.get(this.API_URL + 'Setup/GetBrandsByCompanyId/' + companyId);
        // this.Brand = await this.http.get<Brand>(this.API_URL + 'Setup/GetBrands').toPromise();
        // //console.log(this.Brand);
        // return this.Brand;
    }

    AddBrand(Brand: Brand): Observable<Brand> {
        return this.ApiService.post(this.API_URL + 'Setup/AddBrand', Brand);
        // let x = await this.http.post(this.API_URL + 'Setup/AddBrand', Brand).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateBrand(Brand: Brand): Observable<Brand> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateBrand', Brand);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateBrand', Brand).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteBrand(id): Observable<Brand> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteBrand/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteBrand/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //Comission
    GetComissions(): Observable<Comission> {
        return this.ApiService.get(this.API_URL + 'Setup/GetComissions');
        // this.Comission = await this.http.get<Comission>(this.API_URL + 'Setup/GetComissions').toPromise();
        // //console.log(this.Comission);
        // return this.Comission;
    }

    GetComissionsByCompany(companyId: number): Observable<Comission> {
        return this.ApiService.get(this.API_URL + 'Setup/GetComissionsByCompany/' + companyId);
        // this.Comission = await this.http.get<Comission>(this.API_URL + 'Setup/GetComissions').toPromise();
        // //console.log(this.Comission);
        // return this.Comission;
    }

    AddComission(Comission: Comission): Observable<Comission> {
        return this.ApiService.post(this.API_URL + 'Setup/AddComission', Comission);
        // let x = await this.http.post(this.API_URL + 'Setup/AddComission', Comission).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateComission(Comission: Comission): Observable<Comission> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateComission', Comission);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateComission', Comission).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteComission(id): Observable<Comission> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteComission/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteComission/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //Customer
    GetCustomers(): Observable<Customer> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomers');
        // this.Customer = await this.http.get<Customer>(this.API_URL + 'Setup/GetCustomers').toPromise();
        // //console.log(this.Customer);
        // return this.Customer;
    }

    GetCustomersByCompany(companyId: number): Observable<Customer> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomersByCompany/' + companyId);
        // this.Customer = await this.http.get<Customer>(this.API_URL + 'Setup/GetCustomers').toPromise();
        // //console.log(this.Customer);
        // return this.Customer;
    }

    AddCustomer(Customer: Customer): Observable<Customer> {
        return this.ApiService.post(this.API_URL + 'Setup/AddCustomer', Customer);
        // let x = await this.http.post(this.API_URL + 'Setup/AddCustomer', Customer).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateCustomer(Customer: Customer): Observable<Customer> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateCustomer', Customer);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomer', Customer).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteCustomer(id): Observable<Customer> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteCustomer/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomer/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //CustomerAccount
    GetCustomerAccounts(): Observable<CustomerAccount> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomerAccounts');
        // this.CustomerAccount = await this.http.get<CustomerAccount>(this.API_URL + 'Setup/GetCustomerAccounts').toPromise();
        // //console.log(this.CustomerAccount);
        // return this.CustomerAccount;
    }

    GetCustomerAccountsByCompany(companyId: number): Observable<CustomerAccount> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomerAccountsByCompany/' + companyId);
        // this.CustomerAccount = await this.http.get<CustomerAccount>(this.API_URL + 'Setup/GetCustomerAccounts').toPromise();
        // //console.log(this.CustomerAccount);
        // return this.CustomerAccount;
    }

    AddCustomerAccount(CustomerAccount: CustomerAccount): Observable<CustomerAccount> {
        return this.ApiService.post(this.API_URL + 'Setup/AddCustomerAccount', CustomerAccount);
        // let x = await this.http.post(this.API_URL + 'Setup/AddCustomerAccount', CustomerAccount).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateCustomerAccount(CustomerAccount: CustomerAccount): Observable<CustomerAccount> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateCustomerAccount', CustomerAccount);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomerAccount', CustomerAccount).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteCustomerAccount(id): Observable<CustomerAccount> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteCustomerAccount/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomerAccount/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //CustomerBank
    GetCustomerBanks(): Observable<CustomerBank> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomerBanks');
        // this.CustomerBank = await this.http.get<CustomerBank>(this.API_URL + 'Setup/GetCustomerBanks').toPromise();
        // //console.log(this.CustomerBank);
        // return this.CustomerBank;
    }

    GetCustomerBanksByCompany(companyId: number): Observable<CustomerBank> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomerBanksByCompany/' + companyId);
        // this.CustomerBank = await this.http.get<CustomerBank>(this.API_URL + 'Setup/GetCustomerBanks').toPromise();
        // //console.log(this.CustomerBank);
        // return this.CustomerBank;
    }

    AddCustomerBank(CustomerBank: CustomerBank): Observable<CustomerBank> {
        return this.ApiService.post(this.API_URL + 'Setup/AddCustomerBank', CustomerBank);
        // let x = await this.http.post(this.API_URL + 'Setup/AddCustomerBank', CustomerBank).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateCustomerBank(CustomerBank: CustomerBank): Observable<CustomerBank> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateCustomerBank', CustomerBank);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomerBank', CustomerBank).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteCustomerBank(id): Observable<CustomerBank> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteCustomerBank/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomerBank/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //CustomerPricePickLevel
    GetPricePickLevels(): Observable<CustomerPricePickLevel> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomerPricePickLevels');
        // this.CustomerPricePickLevel = await this.http.get<CustomerPricePickLevel>(this.API_URL + 'Setup/GetCustomerPricePickLevels').toPromise();
        // //console.log(this.CustomerPricePickLevel);
        // return this.CustomerPricePickLevel;
    }

    GetPricePickLevelsByCompany(companyId: number): Observable<CustomerPricePickLevel> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomerPricePickLevelsByCompany/' + companyId);
        // this.CustomerPricePickLevel = await this.http.get<CustomerPricePickLevel>(this.API_URL + 'Setup/GetCustomerPricePickLevels').toPromise();
        // //console.log(this.CustomerPricePickLevel);
        // return this.CustomerPricePickLevel;
    }

    AddCustomerPricePickLevel(CustomerPricePickLevel: CustomerPricePickLevel): Observable<CustomerPricePickLevel> {
        return this.ApiService.post(this.API_URL + 'Setup/AddCustomerPricePickLevel', CustomerPricePickLevel);
        // let x = await this.http.post(this.API_URL + 'Setup/AddCustomerPricePickLevel', CustomerPricePickLevel).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateCustomerPricePickLevel(CustomerPricePickLevel: CustomerPricePickLevel): Observable<CustomerPricePickLevel> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateCustomerPricePickLevel', CustomerPricePickLevel);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomerPricePickLevel', CustomerPricePickLevel).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteCustomerPricePickLevel(id): Observable<CustomerPricePickLevel> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteCustomerPricePickLevel/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomerPricePickLevel/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //CustomerType
    GetCustomerTypes(): Observable<CustomerType> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomerTypes');
        // this.CustomerType = await this.http.get<CustomerType>(this.API_URL + 'Setup/GetCustomerTypes').toPromise();
        // //console.log(this.CustomerType);
        // return this.CustomerType;
    }

    GetCustomerTypesByCompany(companyId: number): Observable<CustomerType> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomerTypesByCompany/' + companyId);
        // this.CustomerType = await this.http.get<CustomerType>(this.API_URL + 'Setup/GetCustomerTypes').toPromise();
        // //console.log(this.CustomerType);
        // return this.CustomerType;
    }

    AddCustomerType(CustomerType: CustomerType): Observable<CustomerType> {
        return this.ApiService.post(this.API_URL + 'Setup/AddCustomerType', CustomerType);
        // let x = await this.http.post(this.API_URL + 'Setup/AddCustomerType', CustomerType).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateCustomerType(CustomerType: CustomerType): Observable<CustomerType> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateCustomerType', CustomerType);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomerType', CustomerType).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteCustomerType(id): Observable<CustomerType> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteCustomerType/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomerType/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //CustomerWarehouse
    GetCustomerWarehouses(): Observable<CustomerWarehouse> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomerWarehouses');
        // this.CustomerWarehouse = await this.http.get<CustomerWarehouse>(this.API_URL + 'Setup/GetCustomerWarehouses').toPromise();
        // //console.log(this.CustomerWarehouse);
        // return this.CustomerWarehouse;
    }

    GetCustomerWarehousesByCompany(companyId: number): Observable<CustomerWarehouse> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCustomerWarehousesByCompany/' + companyId);
        // this.CustomerWarehouse = await this.http.get<CustomerWarehouse>(this.API_URL + 'Setup/GetCustomerWarehouses').toPromise();
        // //console.log(this.CustomerWarehouse);
        // return this.CustomerWarehouse;
    }

    AddCustomerWarehouse(CustomerWarehouse: CustomerWarehouse): Observable<CustomerWarehouse> {
        return this.ApiService.post(this.API_URL + 'Setup/AddCustomerWarehouse', CustomerWarehouse);
        // let x = await this.http.post(this.API_URL + 'Setup/AddCustomerWarehouse', CustomerWarehouse).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateCustomerWarehouse(CustomerWarehouse: CustomerWarehouse): Observable<CustomerWarehouse> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateCustomerWarehouse', CustomerWarehouse);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomerWarehouse', CustomerWarehouse).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteCustomerWarehouse(id): Observable<CustomerWarehouse> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteCustomerWarehouse/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomerWarehouse/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //Distributor
    GetDistributor(distributorId: any): Observable<Distributor> {
        return this.ApiService.get(this.API_URL + 'Setup/GetDistributor/' + distributorId);
    }

    GetDistributors(): Observable<Distributor> {
        return this.ApiService.get(this.API_URL + 'Setup/GetDistributors');
        // this.Distributor = await this.http.get<Distributor>(this.API_URL + 'Setup/GetDistributors').toPromise();
        // //console.log(this.Distributor);
        // return this.Distributor;
    }

    GetDistributorsByCompany(companyId: number): Observable<Distributor> {
        return this.ApiService.get(this.API_URL + 'Setup/GetDistributorsByCompany/' + companyId);
    }

    getDistributorsByCompany(companyId: number): Observable<Distributor[]> {
        return this.ApiService.get(this.API_URL + 'Setup/GetDistributorsByCompany/' + companyId);
    }

    AddDistributor(Distributor: Distributor): Observable<Distributor> {
        return this.ApiService.post(this.API_URL + 'Setup/AddDistributor', Distributor);
        // let x = await this.http.post(this.API_URL + 'Setup/AddDistributor', Distributor).toPromise();
        // console.log(x);
        // return x;
    }

    AddDistributorWithTerritories(Distributor: any): Observable<any> {
        return this.ApiService.post(this.API_URL + 'Setup/AddDistributorWithTerritories', Distributor);
    }

    UpdateDistributorWithTerritories(Distributor: any): Observable<any> {
        return this.ApiService.post(this.API_URL + 'Setup/UpdateDistributorWithTerritories', Distributor);
    }

    UpdateDistributor(Distributor: Distributor): Observable<Distributor> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateDistributor', Distributor);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateDistributor', Distributor).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteDistributor(id): Observable<Distributor> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteDistributor/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteDistributor/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //Inventory
    GetInventories(): Observable<Inventory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventories');
        // this.Inventory = await this.http.get<Inventory>(this.API_URL + 'Setup/GetInventories').toPromise();
        // //console.log(this.Inventory);
        // return this.Inventory;
    }

    GetInventoryList(ids : number[]): Observable<Inventory[]> {
        return this.ApiService.post(this.API_URL + 'Setup/GetInventoryList', ids);
    }

    UpdateInventories(models : Inventory[]): Observable<any> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateInventories', models);
    }

    GetUnprocessedInternalRequisitionRequestsByCompany(companyid : number) : Observable<any[]> {
        return this.ApiService.get(this.API_URL + 'Sales/GetUnprocessedInternalRequisitionRequestsByCompany/' + companyid);
    }

    GetCurrentMonthProcessedInternalRequisitionRequestsByCompany(companyid : number) : Observable<any[]> {
        return this.ApiService.get(this.API_URL + 'Sales/GetCurrentMonthProcessedInternalRequisitionRequestsByCompany/' + companyid);
    }

    ProcessSalesIndentById(indentid : number) : Observable<any> {
        return this.ApiService.get(this.API_URL + 'Sales/ProcessSalesIndentById/' + indentid);
    }

    GetInventoriesByCompany(companyId: number): Observable<Inventory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventoriesByCompany/' + companyId);
        // this.Inventory = await this.http.get<Inventory>(this.API_URL + 'Setup/GetInventories').toPromise();
        // //console.log(this.Inventory);
        // return this.Inventory;
    }

    AddInventory(Inventory: Inventory): Observable<Inventory> {
        return this.ApiService.post(this.API_URL + 'Setup/AddInventory', Inventory);
        // let x = await this.http.post(this.API_URL + 'Setup/AddInventory', Inventory).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateInventory(Inventory: Inventory): Observable<Inventory> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateInventory', Inventory);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateInventory', Inventory).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteInventory(id): Observable<Inventory> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteInventory/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteInventory/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //InventoryItem
    GetInventoryItems(): Observable<InventoryItem> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventoryItems');
        // this.InventoryItem = await this.http.get<InventoryItem>(this.API_URL + 'Setup/GetInventoryItems').toPromise();
        // //console.log(this.InventoryItem);
        // return this.InventoryItem;
    }

    GetInventoryItemsByCompany(companyId: number): Observable<InventoryItem> {
        return this.ApiService.get(this.API_URL + 'Setup/GetInventoryItemsByCompany/' + companyId);
        // this.InventoryItem = await this.http.get<InventoryItem>(this.API_URL + 'Setup/GetInventoryItems').toPromise();
        // //console.log(this.InventoryItem);
        // return this.InventoryItem;
    }

    AddInventoryItem(InventoryItem: InventoryItem): Observable<InventoryItem> {
        return this.ApiService.post(this.API_URL + 'Setup/AddInventoryItem', InventoryItem);
        // let x = await this.http.post(this.API_URL + 'Setup/AddInventoryItem', InventoryItem).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateInventoryItem(InventoryItem: InventoryItem): Observable<InventoryItem> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateInventoryItem', InventoryItem);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateInventoryItem', InventoryItem).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteInventoryItem(id): Observable<InventoryItem> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteInventoryItem/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteInventoryItem/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //InventoryItemCategory
    GetInventoryItemCategories(): Observable<InventoryItemCategory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCategories');
        // this.InventoryItemCategory = await this.http.get<InventoryItemCategory>(this.API_URL + 'Setup/GetCategories').toPromise();
        // //console.log(this.InventoryItemCategory);
        // return this.InventoryItemCategory;
    }

    GetInventoryItemCategoriesByCompany(companyId: number): Observable<InventoryItemCategory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCategoriesByCompany/' + companyId);
        // this.InventoryItemCategory = await this.http.get<InventoryItemCategory>(this.API_URL + 'Setup/GetCategories').toPromise();
        // //console.log(this.InventoryItemCategory);
        // return this.InventoryItemCategory;
    }

    AddInventoryItemCategory(InventoryItemCategory: InventoryItemCategory): Observable<InventoryItemCategory> {
        return this.ApiService.post(this.API_URL + 'Setup/AddCategory', InventoryItemCategory);
        // let x = await this.http.post(this.API_URL + 'Setup/AddCategory', InventoryItemCategory).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateInventoryItemCategory(InventoryItemCategory: InventoryItemCategory): Observable<InventoryItemCategory> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateCategory', InventoryItemCategory);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateCategory', InventoryItemCategory).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteInventoryItemCategory(id): Observable<InventoryItemCategory> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteCategory/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteCategory/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //ItemPriceStructure
    GetItemPriceStructures(): Observable<ItemPriceStructure> {
        return this.ApiService.get(this.API_URL + 'Setup/GetItemPriceStructures');
        // this.ItemPriceStructure = await this.http.get<ItemPriceStructure>(this.API_URL + 'Setup/GetItemPriceStructures').toPromise();
        // //console.log(this.ItemPriceStructure);
        // return this.ItemPriceStructure;
    }

    GetItemPriceStructuresByCompany(companyId: number): Observable<ItemPriceStructure> {
        return this.ApiService.get(this.API_URL + 'Setup/GetItemPriceStructuresByCompany/' + companyId);
        // this.ItemPriceStructure = await this.http.get<ItemPriceStructure>(this.API_URL + 'Setup/GetItemPriceStructures').toPromise();
        // //console.log(this.ItemPriceStructure);
        // return this.ItemPriceStructure;
    }

    AddItemPriceStructure(ItemPriceStructure: ItemPriceStructure): Observable<ItemPriceStructure> {
        return this.ApiService.post(this.API_URL + 'Setup/AddItemPriceStructure', ItemPriceStructure);
        // let x = await this.http.post(this.API_URL + 'Setup/AddItemPriceStructure', ItemPriceStructure).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateItemPriceStructure(ItemPriceStructure: ItemPriceStructure): Observable<ItemPriceStructure> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateItemPriceStructure', ItemPriceStructure);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateItemPriceStructure', ItemPriceStructure).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteItemPriceStructure(id): Observable<ItemPriceStructure> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteItemPriceStructure/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteItemPriceStructure/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //ModeOfPayment
    GetModeOfPayments(): Observable<ModeOfPayment> {
        return this.ApiService.get(this.API_URL + 'Setup/GetModeOfPayments');
        // this.ModeOfPayment = await this.http.get<ModeOfPayment>(this.API_URL + 'Setup/GetModeOfPayments').toPromise();
        // //console.log(this.ModeOfPayment);
        // return this.ModeOfPayment;
    }

    GetModeOfPaymentsByCompany(companyId: number): Observable<ModeOfPayment> {
        return this.ApiService.get(this.API_URL + 'Setup/GetModeOfPaymentsByCompany/' + companyId);
        // this.ModeOfPayment = await this.http.get<ModeOfPayment>(this.API_URL + 'Setup/GetModeOfPayments').toPromise();
        // //console.log(this.ModeOfPayment);
        // return this.ModeOfPayment;
    }

    AddModeOfPayment(ModeOfPayment: ModeOfPayment): Observable<ModeOfPayment> {
        return this.ApiService.post(this.API_URL + 'Setup/AddModeOfPayment', ModeOfPayment);
        // let x = await this.http.post(this.API_URL + 'Setup/AddModeOfPayment', ModeOfPayment).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateModeOfPayment(ModeOfPayment: ModeOfPayment): Observable<ModeOfPayment> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateModeOfPayment', ModeOfPayment);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateModeOfPayment', ModeOfPayment).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteModeOfPayment(id): Observable<ModeOfPayment> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteModeOfPayment/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteModeOfPayment/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //PackageType
    GetPackageTypes(): Observable<PackageType> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackageTypes');
        // this.PackageType = await this.http.get<PackageType>(this.API_URL + 'Setup/GetPackageTypes').toPromise();
        // //console.log(this.PackageType);
        // return this.PackageType;
    }

    GetPackageTypesByCompany(companyId: number): Observable<PackageType> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackageTypesByCompany/' + companyId);
        // this.PackageType = await this.http.get<PackageType>(this.API_URL + 'Setup/GetPackageTypes').toPromise();
        // //console.log(this.PackageType);
        // return this.PackageType;
    }

    AddPackageType(PackageType: PackageType): Observable<PackageType> {
        return this.ApiService.post(this.API_URL + 'Setup/AddPackageType', PackageType);
        // let x = await this.http.post(this.API_URL + 'Setup/AddPackageType', PackageType).toPromise();
        // console.log(x);
        // return x;
    }

    UpdatePackageType(PackageType: PackageType): Observable<PackageType> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdatePackageType', PackageType);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdatePackageType', PackageType).toPromise();
        // console.log(y);
        // return y;
    }

    DeletePackageType(id): Observable<PackageType> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeletePackageType/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeletePackageType/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //PackCategory
    GetPackCategories(): Observable<PackCategory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackCategories');
        // this.PackCategory = await this.http.get<PackCategory>(this.API_URL + 'Setup/GetPackCategories').toPromise();
        // //console.log(this.PackCategory);
        // return this.PackCategory;
    }

    GetPackCategoriesByCompany(companyId: number): Observable<PackCategory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackCategoriesByCompany/' + companyId);
        // this.PackCategory = await this.http.get<PackCategory>(this.API_URL + 'Setup/GetPackCategories').toPromise();
        // //console.log(this.PackCategory);
        // return this.PackCategory;
    }

    AddPackCategory(PackCategory: PackCategory): Observable<PackCategory> {
        return this.ApiService.post(this.API_URL + 'Setup/AddPackCategory', PackCategory);
        // let x = await this.http.post(this.API_URL + 'Setup/AddPackCategory', PackCategory).toPromise();
        // console.log(x);
        // return x;
    }

    UpdatePackCategory(PackCategory: PackCategory): Observable<PackCategory> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdatePackCategory', PackCategory);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdatePackCategory', PackCategory).toPromise();
        // console.log(y);
        // return y;
    }

    DeletePackCategory(id): Observable<PackCategory> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeletePackCategory/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeletePackCategory/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //PackSize
    GetPackSizes(): Observable<PackSize> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackSizes');
        // this.PackSize = await this.http.get<PackSize>(this.API_URL + 'Setup/GetPackSizes').toPromise();
        // //console.log(this.PackSize);
        // return this.PackSize;
    }

    GetPackSizesByCompany(companyId: number): Observable<PackSize> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackSizesByCompany/' + companyId);
        // this.PackSize = await this.http.get<PackSize>(this.API_URL + 'Setup/GetPackSizes').toPromise();
        // //console.log(this.PackSize);
        // return this.PackSize;
    }

    AddPackSize(PackSize: PackSize): Observable<PackSize> {
        return this.ApiService.post(this.API_URL + 'Setup/AddPackSize', PackSize);
        // let x = await this.http.post(this.API_URL + 'Setup/AddPackSize', PackSize).toPromise();
        // console.log(x);
        // return x;
    }

    UpdatePackSize(PackSize: PackSize): Observable<PackSize> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdatePackSize', PackSize);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdatePackSize', PackSize).toPromise();
        // console.log(y);
        // return y;
    }

    DeletePackSize(id): Observable<PackSize> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeletePackSize/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeletePackSize/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //PackType
    GetPackTypes(): Observable<PackType> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackTypes');
        // this.PackType = await this.http.get<PackType>(this.API_URL + 'Setup/GetPackTypes').toPromise();
        // //console.log(this.PackType);
        // return this.PackType;
    }

    GetPackTypesByCompany(companyId: number): Observable<PackType> {
        return this.ApiService.get(this.API_URL + 'Setup/GetPackTypesByCompany/' + companyId);
        // this.PackType = await this.http.get<PackType>(this.API_URL + 'Setup/GetPackTypes').toPromise();
        // //console.log(this.PackType);
        // return this.PackType;
    }

    AddPackType(PackType: PackType): Observable<PackType> {
        return this.ApiService.post(this.API_URL + 'Setup/AddPackType', PackType);
        // let x = await this.http.post(this.API_URL + 'Setup/AddPackType', PackType).toPromise();
        // console.log(x);
        // return x;
    }

    UpdatePackType(PackType: PackType): Observable<PackType> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdatePackType', PackType);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdatePackType', PackType).toPromise();
        // console.log(y);
        // return y;
    }

    DeletePackType(id): Observable<PackType> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeletePackType/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeletePackType/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //ProductType
    GetProductTypes(): Observable<ProductType> {
        return this.ApiService.get(this.API_URL + 'Setup/GetProductTypes');
        // this.ProductType = await this.http.get<ProductType>(this.API_URL + 'Setup/GetProductTypes').toPromise();
        // //console.log(this.ProductType);
        // return this.ProductType;
    }

    GetProductTypesByCompany(companyId: number): Observable<ProductType> {
        return this.ApiService.get(this.API_URL + 'Setup/GetProductTypesByCompany/' + companyId);
        // this.ProductType = await this.http.get<ProductType>(this.API_URL + 'Setup/GetProductTypes').toPromise();
        // //console.log(this.ProductType);
        // return this.ProductType;
    }

    AddProductType(ProductType: ProductType): Observable<ProductType> {
        return this.ApiService.post(this.API_URL + 'Setup/AddProductType', ProductType);
        // let x = await this.http.post(this.API_URL + 'Setup/AddProductType', ProductType).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateProductType(ProductType: ProductType): Observable<ProductType> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateProductType', ProductType);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateProductType', ProductType).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteProductType(id): Observable<ProductType> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteProductType/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteProductType/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //Region
    GetRegions(): Observable<Region> {
        return this.ApiService.get(this.API_URL + 'Setup/GetRegions');
    }

    GetRegionsByCompany(companyId: number): Observable<Region> {
        return this.ApiService.get(this.API_URL + 'Setup/GetRegionsByCompany/' + companyId);
        // this.Region = await this.http.get<Region>(this.API_URL + 'Setup/GetRegions').toPromise();
        // //console.log(this.Region);
        // return this.Region;
    }

    getRegionsByCompany(companyId: any) {
        return this.ApiService.get(this.API_URL + 'Setup/GetRegionsByCompany/' + companyId);
    }

    getRegionsByUser(userId: any) {
        return this.ApiService.get(this.API_URL + 'Setup/GetRegionsByUser/' + userId);
    }

    AddRegion(Region: Region): Observable<Region> {
        return this.ApiService.post(this.API_URL + 'Setup/AddRegion', Region);
        // let x = await this.http.post(this.API_URL + 'Setup/AddRegion', Region).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateRegion(Region: Region): Observable<Region> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateRegion', Region);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateRegion', Region).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteRegion(id): Observable<Region> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteRegion/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteRegion/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //City
    getCities(): Observable<any> {
        return this.ApiService.get(this.API_URL + 'Setup/GetCities');
    }

    getCitiesByCompany(companyId: any) {
        return this.ApiService.get(this.API_URL + 'Setup/GetCitiesByCompany/' + companyId);
    }

    getCitiesByUser(userId: any) {
        return this.ApiService.get(this.API_URL + 'Setup/GetCitiesByUser/' + userId);
    }

    addCity(City: any): Observable<any> {
        return this.ApiService.post(this.API_URL + 'Setup/AddCity', City);
    }

    updateCity(City: any): Observable<any> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateCity', City);
    }

    deleteCity(id): Observable<any> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteCity/' + id);
    }


    //Section
    GetSections(): Observable<any> {
        return this.ApiService.get(this.API_URL + 'Setup/GetSections');
    }

    getSectionsByCompany(companyId: number) {
        return this.ApiService.get(this.API_URL + 'Setup/GetSectionsByCompany/' + companyId);
    }

    getSectionsByTerritory(territoryId: number) {
        return this.ApiService.get(this.API_URL + 'Setup/GetSectionsByTerritory/' + territoryId);
    }

    AddSection(Section: any): Observable<any> {
        return this.ApiService.post(this.API_URL + 'Setup/AddSection', Section);
    }

    UpdateSection(Section: any): Observable<any> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateSection', Section);
    }

    DeleteSection(id): Observable<any> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteSection/' + id);
    }


    //Subsection
    GetSubsections(): Observable<any> {
        return this.ApiService.get(this.API_URL + 'Setup/GetSubsections');
    }

    getSubsectionsByCompany(companyId: number) {
        return this.ApiService.get(this.API_URL + 'Setup/GetSubsectionsByCompany/' + companyId);
    }

    AddSubsection(Subsection: any): Observable<any> {
        return this.ApiService.post(this.API_URL + 'Setup/AddSubsection', Subsection);
    }

    UpdateSubsection(Subsection: any): Observable<any> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateSubsection', Subsection);
    }

    DeleteSubsection(id): Observable<any> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteSubsection/' + id);
    }




    //ReturnReason
    GetReturnReasons(): Observable<ReturnReason> {
        return this.ApiService.get(this.API_URL + 'Setup/GetReturnReasons');
        // this.ReturnReason = await this.http.get<ReturnReason>(this.API_URL + 'Setup/GetReturnReasons').toPromise();
        // //console.log(this.ReturnReason);
        // return this.ReturnReason;
    }

    GetReturnReasonsByCompany(companyId: number): Observable<ReturnReason> {
        return this.ApiService.get(this.API_URL + 'Setup/GetReturnReasonsByCompany/' + companyId);
        // this.ReturnReason = await this.http.get<ReturnReason>(this.API_URL + 'Setup/GetReturnReasons').toPromise();
        // //console.log(this.ReturnReason);
        // return this.ReturnReason;
    }

    AddReturnReason(ReturnReason: ReturnReason): Observable<ReturnReason> {
        return this.ApiService.post(this.API_URL + 'Setup/AddReturnReason', ReturnReason);
        // let x = await this.http.post(this.API_URL + 'Setup/AddReturnReason', ReturnReason).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateReturnReason(ReturnReason: ReturnReason): Observable<ReturnReason> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateReturnReason', ReturnReason);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateReturnReason', ReturnReason).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteReturnReason(id): Observable<ReturnReason> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteReturnReason/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteReturnReason/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //SalesPerson
    GetSalesPeople(): Observable<SalesPerson> {
        return this.ApiService.get(this.API_URL + 'Setup/GetSalesPeople');
        // this.SalesPerson = await this.http.get<SalesPerson>(this.API_URL + 'Setup/GetSalesPeople').toPromise();
        // //console.log(this.SalesPerson);
        // return this.SalesPerson;
    }

    GetSalesPeopleByCompany(companyId: number): Observable<SalesPerson> {
        return this.ApiService.get(this.API_URL + 'Setup/GetSalesPeopleByCompany/' + companyId);
        // this.SalesPerson = await this.http.get<SalesPerson>(this.API_URL + 'Setup/GetSalesPeople').toPromise();
        // //console.log(this.SalesPerson);
        // return this.SalesPerson;
    }

    AddSalesPerson(SalesPerson: SalesPerson): Observable<SalesPerson> {
        return this.ApiService.post(this.API_URL + 'Setup/AddSalesPerson', SalesPerson);
        // let x = await this.http.post(this.API_URL + 'Setup/AddSalesPerson', SalesPerson).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateSalesPerson(SalesPerson: SalesPerson): Observable<SalesPerson> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateSalesPerson', SalesPerson);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateSalesPerson', SalesPerson).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteSalesPerson(id): Observable<SalesPerson> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteSalesPerson/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteSalesPerson/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //Supplier
    GetSuppliers(): Observable<Supplier> {
        return this.ApiService.get(this.API_URL + 'Setup/GetSuppliers');
        // this.Supplier = await this.http.get<Supplier>(this.API_URL + 'Setup/GetSuppliers').toPromise();
        // //console.log(this.Supplier);
        // return this.Supplier;
    }

    GetSuppliersByCompany(companyId: number): Observable<Supplier> {
        return this.ApiService.get(this.API_URL + 'Setup/GetSuppliersByCompany/' + companyId);
        // this.Supplier = await this.http.get<Supplier>(this.API_URL + 'Setup/GetSuppliers').toPromise();
        // //console.log(this.Supplier);
        // return this.Supplier;
    }

    AddSupplier(Supplier: Supplier): Observable<Supplier> {
        return this.ApiService.post(this.API_URL + 'Setup/AddSupplier', Supplier);
        // let x = await this.http.post(this.API_URL + 'Setup/AddSupplier', Supplier).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateSupplier(Supplier: Supplier): Observable<Supplier> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateSupplier', Supplier);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateSupplier', Supplier).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteSupplier(id): Observable<Supplier> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteSupplier/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteSupplier/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //Tax
    GetTaxes(): Observable<Tax> {
        return this.ApiService.get(this.API_URL + 'Setup/GetTaxes');
        // this.Tax = await this.http.get<Tax>(this.API_URL + 'Setup/GetTaxes').toPromise();
        // //console.log(this.Tax);
        // return this.Tax;
    }

    GetTaxesByCompany(companyId: number): Observable<Tax> {
        return this.ApiService.get(this.API_URL + 'Setup/GetTaxesByCompany/' + companyId);
        // this.Tax = await this.http.get<Tax>(this.API_URL + 'Setup/GetTaxes').toPromise();
        // //console.log(this.Tax);
        // return this.Tax;
    }

    AddTax(Tax: Tax): Observable<Tax> {
        return this.ApiService.post(this.API_URL + 'Setup/AddTax', Tax);
        // let x = await this.http.post(this.API_URL + 'Setup/AddTax', Tax).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateTax(Tax: Tax): Observable<Tax> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateTax', Tax);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateTax', Tax).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteTax(id): Observable<Tax> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteTax/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteTax/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //Territory
    GetTerritories(): Observable<Territory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetTerritories');
        // this.Territory = await this.http.get<Territory>(this.API_URL + 'Setup/GetTerritories').toPromise();
        // //console.log(this.Territory);
        // return this.Territory;
    }

    getTerritoriesByCompany(companyId: any) {
        return this.ApiService.get(this.API_URL + 'Setup/GetTerritoriesByCompany/' + companyId);
    }

    getTerritoriesByUser(userId: any) {
        return this.ApiService.get(this.API_URL + 'Setup/GetTerritoriesByUser/' + userId);
    }

    getTerritoriesByDistributorId(distributorId: any): Observable<Territory> {
        return this.ApiService.get(this.API_URL + 'Setup/GetTerritoriesByDistributor/' + distributorId);
    }

    AddTerritory(Territory: Territory): Observable<Territory> {
        return this.ApiService.post(this.API_URL + 'Setup/AddTerritory', Territory);
        // let x = await this.http.post(this.API_URL + 'Setup/AddTerritory', Territory).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateTerritory(Territory: Territory): Observable<Territory> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateTerritory', Territory);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateTerritory', Territory).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteTerritory(id): Observable<Territory> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteTerritory/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteTerritory/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //Transport
    GetTransports(): Observable<Transport> {
        return this.ApiService.get(this.API_URL + 'Setup/GetTransports');
        // this.Transport = await this.http.get<Transport>(this.API_URL + 'Setup/GetTransports').toPromise();
        // //console.log(this.Transport);
        // return this.Transport;
    }

    GetTransportsByCompany(companyId: number): Observable<Transport> {
        return this.ApiService.get(this.API_URL + 'Setup/GetTransportsByCompany/' + companyId);
        // this.Transport = await this.http.get<Transport>(this.API_URL + 'Setup/GetTransports').toPromise();
        // //console.log(this.Transport);
        // return this.Transport;
    }

    AddTransport(Transport: Transport): Observable<Transport> {
        return this.ApiService.post(this.API_URL + 'Setup/AddTransport', Transport);
        // let x = await this.http.post(this.API_URL + 'Setup/AddTransport', Transport).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateTransport(Transport: Transport): Observable<Transport> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateTransport', Transport);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateTransport', Transport).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteTransport(id): Observable<Transport> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteTransport/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteTransport/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    //Unit
    GetUnits(): Observable<Unit> {
        return this.ApiService.get(this.API_URL + 'Setup/GetUnits');
        // this.Unit = await this.http.get<Unit>(this.API_URL + 'Setup/GetUnits').toPromise();
        // //console.log(this.Unit);
        // return this.Unit;
    }

    GetUnitsByCompany(companyId: number): Observable<Unit> {
        return this.ApiService.get(this.API_URL + 'Setup/GetUnitsByCompany/' + companyId);
        // this.Unit = await this.http.get<Unit>(this.API_URL + 'Setup/GetUnits').toPromise();
        // //console.log(this.Unit);
        // return this.Unit;
    }

    AddUnit(Unit: Unit): Observable<Unit> {
        return this.ApiService.post(this.API_URL + 'Setup/AddUnit', Unit);
        // let x = await this.http.post(this.API_URL + 'Setup/AddUnit', Unit).toPromise();
        // console.log(x);
        // return x;
    }

    UpdateUnit(Unit: Unit): Observable<Unit> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateUnit', Unit);
        // let y = await this.http.put(this.API_URL + 'Setup/UpdateUnit', Unit).toPromise();
        // console.log(y);
        // return y;
    }

    DeleteUnit(id): Observable<Unit> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteUnit/' + id);
        // let x = await this.http.delete(this.API_URL + 'Setup/DeleteUnit/' + id).toPromise();
        // console.log(x);
        // return x;
    }

    getGeneralSkus() : Observable<any[]> {
        return this.ApiService.get(this.API_URL + 'Setup/GetGeneralSKUs');
    }

    getGeneralSkusByCompany(companyid : number) : Observable<any[]> {
        return this.ApiService.get(this.API_URL + 'Setup/GetGeneralSKUsByCompany/' + companyid);
    }

    addGeneralSku(model : any) : Observable<any> {
        return this.ApiService.post(this.API_URL + 'Setup/AddGeneralSKU', model);
    }

    updateGeneralSku(model : any) : Observable<any> {
        return this.ApiService.put(this.API_URL + 'Setup/UpdateGeneralSKU', model);
    }

    deleteGeneralSku(id : number) : Observable<any> {
        return this.ApiService.delete(this.API_URL + 'Setup/DeleteGeneralSKU/' + id);
    }

    /***************************************For eTracker Reporting **********************************/

    getCitiesByUserAndRegion(regionid: number, userid: number) {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetCitiesByUserAndRegion/' + regionid + '/' + userid);
    }

    getAreasByUserAndCity(cityid: number, userid: number): Observable<Area[]> {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetAreasByUserAndCity/' + cityid + '/' + userid);
    }

    getDistributorsByUserAndArea(areaid: number, userid: number): Observable<Distributor[]> {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetDistributorsByUserAndArea/' + areaid + '/' + userid);
    }

    getTerritoriesByUserAndDistributor(distributorId: number, userid: number): Observable<Territory[]> {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetTerritoriesByUserAndDistributor/' + distributorId + '/' + userid);
    }

    getSectionsByUserAndTerritory(territoryId: number, userid: number): Observable<Territory[]> {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetSectionsByUserAndTerritory/' + territoryId + '/' + userid);
    }

    getSubsectionsBySection(sectionid: number): Observable<any[]> {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetSubsectionsBySection/' + sectionid);
    }

    getRegionByCity(cityid: number): Observable<Region> {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetRegionByCity/' + cityid);
    }

    getCityByArea(areaid: number): Observable<City> {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetCityByArea/' + areaid);
    }

    getCitiesByRegion(regionid: number) {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetCitiesByRegion/' + regionid);
    }

    getAreasByCity(cityid: number): Observable<Area[]> {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetAreasByCity/' + cityid);
    }

    getDistributorsByArea(areaid: number): Observable<Distributor[]> {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetDistributorsByArea/' + areaid);
    }

    getTerritoriesByDistributor(distributorId: number): Observable<Territory[]> {
        return this.ApiService.get(this.TerritoryApi_Url + 'Territory/GetTerritoriesByDistributor/' + distributorId);
    }
}