import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { RootComponent }    from './root/root.component';
import { DashboardComponent }    from './dashboard/dashboard.component';

export const routing: ModuleWithProviders = RouterModule.forChild([

 

  {
    path: 'finance',
    component: RootComponent,

    children: [    

 { path: 'dashboard',  component: DashboardComponent }

    ]       
  }  

]);