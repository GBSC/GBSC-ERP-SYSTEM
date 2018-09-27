import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-purchase-order',
    templateUrl: './purchase-order.component.html',
    styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

    private PurchaseOrder: any;
    private Supplier: any;
    private PurchaseIndent: any;
    private User: any;

    // constructor(private formBuilder: FormBuilder, public InventorysystemServiceobj: InventorysystemService) {
    //     this.PurchaseOrderForm = this.formBuilder.group({
    //         'OrderDate': ['', Validators.required],
    //         'OrderNumber': ['', Validators.required],
    //         'OrderRemarks': ['', Validators.required],
    //         'OrderType': ['', Validators.required],
    //         'SalesTax': ['', Validators.required],
    //         'SupplierId': ['', Validators.required]
    //     });
    // }

    constructor(private InventoryService: InventorysystemService) {

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




