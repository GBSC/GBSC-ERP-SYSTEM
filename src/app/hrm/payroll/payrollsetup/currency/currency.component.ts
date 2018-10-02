
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PayrollSetupService } from '../../services/payrollsetup.service';


@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

    public currency: any;
    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getCurrencies();
        this.currency = this.payrollsetupservice.Currency;

    }

    async addCurrency(value) {
        await this.payrollsetupservice.addCurrency(value.data);
    }

    async updateCurrency(value) {
        console.log(value);
        await this.payrollsetupservice.updateCurrency(value);
    }

    async deleteCurrency(value) {
        await this.payrollsetupservice.DeleteCurrency(value.key);
    }
}
