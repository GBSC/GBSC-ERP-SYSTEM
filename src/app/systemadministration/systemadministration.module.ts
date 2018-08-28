import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './systemadministration.routing';
import { RootComponent } from './root/root.component';

import { FooterComponent } from '../systemadministration/shared/footer/footer.component';
import { HeaderComponent } from '../systemadministration/shared/header/header.component';
import { MenuComponent } from '../systemadministration/shared/menu/menu.component';



import { DxButtonModule, DxDataGridModule, DevExtremeModule } from 'devextreme-angular';
import { RolesandprivilegesComponent } from './rolesandprivileges/rolesandprivileges.component';
import { BranchComponent } from '../systemadministration/branch/branch.component';
import { CompanyComponent } from '../systemadministration/company/company.component';
import { DepartmentComponent } from '../systemadministration/department/department.component';
import { FeatureComponent } from '../systemadministration/feature/feature.component';
import { ModuleComponent } from '../systemadministration/module/module.component';
import { RoleComponent } from '../systemadministration/role/role.component';

import { SystemAdministrationService } from './service/systemadministration.services';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        DxButtonModule,
        DevExtremeModule,
        DxDataGridModule,
    ],
    declarations: [

        RootComponent,
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        RolesandprivilegesComponent,
        BranchComponent,
        CompanyComponent,
        DepartmentComponent,
        FeatureComponent,
        ModuleComponent,
        RoleComponent,




    ],

    exports: [],
    providers: [

        SystemAdministrationService

    ]
})
export class SystemAdministrationModule { }
