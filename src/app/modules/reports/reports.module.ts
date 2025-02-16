import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportListComponent } from './pages/report-list/report-list.component';
import { ReportDetailsComponent } from './pages/report-details/report-details.component';


@NgModule({
  declarations: [
    ReportListComponent,
    ReportDetailsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
