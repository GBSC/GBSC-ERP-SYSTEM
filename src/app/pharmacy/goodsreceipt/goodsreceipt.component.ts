import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GRN } from '../../core/Models/Pharmacy/GRN';
import { Supplier } from '../../core/Models/Pharmacy/Supplier';
import { PurchaseOrder } from '../../core/Models/Pharmacy/PurchaseOrder';
import { GRNItem } from '../../core/Models/Pharmacy/GRNItem';
import { Inventory } from '../../core/Models/Pharmacy/Inventory';

@Component({
    selector: 'app-goodsreceipt',
    templateUrl: './goodsreceipt.component.html',
    styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {

    private GoodReceiptNoteForm: FormGroup;
    private GoodReceiptNoteItemsForm: FormGroup;

    private SelectedPurchaseOrder : PurchaseOrder;
    private SelectedPurchaseOrderItems : any[] = [];

    private ExpectedAmount : number[] = [];
    private PaymentAmount : number[] = [];
    private DifferenceAmount : number[] = [];

    private ExpectedQuantity : number[] = [];
    private ReceivedQuantity : number[] = [];
    private DifferenceQuantity : number[] = [];

    private TotalExpectedQuantity: number = 0;
    private TotalReceivedQuantity: number = 0;
    private TotalDifferenceQuantity: number = 0;
    private TotalExpectedAmount: number = 0;
    private TotalPaymentAmount: number = 0;
    private TotalDifferenceAmount: number = 0;

    private GrnItems : GRNItem[] = [];
    private Grn : GRN;
    private Inventories : Inventory[] = [];

    constructor(private PharmacyService: PharmacyService, private formBuilder: FormBuilder) {

        this.GoodReceiptNoteForm = this.formBuilder.group({
            PurchaseOrderNumber: [''],
            PurchaseOrderDate: [''],
            Supplier: [''],
            GrnDate: [''],
            Origin: [''],
            Remarks: [''],
            TotalExpectedAmount: [],
            TotalPaymentAmount: [],
            TotalDifferenceAmount: [],
            TotalExpectedQuantity: [],
            TotalReceivedQuantity: [],
            TotalDifferenceQuantity: []
        });

        this.GoodReceiptNoteItemsForm = this.formBuilder.group({
            ManualCode : [''],
            Description : [''],
            PackType : [''],
            PackSize : [''],
            Unit : [''],
            RateUnit : [],
            ExpectedAmount : [],
            PaymentAmount : [],
            DifferenceAmount : [],
            ExpectedQuantity : [],
            ReceivedQuantity : [],
            DifferenceQuantity : []
        });

    }

    ngOnInit() {
    }

    GetSelectedPurchaseOrderDetails(ponumber, keycode){
        console.log(ponumber, keycode);
        if(keycode.key == "Enter") {
            this.PharmacyService.GetPurchaseOrderDetailsByCode(ponumber).subscribe((res : PurchaseOrder) => {
                this.SelectedPurchaseOrder = res;
                console.log("SelectedPurchaseOrder", this.SelectedPurchaseOrder);
            })
        }
    }

    CalculateGridData(receivedquantity, index) {
        this.SelectedPurchaseOrderItems = this.SelectedPurchaseOrder.purchaseOrderItems;

        this.ReceivedQuantity[index] = Number.parseInt(receivedquantity);
        this.ExpectedQuantity[index] = <number>this.SelectedPurchaseOrderItems[index].quantity;
        this.DifferenceQuantity[index] = this.ExpectedQuantity[index] - this.ReceivedQuantity[index];

        this.ExpectedAmount[index] = <number>this.SelectedPurchaseOrderItems[index].grandTotal;
        this.PaymentAmount[index] = <number>this.SelectedPurchaseOrderItems[index].inventoryItem.retailPrice * this.ReceivedQuantity[index];
        this.DifferenceAmount[index] = this.ExpectedAmount[index] - this.PaymentAmount[index];

        this.TotalReceivedQuantity = this.ReceivedQuantity.reduce(function(a, b) { return a + b; }, 0);
        this.TotalExpectedQuantity = this.ExpectedQuantity.reduce(function(a, b) { return a + b; }, 0);
        this.TotalDifferenceQuantity = this.DifferenceQuantity.reduce(function(a, b) { return a + b; }, 0);
        this.TotalExpectedAmount = this.ExpectedAmount.reduce(function(a, b) { return a + b; }, 0);
        this.TotalPaymentAmount = this.PaymentAmount.reduce(function(a, b) { return a + b; }, 0);
        this.TotalDifferenceAmount = this.DifferenceAmount.reduce(function(a, b) { return a + b; }, 0);
    }

    AddGrnItem(index) {
        
        var a : any = {
            ReceivedQuantity: this.ReceivedQuantity,
            ExpectedQuantity: this.ExpectedQuantity,
            DifferenceQuantity: this.DifferenceQuantity,
            ExpectedAmount: this.ExpectedAmount,
            PaymentAmount: this.PaymentAmount,
            DifferenceAmount: this.DifferenceAmount,
            InventoryItemId: this.SelectedPurchaseOrderItems[index].inventoryItem.inventoryItemId
        };
        console.log("GrnItem", a);
        this.GrnItems.push(a);
        console.log("GrnItems", this.GrnItems);

        var b : any = {
            InventoryId : this.SelectedPurchaseOrderItems[index].inventory.inventoryId,
            StockQuantity : this.SelectedPurchaseOrderItems[index].inventory.stockQuantity + this.DifferenceQuantity[index],
            InventoryItemId : this.SelectedPurchaseOrderItems[index].inventoryItem.inventoryItemId
        };
        console.log("Inventory", b);
        this.Inventories.push(b);
        console.log("Inventories", this.Inventories);
    }

    SubmitGRN() {

        var a : any = {
            GrnDate : this.GoodReceiptNoteForm.value.GrnDate,
            PurchaseOrderId : this.SelectedPurchaseOrder.purchaseOrderId,
            Remarks : this.GoodReceiptNoteForm.value.Remarks,
            TotalExpectedAmount : this.TotalExpectedAmount,
            TotalPaymentAmount : this.TotalPaymentAmount,
            TotalDifferenceAmount : this.TotalDifferenceAmount,
            TotalExpectedQUantity : this.TotalExpectedQuantity,
            TotalReceivedQuantity : this.TotalReceivedQuantity,
            TotalDifferenceQuantity : this.TotalDifferenceQuantity,
            Supplier : this.SelectedPurchaseOrder.supplier.name,
            GrnItems : this.GrnItems
        };

        console.log("VarGrn", a);
        this.Grn = a;
        console.log("GRN", this.Grn);

        // this.PharmacyService.AddGRN(this.Grn).subscribe(res => {
        //     console.log(res);
        // });

        // this.PharmacyService.UpdateInventories(this.Inventories).subscribe(res => {
        //     console.log(res);
        // });

        this.ResetWholeForm();
    }

    ResetWholeForm() {
        this.GoodReceiptNoteForm.reset();
        this.GoodReceiptNoteItemsForm.reset();
        
        this.SelectedPurchaseOrder = null;
        this.SelectedPurchaseOrderItems = null;

        this.ExpectedAmount = null;
        this.PaymentAmount = null;
        this.DifferenceAmount = null;

        this.ExpectedQuantity = null;
        this.ReceivedQuantity = null;
        this.DifferenceQuantity = null;

        this.TotalExpectedQuantity = 0;
        this.TotalReceivedQuantity = 0;
        this.TotalDifferenceQuantity = 0;
        this.TotalExpectedAmount = 0;
        this.TotalPaymentAmount = 0;
        this.TotalDifferenceAmount = 0;

        this.GrnItems = null;
        this.Grn = null;
        this.Inventories = null;
    }
    
}
