import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


import { ProfileRoutingModule } from './profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportsComponent } from './reports/reports.component';
import { SystemLogReportComponent } from './system-log-report/system-log-report.component';
import {  BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DataTablesModule } from 'angular-datatables';
import { RoleEditorComponent } from './role-editor/role-editor.component';
import { ModalModule } from 'ngx-bootstrap/modal';
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
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
    }),
    ModalModule.forRoot()
  ]
})
export class ProfileModule { }
