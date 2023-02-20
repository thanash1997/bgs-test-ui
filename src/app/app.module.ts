import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './modules/profile/profile.module';
import { AppComponent } from './app.component';
import { AppAdminLayoutComponent } from './layout/app-admin-layout/app-admin-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileLayoutComponent } from './layout/profile-layout/profile-layout.component';
import {  BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckdatabaseComponent } from './pages/checkdatabase/checkdatabase.component';
import { ContactlistComponent } from './pages/contactlist/contactlist.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    AppAdminLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AuthLayoutComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    ProfileLayoutComponent,
    CheckdatabaseComponent,
    ContactlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    FormsModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
    DataTablesModule,
    ModalModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
