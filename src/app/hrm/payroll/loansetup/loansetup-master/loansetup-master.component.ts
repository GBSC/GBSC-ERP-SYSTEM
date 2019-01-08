import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loansetup-master',
  templateUrl: './loansetup-master.component.html',
  styleUrls: ['./loansetup-master.component.css']
})
export class LoansetupMasterComponent implements OnInit {

  tabs: string[] = ['Loan Type', 'User Loan'];
  selectedTab = this.tabs[0];
  
  constructor() { }

  ngOnInit() {
  }

}
