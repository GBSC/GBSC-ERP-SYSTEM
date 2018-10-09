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
    //private User: any;
    private UpdatedModel : any;
    private PurchaseOrderForm : FormGroup;
    private PurchaseOrderDetailsForm : FormGroup;
    private InventoryItems : InventoryItem;
    private Currencies : Currency[];
    private SelectedCurrency : Currency;

    constructor(private PharmacyService: PharmacyService, private FormBuilder : FormBuilder) {
        this.PurchaseOrderForm = this.FormBuilder.group( {
            PurchaseOrderId: [''],
            OrderNumber: [''],
            OrderDate: [''],
            OrderType: [''],
            OrderRemarks: [''],
            IssueDate: [''],
            IsIssued: [''],
            ApprovedDate: [''],
            IsApproved: [''],
            ProcessedDate: [''],
            IsProcessed: [''],
            VendorBillNumber: [''],
            BillDate: [''],
            Origin: [''],
            Remarks: [''],
            Status: [''],
            SupplierId: [''],
            CurrencyId : [''],
            ExchangeRate : [''],
            PurchaseOrderItems: this.FormBuilder.array([])
        } );

        this.PurchaseOrderDetailsForm = this.FormBuilder.group( {
            PurchaseOrderItemId: [''],
            PackType: [''],
            PackSize: [''],
            NumberPackType: [''],
            BatchNumber: [''],
            Quantity: [''],
            ExpiryDate: [''],
            Rate: [''],
            GrossAmount: [''],
            DiscountPercentage: [''],
            DiscountAmount: [''],
            AfterDiscountAmount: [''],
            GstPercentage: [''],
            GstAmount: [''],
            AfterGstAmount: [''],
            FreightPercentage: [''],
            FreightAmount: [''],
            DeliveryPercentage: [''],
            DeliveryAmount: [''],
            OtherPercentage: [''],
            OtherAmount: [''],
            NetAmount: [''],
            CostPrice: [''],
            RetailPrice: [''],
            GrandTotal: [''],
            InventoryItemId: [''],
            InventoryId: [''],
            PurchaseOrderId: ['']
        } );
    }

    ngOnInit() {
        this.PharmacyService.GetSuppliers().subscribe((res : Supplier ) => { this.Suppliers = res; console.log(this.Suppliers); });
        console.log(this.Suppliers);
        this.PharmacyService.GetInventoryItems().subscribe((res : InventoryItem ) => { this.InventoryItems = res; console.log(this.InventoryItems); });
        console.log(this.InventoryItems);
        this.PharmacyService.GetCurrency().subscribe((res : Currency[]) => { this.Currencies = res; console.log(this.Currencies); });
        console.log(this.Currencies);
        //this.PharmacyService.GetPurchaseOrders().subscribe((res : PurchaseOrder ) => this.PurchaseOrders = res);
    }

    async AddPurchaseOrder(value) {
        await this.PharmacyService.AddPurchaseOrder(value).toPromise();
        this.PharmacyService.GetPurchaseOrders().subscribe((res : PurchaseOrder ) => this.PurchaseOrders = res);
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdatePurchaseOrder() {
        await this.PharmacyService.UpdatePurchaseOrder(this.UpdatedModel).toPromise();
    }

    async DeletePurchaseOrder(value) {
        await this.PharmacyService.DeletePurchaseOrder(value.key.PurchaseOrderId).toPromise();
    }

    GetSuppliers(value){
        console.log(value);
    }

    GetCurrencies(value){
        console.log(value);
        this.SelectedCurrency = this.Currencies.find(a => a.inventoryCurrencyId == value);
    }

}




