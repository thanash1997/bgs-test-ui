import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ProfileLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
