import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { AuthGuardService } from '../core';
import { LocatorComponent } from './locator/locator.component';



export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'etracker',
        component: RootComponent,
        children: [
            {
                path: 'locator', component: LocatorComponent
            }
        ]
    }
])


