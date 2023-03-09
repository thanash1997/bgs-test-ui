import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  result:any;
  token:any;
  submitted:boolean = false;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private http:HttpClient
  ) {
    this.token='Bearer '+localStorage.getItem('token');
   }

   profilePwdFrom = this.fb.group(
    {
      current_password:["",Validators.required],
      password:["",[Validators.required,Validators.minLength(8)],],
      password_confirmation:["",[Validators.required,Validators.minLength(8)]]
    }
  );

  get f(){
    return this.profilePwdFrom.controls;
  } 


  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    var form=this.profilePwdFrom.value;
    let pwd=form.password;
    let cpwd=form.password_confirmation;
   
    if(pwd!='' && cpwd!=''){
      if(pwd!=cpwd){
        this.profilePwdFrom.controls['password_confirmation'].setErrors({'customError': true});
      }
      else{
        this.profilePwdFrom.controls['password_confirmation'].setErrors(null);
      }
    }

    if (this.profilePwdFrom.valid) {
      this.http.post(environment.apiUrl+'/change-password', form, { headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe((res:any)=>{
        
        if(res.status=='success'){
          this.toastr.success('', 'Password Update Successfully...',{
            positionClass: 'toast-bottom-right',
          });
        }else{
          this.toastr.error('', res.message,{
            positionClass: 'toast-bottom-right',
          });
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
