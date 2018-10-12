import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PharmacyService } from '../../core';
import { PurchaseOrder } from '../../core/Models/Pharmacy/PurchaseOrder';
import { Supplier } from '../../core/Models/Pharmacy/Supplier';
import { InventoryItem } from '../../core/Models/Pharmacy/InventoryItem';
import { Currency } from '../../core/Models/Pharmacy/Currency';
import { PurchaseOrderItem } from '../../core/Models/Inventory/Purchase/PurchaseOrderItem';



@Component({
    selector: 'app-purchase-order',
    templateUrl: './purchase-order.component.html',
    styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

    private PurchaseOrders : PurchaseOrder;
    private NewPurchaseOrder : PurchaseOrder;
    private Suppliers: Supplier;
    private SelectedSupplier : Supplier;
    private UpdatedModel : any;
    private PurchaseOrderForm : FormGroup;
    private PurchaseOrderDetailsForm : FormGroup;
    private InventoryItems : InventoryItem;
    private SelectedInventoryItem : any;
    private PurchaseOrderDetail : PurchaseOrderItem;
    private PurchaseOrderDetailsArray : any[] = [];
    private FilteredInventoryItems : any;
    private Currencies : Currency[];
    private SelectedCurrency : Currency;
    private TotalOrderAmount : number;
    private GrossAmount : number = 0;
    private SalesTaxAmount : number = 0;
    private DiscountAmount : number = 0;
    private NetAmount : number = 0;
    private OrderQuantity : number = 0;

    constructor(private PharmacyService: PharmacyService, private FormBuilder : FormBuilder) {
        this.PurchaseOrderForm = this.FormBuilder.group( {
            OrderNumber: [''],
            OrderDate: [''],
            Status: [''],
            Origin: [''],
            Remarks: [''],
            SupplierId: [''],
            CurrencyId : [''],
            ExchangeRate : [''],
            PurchaseOrderItems: this.FormBuilder.array([])
        } );

        this.PurchaseOrderDetailsForm = this.FormBuilder.group( {
            InventoryItemId : [''],
            ManualCode : [''],
            Description : [''],
            PackType : [''],
            StockQuantity: [''],
            OrderQuantity : [''],
            BonusQuantity : [''],
            PerUnit : [''],
            Rate : [''],
            GrossAmount : [''],
            DiscountPercentage : [''],
            DiscountAmount : [''],
            SalesTaxPercentage : [''],
            SalesTaxAmount : [''],
            NetAmount : ['']
        } );
    }

    ngOnInit() {
        this.PharmacyService.GetSuppliers().subscribe((res : Supplier ) => { this.Suppliers = res; });
        this.PharmacyService.GetInventoryItems().subscribe((res : InventoryItem ) => { this.InventoryItems = res; this.FilteredInventoryItems = res; });
        this.PharmacyService.GetCurrency().subscribe((res : Currency[]) => { this.Currencies = res; });
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

    GetSupplierDetails(value){
        console.log(value);
        var a : any = this.Suppliers;
        this.SelectedSupplier = a.find(a => a.inventoryCurrencyId == value);
    }

    GetCurrencyDetails(value){
        console.log(value);
        this.SelectedCurrency = this.Currencies.find(a => a.inventoryCurrencyId == value);
    }

    GetItemDetails(value) {
        console.log(value);
        var a : any = this.InventoryItems;
        this.SelectedInventoryItem = a.find(x => x.itemCode == value);
        console.log(this.SelectedInventoryItem);
    }

    CalculateGrossAmount(ordervalue, bonusvalue) {
        this.GrossAmount = (<number>ordervalue * <number>this.SelectedInventoryItem.retailPrice) + (<number>bonusvalue * <number>this.SelectedInventoryItem.retailPrice);
        console.log(this.GrossAmount);
        // this.PurchaseOrderDetailsForm.value.GrossAmount = this.GrossAmount;
    }

    CalculateSalesTaxAmount(value) {
        console.log(value);
        this.SalesTaxAmount = (<number>value * <number>this.GrossAmount) / 100;
        console.log(this.SalesTaxAmount);
        // this.PurchaseOrderDetailsForm.value.SalesTaxAmount = this.SalesTaxAmount;
        this.CalculateNetAmount();
    }

    CalculateDiscountAmount(value) {
        console.log(value);
        this.DiscountAmount = (<number>value * (<number>this.GrossAmount + this.SalesTaxAmount)) / 100;
        console.log(this.DiscountAmount);
        // this.PurchaseOrderDetailsForm.value.DiscountAmount = this.DiscountAmount;
        this.CalculateNetAmount();
    }

    CalculateNetAmount() {
        this.NetAmount = this.GrossAmount + this.SalesTaxAmount - this.DiscountAmount;
        console.log(this.NetAmount);
        // this.PurchaseOrderDetailsForm.value.NetAmount = this.NetAmount;
    }

    AddPurchaseOrderDetails(value) {
        console.log(value);
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
        console.log(this.PurchaseOrderDetailsForm.value);

        this.FilteredInventoryItems = this.FilteredInventoryItems.filter(b => b.itemCode != value.ManualCode);
        console.log(this.FilteredInventoryItems);

        var b = {
            PackType: this.PurchaseOrderDetailsForm.value.packType.name,
            PackSize: this.PurchaseOrderDetailsForm.value.packSize.name,
            Quantity: this.OrderQuantity,
            ExchangeRate: this.PurchaseOrderForm.value.ExchangeRate,
            GrossAmount: this.PurchaseOrderDetailsForm.value.GrossAmount,
            DiscountPercentage: this.PurchaseOrderDetailsForm.value.DiscountPercentage,
            DiscountAmount: this.PurchaseOrderDetailsForm.value.DiscountAmount,
            AfterDiscountAmount: this.PurchaseOrderDetailsForm.value.GrossAmount + this.PurchaseOrderDetailsForm.value.SalesTaxAmount - this.PurchaseOrderDetailsForm.value.DiscountAmount,
            GstPercentage: this.PurchaseOrderDetailsForm.value.SalesTaxPercentage,
            GstAmount: this.PurchaseOrderDetailsForm.value.SalesTaxAmount,
            AfterGstAmount: this.PurchaseOrderDetailsForm.value.GrossAmount + this.PurchaseOrderDetailsForm.value.SalesTaxAmount,
            NetAmount: this.PurchaseOrderDetailsForm.value.NetAmount,
            RetailPrice: this.PurchaseOrderDetailsForm.value.RetailPrice * this.OrderQuantity,
            CostPrice: <number>this.SelectedInventoryItem.costPrice * this.OrderQuantity,
            InventoryItemId: this.SelectedInventoryItem.inventoryItemId,
            InventoryId: this.SelectedInventoryItem.InventoryId
        };
        console.log(b);

        // this.PurchaseOrderDetail = value;
        // //this.TotalOrderAmount += Number.parseInt(this.PurchaseOrderDetailsForm.value.NetAmount);
        this.PurchaseOrderDetailsArray.push(b);
        console.log(this.PurchaseOrderDetailsArray);

        this.PurchaseOrderDetailsForm.reset();
    }

    RemovePurchaseOrderDetails(index, value) {
        this.PurchaseOrderDetailsArray.splice(index, 1);
        this.TotalOrderAmount -= Number.parseInt(value);
    }

    SavePurchaseOrderForm(value) {
        console.log(value);
    }

    SubmitPurchaseOrder() {
        console.log(this.PurchaseOrderDetailsArray);
        // this.NewPurchaseOrder.PurchaseOrderDetails = this.PurchaseOrderDetailsArray;
        // this.NewPurchaseOrder.OrderDate = this.PurchaseOrderForm.value.OrderDate;
        // this.PharmacyService.AddSalesOrder().subscribe(r => console.log(r));
        // this.UpdateStockPosition(this.Invs);
    }

}




