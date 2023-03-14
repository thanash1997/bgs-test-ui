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
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-new-checks',
  templateUrl: './edit-new-checks.component.html',
  styleUrls: ['./edit-new-checks.component.css']
})
export class EditNewChecksComponent implements OnInit {
  result:any;
  token:any;
  submitted:boolean = false;
  checkId=this.route.snapshot.paramMap.get("id");

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http:HttpClient
  ) {
    this.token='Bearer '+localStorage.getItem('token');
   }

   chkFrom = this.fb.group(
    {
      name:["",Validators.required],
      price:["",Validators.required],
    }
   );

   ngOnInit(): void {   
      this.getCheckData();
  }

  getCheckData(){
    this.http.get(environment.apiUrl+'/checks/'+this.checkId,{headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe(
      (res:any)=>{
        this.result=res.data;
        let data=res.message;
        this.chkFrom.patchValue({
          name: data.name,
          price: data.price,
        });
      },
      (msg:any)=>{
        console.log(msg);
      }
    );
  }

  onSubmit(){
    this.submitted=true;
    var form=this.chkFrom.value;
    this.http.patch(environment.apiUrl+'/checks/'+this.checkId, form , {headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe(
      (res:any)=>{
        this.toastr.success('', 'Update Successfully...',{
          positionClass: 'toast-bottom-right',
        })
        this.getCheckData();
      },
      (msg:any)=>{
        this.toastr.error('', 'Try Later...',{
          positionClass: 'toast-bottom-right',
        })
      }
    );
  }

}
