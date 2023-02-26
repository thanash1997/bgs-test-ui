import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientlistsComponent } from './clientlists/clientlists.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientCasesComponent } from './client-cases/client-cases.component';
import { ClientPackagesComponent } from './client-packages/client-packages.component';
import { ClientBillingComponent } from './client-billing/client-billing.component';
import { ClientReportComponent } from './client-report/client-report.component'
// import { ClientListComponent } from './client-list/client-list.component';


@NgModule({
  declarations: [
    // ClientListComponent
  
    ClientlistsComponent,
    ClientDetailsComponent,
    ClientCasesComponent,
    ClientPackagesComponent,
    ClientBillingComponent,
    ClientReportComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
