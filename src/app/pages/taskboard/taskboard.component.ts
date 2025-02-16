import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  //styleUrls: ['./taskboard.component.css'] // Add styling if needed
})
export class TaskboardComponent implements OnInit {
  tasks: any;

  constructor() {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    // Static example data
    this.tasks = {
      newlyInitiated: [
        { id: 'CBB/2112/60821', client: 'CIMB Bank', package: 'CIMB Standard Check', candidate: 'Jolynni Ganesh', timer: '5D:21H:26M' },
        { id: 'MBB/2112/60821', client: 'Maybank', package: 'Maybank Comprehensive', candidate: 'Utapah Binti Yusof', timer: '5D:21H:26M' },
      ],
      ongoing: [
        { id: 'CBB/2112/60821', client: 'CIMB Bank', package: 'CIMB Standard Check', candidate: 'Yan Loo Ming', timer: '5D:21H:26M' },
      ],
      submittedForReview: [
        { id: 'CBB/2112/60821', client: 'CIMB Bank', package: 'CIMB Standard Check', candidate: 'Grace Johnson', timer: '5D:21H:26M' },
        { id: 'MBB/2112/60821', client: 'Maybank', package: 'Maybank Comprehensive', candidate: 'Viknesh Muthugaya', timer: '5D:21H:26M' },
      ],
      approved: [
        { id: 'CBB/2112/60821', client: 'CIMB Bank', package: 'CIMB Standard Check', candidate: 'Alina Farah', timer: '5D:21H:26M' },
      ]
    };
  }
}
