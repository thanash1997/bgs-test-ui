import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportListComponent } from './pages/report-list/report-list.component';
import { ReportDetailsComponent } from './pages/report-details/report-details.component';
import { ReportFormComponent } from './pages/report-form/report-form.component';


@NgModule({
  declarations: [
    ReportListComponent,
    ReportDetailsComponent,
    ReportFormComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
