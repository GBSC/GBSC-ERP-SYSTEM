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
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { SettingsComponent } from './settings/settings.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UsersComponent } from './users/users.component';
import { UserService } from '../core/Services/Security/user.service';
import { ProfileComponent } from './profile/profile.component';
import { CompanySetupComponent } from './company-setup/company-setup.component';


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
        UserregistrationComponent,
        UsersComponent,
        SettingsComponent,
        CountryComponent,
        CityComponent,
        BranchComponent,
        DepartmentComponent,
        RolesandprivilegesComponent,
        ProfileComponent,
        CompanySetupComponent
    ],
    providers: [UserService]
})
export class SecurityAdminModule { }
