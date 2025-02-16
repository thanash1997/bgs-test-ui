import { Component, OnInit } from '@angular/core';
import { ClientPortalService } from '../../services/client-portal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  client: any = {};
  clientId!: number;
  loading = true;
  errorMessage = '';

  constructor(
    private clientService: ClientPortalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.clientId) {
      this.loadClientProfile();
    }
  }

  loadClientProfile(): void {
    this.clientService.getClientProfile(this.clientId).subscribe(
      (data) => {
        this.client = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Error loading client profile';
        this.loading = false;
        console.error('Error:', error);
      }
    );
  }
}

