import { Component, OnInit } from '@angular/core';
import { SalesReturn } from '../../core/Models/Pharmacy/SalesReturn';
import { PharmacyService } from '../../core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-return-view',
    templateUrl: './return-view.component.html',
    styleUrls: ['./return-view.component.scss']
})
export class ReturnViewComponent implements OnInit {
    private SalesReturns: any;
    private DetailSR: any;

    private returnViewForm: FormGroup;
    public date: any;


    constructor(private PharmacyService: PharmacyService, private formBuilder: FormBuilder, public router: Router) {

        this.returnViewForm = this.formBuilder.group({
            returnViewdate: ['']
        });

    }

    ngOnInit() {
        // this.PharmacyService.GetSalesReturns().subscribe(res => {
        //     console.log(res);
        //     this.SalesReturns = res;
        //     console.log(this.SalesReturns);
        // });   

        this.date = this.formatDate(new Date());
        this.PharmacyService.GetSalesReturnsByMonth(this.formatDate(new Date())).subscribe((res: SalesReturn) => {
            this.SalesReturns = res;
        });
        // console.log(this.formatDate(new Date()));
    }

    onsubmit(value) {
        this.PharmacyService.GetSalesReturnsByMonth(value.returnViewdate).subscribe((res: SalesReturn) => {
            this.SalesReturns = res;
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
        this.router.navigate(['/pharmacy/return']);
    }


}

