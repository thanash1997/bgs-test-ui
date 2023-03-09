import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileLayoutComponent } from 'src/app/layout/profile-layout/profile-layout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportsComponent } from './reports/reports.component';
import { SystemLogReportComponent } from './system-log-report/system-log-report.component';
import { RoleEditorComponent } from './role-editor/role-editor.component';
import { UserCreateComponent } from './user-management/user-create/user-create.component';
import { UserViewComponent } from './user-management/user-view/user-view.component';
import { UserEditComponent } from './user-management/user-edit/user-edit.component';

const routes: Routes = [
  { 
    path: "", 
    component: ProfileLayoutComponent,
    children: [
      { path: "my-profile", component: MyProfileComponent, pathMatch: 'full'},
      { path: "password-settings", component: PasswordResetComponent, pathMatch: 'full'},
      { path: "user-management", component: UserManagementComponent, pathMatch: 'full'},
      { path: "user/create", component: UserCreateComponent, pathMatch: 'full'},
      { path: "user/:id/view", component: UserViewComponent, pathMatch: 'full'},
      { path: "user/:id/edit", component: UserEditComponent, pathMatch: 'full'},
      { path: "reports", component: ReportsComponent, pathMatch: 'full'},
      { path: "system-log-reports", component: SystemLogReportComponent, pathMatch: 'full'},
      { path: "role-permission", component: RoleEditorComponent, pathMatch: 'full'},
    ],
    //canActivate: [AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
