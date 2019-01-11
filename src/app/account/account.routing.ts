import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { LoginformComponent } from './loginform/loginform.component';

export const routing: ModuleWithProviders = RouterModule.forChild([



    {
        path: '',
        component: LoginformComponent
    }

]);