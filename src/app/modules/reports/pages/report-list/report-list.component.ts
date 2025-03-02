import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { Router } from '@angular/router';
import { Report } from 'src/app/models/report.model';  // ✅ Import the shared model

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: Report[] = [];

  constructor(
    private reportService: ReportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getReports().subscribe(
      //(data: Report[]) => { this.reports = data; }, // ✅ Uses the correct shared type
      (error: any) => { console.error('Error fetching reports:', error); }
    );
  }

  viewReport(reportId: number): void {
    console.log("Viewing report:", reportId);
    this.router.navigate(['/reports', reportId]);
  }

  deleteReport(id: number): void {
    if (confirm('Are you sure you want to delete this report?')) {
      this.reportService.deleteReport(id).subscribe(() => {
        this.reports = this.reports.filter(r => r.id !== id);
      });
    }
  }
}
