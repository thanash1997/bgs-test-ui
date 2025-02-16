import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // ✅ Correct Import Path

interface Report {
  id?: number;
  screening_case_id: number;
  generated_by: number;
  report_type: string;
  status: string;
  file_path?: string;
}

@Injectable({ providedIn: 'root' })
export class ReportService {
  private apiUrl = `${environment.apiUrl}/reports`; // ✅ Use dynamic API URL

  constructor(private http: HttpClient) {}

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiUrl);
  }

  getReport(id: number): Observable<Report> {
    return this.http.get<Report>(`${this.apiUrl}/${id}`);
  }

  createReport(report: Report): Observable<Report> {
    return this.http.post<Report>(this.apiUrl, report);
  }

  updateReport(id: number, report: Report): Observable<Report> {
    return this.http.put<Report>(`${this.apiUrl}/${id}`, report);
  }

  deleteReport(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
