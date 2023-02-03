import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    PasswordResetComponent,
    UserManagementComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
