import { Component, OnInit } from '@angular/core';
import { AuthService, PharmacyService } from '../../core';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.css']
})
export class PurchaseInvoiceComponent implements OnInit {

  public GRN : any;

  constructor(public PharmacyService : PharmacyService, public Auth : AuthService) { }

  ngOnInit() {
  }

  getGRNDetails(code) {
    this.PharmacyService.GetGrnDetailsByCode(code).subscribe((res : any) => {
      this.GRN = res;
    });
  }

}
