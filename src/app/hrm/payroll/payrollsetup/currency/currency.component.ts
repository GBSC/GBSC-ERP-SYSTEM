
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PayrollSetupService } from '../../../../core';


@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

    public currency: any;
    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
 
        this.currency = await this.payrollsetupservice.getCurrencies();
    }

    async addCurrency(value) {
        await this.payrollsetupservice.addCurrency(value.data);
        this.currency = await this.payrollsetupservice.getCurrencies();
    }

    async updateCurrency(value) {
        await this.payrollsetupservice.updateCurrency(value);
    }

    async deleteCurrency(value) {
        await this.payrollsetupservice.deleteCurrency(value.key);
    }
}
