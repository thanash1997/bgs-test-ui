import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  userList:any;
  token:any;
  submitted:boolean = false;
  image: File | null = null;
  selectedFile='';
  choosedimg:any;
  userId=this.route.snapshot.paramMap.get("id");

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private http:HttpClient
  ) {
    this.token='Bearer '+localStorage.getItem('token');
   }



  ngOnInit(): void {
      this.getUsers();
  }

  getUsers(){
    this.http.get(environment.apiUrl+'/users', {headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe(
      (res:any)=>{
        this.userList=res.data;
      },
      (msg:any)=>{
      }
    );
  }

  deleteUser(id:any){
    
    this.http.delete(environment.apiUrl+'/users/'+id, {headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe(
      (res:any)=>{
        this.getUsers();

        this.toastr.success('', 'User Deleted...',{
          positionClass: 'toast-bottom-right',
        })
      },
      (msg:any)=>{
        this.toastr.error('', 'Try Later...',{
          positionClass: 'toast-bottom-right',
        })
      }
    );
    
  }
}
