import { Component, OnInit } from '@angular/core';
import { Company, DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataSource: Company[];

  constructor(service: DashboardService) {
      this.dataSource = service.getCompanies();
  }
 

  ngOnInit() {
  }

}
