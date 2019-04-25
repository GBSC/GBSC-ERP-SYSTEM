import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leavesetup-master',
  templateUrl: './leavesetup-master.component.html',
  styleUrls: ['./leavesetup-master.component.css']
})
export class LeavesetupMasterComponent implements OnInit {

  tabs: string[] = ['Leave Year', 'Leave Purpose', 'Leave Type', 'Leave Policy', 'Leave Approver'];
 selectedTab = this.tabs[0];
 
  constructor() { }

  ngOnInit() {
  }

}
