import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanysetupComponent } from './companysetup/companysetup.component';
import { FinancialyearComponent } from './financialyear/financialyear.component';
import { VouchertypeComponent } from './vouchertype/vouchertype.component';

export const routing: ModuleWithProviders = RouterModule.forChild([



    {
        path: 'finance',
        component: RootComponent,

        children: [

            { path: 'dashboard', component: DashboardComponent },
            { path: 'companysetup', component: CompanysetupComponent },
            { path: 'financialyear', component: FinancialyearComponent },
            { path: 'vouchertype', component: VouchertypeComponent }

        ]
    }

]);
