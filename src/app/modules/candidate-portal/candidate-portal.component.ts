import { Component, OnInit } from '@angular/core';
import { CandidatePortalService } from 'src/app/modules/candidate-portal/services/candidate-portal.service';
import { CandidatePortalRoutingModule } from './candidate-portal-routing.module';

@Component({
  selector: 'app-candidate-portal',
  templateUrl: './candidate-portal.component.html',
  styleUrls: ['./candidate-portal.component.css']
})
export class CandidatePortalComponent implements OnInit {
  candidateId: number = 1;
  candidateData: any;

  constructor(private candidateService: CandidatePortalService) {}

  ngOnInit(): void {
    this.loadCandidateData();
  }

  loadCandidateData(): void {
    this.candidateService.getCandidateInfo(this.candidateId).subscribe(
      (data) => { this.candidateData = data; },
      (error) => { console.error('Error fetching candidate data:', error); }
    );
  }
}
