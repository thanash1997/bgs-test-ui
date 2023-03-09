import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from 'node_modules/@angular/forms';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  result:any;
  token:any;
  submitted:boolean = false;
  image: File | null = null;
  selectedFile='';
  choosedimg:any;
  userId=this.route.snapshot.paramMap.get("id");

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http:HttpClient
  ) {
    this.token='Bearer '+localStorage.getItem('token');
   }

   profileFrom = this.fb.group(
    {
      username:[""],
      first_name:[""],
      last_name:[""],
      email:[""],
      password:[""],
      password_confirmation:[""],
      team_id:[""],
      role_id:[""],
      profile_pic:[""],
    }
  );

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.http.get(environment.apiUrl+'/users/'+this.userId,{headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe(
      (res:any)=>{
        this.result=res.data;
        let data=res.data;
      this.profileFrom.patchValue({
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        team_id:data.team_id,
        role_id:data.role_id,
        profile_pic:data.profile_pic
      });
      this.choosedimg=data.image_url;
      },
      (msg:any)=>{
      }
    );
  }
 
}
