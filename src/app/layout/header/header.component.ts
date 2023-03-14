import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

 
export class HeaderComponent implements OnInit {
  userData:any;
  loggedProfile:any;

  constructor() { }

  ngOnInit(): void {
   this.userData=localStorage.getItem('userData')
   this.loggedProfile=JSON.parse(this.userData) 
  } 

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    
    window.location.href="/"
  }

}
