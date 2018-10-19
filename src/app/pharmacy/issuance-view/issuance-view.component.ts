import { Component, OnInit } from '@angular/core';
import { SalesOrder } from '../../core/Models/Pharmacy/SalesOrder';
import { PharmacyService } from '../../core';

import  { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
    import { from } from 'rxjs/observable/from';

@Component({
    selector: 'app-issuance-view',
    templateUrl: './issuance-view.component.html',
    styleUrls: ['./issuance-view.component.scss']
})
export class IssuanceViewComponent implements OnInit {

    private SalesOrders: SalesOrder;
    private DetailSO: SalesOrder;
    private issuanceForm : FormGroup;

    constructor(private PharmacyService: PharmacyService , private formBuilder : FormBuilder) {
            this.issuanceForm = this.formBuilder.group({
                issuanceViewDate :['']
            });
    }

    ngOnInit() {
        this.PharmacyService.GetSalesOrders().subscribe((res: SalesOrder) => {
            this.SalesOrders = res
            console.log(this.SalesOrders);
        });
    }

    GetSalesOrderDetails(value) {
        //this.PharmacyService.GetSalesOrderDetailsByCode(value.data.salesOrderCode).subscribe((res: SalesOrder) => this.DetailSO = res);
    }
    onsubmit(value){
        console.log(value);
    }
}
