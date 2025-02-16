import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { Router } from '@angular/router';  // ✅ Import Router
//import { Candidate } from '../models/candidate.model';

interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
}

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(
    private candidateService: CandidateService,
    private router: Router  // ✅ Inject Router here
  ) {}

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates(): void {
    this.candidateService.getCandidates().subscribe(
      //(data) => { this.candidates = data; },
      (error) => { console.error('Error fetching candidates:', error); }
    );
  }

  editCandidate(id: number): void {
    this.router.navigate([`/candidates/edit/${id}`]);  // ✅ Now Router works
  }
  
  deleteCandidate(id: number): void {
    if (confirm('Are you sure you want to delete this candidate?')) {
      this.candidateService.deleteCandidate(id).subscribe(() => {
        this.candidates = this.candidates.filter(c => c.id !== id);
      });
    }
  }
}
