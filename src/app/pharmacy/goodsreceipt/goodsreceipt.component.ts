import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
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

    private SelectedPurchaseOrder: PurchaseOrder;
    private SelectedPurchaseOrderItems: any[] = [];

    private ExpectedAmount: number[] = [];
    private PaymentAmount: number[] = [];
    private DifferenceAmount: number[] = [];

    private ExpectedQuantity: number[] = [];
    private ReceivedQuantity: number[] = [];
    private DifferenceQuantity: number[] = [];

    private TotalExpectedQuantity: number = 0;
    private TotalReceivedQuantity: number = 0;
    private TotalDifferenceQuantity: number = 0;
    private TotalExpectedAmount: number = 0;
    private TotalPaymentAmount: number = 0;
    private TotalDifferenceAmount: number = 0;

    private GrnItems: GRNItem[] = [];
    private Grn: GRN;
    private Inventories: Inventory[] = [];

    private GrnItemSaveTrack: number[] = [];
    private isDisable = false;

    constructor(private PharmacyService: PharmacyService, private formBuilder: FormBuilder, private Toast: ToastrService) {

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
            ManualCode: [''],
            Description: [''],
            PackType: [''],
            PackSize: [''],
            Unit: [''],
            Rate: [],
            ExpectedAmount: [],
            PaymentAmount: [],
            DifferenceAmount: [],
            ExpectedQuantity: [],
            ReceivedQuantity: [],
            DifferenceQuantity: []
        });

    }

    ngOnInit() {
    }

    GetSelectedPurchaseOrderDetails(ponumber, keycode) {
        //  console.log(ponumber);
        //  console.log(keycode);
        if (keycode.key == "Enter") {
            this.PharmacyService.GetPurchaseOrderDetailsByCode(ponumber).subscribe((res: PurchaseOrder) => {
                if (res != null) {
                    this.SelectedPurchaseOrder = res;
                    //console.log("SelectedPurchaseOrder", this.SelectedPurchaseOrder);
                    this.SelectedPurchaseOrderItems = this.SelectedPurchaseOrder.purchaseOrderItems;
                    console.log("SelectedPurchaseOrderItems", this.SelectedPurchaseOrderItems);
                }
                else {
                    this.Toast.error('GRN already exists for selected PO!', 'Error!');
                }
            });
        } else {
            this.Toast.info("Press enter to get PO details");
        }
    }

    CalculateGridData(receivedquantity, index) {
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

        var a: any = {
            ReceivedQuantity: this.ReceivedQuantity[index],
            ExpectedQuantity: this.ExpectedQuantity[index],
            DifferenceQuantity: this.DifferenceQuantity[index],
            ExpectedAmount: this.ExpectedAmount[index],
            PaymentAmount: this.PaymentAmount[index],
            DifferenceAmount: this.DifferenceAmount[index],
            InventoryItemId: this.SelectedPurchaseOrderItems[index].inventoryItem.inventoryItemId
        };
        console.log("GrnItem", a);
        this.GrnItems[index] = a;
        console.log("GrnItems", this.GrnItems);

        var b: any = {
            InventoryId: this.SelectedPurchaseOrderItems[index].inventory.inventoryId,
            StockQuantity: this.SelectedPurchaseOrderItems[index].inventory.stockQuantity + this.DifferenceQuantity[index],
            InventoryItemId: this.SelectedPurchaseOrderItems[index].inventoryItem.inventoryItemId
        };
        console.log("Inventory", b);
        this.Inventories[index] = b;
        console.log("Inventories", this.Inventories);

        this.GrnItemSaveTrack[index] = 1;

        this.Toast.success("Item Saved");
        this.isDisable = true;
    }

    SubmitGRN() {
        if (this.GrnItemSaveTrack.reduce(function(a, b) { return a + b; }, 0) === this.SelectedPurchaseOrderItems.length) {
            var a: any = {
                GrnDate: this.GoodReceiptNoteForm.value.GrnDate || new Date().toISOString(),
                PurchaseOrderId: this.SelectedPurchaseOrder.purchaseOrderId,
                Remarks: this.GoodReceiptNoteForm.value.Remarks,
                TotalExpectedAmount: this.TotalExpectedAmount,
                TotalPaymentAmount: this.TotalPaymentAmount,
                TotalDifferenceAmount: this.TotalDifferenceAmount,
                TotalExpectedQUantity: this.TotalExpectedQuantity,
                TotalReceivedQuantity: this.TotalReceivedQuantity,
                TotalDifferenceQuantity: this.TotalDifferenceQuantity,
                Supplier: this.SelectedPurchaseOrder.supplier.name,
                GrnItems: this.GrnItems
            };

            console.log("VarGrn", a);
            this.Grn = a;
            console.log("GRN", this.Grn);

            this.PharmacyService.AddGRN(this.Grn).subscribe(res => {
                console.log(res);
                this.Toast.success("GRN Added successfully");
            });

            this.PharmacyService.UpdateInventories(this.Inventories).subscribe(res => {
                console.log(res);
                this.Toast.success("Inventory stock updated successfully");
            });

            this.ResetWholeForm();
        } else {
            this.Toast.error("Please save all items by pressing the + button before submitting");
        }
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

        this.isDisable = true;
        this.GrnItemSaveTrack = [];
    }

}
