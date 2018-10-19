import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from '../../core/Models/Pharmacy/PurchaseOrder';
import { PharmacyService } from '../../core';

 
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-purhcaseorder-view',
    templateUrl: './purhcaseorder-view.component.html',
    styleUrls: ['./purhcaseorder-view.component.scss']
})
export class PurhcaseorderViewComponent implements OnInit {
    private PurchaseOrders: PurchaseOrder;
    private DetailPO: PurchaseOrder;
    private PurchaseOrder : any;

    private PurchaseOrderViewForm : FormGroup;

    public date : any;

    constructor(private PharmacyService: PharmacyService , private formBuilder : FormBuilder, public router: Router) {

        this.PurchaseOrderViewForm = this.formBuilder.group({
            orderDate:['']
        })

    }

  async  ngOnInit() {
        // this.PharmacyService.GetPurchaseOrders().subscribe((res: PurchaseOrder) => this.PurchaseOrders = res);
        this.date = this.formatDate(new Date());
        this.PurchaseOrder =    await this.PharmacyService.GetPurchaseOrdersByDate(this.formatDate(new Date()));
        console.log( this.PurchaseOrder);
        console.log(this.formatDate(new Date()));

    }

    // GetPurchaseOrderDetails(value) {
    //     this.PharmacyService.GetPurchaseOrderDetailsByCode(value.data.orderNumber).subscribe((res: PurchaseOrder) => this.DetailPO = res);
    // }
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
        this.router.navigate(['/pharmacy/purchaseorder']);
      }

      formatDate(date: Date) {
        return date.getFullYear( ) + "-" + (date.getMonth() +1);
    }

   async onsubmit(value){
       console.log(value)
        this.PurchaseOrder =    await this.PharmacyService.GetPurchaseOrdersByDate(value.orderDate);
     }

}
