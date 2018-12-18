import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-territory-master',
  templateUrl: './territory-master.component.html',
  styleUrls: ['./territory-master.component.scss']
})
export class TerritoryMasterComponent implements OnInit {

  tabs: string[] = ['region','area','territory','section','subsection','distributor'];
  selectedTab = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

}
