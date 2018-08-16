import { NgModule } from '@angular/core';
 
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing }  from '../setup/setup.routing';
import { RootComponent } from './root/root.component';

 
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';

import { DxButtonModule, DxDataGridModule, DevExtremeModule } from 'devextreme-angular';

import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { BranchComponent } from './branch/branch.component';
import { DepartmentComponent } from './department/department.component';
import { RoleComponent } from './role/role.component';
import { SetupService } from './service/setupservices';
import { FeatureComponent } from './feature/feature.component';
import { ModuleComponent } from './module/module.component';

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
    CompanyComponent,
     BranchComponent, 
     DepartmentComponent,
      RoleComponent,
      FeatureComponent,
      ModuleComponent
    ],
    providers:[
      SetupService
    ]
})
export class SetupModule { }
