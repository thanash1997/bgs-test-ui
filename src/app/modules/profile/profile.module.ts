import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportsComponent } from './reports/reports.component';
import { SystemLogReportComponent } from './system-log-report/system-log-report.component';
import {  BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DataTablesModule } from 'angular-datatables';
import { RoleEditorComponent } from './role-editor/role-editor.component';

@NgModule({
  declarations: [
    MyProfileComponent,
    PasswordResetComponent,
    UserManagementComponent,
    ReportsComponent,
    SystemLogReportComponent,
    RoleEditorComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    BsDatepickerModule.forRoot(),
    DataTablesModule
  ]
})
export class ProfileModule { }
