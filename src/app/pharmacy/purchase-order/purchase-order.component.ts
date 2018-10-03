import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PharmacyService } from '../../core';



@Component({
    selector: 'app-purchase-order',
    templateUrl: './purchase-order.component.html',
    styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

    private PurchaseOrder: any;
    private Supplier: any;
    private User: any;

    constructor(private PharmacyService: PharmacyService) {

    }

    async ngOnInit() {
        this.Supplier = await this.PharmacyService.GetSuppliers();
        this.PurchaseOrder = await this.PharmacyService.GetPurchaseOrders();
    }

    async AddPurchaseOrder(value) {
        await this.PharmacyService.AddPurchaseOrder(value);
    }

    async UpdatePurchaseOrder(value) {
        await this.PharmacyService.UpdatePurchaseOrder(value.key);
    }

    async DeletePurchaseOrder(value) {
        await this.PharmacyService.DeletePurchaseOrder(value.key.PurchaseOrderId);
    }

}




