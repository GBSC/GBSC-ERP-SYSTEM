import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';
import { Currency } from '../../../core/Models/Pharmacy/Currency';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
    public Currencies: Currency[];
    public UpdatedModel: Currency;
    constructor(public PharmacyService: PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetCurrency().subscribe((res: Currency[]) => {
            this.Currencies = res;
            // console.log(this.Currencies);
        });
    }

    async AddCurrency(value) {
        await this.PharmacyService.AddCurrency(value.data).toPromise();
        this.PharmacyService.GetCurrency().subscribe((res: Currency[]) => this.Currencies = res);
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateCurrency() {
        return await this.PharmacyService.UpdateCurrency(this.UpdatedModel).toPromise();
    }

    async DeleteCurrency(value) {
        return await this.PharmacyService.DeleteCurrency(value.key).toPromise();
    }

}
