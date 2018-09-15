import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultrosterComponent } from '../attendance/defaultroster/defaultroster.component';
import { ModuleGuardService } from '../../account/auth/module-guard.service';
import { RootComponent } from '../root/root.component';




export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'attendance',
        component: RootComponent,
        canActivate: [ModuleGuardService],
        children: [
            { path: 'defaultroster', component: DefaultrosterComponent },
            { path: 'leavesetup', component: RootComponent },
            { path: 'leavesetup', component: RootComponent }

        ]
    }

]);

