import { Component, OnInit } from '@angular/core';
import { SalesOrder } from '../../core/Models/Pharmacy/SalesOrder';
import { PharmacyService } from '../../core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { from } from 'rxjs/observable/from';
import { Router } from '@angular/router';


@Component({
    selector: 'app-issuance-view',
    templateUrl: './issuance-view.component.html',
    styleUrls: ['./issuance-view.component.scss']
})
export class IssuanceViewComponent implements OnInit {

    public SalesOrders: SalesOrder;
    public DetailSO: SalesOrder;
    public issuanceForm: FormGroup;

    public date: any;

    constructor(public PharmacyService: PharmacyService, public formBuilder: FormBuilder, public router: Router) {
        this.issuanceForm = this.formBuilder.group({
            issueDate: ['']
        });
    }

    ngOnInit() {
        // this.PharmacyService.GetSalesOrders().subscribe((res: SalesOrder) => {
        //     this.SalesOrders = res
        //     console.log(this.SalesOrders);
        // });

        this.date = this.formatDate(new Date());
        this.PharmacyService.GetSalesOrdersByMonth(this.formatDate(new Date())).subscribe((res: SalesOrder) => {
            this.SalesOrders = res;
        });
        // console.log(this.formatDate(new Date()));
    }

    GetSalesOrderDetails(value) {
        this.PharmacyService.GetSalesOrdersByMonth(value.issueDate).subscribe((res: SalesOrder) => {
            this.SalesOrders = res;
        });
    }

    formatDate(date: Date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1);
    }


    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addvoucher.bind(this)
                }
            });
    }

    addvoucher() {
        this.router.navigate(['/pharmacy/issuance']);
    }



}
