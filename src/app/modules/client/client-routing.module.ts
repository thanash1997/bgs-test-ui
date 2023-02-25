import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdminLayoutComponent } from 'src/app/layout/app-admin-layout/app-admin-layout.component';
import { ClientlistsComponent } from './clientlists/clientlists.component';

const routes: Routes = [
  { 
    path: "", 
    component: AppAdminLayoutComponent,
    children: [
      { path: "client-list", component: ClientlistsComponent, pathMatch: 'full'},
     
    ],
    //canActivate: [AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
