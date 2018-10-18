import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GRN } from '../../core/Models/Pharmacy/GRN';
import { Supplier } from '../../core/Models/Pharmacy/Supplier';
import { PurchaseOrder } from '../../core/Models/Pharmacy/PurchaseOrder';
import { PurchaseOrderItem } from '../../core/Models/Pharmacy/PurchaseOrderItem';

@Component({
    selector: 'app-goodsreceipt',
    templateUrl: './goodsreceipt.component.html',
    styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {

    private GoodReceiptNoteForm: FormGroup;
    private GoodReceiptNoteItemsForm: FormGroup;

    private Suppliers: Supplier;
    private SelectedPurchaseOrder : PurchaseOrder;
    private SelectedPurchaseOrderItems : PurchaseOrderItem[] = [];

    private ExpectedAmount : number[] = [];
    private PaymentAmount : number[] = [];
    private DifferenceAmount : number[] = [];

    private ExpectedQuantity : number[] = [];
    private ReceivedQuantity : number[] = [];

    constructor(private PharmacyService: PharmacyService, private formBuilder: FormBuilder) {

        this.GoodReceiptNoteForm = this.formBuilder.group({
            PurchaseOrderNumber: [''],
            PurchaseOrderDate: [''],
            Supplier: [''],
            GrnDate: [''],
            Origin: [''],
            Remarks: [''],
            TotalExpectedAmount: [''],
            TotalPaymentAmount: [''],
            TotalDifferenceAmount: [''],
            TotalExpectedQuantity: [''],
            TotalReceivedQuantity: [''],
            TotalDifferenceQuantity: ['']
        });

        this.GoodReceiptNoteItemsForm = this.formBuilder.group({
            ManualCode : [''],
            Description : [''],
            PackType : [''],
            PackSize : [''],
            Unit : [''],
            RateUnit : [''],
            ExpectedTotalAmount : [''],
            PaymentTotalAmount : [''],
            DifferenceTotalAmount : [''],
            ExpectedQuantity : [''],
            ReceivedQuantity : [''],
            DifferenceQuantity : ['']
        });

    }

    ngOnInit() {

        this.PharmacyService.GetSuppliers().subscribe((result : Supplier) => {
            this.Suppliers = result;
            console.log(this.Suppliers);
        })
    }

    async GetSelectedPurchaseOrderDetails(ponumber, keycode){
        console.log(ponumber, keycode);
        if(keycode.key == "Enter") {
            this.PharmacyService.GetPurchaseOrderDetailsByCode(ponumber).subscribe((res : PurchaseOrder) => {
                this.SelectedPurchaseOrder = res;
                console.log("SelectedPurchaseOrder", this.SelectedPurchaseOrder);
            })
        }


    }
    
}
