import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { AddNewChecksComponent } from './pages/add-new-checks/add-new-checks.component';
import { ClientModule } from './modules/client/client.module';
import { ClientProfileLayoutComponent } from './layout/client-profile-layout/client-profile-layout.component';
import { EditNewChecksComponent } from './pages/edit-new-checks/edit-new-checks.component';



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
    AddNewChecksComponent,
    ClientProfileLayoutComponent,
    EditNewChecksComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    FormsModule,
    BsDatepickerModule,
    ClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    ModalModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
