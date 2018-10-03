import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './dashboard.routing';
import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RootComponent } from './root/root.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DevExtremeModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        RootComponent,
        DashboardComponent
    ]
})
export class DashboardModule { }
