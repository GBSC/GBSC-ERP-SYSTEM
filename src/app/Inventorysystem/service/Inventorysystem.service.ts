import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';

//SetupImports
import { Area } from '../../Inventorysystem/models/Setup/Area';
import { Brand } from '../../Inventorysystem/models/Setup/Brand';
import { Comission } from '../../Inventorysystem/models/Setup/Comission';
import { Customer } from '../../Inventorysystem/models/Setup/Customer';
import { CustomerAccount } from '../../Inventorysystem/models/Setup/CustomerAccount';
import { CustomerBank } from '../../Inventorysystem/models/Setup/CustomerBank';
import { CustomerPricePickLevel } from '../../Inventorysystem/models/Setup/CustomerPricePickLevel';
import { CustomerType } from '../../Inventorysystem/models/Setup/CustomerType';
import { CustomerWarehouse } from '../../Inventorysystem/models/Setup/CustomerWarehouse';
import { Distributor } from '../../Inventorysystem/models/Setup/Distributor';
import { Inventory } from '../../Inventorysystem/models/Setup/Inventory';
import { InventoryItem } from '../../Inventorysystem/models/Setup/InventoryItem';
import { InventoryItemCategory } from '../../Inventorysystem/models/Setup/InventoryItemCategory';
import { ItemPriceStructure } from '../../Inventorysystem/models/Setup/ItemPriceStructure';
import { ModeOfPayment } from '../../Inventorysystem/models/Setup/ModeOfPayment';
import { PackageType } from '../../Inventorysystem/models/Setup/PackageType';
import { PackCategory } from '../../Inventorysystem/models/Setup/PackCategory';
import { PackSize } from '../../Inventorysystem/models/Setup/PackSize';
import { PackType } from '../../Inventorysystem/models/Setup/PackType';
import { ProductType } from '../../Inventorysystem/models/Setup/ProductType';
import { Region } from '../../Inventorysystem/models/Setup/Region';
import { ReturnReason } from '../../Inventorysystem/models/Setup/ReturnReason';
import { SalesPerson } from '../../Inventorysystem/models/Setup/SalesPerson';
import { Supplier } from '../../Inventorysystem/models/Setup/Supplier';
import { Tax } from '../../Inventorysystem/models/Setup/Tax';
import { Territory } from '../../Inventorysystem/models/Setup/Territory';
import { Transport } from '../../Inventorysystem/models/Setup/Transport';
import { Unit } from '../../Inventorysystem/models/Setup/Unit';

//SalesImports
import { SalesIndent } from '../../Inventorysystem/models/Sales/SalesIndent';
import { SalesIndentItem } from '../../Inventorysystem/models/Sales/SalesIndentItem';
import { SalesOrder } from '../../Inventorysystem/models/Sales/SalesOrder';
import { SalesOrderItem } from '../../Inventorysystem/models/Sales/SalesOrderItem';
import { DeliveryOrder } from '../../Inventorysystem/models/Sales/DeliveryOrder';
import { DeliveryOrderItem } from '../../Inventorysystem/models/Sales/DeliveryOrderItem';
import { DeliveryNote } from '../../Inventorysystem/models/Sales/DeliveryNote';
import { SalesInvoice } from '../../Inventorysystem/models/Sales/SalesInvoice';
import { SalesReturn } from '../../Inventorysystem/models/Sales/SalesReturn';
import { SalesReturnItem } from '../../Inventorysystem/models/Sales/SalesReturnItem';

//PurchaseImports
import { PurchaseIndent } from '../../Inventorysystem/models/Purchase/PurchaseIndent';
import { PurchaseIndentItem } from '../../Inventorysystem/models/Purchase/PurchaseIndentItem';
import { PurchaseOrder } from '../../Inventorysystem/models/Purchase/PurchaseOrder';
import { PurchaseOrderItem } from '../../Inventorysystem/models/Purchase/PurchaseOrderItem';
import { PurchaseInvoice } from '../../Inventorysystem/models/Purchase/PurchaseInvoice';
import { GRN } from '../../Inventorysystem/models/Purchase/GRN';
import { PurchaseReturn } from '../../Inventorysystem/models/Purchase/PurchaseReturn';
import { PurchaseReturnItem } from '../../Inventorysystem/models/Purchase/PurchaseReturnItem';


@Injectable()
export class InventorysystemService {

    //Purchase
    public PurchaseIndent: any;
    public PurchaseIndentItem: any;
    public PurchaseOrder: any;
    public PurchaseOrderItem: any;
    public PurchaseInvoice: any;
    public GRN: any;
    public PurchaseReturn: any;
    public PurchaseReturnItem: any;

    //Sales
    public SalesIndent: any;
    public SalesIndentItem: any;
    public SalesOrder: any;
    public SalesOrderItem: any;
    public DeliveryOrder: any;
    public DeliveryOrderItem: any;
    public DeliveryNote: any;
    public SalesInvoice: any;
    public SalesReturn: any;
    public SalesReturnItem: any;

    //Setup
    public Area: any;
    public Brand: any;
    public Comission: any;
    public Customer: any;
    public CustomerAccount: any;
    public CustomerBank: any;
    public CustomerPricePickLevel: any;
    public CustomerType: any;
    public CustomerWarehouse: any;
    public Distributor: any
    public Inventory: any;
    public InventoryItem: any;
    public InventoryItemCategory: any;
    public ItemPriceStructure: any;
    public ModeOfPayment: any;
    public PackageType: any;
    public PackCategory: any;
    public PackSize: any;
    public PackType: any;
    public ProductType: any;
    public Region: any;
    public ReturnReason: any;
    public SalesPerson: any;
    public Supplier: any;
    public Tax: any;
    public Territory: any;
    public Transport: any;
    public Unit: any;

    private readonly API_URL = 'http://gbsc-erp.azurewebsites.net/inventory/api/';
    constructor(private http: HttpClient) {

    }

    //****************************************Sales************************************//

    //SalesIndent
    async GetSalesIndents() {
        this.SalesIndent = await this.http.get<SalesIndent>(this.API_URL + 'Sales/GetSalesIndents').toPromise();
        //console.log(this.SalesOrder);
        return this.SalesIndent;
    }

    async AddSalesIndent(SalesIndent: SalesIndent) {
        let x = await this.http.post(this.API_URL + "Sales/AddSalesIndent", SalesIndent).toPromise();
        console.log(x);
        return x;
    }

    async UpdateSalesIndent(SalesIndent: SalesIndent) {
        let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesIndent', SalesIndent).toPromise();
        console.log(a);
        return a;
    }

    async DeleteSalesIndent(id) {
        let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesIndent/' + id).toPromise();
        console.log(c);
        return c;
    }

    //SalesIndentItem
    async GetSalesIndentItems() {
        this.SalesIndentItem = await this.http.get<SalesIndentItem>(this.API_URL + 'Sales/GetSalesIndentItems').toPromise();
        //console.log(this.SalesIndentItem);
        return this.SalesIndentItem;
    }

    async AddSalesIndentItem(SalesIndentItem: SalesIndentItem) {
        let x = await this.http.post(this.API_URL + "Sales/AddSalesIndentItem", SalesIndentItem).toPromise();
        console.log(x);
        return x;
    }

    async UpdateSalesIndentItem(SalesIndentItem: SalesIndentItem) {
        let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesIndentItem', SalesIndentItem).toPromise();
        console.log(a);
        return a;
    }

    async DeleteSalesIndentItem(id) {
        let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesIndentItem/' + id).toPromise();
        console.log(c);
        return c;
    }

    //SalesOrder
    async GetSalesOrders() {
        this.SalesOrder = await this.http.get<SalesOrder>(this.API_URL + 'Sales/GetSalesOrders').toPromise();
        //console.log(this.SalesOrder);
        return this.SalesOrder;
    }

    async AddSalesOrder(SalesOrder: SalesOrder) {
        let x = await this.http.post(this.API_URL + "Sales/AddSalesOrder", SalesOrder).toPromise();
        console.log(x);
        return x;
    }

    async UpdateSalesOrder(SalesOrder: SalesOrder) {
        let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesOrder', SalesOrder).toPromise();
        console.log(a);
        return a;
    }

    async DeleteSalesOrder(id) {
        let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesOrder/' + id).toPromise();
        console.log(c);
        return c;
    }

    //SalesOrderItem

    async GetSalesOrderItems() {
        this.SalesOrderItem = await this.http.get<SalesOrderItem>(this.API_URL + 'Sales/GetSalesOrderItems').toPromise();
        //console.log(this.SalesOrderItem);
        return this.SalesOrderItem;
    }

    async AddSalesOrderItem(SalesOrderItem: SalesOrderItem) {
        let x = await this.http.post(this.API_URL + "Sales/AddSalesOrderItem", SalesOrderItem).toPromise();
        console.log(x);
        return x;
    }

    async UpdateSalesOrderItem(SalesOrderItem: SalesOrderItem) {
        let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesOrderItem', SalesOrderItem).toPromise();
        console.log(a);
        return a;
    }

    async DeleteSalesOrderItem(id) {
        let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesOrderItem/' + id).toPromise();
        console.log(c);
        return c;
    }

    //DeliveryOrder
    async GetDeliveryOrders() {
        this.DeliveryOrder = await this.http.get<DeliveryOrder>(this.API_URL + 'Sales/GetDeliveryOrders').toPromise();
        //console.log(this.DeliveryOrder);
        return this.DeliveryOrder;
    }

    async AddDeliveryOrder(DeliveryOrder: DeliveryOrder) {
        let x = await this.http.post(this.API_URL + "Sales/AddDevliveryOrder", DeliveryOrder).toPromise();
        console.log(x);
        return x;
    }

    async UpdateDeliveryOrder(DeliveryOrder: DeliveryOrder) {
        let a = await this.http.put(this.API_URL + 'Sales/UpdateDeliveryOrder', DeliveryOrder).toPromise();
        console.log(a);
        return a;
    }

    async DeleteDeliveryOrder(id) {
        let c = await this.http.delete(this.API_URL + 'Sales/DeleteDeliveryOrder/' + id).toPromise();
        console.log(c);
        return c;
    }


    //DeliveryOrderItem
    async GetDeliveryOrderItems() {
        this.DeliveryOrderItem = await this.http.get<DeliveryOrderItem>(this.API_URL + 'Sales/GetDeliveryOrderItems').toPromise();
        //console.log(this.DeliveryOrderItem);
        return this.DeliveryOrderItem;
    }

    async AddDeliveryOrderItem(DeliveryOrderItem: DeliveryOrderItem) {
        let x = await this.http.post(this.API_URL + "Sales/AddDevliveryOrderItem", DeliveryOrderItem).toPromise();
        console.log(x);
        return x;
    }

    async UpdateDeliveryOrderItem(DeliveryOrderItem: DeliveryOrderItem) {
        let a = await this.http.put(this.API_URL + 'Sales/UpdateDeliveryOrderItem', DeliveryOrderItem).toPromise();
        console.log(a);
        return a;
    }

    async DeleteDeliveryOrderItem(id) {
        let c = await this.http.delete(this.API_URL + 'Sales/DeleteDeliveryOrderItem/' + id).toPromise();
        console.log(c);
        return c;
    }

    //DeliveryNote
    async GetDeliveryNotes() {
        this.DeliveryOrder = await this.http.get<DeliveryNote>(this.API_URL + 'Sales/GetDeliveryChallans').toPromise();
        //console.log(this.DeliveryNote);
        return this.DeliveryNote;
    }

    async AddDeliveryNote(DeliveryNote: DeliveryNote) {
        let x = await this.http.post(this.API_URL + "Sales/AddDevliveryChallan", DeliveryNote).toPromise();
        console.log(x);
        return x;
    }

    async UpdateDeliveryNote(DeliveryNote: DeliveryNote) {
        let a = await this.http.put(this.API_URL + 'Sales/UpdateDeliveryChallan', DeliveryNote).toPromise();
        console.log(a);
        return a;
    }

    async DeleteDeliveryNote(id) {
        let c = await this.http.delete(this.API_URL + 'Sales/DeleteDeliveryChallan/' + id).toPromise();
        console.log(c);
        return c;
    }

    //SalesInvoice
    async GetSalesInvoices() {
        this.SalesInvoice = await this.http.get<SalesInvoice>(this.API_URL + 'Sales/GetSalesInvoices').toPromise();
        //console.log(this.SalesInvoice);
        return this.SalesInvoice;
    }

    async AddSalesInvoice(SalesInvoice: SalesInvoice) {
        let x = await this.http.post(this.API_URL + "Sales/AddSalesInvoice", SalesInvoice).toPromise();
        console.log(x);
        return x;
    }

    async UpdateSalesInvoice(SalesInvoice: SalesInvoice) {
        let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesInvoice', SalesInvoice).toPromise();
        console.log(a);
        return a;
    }

    async DeleteSalesInvoice(id) {
        let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesInvoice/' + id).toPromise();
        console.log(c);
        return c;
    }

    //SalesReturn
    async GetSalesReturns() {
        this.SalesReturn = await this.http.get<SalesReturn>(this.API_URL + 'Sales/GetSalesReturns').toPromise();
        //console.log(this.DeliveryOrder);
        return this.SalesReturn;
    }

    async AddSalesReturn(SalesReturn: SalesReturn) {
        let x = await this.http.post(this.API_URL + "Sales/AddSalesReturn", SalesReturn).toPromise();
        console.log(x);
        return x;
    }

    async UpdateSalesReturn(SalesReturn: SalesReturn) {
        let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesReturn', SalesReturn).toPromise();
        console.log(a);
        return a;
    }

    async DeleteSalesReturn(id) {
        let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesReturn/' + id).toPromise();
        console.log(c);
        return c;
    }


    //SalesReturnItem
    async GetSalesReturnItems() {
        this.SalesReturnItem = await this.http.get<SalesReturnItem>(this.API_URL + 'Sales/GetSalesReturnItems').toPromise();
        //console.log(this.SalesReturnItem);
        return this.SalesReturnItem;
    }

    async AddSalesReturnItem(SalesReturnItem: SalesReturnItem) {
        let x = await this.http.post(this.API_URL + "Sales/AddSalesReturnItem", SalesReturnItem).toPromise();
        console.log(x);
        return x;
    }

    async UpdateSalesReturnItem(SalesReturnItem: SalesReturnItem) {
        let a = await this.http.put(this.API_URL + 'Sales/UpdateSalesReturnItem', SalesReturnItem).toPromise();
        console.log(a);
        return a;
    }

    async DeleteSalesReturnItem(id) {
        let c = await this.http.delete(this.API_URL + 'Sales/DeleteSalesReturnItem/' + id).toPromise();
        console.log(c);
        return c;
    }

    //******************************************Purchase***********************************************//

    //PurchaseIndent
    async GetPurchaseIndents() {
        this.PurchaseIndent = await this.http.get<PurchaseIndent>(this.API_URL + 'Purchase/GetPurchaseIndents').toPromise();
        //console.log(this.PurchaseIndent);
        return this.PurchaseIndent;
    }

    async AddPurchaseIndent(PurchaseIndent: PurchaseIndent) {
        let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseIndent', PurchaseIndent).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePurchaseIndent(PurchaseIndent: PurchaseIndent) {
        let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseIndent', PurchaseIndent).toPromise();
        console.log(y);
        return y;
    }

    async DeletePurchaseIndent(id) {
        let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseIndent/' + id).toPromise();
        console.log(z);
        return z;
    }

    //PurchaseIndentItem
    async GetPurchaseIndentItems() {
        this.PurchaseIndentItem = await this.http.get<PurchaseIndentItem>(this.API_URL + 'Purchase/GetPurchaseIndentItems').toPromise();
        //console.log(this.PurchaseIndentItem);
        return this.PurchaseOrderItem;
    }

    async AddPurchaseIndentItem(PurchaseIndentItem: PurchaseIndentItem) {
        let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseIndentItem', PurchaseIndentItem).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePurchaseIndentItem(PurchaseIndentItem: PurchaseIndentItem) {
        let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseIndentItem', PurchaseIndentItem).toPromise();
        console.log(y);
        return y;
    }

    async DeletePurchaseIndentItem(id) {
        let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseIndentItem/' + id).toPromise();
        console.log(z);
        return z;
    }

    //PurchaseOrder
    async GetPurchaseOrders() {
        this.PurchaseOrder = await this.http.get<PurchaseOrder>(this.API_URL + 'Purchase/GetPurchaseOrders').toPromise();
        //console.log(this.PurchaseOrder);
        return this.PurchaseOrder;
    }

    async AddPurchaseOrder(PurchaseOrder: PurchaseOrder) {
        let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseOrder', PurchaseOrder).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePurchaseOrder(PurchaseOrder: PurchaseOrder) {
        let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseOrder', PurchaseOrder).toPromise();
        console.log(y);
        return y;
    }

    async DeletePurchaseOrder(id) {
        let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseOrder/' + id).toPromise();
        console.log(z);
        return z;
    }

    //PurchaseOrderItem
    async GetPurchaseOrderItems() {
        this.PurchaseOrderItem = await this.http.get<PurchaseOrderItem>(this.API_URL + 'Purchase/GetPurchaseOrderItems').toPromise();
        //console.log(this.PurchaseOrderItem);
        return this.PurchaseOrderItem;
    }

    async AddPurchaseOrderItem(PurchaseOrderItem: PurchaseOrderItem) {
        let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseOrderItem', PurchaseOrderItem).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePurchaseOrderItem(PurchaseOrderItem: PurchaseOrderItem) {
        let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseOrderItem', PurchaseOrderItem).toPromise();
        console.log(y);
        return y;
    }

    async DeletePurchaseOrderItem(id) {
        let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseOrderItem/' + id).toPromise();
        console.log(z);
        return z;
    }

    //PurchaseInvoice
    async GetPurchaseInvoices() {
        this.PurchaseInvoice = await this.http.get<PurchaseInvoice>(this.API_URL + 'Purchase/GetPurchaseInvoices').toPromise();
        //console.log(this.PurchaseInvoice);
        return this.PurchaseInvoice;
    }

    async AddPurchaseInvoice(PurchaseInvoice: PurchaseInvoice) {
        let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseInvoice', PurchaseInvoice).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePurchaseInvoice(PurchaseInvoice: PurchaseInvoice) {
        let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseInvoice', PurchaseInvoice).toPromise();
        console.log(y);
        return y;
    }

    async DeletePurchaseInvoice(id) {
        let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseInvoice/' + id).toPromise();
        console.log(z);
        return z;
    }

    //GRN
    async GetGRN() {
        this.GRN = await this.http.get<GRN>(this.API_URL + 'Purchase/GetGRNs').toPromise();
        //console.log(this.GRN);
        return this.GRN;
    }

    async AddGRN(GRN: GRN) {
        let x = await this.http.post(this.API_URL + "Purchase/AddGRN", GRN).toPromise();
        console.log(x);
        return x;
    }

    async UpdateGRN(GRN: GRN) {
        let a = await this.http.put(this.API_URL + 'Purchase/UpdateGRN', GRN).toPromise();
        console.log(a);
        return a;
    }

    async DeleteGRN(id) {
        let c = await this.http.delete(this.API_URL + 'Purchase/DeleteGRN' + id).toPromise();
        console.log(c);
        return c;
    }

    //PurchaseReturn
    async GetPurchaseReturns() {
        this.PurchaseReturn = await this.http.get<PurchaseReturn>(this.API_URL + 'Purchase/GetPurchaseReturns').toPromise();
        //console.log(this.PurchaseReturn);
        return this.PurchaseReturn;
    }

    async AddPurchaseReturn(PurchaseReturn: PurchaseReturn) {
        let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseReturn', PurchaseReturn).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePurchaseReturn(PurchaseReturn: PurchaseReturn) {
        let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseReturn', PurchaseReturn).toPromise();
        console.log(y);
        return y;
    }

    async DeletePurchaseReturn(id) {
        let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseReturn/' + id).toPromise();
        console.log(z);
        return z;
    }

    //PurchaseReturnItem
    async GetPurchaseReturnItems() {
        this.PurchaseReturnItem = await this.http.get<PurchaseReturnItem>(this.API_URL + 'Purchase/GetPurchaseReturnItems').toPromise();
        //console.log(this.PurchaseReturnItem);
        return this.PurchaseReturnItem;
    }

    async AddPurchaseReturnItem(PurchaseReturnItem: PurchaseReturnItem) {
        let x = await this.http.post(this.API_URL + 'Purchase/AddPurchaseReturnItem', PurchaseReturnItem).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePurchaseReturnItem(PurchaseReturnItem: PurchaseReturnItem) {
        let y = await this.http.put(this.API_URL + 'Purchase/UpdatePurchaseReturnItem', PurchaseReturnItem).toPromise();
        console.log(y);
        return y;
    }

    async DeletePurchaseReturnItem(id) {
        let z = await this.http.delete(this.API_URL + 'Purchase/DeletePurchaseReturnItem/' + id).toPromise();
        console.log(z);
        return z;
    }

    //**************************Setup *********************************//

    //Area
    async GetAreas() {
        this.Area = await this.http.get<Area>(this.API_URL + 'Setup/GetAreas').toPromise();
        //console.log(this.Area);
        return this.Area;
    }

    async AddArea(Area: Area) {
        let x = await this.http.post(this.API_URL + 'Setup/AddArea', Area).toPromise();
        console.log(x);
        return x;
    }

    async UpdateArea(Area: Area) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateArea', Area).toPromise();
        console.log(y);
        return y;
    }

    async DeleteArea(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteArea/' + id).toPromise();
        console.log(x);
        return x;
    }

    //Brand
    async GetBrands() {
        this.Brand = await this.http.get<Brand>(this.API_URL + 'Setup/GetBrands').toPromise();
        //console.log(this.Brand);
        return this.Brand;
    }

    async AddBrand(Brand: Brand) {
        let x = await this.http.post(this.API_URL + 'Setup/AddBrand', Brand).toPromise();
        console.log(x);
        return x;
    }

    async UpdateBrand(Brand: Brand) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateBrand', Brand).toPromise();
        console.log(y);
        return y;
    }

    async DeleteBrand(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteBrand/' + id).toPromise();
        console.log(x);
        return x;
    }

    //Comission
    async GetComissions() {
        this.Comission = await this.http.get<Comission>(this.API_URL + 'Setup/GetComissions').toPromise();
        //console.log(this.Comission);
        return this.Comission;
    }

    async AddComission(Comission: Comission) {
        let x = await this.http.post(this.API_URL + 'Setup/AddComission', Comission).toPromise();
        console.log(x);
        return x;
    }

    async UpdateComission(Comission: Comission) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateComission', Comission).toPromise();
        console.log(y);
        return y;
    }

    async DeleteComission(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteComission/' + id).toPromise();
        console.log(x);
        return x;
    }

    //Customer
    async GetCustomers() {
        this.Customer = await this.http.get<Customer>(this.API_URL + 'Setup/GetCustomers').toPromise();
        //console.log(this.Customer);
        return this.Customer;
    }

    async AddCustomer(Customer: Customer) {
        let x = await this.http.post(this.API_URL + 'Setup/AddCustomer', Customer).toPromise();
        console.log(x);
        return x;
    }

    async UpdateCustomer(Customer: Customer) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomer', Customer).toPromise();
        console.log(y);
        return y;
    }

    async DeleteCustomer(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomer/' + id).toPromise();
        console.log(x);
        return x;
    }

    //CustomerAccount
    async GetCustomerAccounts() {
        this.CustomerAccount = await this.http.get<CustomerAccount>(this.API_URL + 'Setup/GetCustomerAccounts').toPromise();
        //console.log(this.CustomerAccount);
        return this.CustomerAccount;
    }

    async AddCustomerAccount(CustomerAccount: CustomerAccount) {
        let x = await this.http.post(this.API_URL + 'Setup/AddCustomerAccount', CustomerAccount).toPromise();
        console.log(x);
        return x;
    }

    async UpdateCustomerAccount(CustomerAccount: CustomerAccount) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomerAccount', CustomerAccount).toPromise();
        console.log(y);
        return y;
    }

    async DeleteCustomerAccount(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomerAccount/' + id).toPromise();
        console.log(x);
        return x;
    }

    //CustomerBank
    async GetCustomerBanks() {
        this.CustomerBank = await this.http.get<CustomerBank>(this.API_URL + 'Setup/GetCustomerBanks').toPromise();
        //console.log(this.CustomerBank);
        return this.CustomerBank;
    }

    async AddCustomerBank(CustomerBank: CustomerBank) {
        let x = await this.http.post(this.API_URL + 'Setup/AddCustomerBank', CustomerBank).toPromise();
        console.log(x);
        return x;
    }

    async UpdateCustomerBank(CustomerBank: CustomerBank) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomerBank', CustomerBank).toPromise();
        console.log(y);
        return y;
    }

    async DeleteCustomerBank(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomerBank/' + id).toPromise();
        console.log(x);
        return x;
    }

    //CustomerPricePickLevel
    async GetPricePickLevels() {
        this.CustomerPricePickLevel = await this.http.get<CustomerPricePickLevel>(this.API_URL + 'Setup/GetCustomerPricePickLevels').toPromise();
        //console.log(this.CustomerPricePickLevel);
        return this.CustomerPricePickLevel;
    }

    async AddCustomerPricePickLevel(CustomerPricePickLevel: CustomerPricePickLevel) {
        let x = await this.http.post(this.API_URL + 'Setup/AddCustomerPricePickLevel', CustomerPricePickLevel).toPromise();
        console.log(x);
        return x;
    }

    async UpdateCustomerPricePickLevel(CustomerPricePickLevel: CustomerPricePickLevel) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomerPricePickLevel', CustomerPricePickLevel).toPromise();
        console.log(y);
        return y;
    }

    async DeleteCustomerPricePickLevel(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomerPricePickLevel/' + id).toPromise();
        console.log(x);
        return x;
    }

    //CustomerType
    async GetCustomerTypes() {
        this.CustomerType = await this.http.get<CustomerType>(this.API_URL + 'Setup/GetCustomerTypes').toPromise();
        //console.log(this.CustomerType);
        return this.CustomerType;
    }

    async AddCustomerType(CustomerType: CustomerType) {
        let x = await this.http.post(this.API_URL + 'Setup/AddCustomerType', CustomerType).toPromise();
        console.log(x);
        return x;
    }

    async UpdateCustomerType(CustomerType: CustomerType) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomerType', CustomerType).toPromise();
        console.log(y);
        return y;
    }

    async DeleteCustomerType(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomerType/' + id).toPromise();
        console.log(x);
        return x;
    }

    //CustomerWarehouse
    async GetCustomerWarehouses() {
        this.CustomerWarehouse = await this.http.get<CustomerWarehouse>(this.API_URL + 'Setup/GetCustomerWarehouses').toPromise();
        //console.log(this.CustomerWarehouse);
        return this.CustomerWarehouse;
    }

    async AddCustomerWarehouse(CustomerWarehouse: CustomerWarehouse) {
        let x = await this.http.post(this.API_URL + 'Setup/AddCustomerWarehouse', CustomerWarehouse).toPromise();
        console.log(x);
        return x;
    }

    async UpdateCustomerWarehouse(CustomerWarehouse: CustomerWarehouse) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateCustomerWarehouse', CustomerWarehouse).toPromise();
        console.log(y);
        return y;
    }

    async DeleteCustomerWarehouse(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteCustomerWarehouse/' + id).toPromise();
        console.log(x);
        return x;
    }

    //Distributor
    async GetDistributors() {
        this.Distributor = await this.http.get<Distributor>(this.API_URL + 'Setup/GetDistributors').toPromise();
        //console.log(this.Distributor);
        return this.Distributor;
    }

    async AddDistributor(Distributor: Distributor) {
        let x = await this.http.post(this.API_URL + 'Setup/AddDistributor', Distributor).toPromise();
        console.log(x);
        return x;
    }

    async UpdateDistributor(Distributor: Distributor) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateDistributor', Distributor).toPromise();
        console.log(y);
        return y;
    }

    async DeleteDistributor(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteDistributor/' + id).toPromise();
        console.log(x);
        return x;
    }

    //Inventory
    async GetInventories() {
        this.Inventory = await this.http.get<Inventory>(this.API_URL + 'Setup/GetInventories').toPromise();
        //console.log(this.Inventory);
        return this.Inventory;
    }

    async AddInventory(Inventory: Inventory) {
        let x = await this.http.post(this.API_URL + 'Setup/AddInventory', Inventory).toPromise();
        console.log(x);
        return x;
    }

    async UpdateInventory(Inventory: Inventory) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateInventory', Inventory).toPromise();
        console.log(y);
        return y;
    }

    async DeleteInventory(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteInventory/' + id).toPromise();
        console.log(x);
        return x;
    }

    //InventoryItem
    async GetInventoryItems() {
        this.InventoryItem = await this.http.get<InventoryItem>(this.API_URL + 'Setup/GetInventoryItems').toPromise();
        //console.log(this.InventoryItem);
        return this.InventoryItem;
    }

    async AddInventoryItem(InventoryItem: InventoryItem) {
        let x = await this.http.post(this.API_URL + 'Setup/AddInventoryItem', InventoryItem).toPromise();
        console.log(x);
        return x;
    }

    async UpdateInventoryItem(InventoryItem: InventoryItem) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateInventoryItem', InventoryItem).toPromise();
        console.log(y);
        return y;
    }

    async DeleteInventoryItem(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteInventoryItem/' + id).toPromise();
        console.log(x);
        return x;
    }

    //InventoryItemCategory
    async GetInventoryItemCategories() {
        this.InventoryItemCategory = await this.http.get<InventoryItemCategory>(this.API_URL + 'Setup/GetCategories').toPromise();
        //console.log(this.InventoryItemCategory);
        return this.InventoryItemCategory;
    }

    async AddInventoryItemCategory(InventoryItemCategory: InventoryItemCategory) {
        let x = await this.http.post(this.API_URL + 'Setup/AddCategory', InventoryItemCategory).toPromise();
        console.log(x);
        return x;
    }

    async UpdateInventoryItemCategory(InventoryItemCategory: InventoryItemCategory) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateCategory', InventoryItemCategory).toPromise();
        console.log(y);
        return y;
    }

    async DeleteInventoryItemCategory(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteCategory/' + id).toPromise();
        console.log(x);
        return x;
    }

    //ItemPriceStructure
    async GetItemPriceStructures() {
        this.ItemPriceStructure = await this.http.get<ItemPriceStructure>(this.API_URL + 'Setup/GetItemPriceStructures').toPromise();
        //console.log(this.ItemPriceStructure);
        return this.ItemPriceStructure;
    }

    async AddItemPriceStructure(ItemPriceStructure: ItemPriceStructure) {
        let x = await this.http.post(this.API_URL + 'Setup/AddItemPriceStructure', ItemPriceStructure).toPromise();
        console.log(x);
        return x;
    }

    async UpdateItemPriceStructure(ItemPriceStructure: ItemPriceStructure) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateItemPriceStructure', ItemPriceStructure).toPromise();
        console.log(y);
        return y;
    }

    async DeleteItemPriceStructure(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteItemPriceStructure/' + id).toPromise();
        console.log(x);
        return x;
    }

    //ModeOfPayment
    async GetModeOfPayments() {
        this.ModeOfPayment = await this.http.get<ModeOfPayment>(this.API_URL + 'Setup/GetModeOfPayments').toPromise();
        //console.log(this.ModeOfPayment);
        return this.ModeOfPayment;
    }

    async AddModeOfPayment(ModeOfPayment: ModeOfPayment) {
        let x = await this.http.post(this.API_URL + 'Setup/AddModeOfPayment', ModeOfPayment).toPromise();
        console.log(x);
        return x;
    }

    async UpdateModeOfPayment(ModeOfPayment: ModeOfPayment) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateModeOfPayment', ModeOfPayment).toPromise();
        console.log(y);
        return y;
    }

    async DeleteModeOfPayment(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteModeOfPayment/' + id).toPromise();
        console.log(x);
        return x;
    }

    //PackageType
    async GetPackageTypes() {
        this.PackageType = await this.http.get<PackageType>(this.API_URL + 'Setup/GetPackageTypes').toPromise();
        //console.log(this.PackageType);
        return this.PackageType;
    }

    async AddPackageType(PackageType: PackageType) {
        let x = await this.http.post(this.API_URL + 'Setup/AddPackageType', PackageType).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePackageType(PackageType: PackageType) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdatePackageType', PackageType).toPromise();
        console.log(y);
        return y;
    }

    async DeletePackageType(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeletePackageType/' + id).toPromise();
        console.log(x);
        return x;
    }

    //PackCategory
    async GetPackCategories() {
        this.PackCategory = await this.http.get<PackCategory>(this.API_URL + 'Setup/GetPackCategories').toPromise();
        //console.log(this.PackCategory);
        return this.PackCategory;
    }

    async AddPackCategory(PackCategory: PackCategory) {
        let x = await this.http.post(this.API_URL + 'Setup/AddPackCategory', PackCategory).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePackCategory(PackCategory: PackCategory) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdatePackCategory', PackCategory).toPromise();
        console.log(y);
        return y;
    }

    async DeletePackCategory(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeletePackCategory/' + id).toPromise();
        console.log(x);
        return x;
    }

    //PackSize
    async GetPackSizes() {
        this.PackSize = await this.http.get<PackSize>(this.API_URL + 'Setup/GetPackSizes').toPromise();
        //console.log(this.PackSize);
        return this.PackSize;
    }

    async AddPackSize(PackSize: PackSize) {
        let x = await this.http.post(this.API_URL + 'Setup/AddPackSize', PackSize).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePackSize(PackSize: PackSize) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdatePackSize', PackSize).toPromise();
        console.log(y);
        return y;
    }

    async DeletePackSize(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeletePackSize/' + id).toPromise();
        console.log(x);
        return x;
    }

    //PackType
    async GetPackTypes() {
        this.PackType = await this.http.get<PackType>(this.API_URL + 'Setup/GetPackTypes').toPromise();
        //console.log(this.PackType);
        return this.PackType;
    }

    async AddPackType(PackType: PackType) {
        let x = await this.http.post(this.API_URL + 'Setup/AddPackType', PackType).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePackType(PackType: PackType) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdatePackType', PackType).toPromise();
        console.log(y);
        return y;
    }

    async DeletePackType(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeletePackType/' + id).toPromise();
        console.log(x);
        return x;
    }

    //ProductType
    async GetProductTypes() {
        this.ProductType = await this.http.get<ProductType>(this.API_URL + 'Setup/GetProductTypes').toPromise();
        //console.log(this.ProductType);
        return this.ProductType;
    }

    async AddProductType(ProductType: ProductType) {
        let x = await this.http.post(this.API_URL + 'Setup/AddProductType', ProductType).toPromise();
        console.log(x);
        return x;
    }

    async UpdateProductType(ProductType: ProductType) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateProductType', ProductType).toPromise();
        console.log(y);
        return y;
    }

    async DeleteProductType(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteProductType/' + id).toPromise();
        console.log(x);
        return x;
    }

    //Region
    async GetRegions() {
        this.Region = await this.http.get<Region>(this.API_URL + 'Setup/GetRegions').toPromise();
        //console.log(this.Region);
        return this.Region;
    }

    async AddRegion(Region: Region) {
        let x = await this.http.post(this.API_URL + 'Setup/AddRegion', Region).toPromise();
        console.log(x);
        return x;
    }

    async UpdateRegion(Region: Region) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateRegion', Region).toPromise();
        console.log(y);
        return y;
    }

    async DeleteRegion(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteRegion/' + id).toPromise();
        console.log(x);
        return x;
    }

    //ReturnReason
    async GetReturnReasons() {
        this.ReturnReason = await this.http.get<ReturnReason>(this.API_URL + 'Setup/GetReturnReasons').toPromise();
        //console.log(this.ReturnReason);
        return this.ReturnReason;
    }

    async AddReturnReason(ReturnReason: ReturnReason) {
        let x = await this.http.post(this.API_URL + 'Setup/AddReturnReason', ReturnReason).toPromise();
        console.log(x);
        return x;
    }

    async UpdateReturnReason(ReturnReason: ReturnReason) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateReturnReason', ReturnReason).toPromise();
        console.log(y);
        return y;
    }

    async DeleteReturnReason(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteReturnReason/' + id).toPromise();
        console.log(x);
        return x;
    }

    //SalesPerson
    async GetSalesPeople() {
        this.SalesPerson = await this.http.get<SalesPerson>(this.API_URL + 'Setup/GetSalesPeople').toPromise();
        //console.log(this.SalesPerson);
        return this.SalesPerson;
    }

    async AddSalesPerson(SalesPerson: SalesPerson) {
        let x = await this.http.post(this.API_URL + 'Setup/AddSalesPerson', SalesPerson).toPromise();
        console.log(x);
        return x;
    }

    async UpdateSalesPerson(SalesPerson: SalesPerson) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateSalesPerson', SalesPerson).toPromise();
        console.log(y);
        return y;
    }

    async DeleteSalesPerson(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteSalesPerson/' + id).toPromise();
        console.log(x);
        return x;
    }

    //Supplier
    async GetSuppliers() {
        this.Supplier = await this.http.get<Supplier>(this.API_URL + 'Setup/GetSuppliers').toPromise();
        //console.log(this.Supplier);
        return this.Supplier;
    }

    async AddSupplier(Supplier: Supplier) {
        let x = await this.http.post(this.API_URL + 'Setup/AddSupplier', Supplier).toPromise();
        console.log(x);
        return x;
    }

    async UpdateSupplier(Supplier: Supplier) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateSupplier', Supplier).toPromise();
        console.log(y);
        return y;
    }

    async DeleteSupplier(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteSupplier/' + id).toPromise();
        console.log(x);
        return x;
    }

    //Tax
    async GetTaxes() {
        this.Tax = await this.http.get<Tax>(this.API_URL + 'Setup/GetTaxes').toPromise();
        //console.log(this.Tax);
        return this.Tax;
    }

    async AddTax(Tax: Tax) {
        let x = await this.http.post(this.API_URL + 'Setup/AddTax', Tax).toPromise();
        console.log(x);
        return x;
    }

    async UpdateTax(Tax: Tax) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateTax', Tax).toPromise();
        console.log(y);
        return y;
    }

    async DeleteTax(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteTax/' + id).toPromise();
        console.log(x);
        return x;
    }

    //Territory
    async GetTerritories() {
        this.Territory = await this.http.get<Territory>(this.API_URL + 'Setup/GetTerritories').toPromise();
        //console.log(this.Territory);
        return this.Territory;
    }

    async AddTerritory(Territory: Territory) {
        let x = await this.http.post(this.API_URL + 'Setup/AddTerritory', Territory).toPromise();
        console.log(x);
        return x;
    }

    async UpdateTerritory(Territory: Territory) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateTerritory', Territory).toPromise();
        console.log(y);
        return y;
    }

    async DeleteTerritory(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteTerritory/' + id).toPromise();
        console.log(x);
        return x;
    }

    //Transport
    async GetTransports() {
        this.Transport = await this.http.get<Transport>(this.API_URL + 'Setup/GetTransports').toPromise();
        //console.log(this.Transport);
        return this.Transport;
    }

    async AddTransport(Transport: Transport) {
        let x = await this.http.post(this.API_URL + 'Setup/AddTransport', Transport).toPromise();
        console.log(x);
        return x;
    }

    async UpdateTransport(Transport: Transport) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateTransport', Transport).toPromise();
        console.log(y);
        return y;
    }

    async DeleteTransport(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteTransport/' + id).toPromise();
        console.log(x);
        return x;
    }

    //Unit
    async GetUnits() {
        this.Unit = await this.http.get<Unit>(this.API_URL + 'Setup/GetUnits').toPromise();
        //console.log(this.Unit);
        return this.Unit;
    }

    async AddUnit(Unit: Unit) {
        let x = await this.http.post(this.API_URL + 'Setup/AddUnit', Unit).toPromise();
        console.log(x);
        return x;
    }

    async UpdateUnit(Unit: Unit) {
        let y = await this.http.put(this.API_URL + 'Setup/UpdateUnit', Unit).toPromise();
        console.log(y);
        return y;
    }

    async DeleteUnit(id) {
        let x = await this.http.delete(this.API_URL + 'Setup/DeleteUnit/' + id).toPromise();
        console.log(x);
        return x;
    }
}