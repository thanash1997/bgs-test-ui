import { Component, OnInit } from '@angular/core';
import {   AbstractControl,  FormBuilder,  FormGroup,  FormControl,  Validators,} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata = {
    email :"",
    password :""
  }
  submit  = false;
  errorMessage ="";
  loading= false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loading = true;
    console.log(this.formdata);
  }
}
