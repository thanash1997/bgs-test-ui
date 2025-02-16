import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CandidateProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  documents?: any[];
  screeningCases?: any[];
  notifications?: any[];
}

@Injectable({ providedIn: 'root' })
export class CandidatePortalService {
  private apiUrl = 'http://localhost:8000/api/candidate-portal';

  constructor(private http: HttpClient) {}

  getCandidateProfile(id: number): Observable<CandidateProfile> {
    return this.http.get<CandidateProfile>(`${this.apiUrl}/${id}`);
  }

  uploadDocument(id: number, document: File): Observable<any> {
    const formData = new FormData();
    formData.append('document', document);
    return this.http.post(`${this.apiUrl}/${id}/upload-document`, formData);
  }

  getScreeningProgress(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/screening-progress`);
  }

  getNotifications(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/notifications`);
  }

  downloadReport(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/download-report`, { responseType: 'blob' });
  }
}
