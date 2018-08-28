import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from '../attendance/root/root.component';
import { DefaultrosterComponent } from '../attendance/defaultroster/defaultroster.component';




export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'attendance',
        component: RootComponent,
        children: [
            { path: 'defaultroster', component: DefaultrosterComponent },
            { path: 'leavesetup', component: RootComponent },
            { path: 'leavesetup', component: RootComponent }

        ]
    }

]);

