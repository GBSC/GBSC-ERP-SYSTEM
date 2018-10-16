import { Component, OnInit } from '@angular/core';
import { SalesOrder } from '../../core/Models/Pharmacy/SalesOrder';
import { PharmacyService } from '../../core';

@Component({
    selector: 'app-issuance-view',
    templateUrl: './issuance-view.component.html',
    styleUrls: ['./issuance-view.component.scss']
})
export class IssuanceViewComponent implements OnInit {

    private SalesOrders: SalesOrder;
    private DetailSO: SalesOrder;

    constructor(private PharmacyService: PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetSalesOrders().subscribe((res: SalesOrder) => this.SalesOrders = res);
    }

    GetSalesOrderDetails(value) {
        //this.PharmacyService.GetSalesOrderDetailsByCode(value.data.salesOrderCode).subscribe((res: SalesOrder) => this.DetailSO = res);
    }

}
