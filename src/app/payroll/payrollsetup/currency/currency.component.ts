import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { PayrollSetupService } from '../../../hrm/payroll/services/payrollsetup.service';


@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

    public currency: any;

constructor(public payrollsetupservice: PayrollSetupService){}

async ngOnInit() {
         
    await this.payrollsetupservice.getCurrencies();
    this.currency = this.payrollsetupservice.Currency;
    }

    async addcurrency(value) {
        this.payrollsetupservice.addCurrency(value.data);
    }

    async updatecurrency(value) {
        console.log(value);
        this.payrollsetupservice.updateCurrency(value);
    }

    async deletecurrency(value) {
        this.payrollsetupservice.DeleteCurrency(value.key);
    }

}
