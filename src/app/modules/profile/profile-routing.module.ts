import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileLayoutComponent } from 'src/app/layout/profile-layout/profile-layout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportsComponent } from './reports/reports.component';
import { SystemLogReportComponent } from './system-log-report/system-log-report.component';

const routes: Routes = [
  { 
    path: "", 
    component: ProfileLayoutComponent,
    children: [
      { path: "my-profile", component: MyProfileComponent, pathMatch: 'full'},
      { path: "password-settings", component: PasswordResetComponent, pathMatch: 'full'},
      { path: "user-management", component: UserManagementComponent, pathMatch: 'full'},
      { path: "reports", component: ReportsComponent, pathMatch: 'full'},
      { path: "system-log-reports", component: SystemLogReportComponent, pathMatch: 'full'},
    ],
    //canActivate: [AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
