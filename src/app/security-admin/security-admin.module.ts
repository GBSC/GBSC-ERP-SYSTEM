import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { RootComponent } from './root/root.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BranchComponent } from './branch/branch.component';
import { DepartmentComponent } from './department/department.component';
import { RolesandprivilegesComponent } from './rolesandprivileges/rolesandprivileges.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { SettingsComponent } from './settings/settings.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UsersComponent } from './users/users.component';
import { UserService } from '../core/Services/Security/user.service';
import { ProfileComponent } from './profile/profile.component';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { DxPopupModule } from 'devextreme-angular/ui/popup';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { Select2Module } from 'ng2-select2';


@NgModule({
    imports: [
        CommonModule,
        SecurityRoutingModule,
        FormsModule,
        Select2Module,
        ReactiveFormsModule,
        DxButtonModule,
        DxDataGridModule,
        DxTreeViewModule,
        DxSelectBoxModule,
        DxPopupModule
    ],
    declarations: [
        RootComponent,
        MenuComponent,
        UserregistrationComponent,
        UsersComponent,
        SettingsComponent,
        CountryComponent,
        CityComponent,
        CompanySetupComponent,
        BranchComponent,
        DepartmentComponent,
        RolesandprivilegesComponent,
        ProfileComponent
        ],
    providers: [UserService]
})
export class SecurityAdminModule { }
