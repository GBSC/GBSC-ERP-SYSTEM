import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './finance.routing';
import { RootComponent } from './root/root.component';
import { FooterComponent } from '../finance/shared/footer/footer.component';
import { HeaderComponent } from '../finance/shared/header/header.component';
import { MenuComponent } from '../finance/shared/menu/menu.component';

import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        routing,

    ],
    declarations: [

        RootComponent,
        DashboardComponent,
        FooterComponent,
        HeaderComponent,
        MenuComponent
    ],
    providers: []
})
export class FinanceModule { }
