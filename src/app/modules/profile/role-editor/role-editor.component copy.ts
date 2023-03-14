import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-role-editor',
  templateUrl: './role-editor.component.html',
  styleUrls: ['./role-editor.component.css']
})
export class RoleEditorComponent implements OnInit{
  result:any;
  token:any;
  submitted:boolean = false;
  form: FormGroup;
  choosedRole:any;
  form: FormGroup;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http:HttpClient
  ) {
    this.token='Bearer '+localStorage.getItem('token');
    this.form = fb.group({
      name: [],
      address: fb.array([])
    })
   }

   form = new FormGroup({
    courses: new FormArray([]),
});

get courses(): FormArray {
    return this.form.get('courses') as FormArray;
}

addCourse() {
    this.courses.push(new FormControl());
}

onSubmit() {
    console.log(this.courses.value);
}


  ngOnInit(): void {
 
  }

  loadPermissions($event:any){
      this.choosedRole=$event.target.value
      if(this.choosedRole){
        this.http.get(environment.apiUrl+'/roles/'+this.choosedRole+'/permissions',{ headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe((res:any)=>{
          this.result=res.data.permissions
        },(err:any)=>{
          this.toastr.error('', err.error.message,{
            timeOut: 2500,
            positionClass: 'toast-bottom-right' 
          });
        })
      }
  }

  updatePermissions(){
    console.log('e',this.result)
    $(document).ready(function(){
        $('form input[name="permission"]').each(function(){
          
        })     
    })

    for(let i=0; i<this.result.length;i++){
        
    }

    
   /*  this.http.patch(environment.apiUrl+'/roles/'+this.choosedRole+'/permissions/',{ headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe((res:any)=>{
      this.result=res.data.permissions
    },(err:any)=>{
      this.toastr.error('', err.error.message,{
        timeOut: 2500,
        positionClass: 'toast-bottom-right' 
      });
    }) */
  }
}
