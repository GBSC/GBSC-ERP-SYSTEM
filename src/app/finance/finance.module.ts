import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './finance.routing';
import { RootComponent } from './root/root.component';
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
        MenuComponent
    ]
})
export class FinanceModule { }
