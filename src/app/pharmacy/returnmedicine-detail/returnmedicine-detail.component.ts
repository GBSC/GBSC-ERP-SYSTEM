import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';

@Component({
    selector: 'app-returnmedicine-detail',
    templateUrl: './returnmedicine-detail.component.html',
    styleUrls: ['./returnmedicine-detail.component.scss']
})
export class ReturnmedicineDetailComponent implements OnInit {

    public SalesReturn: any;
    public Inventory: any;
    public SalesReturnItem: any;

    constructor(public PharmacyService: PharmacyService) {

    }

    async ngOnInit() {
        this.SalesReturn = await this.PharmacyService.GetSalesReturns();
        this.Inventory = await this.PharmacyService.GetInventories();
        this.SalesReturnItem = await this.PharmacyService.GetSalesReturnItems();
    }

    async AddSalesReturnItem(value) {
        return await this.PharmacyService.AddSalesReturnItem(value);
    }

    async UpdateSalesReturnItem(value) {
        return await this.PharmacyService.UpdateSalesReturnItem(value.Key);
    }

    async DeleteSalesReturnItem(value) {
        return await this.PharmacyService.DeleteSalesReturnItem(value.Key.SalesReturnItemId);
    }

}
