import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment.prod';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthSerivcesService {

  api = environment.apiUrl;  // Ensure this points to your Laravel API

  constructor(private router: Router, private http: HttpClient) { }

  logInUser(email: string, password: string) {
    return this.http.post(`${this.api}/login`, { email, password });
  }
}
