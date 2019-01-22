import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PharmacyService, AuthService } from '../../core';
import { PurchaseOrder } from '../../core/Models/Pharmacy/PurchaseOrder';
import { Supplier } from '../../core/Models/Pharmacy/Supplier';
import { InventoryItem } from '../../core/Models/Pharmacy/InventoryItem';
import { Currency } from '../../core/Models/Pharmacy/Currency';
import { Inventory } from '../../core/Models/Pharmacy/Inventory';

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

    public PackSize: any;
    public SelectItemPackSize : number = 1;
    public fieldsenabled: boolean = true;

    constructor(public PharmacyService: PharmacyService, public FormBuilder: FormBuilder, public Auth : AuthService) {
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
        this.PharmacyService.GetInventoryItems().subscribe((res: InventoryItem) => {this.InventoryItems = res; this.FilteredInventoryItems = res; });
        this.PharmacyService.GetCurrency().subscribe((res: Currency[]) => { this.Currencies = res; });
        this.PharmacyService.GetPackSizes().subscribe((res : any) => {this.PackSize = res; });

        // this.PharmacyService.GetSuppliersByCompany(this.Auth.getUserCompanyId()).subscribe((res: Supplier) => { this.Suppliers = res; });
        // this.PharmacyService.GetInventoryItemsByCompany(this.Auth.getUserCompanyId()).subscribe((res: InventoryItem) => { this.InventoryItems = res; this.FilteredInventoryItems = res; });
        // this.PharmacyService.getInventoryCurrenciesByCompany(this.Auth.getUserCompanyId()).subscribe((res: Currency[]) => { this.Currencies = res; });
        // this.PharmacyService.GetPackSizesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => { this.PackSize = res; });
    }

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
        let b : any = this.PackSize.find(a => a.packSizeId == this.SelectedInventoryItem.packSizeId);
        if(b) {
            this.SelectItemPackSize = b.size;
        }
        // console.log(this.SelectedInventoryItem);
    }

    CalculateGrossAmount(exchangerate, ordervalue, bonusvalue) {
        //this.GrossAmount = (<number>ordervalue * <number>this.SelectedInventoryItem.retailPrice) + (<number>bonusvalue * <number>this.SelectedInventoryItem.retailPrice);
        this.GrossAmount = (Number.parseInt(ordervalue) * Number.parseFloat(exchangerate) * this.SelectItemPackSize * Number.parseFloat(this.SelectedInventoryItem.unitPrice));
        // console.log(this.GrossAmount);
    }

    CalculateSalesTaxAmount(value) {
        // console.log(value);
        this.fieldsenabled = false;

        this.SalesTaxAmount = (Number.parseFloat(value) * this.GrossAmount) / 100;
        // console.log(this.SalesTaxAmount);
        this.CalculateNetAmount();
    }

    CalculateDiscountAmount(value) {
        // console.log(value);

        this.DiscountAmount = (Number.parseFloat(value) * (this.GrossAmount + this.SalesTaxAmount)) / 100;
        // console.log(this.DiscountAmount);
        this.CalculateNetAmount();
    }

    CalculateNetAmount() {
        this.NetAmount = this.GrossAmount + this.SalesTaxAmount - this.DiscountAmount;
        // console.log(this.NetAmount);
    }

    AddPurchaseOrderDetails(value) {
        // console.log(value);
        let packtype : string = '';
        let unit : string = '';
        let stockquantity : number = 0;
        let inventory : number = null;

        if(this.SelectedInventoryItem.packType != null && this.SelectedInventoryItem.packType != undefined) {
            packtype = this.SelectedInventoryItem.packType.name;
        }

        if(this.SelectedInventoryItem.unit != null && this.SelectedInventoryItem.unit != undefined) {
            unit = this.SelectedInventoryItem.unit.name;
        }

        if(this.SelectedInventoryItem.inventory != null && this.SelectedInventoryItem.inventory != undefined) {
            stockquantity = this.SelectedInventoryItem.inventory.stockQuantity;
            inventory = this.SelectedInventoryItem.inventory.inventoryId;
        }

        this.PurchaseOrderDetailsForm.value.InventoryItemId = <number>this.SelectedInventoryItem.inventoryItemId;
        this.PurchaseOrderDetailsForm.value.ManualCode = this.SelectedInventoryItem.itemCode || '';
        this.PurchaseOrderDetailsForm.value.Description = this.SelectedInventoryItem.description || '';
        this.PurchaseOrderDetailsForm.value.PackType = packtype;
        this.PurchaseOrderDetailsForm.value.StockQuantity = stockquantity;
        this.PurchaseOrderDetailsForm.value.PerUnit = unit;
        this.PurchaseOrderDetailsForm.value.Rate = <number>this.SelectedInventoryItem.unitPrice || 0;
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
            CompanyId : this.Auth.getUserCompanyId(),
            PackType: packtype,
            PackSize: this.SelectItemPackSize || 0,
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
            RetailPrice: ((<number>this.SelectedInventoryItem.retailPrice || 0) * Number.parseFloat(this.PurchaseOrderForm.value.ExchangeRate) * <number>this.PurchaseOrderDetailsForm.value.OrderQuantity),
            CostPrice: (<number>this.SelectedInventoryItem.costPrice * Number.parseFloat(this.PurchaseOrderForm.value.ExchangeRate) * <number>this.PurchaseOrderDetailsForm.value.OrderQuantity),
            InventoryItemId: this.SelectedInventoryItem.inventoryItemId,
            InventoryId: inventory,
            Rate: <number>this.SelectedInventoryItem.unitPrice || 0,
        };
        // console.log(b);

        this.TotalOrderAmount += this.NetAmount;
        this.TotalQuantity += <number>this.PurchaseOrderDetailsForm.value.BonusQuantity + <number>this.PurchaseOrderDetailsForm.value.OrderQuantity;
        this.PurchaseOrderDetailsArray.push(b);
        // console.log(this.PurchaseOrderDetailsArray);
        this.PurchaseOrderDetailsForm.reset();

        //Stock
        if(inventory != null) {
            var a: any = {
                companyId : this.Auth.getUserCompanyId(),
                inventoryId: inventory,
                inventoryItemId: this.SelectedInventoryItem.inventoryitemId,
                stockQuantity: this.SelectedInventoryItem.inventory.stockQuantity + this.TotalQuantity,
            };
            this.Inventories.push(a);
        }
    }

    RemovePurchaseOrderDetails(d) {
        // console.log("Remove event", d);
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
            CompanyId : this.Auth.getUserCompanyId(),
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
        this.PharmacyService.AddPurchaseOrder(this.NewPurchaseOrder).subscribe(res => console.log(res));
        this.PharmacyService.UpdateInventories(this.Inventories).subscribe(res => console.log(res));

        this.ResetWholeForm()
    }

}



