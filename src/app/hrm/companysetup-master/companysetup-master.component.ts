import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companysetup-master',
  templateUrl: './companysetup-master.component.html',
  styleUrls: ['./companysetup-master.component.css']
})
export class CompanysetupMasterComponent implements OnInit {

  
  tabs: string[] = ['Company', 'Country', 'City', 'Branch', 'Department'];
 selectedTab = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

}
