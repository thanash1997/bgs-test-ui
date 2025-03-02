import { Component, OnInit } from '@angular/core';
import { ScreeningCaseService } from 'src/app/services/screening-case.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface ScreeningCase {
  id: number;
  candidate_id: number;
  client_id: number;
  assigned_to?: number;
  status: string;
  notes?: string;
  approved_by?: number;
  approved_at?: string;
}

@Component({
  selector: 'app-screening-cases',
  templateUrl: './screening-cases.component.html',
  styleUrls: ['./screening-cases.component.css']
})
export class ScreeningCasesComponent implements OnInit {
  screeningCases: ScreeningCase[] = [];

  constructor(
    private screeningCaseService: ScreeningCaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadScreeningCases();
  }

  loadScreeningCases(): void {
    this.screeningCaseService.getScreeningCases().subscribe(
      (data: ScreeningCase[]) => {
        this.screeningCases = data;
      },
      (error: any) => {
        console.error('Error fetching screening cases:', error);
      }
    );
  }

  viewCaseDetails(caseId: number): void {
    this.router.navigate(['/screening-cases', caseId]);
  }
}
