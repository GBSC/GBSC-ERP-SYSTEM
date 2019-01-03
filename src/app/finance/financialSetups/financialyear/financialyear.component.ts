import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceSetupService } from '../../../core/Services/Finance/financeSetup.service';
import { AuthService } from '../../../core';

@Component({
    selector: 'app-financialyear',
    templateUrl: './financialyear.component.html',
    styleUrls: ['./financialyear.component.scss']
})
export class FinancialyearComponent implements OnInit {

    public FinancialYearForm: any;
    public financialYear: any;
    public updateFinancalyear: any;

    constructor(public fb: FormBuilder, public Auth : AuthService, public financeService: FinanceSetupService) { }

    async ngOnInit() {

        this.FinancialYearForm = this.fb.group({
            StartDate: [''],
            EndDate: [''],
            IsActive: ['']
        });

        this.financialYear = await this.financeService.getFinancialYears();
    }

    async addFinancialyear() {
        this.FinancialYearForm.value.CompanyId = this.Auth.getUserCompanyId();
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
