import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../services/report.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  reportForm: FormGroup;
  reportId?: number;

  constructor(
    private fb: FormBuilder,
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.reportForm = this.fb.group({
      screening_case_id: ['', Validators.required],
      generated_by: ['', Validators.required],
      report_type: ['Summary', Validators.required],
      status: ['pending', Validators.required],
      file_path: ['']
    });
  }

  ngOnInit(): void {
    this.reportId = this.route.snapshot.params['id'];
    if (this.reportId) {
      this.reportService.getReport(this.reportId).subscribe((data) => {
        this.reportForm.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.reportId) {
      this.reportService.updateReport(this.reportId, this.reportForm.value).subscribe(() => {
        this.router.navigate(['/reports']);
      });
    } else {
      this.reportService.createReport(this.reportForm.value).subscribe(() => {
        this.router.navigate(['/reports']);
      });
    }
  }
}
