import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreeningCaseRoutingModule } from './screening-case-routing.module';
import { ScreeningCaseListComponent } from 'src/app/modules/screening-case/pages/screening-case-list/screening-case-list.component';
import { ScreeningCaseFormComponent } from './pages/screening-case-form/screening-case-form.component';


@NgModule({
  declarations: [
    ScreeningCaseListComponent,
    ScreeningCaseFormComponent
  ],
  imports: [
    CommonModule,
    ScreeningCaseRoutingModule
  ]
})
export class ScreeningCaseModule { }
