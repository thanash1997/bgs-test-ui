import { Component, OnInit } from '@angular/core';
import { ClientPortalService } from '../../services/client-portal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-download',
  templateUrl: './report-download.component.html',
  styleUrls: ['./report-download.component.css']
})
export class ReportDownloadComponent implements OnInit {
  clientId!: number;
  reports: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(
    private clientService: ClientPortalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.clientId) {
      this.loadReports();
    }
  }

  loadReports(): void {
    this.clientService.getClientProfile(this.clientId).subscribe(
      (data) => {
        this.reports = data?.screeningCases?.filter((s: any) => s.report_file) || [];
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Error loading reports';
        this.loading = false;
        console.error('Error:', error);
      }
    );
  }

  downloadReport(screeningId: number): void {
    this.clientService.downloadReport(this.clientId, screeningId).subscribe(
      (file) => {
        const blob = new Blob([file], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `screening-report-${screeningId}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      (error) => {
        this.errorMessage = 'Error downloading report';
        console.error('Download Error:', error);
      }
    );
  }
}
