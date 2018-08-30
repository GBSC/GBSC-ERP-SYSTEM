import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencyrate',
  templateUrl: './currencyrate.component.html',
  styleUrls: ['./currencyrate.component.css']
})
export class CurrencyrateComponent implements OnInit {

  public currencyrate : any;

  constructor() { }

  ngOnInit() {
  this.currencyrate = [
    {
      valueDate:"12-4-2018",
    }
  ]
  }

}
