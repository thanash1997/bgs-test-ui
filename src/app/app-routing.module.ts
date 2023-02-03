import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdminLayoutComponent  } from './layout/app-admin-layout/app-admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MyProfileComponent } from './modules/profile/my-profile/my-profile.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'my-profile',
    component: AppAdminLayoutComponent,
    children: [
      { path: '', component: MyProfileComponent },
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
