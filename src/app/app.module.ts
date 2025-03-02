import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ClientPortalModule } from './modules/client-portal/client-portal.module';

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
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckdatabaseComponent } from './pages/checkdatabase/checkdatabase.component';
import { ContactlistComponent } from './pages/contactlist/contactlist.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AddNewChecksComponent } from './pages/add-new-checks/add-new-checks.component';
import { ClientModule } from './modules/client/client.module';
import { ClientProfileLayoutComponent } from './layout/client-profile-layout/client-profile-layout.component';
import { EditNewChecksComponent } from './pages/edit-new-checks/edit-new-checks.component';
import { CandidateListComponent } from './pages/candidate-list/candidate-list.component';
import { CandidateFormComponent } from './pages/candidate-form/candidate-form.component';
import { ScreeningCasesComponent } from './modules/screening-cases/screening-cases.component';
import { ScreeningProgressComponent } from './modules/client-portal/pages/screening-progress/screening-progress.component';

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
    CandidateListComponent,
    CandidateFormComponent,
    ScreeningCasesComponent,
    //ScreeningProgressComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, // ✅ Fix for missing pipes like date
    AppRoutingModule,
    ProfileModule,
    ClientPortalModule, // ✅ Fix for missing client-portal module
    FormsModule,
   // NgxDatatableModule
    ReactiveFormsModule,
    BsDatepickerModule,
    ClientModule,
    BrowserAnimationsModule,
        ModalModule.forRoot(), // ✅ Fix for Bootstrap modal issues
    HttpClientModule,
    ReactiveFormsModule,
   // NgxDatatableModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
