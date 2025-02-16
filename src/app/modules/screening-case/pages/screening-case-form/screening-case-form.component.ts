import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreeningCaseService } from '../services/screening-case.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-screening-case-form',
  templateUrl: './screening-case-form.component.html',
  styleUrls: ['./screening-case-form.component.css']
})
export class ScreeningCaseFormComponent implements OnInit {
  screeningCaseForm: FormGroup;
  caseId?: number;

  constructor(
    private fb: FormBuilder,
    private screeningCaseService: ScreeningCaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.screeningCaseForm = this.fb.group({
      candidate_id: ['', Validators.required],
      client_id: ['', Validators.required],
      assigned_to: [''],
      status: ['pending', Validators.required],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.caseId = this.route.snapshot.params['id'];
    if (this.caseId) {
      this.screeningCaseService.getCase(this.caseId).subscribe((data) => {
        this.screeningCaseForm.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.caseId) {
      this.screeningCaseService.updateCase(this.caseId, this.screeningCaseForm.value).subscribe(() => {
        this.router.navigate(['/screening-cases']);
      });
    } else {
      this.screeningCaseService.createCase(this.screeningCaseForm.value).subscribe(() => {
        this.router.navigate(['/screening-cases']);
      });
    }
  }
}
