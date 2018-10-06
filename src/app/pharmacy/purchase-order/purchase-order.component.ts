import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PharmacyService } from '../../core';
import { PurchaseOrder } from '../../core/Models/Pharmacy/PurchaseOrder';
import { Supplier } from '../../core/Models/Pharmacy/Supplier';



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

    constructor(private PharmacyService: PharmacyService, private FormBuilder : FormBuilder) {
        this.PurchaseOrderForm = this.FormBuilder.group( {} );
    }

    ngOnInit() {
        this.PharmacyService.GetSuppliers().subscribe((res : Supplier ) => this.Suppliers = res);
        this.PharmacyService.GetPurchaseOrders().subscribe((res : PurchaseOrder ) => this.PurchaseOrders = res);
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

}




