import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';

@Component({
    selector: 'app-returnmedicine',
    templateUrl: './returnmedicine.component.html',
    styleUrls: ['./returnmedicine.component.css']
})
export class ReturnmedicineComponent implements OnInit {

    private ReturnReason: any;
    private SalesReturn: any;

    constructor(private PharmacyService: PharmacyService) {
    }

    async ngOnInit() {
        this.ReturnReason = await this.PharmacyService.GetReturnReasons();
        this.SalesReturn = await this.PharmacyService.GetSalesReturns();
    }

    async AddSalesReturn(value) {
        return await this.PharmacyService.AddSalesReturn(value);
    }

    async UpdateSalesReturn(value) {
        return await this.PharmacyService.UpdateSalesReturn(value.Key);
    }

    async DeleteSalesReturn(value) {
        return await this.PharmacyService.DeleteSalesReturn(value.Key.SalesReturnId);
    }
}
