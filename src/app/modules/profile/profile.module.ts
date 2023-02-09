import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportsComponent } from './reports/reports.component';
import { SystemLogReportComponent } from './system-log-report/system-log-report.component';
import {  BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    MyProfileComponent,
    PasswordResetComponent,
    UserManagementComponent,
    ReportsComponent,
    SystemLogReportComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class ProfileModule { }
