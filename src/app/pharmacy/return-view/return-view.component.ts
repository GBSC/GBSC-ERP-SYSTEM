import { Component, OnInit } from '@angular/core';
import { SalesReturn } from '../../core/Models/Pharmacy/SalesReturn';
import { PharmacyService } from '../../core';

@Component({
  selector: 'app-return-view',
  templateUrl: './return-view.component.html',
  styleUrls: ['./return-view.component.scss']
})
export class ReturnViewComponent implements OnInit {
  private SalesReturns: any;
  private DetailSR: any;

  constructor(private PharmacyService: PharmacyService) {

  }

  ngOnInit() {
    this.PharmacyService.GetSalesReturns().subscribe(res => {
      console.log(res);

      this.SalesReturns = res;
      console.log(this.SalesReturns);

    });
  }



}
