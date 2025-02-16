import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ScreeningProgress {
  id: number;
  status: string;
  assigned_to: number;
  updated_at: string;
}

@Injectable({ providedIn: 'root' })
export class ScreeningProgressService {
  private apiUrl = 'http://localhost:8000/api/candidate';

  constructor(private http: HttpClient) {}

  getScreeningProgress(candidateId: number): Observable<ScreeningProgress[]> {
    return this.http.get<ScreeningProgress[]>(`${this.apiUrl}/${candidateId}/screening-progress`);
  }
}
