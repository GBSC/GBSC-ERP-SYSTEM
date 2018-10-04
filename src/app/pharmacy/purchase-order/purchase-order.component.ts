import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PharmacyService } from '../../core';



@Component({
    selector: 'app-purchase-order',
    templateUrl: './purchase-order.component.html',
    styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

    private PurchaseOrders: any;
    private Suppliers: any;
    private User: any;
    private UpdatedModel : any;
    private PurchaseOrderForm : FormGroup;

    constructor(private PharmacyService: PharmacyService, private FormBuilder : FormBuilder) {
        this.PurchaseOrderForm = this.FormBuilder.group( {} );
    }

    ngOnInit() {
        this.PharmacyService.GetSuppliers().subscribe(res => this.Suppliers = res);
        this.PharmacyService.GetPurchaseOrders().subscribe(res => this.PurchaseOrders = res);
        console.log(this.PurchaseOrders);
        console.log(this.Suppliers);
    }

    async AddPurchaseOrder(value) {
        await this.PharmacyService.AddPurchaseOrder(value);
        this.PurchaseOrders = await this.PharmacyService.GetPurchaseOrders();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdatePurchaseOrder() {
        await this.PharmacyService.UpdatePurchaseOrder(this.UpdatedModel);
    }

    async DeletePurchaseOrder(value) {
        await this.PharmacyService.DeletePurchaseOrder(value.key.PurchaseOrderId);
    }

}




