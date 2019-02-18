import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-purchase-return-view',
  templateUrl: './purchase-return-view.component.html',
  styleUrls: ['./purchase-return-view.component.css']
})
export class PurchaseReturnViewComponent implements OnInit {

  public purchaseReturnViewForm: FormGroup;
    public date: any;
    public purchaseReturns : any;

  constructor(public PharmacyService: PharmacyService, public formBuilder: FormBuilder, public router: Router) {
    this.purchaseReturnViewForm = this.formBuilder.group({
      returnViewdate: ['']
    });

   }

  ngOnInit() {
    this.date = this.formatDate(new Date());

    this.PharmacyService.GetPurchaseReturnsByMonth(this.formatDate(new Date())).subscribe(res => {
      this.purchaseReturns = res;
      console.log(this.purchaseReturns)
  });
  }
  onsubmit(value) {
    this.PharmacyService.GetPurchaseReturnsByMonth(value.returnViewdate).subscribe(res => {
        this.purchaseReturns = res;
        console.log(this.purchaseReturns)
    });
}

  formatDate(date: Date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1);
  }
  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
        {
            location: 'after',
            widget: 'dxButton',
            options: {
                icon: 'add',
                onClick: this.addPurchaseReturn.bind(this)
            }
        });
      }

      addPurchaseReturn() {
        this.router.navigate(['/purchasereturn']);
    }
}
