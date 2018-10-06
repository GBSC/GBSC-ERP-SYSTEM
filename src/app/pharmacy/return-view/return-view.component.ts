import { Component, OnInit } from '@angular/core';
import { SalesReturn } from '../../core/Models/Pharmacy/SalesReturn';
import { PharmacyService } from '../../core';

@Component({
  selector: 'app-return-view',
  templateUrl: './return-view.component.html',
  styleUrls: ['./return-view.component.scss']
})
export class ReturnViewComponent implements OnInit {
  private SalesReturns : SalesReturn;
  private DetailSR : SalesReturn;

  constructor(private PharmacyService : PharmacyService) {

  }

  ngOnInit() {
    this.PharmacyService.GetSalesReturns().subscribe((res : SalesReturn) => this.SalesReturns = res);
  }

  GetPurchaseOrderDetails(value) {
    console.log(value);
    this.PharmacyService.GetSalesReturnDetailsByCode(value.data.returnNumber).subscribe((res : SalesReturn) => this.DetailSR = res);
    return this.DetailSR;
  }

}
