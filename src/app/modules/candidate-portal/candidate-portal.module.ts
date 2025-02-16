import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatePortalRoutingModule } from './candidate-portal-routing.module';
import { CandidateDashboardComponent } from './pages/candidate-dashboard/candidate-dashboard.component';
import { DocumentUploadComponent } from './pages/document-upload/document-upload.component';
import { ScreeningProgressComponent } from './pages/screening-progress/screening-progress.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ReportDownloadComponent } from './pages/report-download/report-download.component';


@NgModule({
  declarations: [
    CandidateDashboardComponent,
    DocumentUploadComponent,
    ScreeningProgressComponent,
    NotificationsComponent,
    ReportDownloadComponent
  ],
  imports: [
    CommonModule,
    CandidatePortalRoutingModule
  ]
})
export class CandidatePortalModule { }
