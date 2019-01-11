import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-setup',
  templateUrl: './company-setup.component.html',
  styleUrls: ['./company-setup.component.css']
})
export class CompanySetupComponent implements OnInit {

    tabs: string[] = ['country', 'city', 'branch', 'department'];
    selectedTab = this.tabs[0];

    constructor() { }

    ngOnInit() {
    }

}
