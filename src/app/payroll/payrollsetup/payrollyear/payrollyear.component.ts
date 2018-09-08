import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payrollyear',
  templateUrl: './payrollyear.component.html',
  styleUrls: ['./payrollyear.component.css']
})
export class PayrollyearComponent implements OnInit {

  public payrollyaer : any;

  constructor() { }

  ngOnInit() {
  this.payrollyaer = [
    {
      year : "2014",
      startDate :"12-4-2018",
      endDate : "12-4-2020",
      isCurrentPayrollYear : "12-4-2016"
    }
  ]
  }

}
