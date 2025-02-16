import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard as AuthService } from "./services/auth.guard";

// Layouts
import { AppAdminLayoutComponent } from './layout/app-admin-layout/app-admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

// Pages
import { MyProfileComponent } from './modules/profile/my-profile/my-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CheckdatabaseComponent } from './pages/checkdatabase/checkdatabase.component';
import { ContactlistComponent } from './pages/contactlist/contactlist.component';
import { AddNewChecksComponent } from './pages/add-new-checks/add-new-checks.component';
import { EditNewChecksComponent } from './pages/edit-new-checks/edit-new-checks.component';

// New Modules (Developed Together)
import { ScreeningCasesComponent } from './modules/screening-cases/screening-cases.component';
import { ScreeningProgressComponent } from './modules/client-portal/pages/screening-progress/screening-progress.component';
import { ReportListComponent } from './modules/reports/pages/report-list/report-list.component';
import { ReportFormComponent } from './modules/reports/pages/report-form/report-form.component';
import { CandidatePortalComponent } from './modules/candidate-portal/candidate-portal.component';
import { DocumentUploadComponent } from './modules/candidate-portal/pages/document-upload/document-upload.component';
import { ClientPortalComponent } from './modules/client-portal/client-portal.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthLayoutComponent, children: [{ path: '', component: LoginComponent }] },

  // Admin Routes
  {
    path: 'dashboard',
    component: AppAdminLayoutComponent,
    canActivate: [AuthService],
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
    children: [{ path: '', component: ContactlistComponent }]
  },

  // Newly Built Candidate Routes
  {
    path: 'screening-cases',
    component: AppAdminLayoutComponent,
    children: [{ path: '', component: ScreeningCasesComponent }]
  },
  {
    path: 'screening-progress',
    component: AppAdminLayoutComponent,
    children: [{ path: '', component: ScreeningProgressComponent }]
  },

  // Newly Built Report Routes
  {
    path: 'reports',
    component: AppAdminLayoutComponent,
    children: [
      { path: '', component: ReportListComponent },
      { path: 'new', component: ReportFormComponent },
      { path: ':id/edit', component: ReportFormComponent }
    ]
  },

  // Candidate Portal Routes
  {
    path: 'candidate-portal',
    component: CandidatePortalComponent,
    children: [
      { path: 'upload-document', component: DocumentUploadComponent },
      { path: 'screening-progress', component: ScreeningProgressComponent }
    ]
  },

  // Client Portal Routes
  {
    path: 'client-portal',
    component: ClientPortalComponent,
    children: [
      { path: 'request-screening', component: ScreeningCasesComponent },
      { path: 'download-report', component: ReportListComponent }
    ]
  },

  // Catch-all Route (Redirects Unknown Routes to Dashboard)
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
