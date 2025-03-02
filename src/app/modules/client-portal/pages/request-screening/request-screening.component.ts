import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientPortalService } from '../../services/client-portal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-screening',
  templateUrl: './request-screening.component.html',
  styleUrls: ['./request-screening.component.css']
})
export class RequestScreeningComponent implements OnInit {
  requestForm!: FormGroup;
  clientId!: number;
  successMessage: string = ''; 
  errorMessage: string = '';  

  constructor(
    private fb: FormBuilder, 
    private clientService: ClientPortalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
    this.initializeForm();
  }

  initializeForm(): void {
    this.requestForm = this.fb.group({
      candidate_id: ['', Validators.required],
      status: ['pending', Validators.required],
      notes: ['']
    });
  }

  submitRequest(): void {
    if (this.requestForm.valid) {
      this.clientService.requestScreening(this.clientId, this.requestForm.value).subscribe(
        (response) => {
          this.successMessage = 'Screening request submitted successfully!';
          this.errorMessage = '';
          this.requestForm.reset();
        },
        (error) => {
          this.errorMessage = 'Error submitting screening request. Please try again.';
          console.error('Error:', error);
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}
