import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overtimesetup-master',
  templateUrl: './overtimesetup-master.component.html',
  styleUrls: ['./overtimesetup-master.component.css']
})
export class OvertimesetupMasterComponent implements OnInit {

  tabs: string[] = ['Overtime Flag', 'Overtime Type'];
  selectedTab = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

}
