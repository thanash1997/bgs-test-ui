import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthSerivcesService } from '../services/auth-serivces.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthSerivcesService, public router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
  
}
