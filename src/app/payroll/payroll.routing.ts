import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { AllowancequantityComponent } from './payrollprocess/allowancequantity/allowancequantity.component';
import { CreatesalaryfilesComponent } from './payrollprocess/createsalaryfiles/createsalaryfiles.component';
import { EmployeecompensiontransactionComponent } from './payrollprocess/employeecompensiontransaction/employeecompensiontransaction.component';
import { SalarystructureComponent } from './payrollprocess/salarystructure/salarystructure.component';
import { IncrementtransactionComponent } from './payrollprocess/incrementtransaction/incrementtransaction.component';
import { AllowanceDeductionComponent } from './payrollsetup/allowance-deduction/allowance-deduction.component';
import { AllowancerateComponent } from './payrollsetup/allowancerate/allowancerate.component';
import { BanksComponent } from './payrollsetup/banks/banks.component';
import { CurrencyComponent } from './payrollsetup/currency/currency.component';
import { CurrencyrateComponent } from './payrollsetup/currencyrate/currencyrate.component';
import { GratuitypaymentComponent } from './payrollsetup/gratuitypayment/gratuitypayment.component';
import { GratuityslabComponent } from './payrollsetup/gratuityslab/gratuityslab.component';
import { LoanrequestComponent } from './payrollsetup/loanrequest/loanrequest.component';
import { PayrollyearComponent } from './payrollsetup/payrollyear/payrollyear.component';
import { PfPaymentComponent } from './payrollsetup/pf-payment/pf-payment.component';
import { UploadGratuityComponent } from './payrollsetup/upload-gratuity/upload-gratuity.component';
import { FundsetupComponent } from './payrollsetup/fundsetup/fundsetup.component';
import { TaxsetupComponent } from './payrollsetup/taxsetup/taxsetup.component';
import { TaxonbenefitsComponent } from './payrollsetup/taxonbenefits/taxonbenefits.component';
import { TaxableincomeadjustmentComponent } from './payrollsetup/taxableincomeadjustment/taxableincomeadjustment.component';
import { TaxadjustmentComponent } from './payrollsetup/taxadjustment/taxadjustment.component';
import { UploadtaxdepositComponent } from './payrollsetup/uploadtaxdeposit/uploadtaxdeposit.component';
import { ModuleGuardService } from '../account/auth/module-guard.service';
import { AuthGuardService } from '../account/auth/auth-guard.service';

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'payroll',
        component: RootComponent,
        canActivate: [AuthGuardService, ModuleGuardService],
        children: [
            {
                path: 'payrollsetup', children: [

                    { path: 'allowancededuction', component: AllowanceDeductionComponent },
                    { path: 'allowancerate', component: AllowancerateComponent },
                    { path: 'banks', component: BanksComponent },
                    { path: 'currency', component: CurrencyComponent },
                    { path: 'currencyrate', component: CurrencyrateComponent },
                    { path: 'gratuitypayment', component: GratuitypaymentComponent },
                    { path: 'gratuityslab', component: GratuityslabComponent },
                    { path: 'loanrequest', component: LoanrequestComponent },
                    { path: 'payrollyear', component: PayrollyearComponent },
                    { path: 'pf-payment', component: PfPaymentComponent },
                    { path: 'upload-gratuity', component: UploadGratuityComponent },
                    { path: 'fundsetup', component: FundsetupComponent },
                    { path: 'taxsetup', component: TaxsetupComponent },
                    { path: 'taxonbenefits', component: TaxonbenefitsComponent },
                    { path: 'taxableincomeadjustment', component: TaxableincomeadjustmentComponent },
                    { path: 'taxadjustment', component: TaxadjustmentComponent },
                    { path: 'uploadtaxdeposit', component: UploadtaxdepositComponent },

                ]
            },
            {
                path: 'payrollprocess',
                children: [
                    { path: 'allowancequantity', component: AllowancequantityComponent },
                    { path: 'createsalaryfiles', component: CreatesalaryfilesComponent },
                    { path: 'employeecompensiontransaction', component: EmployeecompensiontransactionComponent },
                    { path: 'salarystructure', component: SalarystructureComponent },
                    { path: 'incrementtransaction', component: IncrementtransactionComponent }
                ]
            },
            { path: 'payrolladmin', component: RootComponent },
            { path: 'payrollprocess', component: RootComponent },
            { path: 'loan', component: RootComponent }
        ]
    }

]);

