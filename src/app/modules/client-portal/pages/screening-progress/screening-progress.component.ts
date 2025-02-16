import { Component, OnInit } from '@angular/core';
import { ClientPortalService } from '../../services/client-portal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screening-progress',
  templateUrl: './screening-progress.component.html',
  styleUrls: ['./screening-progress.component.css']
})
export class ScreeningProgressComponent implements OnInit {
  clientId!: number;
  progressList: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(
    private clientService: ClientPortalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.clientId) {
      this.loadScreeningProgress();
    }
  }

  loadScreeningProgress(): void {
    this.clientService.getScreeningProgress(this.clientId).subscribe(
      (data) => {
        this.progressList = data.progress;
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
