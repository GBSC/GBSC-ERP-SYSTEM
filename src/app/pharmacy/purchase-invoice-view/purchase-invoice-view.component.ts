import { Component, OnInit } from '@angular/core';
import { PharmacyService, AuthService } from '../../core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-purchase-invoice-view',
	templateUrl: './purchase-invoice-view.component.html',
	styleUrls: ['./purchase-invoice-view.component.css']
})
export class PurchaseInvoiceViewComponent implements OnInit {

	public Invoices : any;
	public Products : any;
	public InvoiceViewForm : FormGroup;

  	constructor(public PharmacyService : PharmacyService, public Auth : AuthService, public formBuilder: FormBuilder, public router: Router) {
		this.InvoiceViewForm = this.formBuilder.group({
			InvoiceDate:['']
		});
	  }

	ngOnInit() {

		this.PharmacyService.GetPurchaseInvoicesByMonthAndCompany(this.formatDate(new Date()), this.Auth.getUserCompanyId()).subscribe((res : any) => {
			this.Invoices = res;
			// console.log(this.Invoices);
		});

		// this.PharmacyService.GetInventoryItemsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
		// 	this.Products = res;
		// 	console.log(this.Products);
		// });

		this.PharmacyService.GetInventoryItemsArray().subscribe((res : any) => {
			this.Products = res;
		});

		// this.PharmacyService.GetPurchaseInvoicesByMonth(this.formatDate(new Date())).subscribe((res : any) => {
		// 	this.Invoices = res;
		// });
	}

  	formatDate(date: Date) {
		return date.getFullYear() + "-" + (date.getMonth() + 1);
	}

	onsubmit(value) {
        this.PharmacyService.GetPurchaseInvoicesByMonthAndCompany(this.formatDate(new Date(value.InvoiceDate)), this.Auth.getUserCompanyId()).subscribe((res : any) => {
			this.Invoices = res;
			// console.log(this.Invoices);
		});

		// this.PharmacyService.GetPurchaseInvoicesByMonth(this.formatDate(new Date(value.InvoiceDate))).subscribe((res : any) => {
		// 	this.Invoices = res;
		// });
	}
	
	onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addInvoice.bind(this)
                }
            });
    }

    addInvoice() {
        this.router.navigate(['/pharmacy/purchaseinvoice']);
    }

}
