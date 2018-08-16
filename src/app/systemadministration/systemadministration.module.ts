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

    ],

    exports: [],
    providers: [

        SystemAdministrationService

    ]
})
export class SystemAdministrationModule { }
