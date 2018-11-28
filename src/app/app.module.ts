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
        ThemeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DevExtremeModule,
        HttpClientModule
    ],
    providers: [{ provide: UrlSerializer, useClass: LowerCaseUrlSerializer },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
        ScriptLoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }