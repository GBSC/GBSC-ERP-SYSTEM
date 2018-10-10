import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PharmacyService } from '../../core';
import { PurchaseOrder } from '../../core/Models/Pharmacy/PurchaseOrder';
import { Supplier } from '../../core/Models/Pharmacy/Supplier';
import { InventoryItem } from '../../core/Models/Pharmacy/InventoryItem';
import { Currency } from '../../core/Models/Pharmacy/Currency';



@Component({
    selector: 'app-purchase-order',
    templateUrl: './purchase-order.component.html',
    styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

    private PurchaseOrders : PurchaseOrder;
    private Suppliers: Supplier;
    private SelectedSupplier : Supplier;
    private UpdatedModel : any;
    private PurchaseOrderForm : FormGroup;
    private PurchaseOrderDetailsForm : FormGroup;
    private InventoryItems : InventoryItem;
    private SelectedInventoryItem : InventoryItem;
    private InventoryItemsArray : InventoryItem[];
    private FilteredInventoryItems : InventoryItem[];
    private Currencies : Currency[];
    private SelectedCurrency : Currency;
    private TotalOrderAmount : number;

    constructor(private PharmacyService: PharmacyService, private FormBuilder : FormBuilder) {
        this.PurchaseOrderForm = this.FormBuilder.group( {
            OrderNumber: [''],
            OrderDate: [''],
            IsApproved: [''],
            Origin: [''],
            Remarks: [''],
            SupplierId: [''],
            CurrencyId : [''],
            ExchangeRate : [''],
            PurchaseOrderItems: this.FormBuilder.array([])
        } );

        this.PurchaseOrderDetailsForm = this.FormBuilder.group( {
            ManualCode : [''],
            Description : [''],
            PackType : [''],
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
        this.PharmacyService.GetInventoryItems().subscribe((res : InventoryItem ) => { this.InventoryItems = res; this.FilteredInventoryItems.push(res); });
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
        var a : any = this.InventoryItems;
        this.SelectedInventoryItem = a.find(x => x.inventoryItemId == value);
    }

    AddPurchaseOrderDetails(value) {
        console.log(value);
        
        //this.PurchaseOrderDetailsForm.value.inventoryItemId = this.SelectedInventoryItem.inventoryItemId;


        //this.FilteredInventoryItems = this.FilteredInventoryItems.filter(a => a.itemCode != this.SelectedInventoryItem.itemCode);
        //this.InventoryItemsArray.push(value);
        //this.TotalOrderAmount += Number.parseInt(this.PurchaseOrderDetailsForm.value.NetAmount);
        //this.PurchaseOrderDetailsForm.reset();
    }

    RemovePurchaseOrderDetails(index, value) {
        let item = this.InventoryItemsArray.splice(index, 1);
        this.TotalOrderAmount -= Number.parseInt(value);
    }

    SavePurchaseOrderForm(value) {
        console.log(value);
    }

    SubmitPurchaseOrder() {
        // this.arraydata.filter(t => {
        //     delete t.Description;
        //     delete t.PackQuantity;
        //     delete t.PackSize;
        //     delete t.PackType;
        //     delete t.Rate;
        //     delete t.stockQuantity;
        // });

        // delete this.IssuanceForm.value.IssuanceNo;
        // delete this.IssuanceForm.value.MRN;
        // delete this.IssuanceForm.value.IssuanceDate;
        // delete this.IssuanceForm.value.PatientName;
        // delete this.IssuanceForm.value.SpouseName;

        // this.IssuanceForm.value.SalesOrderItems = this.arraydata;
        // console.log(this.IssuanceForm.value);
        // this.IssuanceForm.value.OrderAmount = this.total;
        // this.PharmacyService.AddSalesOrder(this.IssuanceForm.value).subscribe(r => console.log(r));
        
        // this.UpdateStockPosition(this.Invs);
    }

}




