import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: any[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getReports().subscribe(
      (data) => { this.reports = data; },
      (error) => { console.error('Error fetching reports:', error); }
    );
  }

  deleteReport(id: number): void {
    if (confirm('Are you sure you want to delete this report?')) {
      this.reportService.deleteReport(id).subscribe(() => {
        this.reports = this.reports.filter(r => r.id !== id);
      });
    }
  }
}