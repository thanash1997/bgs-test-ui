import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard as AuthService } from "./services/auth.guard";

import { AppAdminLayoutComponent  } from './layout/app-admin-layout/app-admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MyProfileComponent } from './modules/profile/my-profile/my-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CheckdatabaseComponent } from './pages/checkdatabase/checkdatabase.component';
import { ContactlistComponent } from './pages/contactlist/contactlist.component';
import { AddNewChecksComponent } from './pages/add-new-checks/add-new-checks.component';
import { EditNewChecksComponent } from './pages/edit-new-checks/edit-new-checks.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: AppAdminLayoutComponent,
    canActivate: [AuthService],
    children: [
      { path: '', component: DashboardComponent },
    ]
  },
  {
    path: '',
    component: AppAdminLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
    ]
  },
  {
    path: 'check-database',
    component: AppAdminLayoutComponent,
    children: [
      { path: '', component: CheckdatabaseComponent },
      { path: 'checks-edit/:id', component: EditNewChecksComponent },
      { path: 'checks-add', component: AddNewChecksComponent },
    ]
  },
  {
    path: 'contact-list',
    component: AppAdminLayoutComponent,
    children: [
      { path: '', component: ContactlistComponent },
    ]
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
