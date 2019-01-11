import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceSetupService } from '../../../core/Services/Finance/financeSetup.service';
import { AuthService } from '../../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-financialyear',
    templateUrl: './financialyear.component.html',
    styleUrls: ['./financialyear.component.scss']
})
export class FinancialyearComponent implements OnInit {

    public FinancialYearForm: any;
    public financialYear: any;
    public updateFinancalyear: any;

    constructor(public fb: FormBuilder, public Auth: AuthService, public financeService: FinanceSetupService, public toastr : ToastrService) { }

    ngOnInit() {

        this.FinancialYearForm = this.fb.group({
            StartDate: [''],
            EndDate: [''],
            IsActive: ['']
        });

        this.financeService.GetFinancialYearsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
            this.financialYear = res;
        });
    }

    addFinancialyear() {
        this.FinancialYearForm.value.CompanyId = this.Auth.getUserCompanyId();
        this.financeService.AddFinancialYear(this.FinancialYearForm.value).subscribe((res : any) => {
            this.financeService.GetFinancialYearsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
                this.financialYear = res;
                this.FinancialYearForm.reset();
            });
            this.toastr.success("Saved");
        });
    }

    updatingFinancialyear(value) {

        this.updateFinancalyear = { ...value.oldData, ...value.newData };
    }

    updateFinancialyear() {
        this.financeService.UpdateFinancialYear(this.updateFinancalyear).subscribe((res : any) => {
            this.financeService.GetFinancialYearsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
                this.financialYear = res;
                this.FinancialYearForm.reset();
            });
            this.toastr.success("Updated");
        });
    }

    deleteFinancialyear(value) {
        this.financeService.deleteFinancialYear(value.key).subscribe((res : any) => {
            this.toastr.success("Deleted");
        });
    }

}
