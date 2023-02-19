import { Component } from '@angular/core';

@Component({
  selector: 'app-checkdatabase',
  templateUrl: './checkdatabase.component.html',
  styleUrls: ['./checkdatabase.component.css']
})
export class CheckdatabaseComponent {

  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  
}
