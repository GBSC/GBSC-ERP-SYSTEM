import { Component, OnInit } from '@angular/core';
import { GRN } from '../../core/Models/Pharmacy/GRN';
import { PharmacyService } from '../../core';

@Component({
    selector: 'app-grn-view',
    templateUrl: './grn-view.component.html',
    styleUrls: ['./grn-view.component.scss']
})
export class GrnViewComponent implements OnInit {

    private GRNs: GRN;
    private DetailGRN: GRN;

    constructor(private PharmacyService: PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetGRN().subscribe((res: GRN) => this.GRNs = res);
    }

    GetGrnDetails(value) {
        this.PharmacyService.GetGrnDetailsByCode(value.data.grnNumber).subscribe((res: GRN) => this.DetailGRN = res);
    }

}
