import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createsalaryfiles',
  templateUrl: './createsalaryfiles.component.html',
  styleUrls: ['./createsalaryfiles.component.css']
})
export class CreatesalaryfilesComponent implements OnInit {
  year = [ {Name: "2018",ID:1}, {Name:"2017",ID:2}];
  month = [ {Name: "July",ID:1}, {Name:"Aug",ID:2}];
  constructor() { }

  ngOnInit() {
  }

}
