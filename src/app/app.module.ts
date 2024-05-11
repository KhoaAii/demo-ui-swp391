import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {provideRoutes, RouterModule, Routes} from '@angular/router';
// import { ComponentsModule } from './components/components.module';
import { AlertComponent } from './_components';
import { ErrorInterceptor, JwtInterceptor, fakeBackendProvider } from './_helpers';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import { FilterPipe } from 'shared/filter.pipe';
import { HelperService } from './_helpers/helper.service';
import {MatDialogModule} from "@angular/material/dialog";
import { MatCardModule } from '@angular/material/card';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { NotifierModule, NotifierOptions } from 'angular-notifier';
import {PoupMessageComponent} from "./poup-message/poup-message.component";
import {LoginComponent} from "./account/login.component";
import { HomeComponent } from './home/home.component';
import { LoginV2Component } from './login-v2/login-v2.component';
import {MatTabsModule} from "@angular/material/tabs";
// const customNotifierOptions: NotifierOptions = {
//   position: {
//     horizontal: {
//       position: 'right',
//       distance: 12
//     },
//     vertical: {
//       position: 'top',
//       distance: 12,
//       gap: 10
//     }
//   },
//   theme: 'material',
//   behaviour: {
//     autoHide: 5000,
//     onClick: 'hide',
//     onMouseover: 'pauseAutoHide',
//     showDismissButton: true,
//     stacking: 4
//   },
//   animations: {
//     enabled: true,
//     show: {
//       preset: 'slide',
//       speed: 300,
//       easing: 'ease'
//     },
//     hide: {
//       preset: 'fade',
//       speed: 300,
//       easing: 'ease',
//       offset: 50
//     },
//     shift: {
//       speed: 300,
//       easing: 'ease'
//     },
//     overlap: 150
//   }
// };
@NgModule({
  declarations: [
    AppComponent,
    PoupMessageComponent,
    HomeComponent,
    LoginV2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxPaginationModule,
    // NotifierModule.withConfig(customNotifierOptions),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
