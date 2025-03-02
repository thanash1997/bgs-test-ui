import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // ✅ Correct Import Path

@Injectable({ providedIn: 'root' })
export class ScreeningCaseService {
  private apiUrl = `${environment.apiUrl}/screening-cases`;

  constructor(private http: HttpClient) {}

  getScreeningCases(): Observable<any[]> {  // ✅ Rename method correctly
    return this.http.get<any[]>(`${this.apiUrl}/screening-cases`);
  }
  
  getScreeningCaseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
