import { Component , ElementRef, OnInit, TemplateRef,ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})

export class ContactlistComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  /* modalRef?: BsModalRef; */
  result:any;
  token:any;
  loader:boolean=false;
  submitted:boolean=false;
  contact:any;

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private http:HttpClient,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private modalRef: BsModalRef
    ) {
      this.token='Bearer '+localStorage.getItem('token');
  }

  openModal(template: TemplateRef<any>) {
   /*  this.modalRef.show(template); */
   this.modalRef = this.modalService.show(template); 
  }
  
  closeModal() {
    this.modalRef.hide();
  }
  contactFrom = this.fb.group(
    {
      name:["",Validators.required],
      email:["",[
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ],
      landline_area_code:["",Validators.required],
      landline_phone:["",Validators.required],
      mobile_area_code:["",Validators.required],
      mobile_phone:["",Validators.required],
      company:["",Validators.required],
      department:["",Validators.required],
      id:['']
    }
  );

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.getContact()
  }

  getContact(){
      this.http.get(environment.apiUrl+'/contacts', {headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe(
        (res:any)=>{
          this.loader=true;
          this.result=res.data;
        },
        (err:any)=>{
          this.loader=false;
          this.toastr.error('', err.error.message,{
            timeOut: 2500,
            positionClass: 'toast-bottom-right' 
          });
        }
      ); 
  }

  onSubmit(){
    this.submitted=true;
    var form=this.contactFrom.value;
    if (this.contactFrom.valid) {
      this.http.post(environment.apiUrl+'/contacts', form, { headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe((res:any)=>{
        if(res.status='success'){
       this.closeModal()
         console.log(res)
         this.toastr.success('', 'New Contact Created...',{
          positionClass: 'toast-bottom-right',
        });
        
        this.contactFrom.reset()
        }
      },(err:any)=>{
        this.toastr.error('', err.error.message,{
          timeOut: 2500,
          positionClass: 'toast-bottom-right' 
        });
      });
    }

  }

  deleteContact(id:any){
    this.http.delete(environment.apiUrl+'/contacts/'+id, { headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe((res:any)=>{
      if(res.status='success'){
        this.toastr.success('', 'Contact removed...',{
          positionClass: 'toast-bottom-right',
        });
        this.getContact()
      }
    },(err:any)=>{
      this.toastr.error('', err.error.message,{
        timeOut: 2500,
        positionClass: 'toast-bottom-right' 
      });
    });
  }

  viewContact(id:any){
    this.contact='';
    this.http.get(environment.apiUrl+'/contacts/'+id, { headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe((res:any)=>{
      this.contact=res.data;
    },(err:any)=>{
      this.toastr.error('', err.error.message,{
        timeOut: 2500,
        positionClass: 'toast-bottom-right' 
      });
    });
  }

  editContact(id:any){
    this.contact='';
    this.http.get(environment.apiUrl+'/contacts/'+id, { headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe((res:any)=>{
      this.contact=res.data;

      this.contactFrom.patchValue({
        name: this.contact.name,
        email: this.contact.email, 
        "landline_area_code": this.contact.landline_area_code, 
        "landline_phone":this.contact.landline_phone, 
        "mobile_area_code":this.contact.mobile_area_code, 
        "mobile_phone":this.contact.mobile_phone, 
        "company": this.contact.company, 
        "department":this.contact.department, 
        "id":this.contact.id, 
      });
    
    },(err:any)=>{
      this.toastr.error('', err.error.message,{
        timeOut: 2500,
        positionClass: 'toast-bottom-right' 
      });
    });
  }

  onUpdate(){
      this.submitted=true;
      var form=this.contactFrom.value;
      if (this.contactFrom.valid) {
        this.http.put(environment.apiUrl+'/contacts/'+form.id, form, { headers: new HttpHeaders().set("Authorization", ''+this.token)}).subscribe((res:any)=>{
          if(res.status='success'){
          console.log(res)
          this.toastr.success('', 'Contact Updated...',{
            positionClass: 'toast-bottom-right',
          });
          this.getContact()
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
