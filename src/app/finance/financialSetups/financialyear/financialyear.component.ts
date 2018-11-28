import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceSetupService } from '../../../core/Services/Finance/financeSetup.service';

@Component({
    selector: 'app-financialyear',
    templateUrl: './financialyear.component.html',
    styleUrls: ['./financialyear.component.scss']
})
export class FinancialyearComponent implements OnInit {

    public FinancialYearForm: any;
    public financialYear: any;
    public updateFinancalyear: any;

    constructor(private fb: FormBuilder, public financeService: FinanceSetupService) { }

    async ngOnInit() {

        this.FinancialYearForm = this.fb.group({ 
            StartDate: [''],
            EndDate: [''],
            IsActive: ['']
        });

        this.financialYear = await this.financeService.getFinancialYears();
    }

    async addFinancialyear() {
        await this.financeService.addFinancialYear(this.FinancialYearForm.value);
        this.financialYear = await this.financeService.getFinancialYears();
        this.FinancialYearForm.reset();
    }

     updatingFinancialyear(value) {

        this.updateFinancalyear = { ...value.oldData, ...value.newData };
    }

    async updateFinancialyear() {

        await this.financeService.updateFinancialYear(this.updateFinancalyear);
        this.financialYear = await this.financeService.getFinancialYears();
    }

    async deleteFinancialyear(value) {
        await this.financeService.DeleteFinancialYear(value.key);
    }

}
