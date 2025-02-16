import { Component, OnInit } from '@angular/core';
import { ScreeningProgressService } from '../../services/screening-progress.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screening-progress',
  templateUrl: './screening-progress.component.html',
  styleUrls: ['./screening-progress.component.css']
})
export class ScreeningProgressComponent implements OnInit {
  candidateId!: number;
  progressList: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(
    private screeningProgressService: ScreeningProgressService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.candidateId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.candidateId) {
      this.loadScreeningProgress();
    }
  }

  loadScreeningProgress(): void {
    this.screeningProgressService.getScreeningProgress(this.candidateId).subscribe(
      (data) => {
        this.progressList = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Error loading screening progress';
        this.loading = false;
        console.error('Error:', error);
      }
    );
  }
}
