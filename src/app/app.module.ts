import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './LowerCaseUrlSerializer';
import { ToastrModule } from 'ngx-toastr';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { CoreModule } from './core/core.module';
import { PatientModule } from './hims/patient/patient.module';
import { LabModule } from './hims/lab/lab.module';
import { FinanceModule } from './finance/finance.module';
import { SuperadminModule } from './superadmin/superadmin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HrmModule } from './hrm/hrm.module';
import { CoordinationRoutingModule } from './hims/coordination/coordination-routing.module';
import { InventoryModule } from './inventory/inventory.module';
import { SecurityAdminModule } from './security-admin/security-admin.module';
import { EtrackerModule } from './etracker/etracker.module';
import { TitlePipe } from './_pipes/title';
import { Select2Module } from 'ng2-select2';




@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        TitlePipe,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        Select2Module,
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
        CoreModule,

        SecurityAdminModule,
        EtrackerModule,
        PharmacyModule,
        PatientModule,
        LabModule,
        FinanceModule,
        SuperadminModule,
        DashboardModule,
        HrmModule,
        InventoryModule,
        CoordinationRoutingModule
    ],
    providers: [{ provide: UrlSerializer, useClass: LowerCaseUrlSerializer },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
        ScriptLoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }