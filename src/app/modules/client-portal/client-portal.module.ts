import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPortalRoutingModule } from './client-portal-routing.module';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { RequestScreeningComponent } from './pages/request-screening/request-screening.component';
import { ScreeningProgressComponent } from './pages/screening-progress/screening-progress.component';
import { ReportDownloadComponent } from './pages/report-download/report-download.component';


@NgModule({
  declarations: [
    ClientDashboardComponent,
    RequestScreeningComponent,
    ScreeningProgressComponent,
    ReportDownloadComponent
  ],
  imports: [
    CommonModule,
    ClientPortalRoutingModule
  ]
})
export class ClientPortalModule { }
