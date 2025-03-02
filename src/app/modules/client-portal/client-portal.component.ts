import { Component, OnInit } from '@angular/core';
import { ClientPortalService } from 'src/app/modules/client-portal/services/client-portal.service';

interface ClientRequest {
  id: number;
  name: string;
  email: string;
  request_type: string;
  status: string;
}

@Component({
  selector: 'app-client-portal',
  templateUrl: './client-portal.component.html',
  styleUrls: ['./client-portal.component.css']
})
export class ClientPortalComponent implements OnInit {
  clientRequests: ClientRequest[] = [];

  constructor(private clientService: ClientPortalService) {}

  ngOnInit(): void {
    this.loadClientRequests();
  }

  loadClientRequests(): void {
    this.clientService.getClientRequests().subscribe(
      (data: ClientRequest[]) => {
        this.clientRequests = data;
      },
      (error) => {
        console.error('Error fetching client requests:', error);
      }
    );
  }

  approveRequest(id: number): void {
    this.clientService.approveRequest(id).subscribe(() => {
      this.loadClientRequests(); // Refresh after approval
    });
  }

  rejectRequest(id: number): void {
    this.clientService.rejectRequest(id).subscribe(() => {
      this.loadClientRequests(); // Refresh after rejection
    });
  }
}
