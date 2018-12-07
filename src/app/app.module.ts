import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './LowerCaseUrlSerializer';
import { ToastrModule } from 'ngx-toastr';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { ClinicalrecordComponent } from './hims/coordination/clinicalrecord/clinicalrecord.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ClinicalRecordsListComponent } from './hims/coordination/clinical-records-list/clinical-records-list.component';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { CoreModule } from './core/core.module';
import { PatientModule } from './hims/patient/patient.module';
import { LabModule } from './hims/lab/lab.module';
import { FinanceModule } from './finance/finance.module';
import { SuperadminModule } from './superadmin/superadmin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HrmModule } from './hrm/hrm.module';
import { CoordinationRoutingModule } from './hims/coordination/coordination-routing.module';



@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ClinicalRecordsListComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }), // ToastrModule added
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DevExtremeModule,
        HttpClientModule,

        PharmacyModule,
        CoreModule,
        PatientModule,
        LabModule,
        FinanceModule,
        SuperadminModule,
        DashboardModule,
        HrmModule,
        CoordinationRoutingModule
    ],
    providers: [{ provide: UrlSerializer, useClass: LowerCaseUrlSerializer },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
        ScriptLoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }