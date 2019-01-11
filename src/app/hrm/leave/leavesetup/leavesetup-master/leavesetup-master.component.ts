import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leavesetup-master',
  templateUrl: './leavesetup-master.component.html',
  styleUrls: ['./leavesetup-master.component.css']
})
export class LeavesetupMasterComponent implements OnInit {

  tabs: string[] = ['Leave Year', 'Leave Purpose', 'Leave Subtype', 'Leave Type','Leave Daytype', 'Leave Eligibility', 
  'Leave Policy', 'Leave Approver'];
 selectedTab = this.tabs[0];
 
  constructor() { }

  ngOnInit() {
  }

}
