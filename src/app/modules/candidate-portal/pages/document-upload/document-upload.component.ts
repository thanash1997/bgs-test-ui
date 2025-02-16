import { Component, OnInit } from '@angular/core';
import { DocumentUploadService } from '../../services/document-upload.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {
  candidateId!: number;
  documents: any[] = [];
  selectedFile?: File;
  uploadError = '';
  loading = true;

  constructor(
    private documentService: DocumentUploadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.candidateId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.candidateId) {
      this.loadDocuments();
    }
  }

  loadDocuments(): void {
    this.documentService.getDocuments(this.candidateId).subscribe(
      (data) => {
        this.documents = data;
        this.loading = false;
      },
      (error) => {
        this.uploadError = 'Error loading documents';
        this.loading = false;
        console.error('Error:', error);
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadDocument(): void {
    if (!this.selectedFile) {
      this.uploadError = 'Please select a file to upload';
      return;
    }

    this.documentService.uploadDocument(this.candidateId, this.selectedFile).subscribe(
      () => {
        this.loadDocuments();
        this.selectedFile = undefined;
      },
      (error) => {
        this.uploadError = 'Error uploading document';
        console.error('Upload Error:', error);
      }
    );
  }

  deleteDocument(documentId: number): void {
    if (confirm('Are you sure you want to delete this document?')) {
      this.documentService.deleteDocument(this.candidateId, documentId).subscribe(
        () => {
          this.loadDocuments();
        },
        (error) => {
          this.uploadError = 'Error deleting document';
          console.error('Delete Error:', error);
        }
      );
    }
  }
}
