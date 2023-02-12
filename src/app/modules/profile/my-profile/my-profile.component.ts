import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  choosedimg:any;
  constructor() { }

  ngOnInit(): void {
  }
  onFileChanged(event:any){

  }

}
