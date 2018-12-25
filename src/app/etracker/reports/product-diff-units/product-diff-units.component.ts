import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-diff-units',
  templateUrl: './product-diff-units.component.html',
  styleUrls: ['./product-diff-units.component.scss']
})
export class ProductDiffUnitsComponent implements OnInit {
  showHideFilter : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleFilter(){
    this.showHideFilter = !this.showHideFilter;
  }
}
