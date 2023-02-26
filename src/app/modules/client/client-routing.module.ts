import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdminLayoutComponent } from 'src/app/layout/app-admin-layout/app-admin-layout.component';
import { ClientlistsComponent } from './clientlists/clientlists.component';
import { ClientProfileLayoutComponent } from 'src/app/layout/client-profile-layout/client-profile-layout.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientCasesComponent } from './client-cases/client-cases.component';
import { ClientPackagesComponent } from './client-packages/client-packages.component';
import { ClientBillingComponent } from './client-billing/client-billing.component';
import { ClientReportComponent } from './client-report/client-report.component';

const routes: Routes = [
  {     
    path: "", 
    component: AppAdminLayoutComponent,
    children: [
      { path: "client-list", component: ClientlistsComponent, pathMatch: 'full'},      
    ],
    
    //canActivate: [AuthguardGuard]
  },
  {     
    path: "", 
    component: ClientProfileLayoutComponent,
    children: [
      { path: "client-detail", component: ClientDetailsComponent, pathMatch: 'full'},      
      { path: "client-cases", component: ClientCasesComponent, pathMatch: 'full'},      
      { path: "client-packages", component: ClientPackagesComponent, pathMatch: 'full'},      
      { path: "client-billing", component: ClientBillingComponent, pathMatch: 'full'},      
      { path: "client-reports", component: ClientReportComponent, pathMatch: 'full'},      
    ],
    
    //canActivate: [AuthguardGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
