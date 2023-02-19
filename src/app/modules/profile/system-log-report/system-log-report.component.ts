import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-log-report',
  templateUrl: './system-log-report.component.html',
  styleUrls: ['./system-log-report.component.css']
})
export class SystemLogReportComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  

}
