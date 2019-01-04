import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RootComponent } from "./root/root.component";
import { SetupcompanyComponent } from "./setupcompany/setupcompany.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: RootComponent,

        children: [

            { path: 'setupcompany', component: SetupcompanyComponent },
            { path: 'setupcompany/:id', component: SetupcompanyComponent }
        ]
    }

]);