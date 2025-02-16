import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from '../../services/candidate.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Candidate {
  id?: number;
  name: string;
  email: string;
  phone: string;
  status?: string;
}

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {
  candidateForm: FormGroup;
  candidateId?: number;

  constructor(
    private fb: FormBuilder,
    private candidateService: CandidateService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.candidateForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      status: ['pending']
    });
  }

  ngOnInit(): void {
    this.candidateId = this.route.snapshot.params['id'];
    if (this.candidateId) {
      this.candidateService.getCandidate(this.candidateId).subscribe((data) => {
        this.candidateForm.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.candidateId) {
      this.candidateService.updateCandidate(this.candidateId, this.candidateForm.value).subscribe(() => {
        this.router.navigate(['/candidates']);
      });
    } else {
      this.candidateService.createCandidate(this.candidateForm.value).subscribe(() => {
        this.router.navigate(['/candidates']);
      });
    }
  }
}
