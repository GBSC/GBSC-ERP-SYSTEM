import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SalesOrder } from '../../core/Models/Pharmacy/SalesOrder';
import { PharmacyService } from '../../core';
 

import  { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-prescription-view',
  templateUrl: './prescription-view.component.html',
  styleUrls: ['./prescription-view.component.scss']
})
export class PrescriptionViewComponent implements OnInit {

  public date : any;
  private PresciptionForm : FormGroup;
      private SalesOrders: SalesOrder;


  constructor(private PharmacyService: PharmacyService , private formBuilder : FormBuilder ,  public router: Router) {
    this.PresciptionForm = this.formBuilder.group({
        Date :['']
    });
}
  ngOnInit() {

    this.date = this.formatDate(new Date());

    this.PharmacyService.GetSalesOrdersByMonth(this.formatDate(new Date())).subscribe((res : SalesOrder) => {
      this.SalesOrders = res;
  });

  }

  GetPresciptionDetails(value) {
    // this.PharmacyService.GetSalesOrdersByMonth(value.Date).subscribe((res : SalesOrder) => {
    //     this.SalesOrders = res;
    // });
}


  formatDate(date: Date) {
    return date.getFullYear( ) + "-" +( date.getMonth() +1);
}


  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
    {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.addvoucher.bind(this)
        }
    });
}

addvoucher() {
    this.router.navigate(['/pharmacy/issuance']);
}

}
