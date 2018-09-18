// import { Component, OnInit } from '@angular/core';
// import { Company, DashboardService } from '../dashboard.service';
// <<<<<<< HEAD
// import { Router } from '@angular/router';
// import { AccountService } from '../../account/service.service';
// =======
// >>>>>>> cbc66a0013be062a5203030c16af78b391f9f19e

// @Component({
//     selector: 'app-dashboard',
//     templateUrl: './dashboard.component.html',
//     styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit {
// <<<<<<< HEAD
//   public dataSource: any = [];
//   public availableModules = [];
//   constructor(service: DashboardService, private router: Router, private accountService: AccountService) {
//     this.dataSource = service.getCompanies();
//   }
// =======
//     dataSource: Company[];
// >>>>>>> cbc66a0013be062a5203030c16af78b391f9f19e

//     constructor(service: DashboardService) {
//         this.dataSource = service.getCompanies();
//     }


// <<<<<<< HEAD
//     console.log(this.dataSource);

//   }

//   selectionChanged(e) {

//     let route: any;

//     e.component.collapseAll(-1);
//     route = this.availableModules.find(m => {
//       return m.module === e.selectedRowsData[0].Description;
//     });

//     this.router.navigate([`${route.route}`]);

//   }
// =======
//     ngOnInit() {
//     }
// >>>>>>> cbc66a0013be062a5203030c16af78b391f9f19e

// }
