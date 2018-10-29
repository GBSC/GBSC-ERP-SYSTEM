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
            // Year: [''],
            IsActive: [''],
            StartDate: [''],
            EndDate: ['']
        });
 
        this.financialYear = await this.financeService.getFinancialYears();
        console.log(this.financialYear);
    }

    async addFinancialyear() { 
       await this.financeService.addFinancialYear(this.FinancialYearForm.value);  
       this.financialYear = await this.financeService.getFinancialYears();
       this.FinancialYearForm.reset();
    }

    formatDate(date: Date) {

        return (date.getDay() - 1) + "/" + date.getDate() + "/" + date.getFullYear();
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
