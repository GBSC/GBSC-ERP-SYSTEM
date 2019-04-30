import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hrsetup-master',
  templateUrl: './hrsetup-master.component.html',
  styleUrls: ['./hrsetup-master.component.css']
})
export class HrsetupMasterComponent implements OnInit {

  tabs: string[] = ['Group', 'Employee Type', 'Employee Status', 'Function', 'Religion', 'Degree', 'Designation', 'Management Level', 'Relation'];
 selectedTab = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

}
