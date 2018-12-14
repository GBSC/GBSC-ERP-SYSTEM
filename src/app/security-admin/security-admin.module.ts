import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { RootComponent } from './root/root.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BranchComponent } from './branch/branch.component';
import { DepartmentComponent } from './department/department.component';
import { RolesandprivilegesComponent } from './rolesandprivileges/rolesandprivileges.component';
import { CompanyComponent } from './company/company.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
    imports: [
        CommonModule,
        SecurityRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DevExtremeModule,
        DxDataGridModule
    ],
    declarations: [
        RootComponent,
        MenuComponent,
        SettingsComponent,
        CountryComponent,
        CityComponent,
        BranchComponent,
        DepartmentComponent,
        RolesandprivilegesComponent,
        CompanyComponent
    ]
})
export class SecurityAdminModule { }
