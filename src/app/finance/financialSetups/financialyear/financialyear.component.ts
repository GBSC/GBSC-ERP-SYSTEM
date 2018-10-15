import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceService } from '../../../core/Services/Finance/finance.service';
import { FinancialYear } from '../../../core/Models/Finance/financialYear';


@Component({
    selector: 'app-financialyear',
    templateUrl: './financialyear.component.html',
    styleUrls: ['./financialyear.component.scss']
})
export class FinancialyearComponent implements OnInit {

    public FinancialYearForm: any;
    public financialYear: any;
    public updateFinancalyear: any;

    constructor(private fb: FormBuilder, public financeService: FinanceService) { }

    async ngOnInit() {

        this.FinancialYearForm = this.fb.group({
            Name: [''],
            IsActive: [''],
            StartDate: [''],
            EndDate: ['']
        });
 
        this.financialYear = await this.financeService.getFinancialYears();
    }

    async addFinancialyear() {
        
       await this.financeService.addFinancialYear(this.FinancialYearForm.value);         
    }

     updatingFinancialyear(value) {

        this.updateFinancalyear = { ...value.oldData, ...value.newData };
    }
    async updateFinancialyear() {

        await this.financeService.updateFinancialYear(this.updateFinancalyear);
    }

    async deleteFinancialyear(value) {

        await this.financeService.DeleteFinancialYear(value.data);
    }
}
