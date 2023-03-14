import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkdatabase',
  templateUrl: './checkdatabase.component.html',
  styleUrls: ['./checkdatabase.component.css']
})
export class CheckdatabaseComponent {
  chkList:any;
  token:any;
  submitted:boolean = false;
  dtOptions: DataTables.Settings = {};
  loader:boolean = false;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private http:HttpClient
  ) {
    this.token='Bearer '+localStorage.getItem('token');
   }


   ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getLists();
}

getLists(){
  this.http.get(environment.apiUrl+'/checks', {headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe(
    (res:any)=>{
      
      this.chkList=res.data;
      this.loader=true;
    },
    (msg:any)=>{

    }
  );
}

deleteChk(id:any){
  this.http.delete(environment.apiUrl+'/checks/'+id, {headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe(
    (res:any)=>{
      this.toastr.success('', 'Checklist Deleted...',{
        positionClass: 'toast-bottom-right',
      })
      this.getLists();
      this.loader=true;
    },
    (err:any)=>{
      this.toastr.error('', err.error.message,{
        timeOut: 2500,
        positionClass: 'toast-bottom-right' 
      });
    }
  );
}
  
}
