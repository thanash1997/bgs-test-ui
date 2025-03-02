import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ClientProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  screeningCases?: any[];
}

interface ScreeningRequest {
  candidate_id: number;
  status: string;
  notes?: string;
}

interface ClientRequest {
  id: number;
  name: string;
  email: string;
  request_type: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class ClientPortalService {
  private apiUrl = 'http://api.bees.asia/api/client-portal';

  constructor(private http: HttpClient) {}

  // ✅ Fetch client profile details
  getClientProfile(id: number): Observable<ClientProfile> {
    return this.http.get<ClientProfile>(`${this.apiUrl}/${id}`);
  }

  // ✅ Submit a new screening request
  requestScreening(id: number, screeningRequest: ScreeningRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/request-screening`, screeningRequest);
  }

  // ✅ Get screening progress for a client
  getScreeningProgress(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/screening-progress`);
  }

  // ✅ Download report for a specific screening case
  downloadReport(id: number, screeningId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/download-report/${screeningId}`, { responseType: 'blob' });
  }

  // ✅ Fetch all client requests (ADDED)
  getClientRequests(): Observable<ClientRequest[]> {
    return this.http.get<ClientRequest[]>(`${this.apiUrl}`);
  }

  // ✅ Approve a client request (ADDED)
  approveRequest(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/approve`, {});
  }

  // ✅ Reject a client request (ADDED)
  rejectRequest(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/reject`, {});
  }

  
}

