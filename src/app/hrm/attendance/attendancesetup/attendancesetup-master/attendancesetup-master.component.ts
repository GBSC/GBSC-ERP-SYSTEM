import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendancesetup-master',
  templateUrl: './attendancesetup-master.component.html',
  styleUrls: ['./attendancesetup-master.component.css']
})
export class AttendancesetupMasterComponent implements OnInit {

  tabs: string[] = ['Roster', 'Shift', 'Assign Roster', 'Flag Category','Flag Effect Type', 'Flag Type', 'Flag Value',
  'Attendance Flag', 'Attendance Request Type', 'Attendance Request Approver'];
 selectedTab = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

}
