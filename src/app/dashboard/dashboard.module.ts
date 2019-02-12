import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './dashboard.routing';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './shared/menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RootComponent } from './root/root.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        MenuComponent,
        RootComponent,
        DashboardComponent
    ]
})
export class DashboardModule { }
