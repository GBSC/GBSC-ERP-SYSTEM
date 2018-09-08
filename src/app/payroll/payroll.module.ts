import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './payroll.routing';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RootComponent } from './root/root.component';
import { FundsetupComponent } from './payrollsetup/fundsetup/fundsetup.component';
import { PayrollService } from './services/payroll.service';
import { CreatesalaryfilesComponent } from './payrollprocess/createsalaryfiles/createsalaryfiles.component';
import { IncrementtransactionComponent } from './payrollprocess/incrementtransaction/incrementtransaction.component';
import { AllowancequantityComponent } from './payrollprocess/allowancequantity/allowancequantity.component';
import { SalarystructureComponent } from './payrollprocess/salarystructure/salarystructure.component';
import { EmployeecompensiontransactionComponent } from './payrollprocess/employeecompensiontransaction/employeecompensiontransaction.component';
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
import { DxButtonModule, DxDataGridModule, DevExtremeModule } from 'devextreme-angular';
import { TaxsetupComponent } from './payrollsetup/taxsetup/taxsetup.component';
import { TaxonbenefitsComponent } from './payrollsetup/taxonbenefits/taxonbenefits.component';
import { TaxableincomeadjustmentComponent } from './payrollsetup/taxableincomeadjustment/taxableincomeadjustment.component';
import { TaxadjustmentComponent } from './payrollsetup/taxadjustment/taxadjustment.component';
import { UploadtaxdepositComponent } from './payrollsetup/uploadtaxdeposit/uploadtaxdeposit.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    DxButtonModule,
    DevExtremeModule,
    DxDataGridModule,

  ],
  declarations: [
    RootComponent,
    FundsetupComponent,
    AllowanceDeductionComponent,
    AllowancerateComponent,
    BanksComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    CurrencyComponent,
    CurrencyrateComponent,
    GratuitypaymentComponent,
    GratuityslabComponent,
    LoanrequestComponent,
    PayrollyearComponent,
    PfPaymentComponent,
    UploadGratuityComponent,
    CreatesalaryfilesComponent,
    IncrementtransactionComponent,
    AllowancequantityComponent,
    SalarystructureComponent,
    EmployeecompensiontransactionComponent,
    FundsetupComponent,
    TaxsetupComponent,
    TaxonbenefitsComponent,
    TaxableincomeadjustmentComponent,
    TaxadjustmentComponent,
    UploadtaxdepositComponent
  ],
  exports: [],
  providers: [PayrollService]
})
 
export class PayrollModule { }
