import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface DocumentFile {
  id: number;
  file_path: string;
}

@Injectable({ providedIn: 'root' })
export class DocumentUploadService {
  private apiUrl = 'http://localhost:8000/api/candidate-documents';

  constructor(private http: HttpClient) {}

  uploadDocument(candidateId: number, document: File): Observable<any> {
    const formData = new FormData();
    formData.append('document', document);
    return this.http.post(`${this.apiUrl}/${candidateId}/upload`, formData);
  }

  getDocuments(candidateId: number): Observable<DocumentFile[]> {
    return this.http.get<DocumentFile[]>(`${this.apiUrl}/${candidateId}/list`);
  }

  deleteDocument(candidateId: number, documentId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${candidateId}/delete/${documentId}`);
  }
}
