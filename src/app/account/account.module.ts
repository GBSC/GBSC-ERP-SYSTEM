import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './account.routing';
import { RootComponent } from './root/root.component';

import { LoginformComponent } from './loginform/loginform.component';
import { AccountService } from './service.service';


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

    ]
})
export class AccountModule { }
