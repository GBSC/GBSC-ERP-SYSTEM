import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  styleUrls: ['./visit-detail.component.scss']
})
export class VisitDetailComponent implements OnInit {
  showHideFilter : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleFilter(){
    this.showHideFilter = !this.showHideFilter;
  }
}
