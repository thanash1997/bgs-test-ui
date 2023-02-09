import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  dobchoosed:any;

  constructor() { }

  ngOnInit(): void {
  }

  // onDateChange(event:any){
  //   let evalue=event;
  //   this.dobchoosed =this.datepipe.transform(evalue, 'yyyy-MM-dd');
  //   this.membUpdate.get("dob")?.patchValue(this.dobchoosed);
  // }
}
