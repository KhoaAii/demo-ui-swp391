import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

export const accountRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full',
    //     children: [
    //         { path: 'login', component: LoginComponent },
    //         { path: 'register', component: RegisterComponent }
    //     ]
    // }
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class AccountRoutingModule { }
