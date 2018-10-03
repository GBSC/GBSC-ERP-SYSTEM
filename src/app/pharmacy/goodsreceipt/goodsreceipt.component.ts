import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';
@Component({
    selector: 'app-goodsreceipt',
    templateUrl: './goodsreceipt.component.html',
    styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {

    private GRN: any;

    constructor(private PharmacyService: PharmacyService) {

    }

    async ngOnInit() {
        this.GRN = await this.PharmacyService.GetGRN();
    }

    async AddGRN(value) {
        await this.PharmacyService.AddGRN(value);
    }

    async UpdateGRN(value) {
        await this.PharmacyService.UpdateGRN(value.Key);
    }

    async DeleteGRN(value) {
        await this.PharmacyService.DeleteGRN(value.Key.GRNId);
    }

}
