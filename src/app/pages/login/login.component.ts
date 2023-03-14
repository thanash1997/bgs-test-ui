import { Component, OnInit, VERSION } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  submit  = false;
  errorMessage ="";
  loading= false;
  result: any;
  response='';
  submitted: boolean=false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
    let userLogged=localStorage.getItem('token');
   if(userLogged){
    this.router.navigate(['/dashboard']); 
   }  
  } 

  get f(){
    return this.loginForm.controls;
  } 

  loginForm = this.fb.group(
    {
      username: [
        "",
        [
          Validators.required
        ]
      ],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(1)])
      ]
    }
  );

  onSubmit(){
    this.submitted=true;
    if (this.loginForm.valid) {
       
      const data = this.loginForm.value;
      this.loading=true;
     this.http.post(environment.apiUrl+'/login',{username:data.username,password:data.password}).subscribe(
      (res:any)=>{
        this.loading=false;
        if(res.status=='success'){
          this.response='';
          let userdata=res.data;
          localStorage.setItem('token',res.data.token);
          delete userdata['token'];
          localStorage.setItem('userData',JSON.stringify(userdata));
          setTimeout(()=>{
            this.router.navigate(['/dashboard']); 
          },200);
        }else{
          this.response=res.message;
        }
      }
     );
    }else{
      this.loading=false;
    }
    console.log(this.loginForm.valid)
  }
}
