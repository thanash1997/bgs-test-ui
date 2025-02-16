import { Component, OnInit } from '@angular/core';
import { ScreeningCaseService } from '../services/screening-case.service';

@Component({
  selector: 'app-screening-case-list',
  templateUrl: './screening-case-list.component.html',
  styleUrls: ['./screening-case-list.component.css']
})
export class ScreeningCaseListComponent implements OnInit {
  screeningCases: any[] = [];

  constructor(private screeningCaseService: ScreeningCaseService) {}

  ngOnInit(): void {
    this.loadScreeningCases();
  }

  loadScreeningCases(): void {
    this.screeningCaseService.getCases().subscribe(
      (data) => { this.screeningCases = data; },
      (error) => { console.error('Error fetching screening cases:', error); }
    );
  }

  deleteScreeningCase(id: number): void {
    if (confirm('Are you sure you want to delete this screening case?')) {
      this.screeningCaseService.deleteCase(id).subscribe(() => {
        this.screeningCases = this.screeningCases.filter(c => c.id !== id);
      });
    }
  }
}
