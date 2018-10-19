import { Component, OnInit } from '@angular/core';
import { SalesReturn } from '../../core/Models/Pharmacy/SalesReturn';
import { PharmacyService } from '../../core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-return-view',
    templateUrl: './return-view.component.html',
    styleUrls: ['./return-view.component.scss']
})
export class ReturnViewComponent implements OnInit {
    private SalesReturns: any;
    private DetailSR: any;

    private  returnViewForm : FormGroup;


    constructor(private PharmacyService: PharmacyService , private formBuilder : FormBuilder) {

        this.returnViewForm = this.formBuilder.group({
            returnViewdate :['']
        });

    }

    ngOnInit() {
        this.PharmacyService.GetSalesReturns().subscribe(res => {
            console.log(res);
            this.SalesReturns = res;
            console.log(this.SalesReturns);
        });    
    }

    onsubmit(value){
        console.log(value);
    }



}

