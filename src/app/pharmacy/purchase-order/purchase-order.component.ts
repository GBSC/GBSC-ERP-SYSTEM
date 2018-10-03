import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PharmacyService } from '../../core';



@Component({
    selector: 'app-purchase-order',
    templateUrl: './purchase-order.component.html',
    styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

    public PurchaseOrderForm: FormGroup;

    public supplierdata: any;

    constructor(private formBuilder: FormBuilder, public InventorysystemServiceobj: PharmacyService) {
        this.PurchaseOrderForm = this.formBuilder.group({
            'OrderDate': ['', Validators.required],
            'OrderNumber': ['', Validators.required],
            'OrderRemarks': ['', Validators.required],
            'OrderType': ['', Validators.required],
            'SalesTax': ['', Validators.required],
            'SupplierId': ['', Validators.required]
        });
    }

    async ngOnInit() {

        this.supplierdata = await this.InventorysystemServiceobj.GetSuppliers();
        console.log(this.supplierdata);


        let y = await this.InventorysystemServiceobj.GetPurchaseOrders();
        console.log(y);

    }



    async onSubmit(value) {
        await this.InventorysystemServiceobj.AddPurchaseOrder(value);
    }

    async UpdatePurchaseOrder(value) {
        console.log(value.key);
        await this.InventorysystemServiceobj.UpdatePurchaseOrder(value.key);

    }

    async DeletePurchaseOrder(value) {
        console.log(value.key.purchaseOrderId);

        await this.InventorysystemServiceobj.DeletePurchaseOrder(value.key.purchaseOrderId);

    }

}




