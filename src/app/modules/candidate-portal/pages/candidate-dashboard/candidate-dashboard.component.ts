import { Component, OnInit } from '@angular/core';
import { CandidatePortalService } from '../services/candidate-portal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.css']
})
export class CandidateDashboardComponent implements OnInit {
  candidate: any = {};
  candidateId!: number;
  loading = true;
  errorMessage = '';

  constructor(
    private candidateService: CandidatePortalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.candidateId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.candidateId) {
      this.loadCandidateProfile();
    }
  }

  loadCandidateProfile(): void {
    this.candidateService.getCandidateProfile(this.candidateId).subscribe(
      (data) => {
        this.candidate = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Error loading candidate profile';
        this.loading = false;
        console.error('Error:', error);
      }
    );
  }
}
