import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // ✅ Correct Import Path


interface ScreeningCase {
  id?: number;
  candidate_id: number;
  client_id: number;
  assigned_to?: number;
  status: string;
  notes?: string;
  approved_by?: number;
  approved_at?: string;
}

@Injectable({ providedIn: 'root' })
export class ScreeningCaseService {
  private apiUrl = `${environment.apiUrl}/screening-cases`;
  getScreeningCases: any;

  constructor(private http: HttpClient) {}

  getCases(): Observable<ScreeningCase[]> {
    return this.http.get<ScreeningCase[]>(this.apiUrl);
  }

  getCase(id: number): Observable<ScreeningCase> {
    return this.http.get<ScreeningCase>(`${this.apiUrl}/${id}`);
  }

  createCase(screeningCase: ScreeningCase): Observable<ScreeningCase> {
    return this.http.post<ScreeningCase>(this.apiUrl, screeningCase);
  }

  updateCase(id: number, screeningCase: ScreeningCase): Observable<ScreeningCase> {
    return this.http.put<ScreeningCase>(`${this.apiUrl}/${id}`, screeningCase);
  }

  deleteCase(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
