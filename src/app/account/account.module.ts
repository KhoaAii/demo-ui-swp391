import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {accountRoutes} from "./account-routing.module";
import { LayoutComponent } from "./layout.component";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from './register.component';
import { RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(accountRoutes)
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class AccountModule { }
