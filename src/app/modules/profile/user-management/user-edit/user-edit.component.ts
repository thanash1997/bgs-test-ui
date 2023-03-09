import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
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
      username:["",Validators.required],
      first_name:["",Validators.required],
      last_name:["",Validators.required],
      email:["",[
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ],
      password:["",[Validators.required,Validators.minLength(8)]],
      password_confirmation:["",[Validators.required,Validators.minLength(8)]],
      team_id:["",Validators.required],
      role_id:["",Validators.required],
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
        console.log(msg);
        
      }
    );
  }

  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0]; 
    console.log('-',this.selectedFile)
  }

  onSubmit(){
   
    this.submitted=true;
    var form=this.profileFrom.value;
  
    let pwd=form.password;
    let cpwd=form.password_confirmation;
   
    if(pwd!='' && cpwd!=''){
      if(pwd!=cpwd){
        this.profileFrom.controls['password_confirmation'].setErrors({'customError': true});
      }
      else{
        this.profileFrom.controls['password_confirmation'].setErrors(null);
      }
    } 


    if (this.profileFrom.valid) {

  /*     file.upload = Upload.upload({
        url: '/tmp',
        data: {file: file, username: $scope.username},
    }); */

      const formData = new FormData();
      /* if(form.username){
        formData.append('username', form.username);
      }
      if(form.first_name){
        formData.append('first_name', form.first_name);
      }
      if(form.last_name){
        formData.append('last_name', form.last_name);
      }
      if(form.email){
        formData.append('email', form.email);
      }
      if(this.selectedFile){
        formData.append("image", this.selectedFile);  
      } */
      this.http.put(environment.apiUrl+'/users/'+this.userId, form, { headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe((res:any)=>{
        if(res.status='success'){
         console.log(res)
         this.toastr.success('', 'Profile Update Successfully...',{
          positionClass: 'toast-bottom-right',
        })
        }
      },(err:any)=>{
        this.toastr.error('', err.error.message,{
          timeOut: 2500,
          positionClass: 'toast-bottom-right' 
        });
      });
    }
  }
 
}
