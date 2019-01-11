import { Component, OnInit } from '@angular/core';
import { GRN } from '../../core/Models/Pharmacy/GRN';
import { PharmacyService } from '../../core';


import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-grn-view',
    templateUrl: './grn-view.component.html',
    styleUrls: ['./grn-view.component.scss']
})
export class GrnViewComponent implements OnInit {

    public GRNs: GRN;
    public DetailGRN: GRN;
    public grnview: any;

    GrnViewForm: FormGroup;

    public date: any;


    constructor(public PharmacyService: PharmacyService, public formBuilder: FormBuilder, public router: Router) {
        this.GrnViewForm = this.formBuilder.group({
            grnDate: ['']
        });
    }

    ngOnInit() {
        this.date = this.formatDate(new Date());
        // this.PharmacyService.GetGRN().subscribe((res: GRN) => this.GRNs = res);
        this.PharmacyService.GetGRNsByMonth(this.formatDate(new Date())).subscribe((res: GRN) => {
            this.grnview = res;
        });
        // console.log(this.formatDate(new Date()));
    }

    // GetGrnDetails(value) {
    //     this.PharmacyService.GetGrnDetailsByCode(value.data.grnNumber).subscribe((res: GRN) => this.DetailGRN = res);
    // }
    onsubmit(value) {
        this.PharmacyService.GetGRNsByMonth(value.grnDate).subscribe((res: GRN) => {
            this.grnview = res;
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
        this.router.navigate(['/pharmacy/grn']);
    }

}
