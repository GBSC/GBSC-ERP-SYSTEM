import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from '../../core/Models/Pharmacy/PurchaseOrder';
import { PharmacyService } from '../../core';

@Component({
    selector: 'app-purhcaseorder-view',
    templateUrl: './purhcaseorder-view.component.html',
    styleUrls: ['./purhcaseorder-view.component.scss']
})
export class PurhcaseorderViewComponent implements OnInit {
    private PurchaseOrders: PurchaseOrder;
    private DetailPO: PurchaseOrder;

    constructor(private PharmacyService: PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetPurchaseOrders().subscribe((res: PurchaseOrder) => this.PurchaseOrders = res);
    }

    GetPurchaseOrderDetails(value) {
        this.PharmacyService.GetPurchaseOrderDetailsByCode(value.data.orderNumber).subscribe((res: PurchaseOrder) => this.DetailPO = res);
    }

}
