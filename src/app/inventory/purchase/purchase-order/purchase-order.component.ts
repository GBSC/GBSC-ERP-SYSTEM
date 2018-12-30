import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-purchase-order',
    templateUrl: './purchase-order.component.html',
    styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

    public PurchaseOrder: any;
    public Supplier: any;
    public PurchaseIndent: any;
    public User: any;

    // constructor(public formBuilder: FormBuilder, public InventorysystemServiceobj: InventorysystemService) {
    //     this.PurchaseOrderForm = this.formBuilder.group({
    //         'OrderDate': ['', Validators.required],
    //         'OrderNumber': ['', Validators.required],
    //         'OrderRemarks': ['', Validators.required],
    //         'OrderType': ['', Validators.required],
    //         'SalesTax': ['', Validators.required],
    //         'SupplierId': ['', Validators.required]
    //     });
    // }

    constructor(public InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.Supplier = await this.InventoryService.GetSuppliers();
        this.PurchaseIndent = await this.InventoryService.GetPurchaseIndents();
        this.PurchaseOrder = await this.InventoryService.GetPurchaseOrders();
    }



    async AddPurchaseOrder(value) {
        await this.InventoryService.AddPurchaseOrder(value);
    }

    async UpdatePurchaseOrder(value) {
        await this.InventoryService.UpdatePurchaseOrder(value.key);
    }

    async DeletePurchaseOrder(value) {
        await this.InventoryService.DeletePurchaseOrder(value.key.PurchaseOrderId);
    }

}




