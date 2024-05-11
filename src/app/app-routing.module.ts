import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./account/login.component";
import {HOME} from "@angular/cdk/keycodes";
import {HomeComponent} from "./home/home.component";
import {LoginV2Component} from "./login-v2/login-v2.component";

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const routes: Routes =[
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  { path: '', component: HomeComponent },
  { path: 'login-v2', component: LoginV2Component },
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  //   }]
  // },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: '', loadChildren: accountModule },
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  //   }]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

