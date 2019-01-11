import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PharmacyService } from '../../core';
import { PurchaseOrder } from '../../core/Models/Pharmacy/PurchaseOrder';
import { Supplier } from '../../core/Models/Pharmacy/Supplier';
import { InventoryItem } from '../../core/Models/Pharmacy/InventoryItem';
import { Currency } from '../../core/Models/Pharmacy/Currency';
import { PurchaseOrderItem } from '../../core/Models/Inventory/Purchase/PurchaseOrderItem';
import { Inventory } from '../../core/Models/Pharmacy/Inventory';

import { DISABLED } from '@angular/forms/src/model';




@Component({
    selector: 'app-purchase-order',
    templateUrl: './purchase-order.component.html',
    styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

    public PurchaseOrders: PurchaseOrder;
    public NewPurchaseOrder: PurchaseOrder;
    public Suppliers: Supplier;
    public SelectedSupplier: Supplier;
    public PurchaseOrderForm: FormGroup;
    public PurchaseOrderDetailsForm: FormGroup;
    public PurchaseOrderDetailsFormArray: any[] = [];
    public InventoryItems: InventoryItem;
    public SelectedInventoryItem: any;
    public PurchaseOrderDetailsArray: any[] = [];
    public FilteredInventoryItems: any;
    public Currencies: Currency[];
    public SelectedCurrency: Currency;
    public TotalOrderAmount: number = 0;
    public GrossAmount: number = 0;
    public SalesTaxAmount: number = 0;
    public DiscountAmount: number = 0;
    public NetAmount: number = 0;
    public TotalQuantity: number = 0;
    public Inventories: Inventory[] = [];

    public fieldsenabled: boolean = true;


    constructor(public PharmacyService: PharmacyService, public FormBuilder: FormBuilder) {
        this.PurchaseOrderForm = this.FormBuilder.group({
            OrderNumber: [''],
            OrderDate: [''],
            Status: [''],
            Origin: [''],
            Remarks: [''],
            SupplierId: [''],
            CurrencyId: [''],
            ExchangeRate: [''],
            PurchaseOrderItems: this.FormBuilder.array([])
        });

        this.PurchaseOrderDetailsForm = this.FormBuilder.group({
            InventoryItemId: [''],
            ManualCode: [''],
            Description: [''],
            PackType: [''],
            StockQuantity: [''],
            OrderQuantity: [''],
            BonusQuantity: [''],
            PerUnit: [''],
            Rate: [''],
            GrossAmount: [''],
            DiscountPercentage: [''],
            DiscountAmount: [''],
            SalesTaxPercentage: [''],
            SalesTaxAmount: [''],
            NetAmount: ['']
        });
    }

    ngOnInit() {
        this.PharmacyService.GetSuppliers().subscribe((res: Supplier) => { this.Suppliers = res; });
        this.PharmacyService.GetInventoryItems().subscribe((res: InventoryItem) => { this.InventoryItems = res; this.FilteredInventoryItems = res; });
        this.PharmacyService.GetCurrency().subscribe((res: Currency[]) => { this.Currencies = res; });
    }

    // async AddPurchaseOrder(value) {
    //     await this.PharmacyService.AddPurchaseOrder(value).toPromise();
    //     this.PharmacyService.GetPurchaseOrders().subscribe((res : PurchaseOrder ) => this.PurchaseOrders = res);
    // }

    // UpdateModel(value) {
    //     this.UpdatedModel = { ...value.oldData, ...value.newData };
    // }

    // async UpdatePurchaseOrder() {
    //     await this.PharmacyService.UpdatePurchaseOrder(this.UpdatedModel).toPromise();
    // }

    // async DeletePurchaseOrder(value) {
    //     await this.PharmacyService.DeletePurchaseOrder(value.key.PurchaseOrderId).toPromise();
    // }

    GetSupplierDetails(value) {
        // console.log(value);
        var a: any = this.Suppliers;
        this.SelectedSupplier = a.find(a => a.inventoryCurrencyId == value);
    }

    GetCurrencyDetails(value) {
        // console.log(value);
        this.SelectedCurrency = this.Currencies.find(a => a.inventoryCurrencyId == value);
    }

    GetItemDetails(value) {
        // console.log(value);
        var a: any = this.InventoryItems;
        this.SelectedInventoryItem = a.find(x => x.itemCode == value);
        // console.log(this.SelectedInventoryItem);
    }

    CalculateGrossAmount(ordervalue, bonusvalue) {
        this.GrossAmount = (<number>ordervalue * <number>this.SelectedInventoryItem.retailPrice) + (<number>bonusvalue * <number>this.SelectedInventoryItem.retailPrice);
        // console.log(this.GrossAmount);
    }

    CalculateSalesTaxAmount(value) {
        // console.log(value);
        this.fieldsenabled = false;

        this.SalesTaxAmount = (<number>value * <number>this.GrossAmount) / 100;
        // console.log(this.SalesTaxAmount);
        this.CalculateNetAmount();
    }

    CalculateDiscountAmount(value) {
        // console.log(value);

        this.DiscountAmount = (<number>value * (<number>this.GrossAmount + this.SalesTaxAmount)) / 100;
        console.log(this.DiscountAmount);
        this.CalculateNetAmount();
    }

    CalculateNetAmount() {
        this.NetAmount = this.GrossAmount + this.SalesTaxAmount - this.DiscountAmount;
        // console.log(this.NetAmount);
    }

    AddPurchaseOrderDetails(value) {
        // console.log(value);
        this.PurchaseOrderDetailsForm.value.InventoryItemId = <number>this.SelectedInventoryItem.inventoryItemId;
        this.PurchaseOrderDetailsForm.value.ManualCode = this.SelectedInventoryItem.itemCode;
        this.PurchaseOrderDetailsForm.value.Description = this.SelectedInventoryItem.description;
        this.PurchaseOrderDetailsForm.value.PackType = this.SelectedInventoryItem.packType.name;
        this.PurchaseOrderDetailsForm.value.StockQuantity = <number>this.SelectedInventoryItem.inventory.stockQuantity;
        this.PurchaseOrderDetailsForm.value.PerUnit = this.SelectedInventoryItem.unit.name;
        this.PurchaseOrderDetailsForm.value.Rate = <number>this.SelectedInventoryItem.retailPrice;
        this.PurchaseOrderDetailsForm.value.GrossAmount = this.GrossAmount;
        this.PurchaseOrderDetailsForm.value.SalesTaxAmount = this.SalesTaxAmount;
        this.PurchaseOrderDetailsForm.value.DiscountAmount = this.DiscountAmount;
        this.PurchaseOrderDetailsForm.value.NetAmount = this.NetAmount;
        // console.log(this.PurchaseOrderDetailsForm.value);

        this.FilteredInventoryItems = this.FilteredInventoryItems.filter(b => b.itemCode != value.ManualCode);
        // console.log(this.FilteredInventoryItems);

        this.PurchaseOrderDetailsFormArray.push(this.PurchaseOrderDetailsForm.value);
        // console.log(this.PurchaseOrderDetailsFormArray);

        var b = {
            PackType: this.SelectedInventoryItem.packType.name,
            PackSize: <number>this.SelectedInventoryItem.packSize.size,
            Quantity: <number>this.PurchaseOrderDetailsForm.value.BonusQuantity + <number>this.PurchaseOrderDetailsForm.value.OrderQuantity,
            ExchangeRate: <number>this.PurchaseOrderForm.value.ExchangeRate,
            GrossAmount: this.GrossAmount,
            DiscountPercentage: <number>this.PurchaseOrderDetailsForm.value.DiscountPercentage,
            DiscountAmount: this.DiscountAmount,
            AfterDiscountAmount: this.GrossAmount + this.SalesTaxAmount - this.DiscountAmount,
            GrandTotal: this.GrossAmount + this.SalesTaxAmount - this.DiscountAmount,
            GstPercentage: <number>this.PurchaseOrderDetailsForm.value.SalesTaxPercentage,
            GstAmount: this.SalesTaxAmount,
            AfterGstAmount: this.GrossAmount + this.SalesTaxAmount,
            NetAmount: this.NetAmount,
            RetailPrice: (<number>this.SelectedInventoryItem.retailPrice * <number>this.PurchaseOrderDetailsForm.value.OrderQuantity) + (<number>this.SelectedInventoryItem.retailPrice * <number>this.PurchaseOrderDetailsForm.value.BonusQuantity),
            CostPrice: (<number>this.SelectedInventoryItem.costPrice * <number>this.PurchaseOrderDetailsForm.value.OrderQuantity) + (<number>this.SelectedInventoryItem.costPrice * <number>this.PurchaseOrderDetailsForm.value.BonusQuantity),
            InventoryItemId: this.SelectedInventoryItem.inventoryItemId,
            InventoryId: this.SelectedInventoryItem.inventory.inventoryId,
            Rate: <number>this.SelectedInventoryItem.retailPrice,
        };
        // console.log(b);

        this.TotalOrderAmount += this.NetAmount;
        this.TotalQuantity += <number>this.PurchaseOrderDetailsForm.value.BonusQuantity + <number>this.PurchaseOrderDetailsForm.value.OrderQuantity;
        this.PurchaseOrderDetailsArray.push(b);
        // console.log(this.PurchaseOrderDetailsArray);
        this.PurchaseOrderDetailsForm.reset();

        //Stock
        var a: any = {
            inventoryId: this.SelectedInventoryItem.inventory.inventoryId,
            inventoryItemId: this.SelectedInventoryItem.inventoryitemId,
            stockQuantity: this.SelectedInventoryItem.inventory.stockQuantity + this.TotalQuantity,
        };
        this.Inventories.push(a);
    }

    RemovePurchaseOrderDetails(d) {
        console.log("Remove event", d);
        // this.PurchaseOrderDetailsFormArray.splice(index, 1);
        // this.PurchaseOrderDetailsArray.splice(index, 1);
        // this.Inventories.splice(index, 1);


        this.TotalOrderAmount -= Number.parseInt(d.NetAmount);
        this.TotalQuantity -= Number.parseInt(d.quantity);
    }

    ResetWholeForm() {
        this.PurchaseOrderForm.reset();
        this.PurchaseOrderDetailsForm.reset();
        this.PurchaseOrderDetailsFormArray = [];
        this.Inventories = [];
        this.PurchaseOrderDetailsArray = [];
        this.TotalQuantity = 0;
        this.TotalOrderAmount = 0;
    }

    SubmitPurchaseOrder() {

        var a: any = {
            OrderDate: this.PurchaseOrderForm.value.OrderDate || new Date().toISOString(),
            Status: this.PurchaseOrderForm.value.Status,
            SupplierId: this.PurchaseOrderForm.value.SupplierId,
            Origin: this.PurchaseOrderForm.value.Origin,
            InventoryCurrencyId: this.PurchaseOrderForm.value.CurrencyId,
            Remarks: this.PurchaseOrderForm.value.Remarks,
            PurchaseOrderItems: this.PurchaseOrderDetailsArray
        };

        // console.log(a);
        this.NewPurchaseOrder = a;
        console.log("NewPurchaseOrder", this.NewPurchaseOrder);
        console.log("Inventories", this.Inventories);
        this.PharmacyService.AddPurchaseOrder(this.NewPurchaseOrder).subscribe(res => console.log(res));
        this.PharmacyService.UpdateInventories(this.Inventories).subscribe(res => console.log(res));

        this.ResetWholeForm()
    }

}



