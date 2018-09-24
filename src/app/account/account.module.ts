import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './account.routing';
import { RootComponent } from './root/root.component';

import { LoginformComponent } from './loginform/loginform.component';
import { AccountService } from './service.service';
import { ModuleGuardService } from './auth/module-guard.service';
import { AuthGuardService } from './auth/auth-guard.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        routing,

    ],
    declarations: [

        RootComponent,
        LoginformComponent],
    providers:
    [
        AccountService,
        AuthGuardService,
        ModuleGuardService

    ]
})
export class AccountModule { }
