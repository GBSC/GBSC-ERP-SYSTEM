import { NgModule, Component, OnInit } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {

  public dataSource;
  public productionData;
  public waterLandRatio1;
  public waterLandRatio2;
  public waterLandRatio3;
  public waterLandRatio4;

  constructor() {


    this.waterLandRatio1 = [{
      name: 'Land',
      area: 0.29
}, {
      name: 'Water',
      area: 0.71
  }];

  this.waterLandRatio2 = [{
    name: 'Land',
    area: 0.29
}, {
    name: 'Water',
    area: 0.71
}];

this.waterLandRatio3 = [{
  name: 'Land',
  area: 0.29
}, {
  name: 'Water',
  area: 0.71
}];

this.waterLandRatio4 = [{
  name: 'Land',
  area: 0.29
}, {
  name: 'Water',
  area: 0.71
}];

    this.productionData = [{
      year: 1970,
      country: "Saudi Arabia",
      oil: 192.2
  }, {
      year: 1970,
      country: "USA",
      oil: 533.5
  }, {
      year: 1970,
      country: "Iran",
      oil: 192.6
  }, {
      year: 1970,
      country: "Mexico",
      oil: 24.2
  }, {
      year: 1980,
      country: "Saudi Arabia",
      oil: 509.8
  }, {
      year: 1980,
      country: "USA",
      oil: 480.2
  }, {
      year: 1980,
      country: "Iran",
      oil: 74.3
  }, {
      year: 1980,
      country: "Mexico",
      oil: 107.2
  }, {
      year: 1990,
      country: "Saudi Arabia",
      oil: 342.6
  }, {
      year: 1990,
      country: "USA",
      oil: 416.6
  }, {
      year: 1990,
      country: "Iran",
      oil: 162.8
  }, {
      year: 1990,
      country: "Mexico",
      oil: 146.3
  }, {
      year: 1990,
      country: "Russia",
      oil: 515.9
  }, {
      year: 2000,
      country: "Saudi Arabia",
      oil: 456.3
  }, {
      year: 2000,
      country: "USA",
      oil: 352.6
  }, {
      year: 2000,
      country: "Iran",
      oil: 191.3
  }, {
      year: 2000,
      country: "Mexico",
      oil: 171.2
  }, {
      year: 2000,
      country: "Russia",
      oil: 323.3
  }, {
      year: 2008,
      country: "Saudi Arabia",
      oil: 515.3
  }, {
      year: 2008,
      country: "USA",
      oil: 304.9
  }, {
      year: 2008,
      country: "Iran",
      oil: 209.9
  }, {
      year: 2008,
      country: "Mexico",
      oil: 157.7
  }, {
      year: 2008,
      country: "Russia",
      oil: 488.5
  }, {
      year: 2009,
      country: "Saudi Arabia",
      oil: 459.5
  }, {
      year: 2009,
      country: "USA",
      oil: 325.3
  }, {
      year: 2009,
      country: "Iran",
      oil: 202.4
  }, {
      year: 2009,
      country: "Mexico",
      oil: 147.5
  }, {
      year: 2009,
      country: "Russia",
      oil: 494.2
  }
];

    this.dataSource = [{
      state: "Jan",
      young: 6.7,
      middle: 28.6,
      older: 5.1
    }, {
      state: "Feb",
      young: 9.6,
      middle: 43.4,
      older: 9
    }, {
      state: "Mar",
      young: 13.5,
      middle: 49,
      older: 5.8
    }, {
      state: "Apr",
      young: 30,
      middle: 90.3,
      older: 14.5
    }];

  }


  ngOnInit() {
  }

  customizeTooltip(arg: any) {
    return {
      text: arg.seriesName + ' years: ' + arg.valueText
    };
  }

  customizeSeries(valueFromNameField: number) {
    return valueFromNameField === 2009 ? 
        { type: "line", label: { visible: true }, color: "#ff3f7a" } : {};
}



}
