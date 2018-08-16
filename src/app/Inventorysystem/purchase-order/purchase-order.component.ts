import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PurchaseOrder } from '../../../app/Inventorysystem/models/purchaseorder';
import { InventorysystemService } from '../../Inventorysystem/service/Inventorysystem.service';



@Component({
    selector: 'app-purchase-order',
    templateUrl: './purchase-order.component.html',
    styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

    public PurchaseOrderForm: FormGroup;

    public supplierdata: any;

    constructor(private formBuilder: FormBuilder, private InventorysystemServiceobj: InventorysystemService) {
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

        await this.InventorysystemServiceobj.GetSuppliers();
        this.supplierdata = this.InventorysystemServiceobj.Suppliers;
        console.log(this.supplierdata);


        await this.InventorysystemServiceobj.getpurchaseorders();
        let y = this.InventorysystemServiceobj.Purchaseorders;
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




