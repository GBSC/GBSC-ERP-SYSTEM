import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { RootComponent }    from './root/root.component';
import { RolesandprivilegesComponent }    from '../systemadministration/rolesandprivileges/rolesandprivileges.component';
 


export const routing: ModuleWithProviders = RouterModule.forChild([

 

  {
    path: 'systemadministration',
    component: RootComponent,

    children: [    

     { path: 'rolesandprivileges',  component: RolesandprivilegesComponent },
 
    ]       
  }  

]);