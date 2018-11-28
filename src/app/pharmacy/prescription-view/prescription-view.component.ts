import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';
import { SalesIndent } from '../../core/Models/Pharmacy/SalesIndent';
import { SalesIndentViewModel } from '../../core/Models/Pharmacy/IndentViewModel';

@Component({
	selector: 'app-prescription-view',
	templateUrl: './prescription-view.component.html',
	styleUrls: ['./prescription-view.component.scss']
})
export class PrescriptionViewComponent implements OnInit {
	private Prescriptions : SalesIndent[] = [];
	private PrescriptionsDetails : SalesIndentViewModel[] = [];
	private PrescriptionsViews : SalesIndent[] = [];

	constructor(private PharmacyService : PharmacyService) {

  	}

	async ngOnInit() {

		let date = (new Date().getDate() + '-' + new Date().getMonth()+1) + '-' + (new Date().getFullYear());
		console.log("Date", date);

		// this.PharmacyService.GetSalesIndentsByDay(date).subscribe((res : SalesIndent[]) => {
		// 	this.Prescriptions = res;
		// 	console.log("Prescriptions", this.Prescriptions);
		// });

		// this.PharmacyService.GetSalesIndentDetailsByDay(date).subscribe((res : SalesIndentViewModel[]) => {
		// 	this.PrescriptionsDetails = res;
		// 	console.log("PrescriptionsDetails", this.PrescriptionsDetails);
		// });

		this.Prescriptions = await this.PharmacyService.GetSalesIndentsByDayAsync(date);
		console.log("Prescriptions", this.Prescriptions);
		this.PrescriptionsDetails = await this.PharmacyService.GetSalesIndentDetailsByDayAsync(date);
		console.log("PrescriptionsDetails", this.PrescriptionsDetails);

		this.Prescriptions.forEach(element => {
			var a : any = {
				salesIndentId : element.salesIndentId,
				salesIndentNumber : element.salesIndentNumber,
				customerCode : element.customerCode,
				customerName : element.customerName,
				customerSecondName : element.customerSecondName,
				consultantName : element.consultantName,
				issueDate : element.issueDate,
				totalQuantity : element.totalQuantity,
				totalTradePrice : element.totalTradePrice,
				totalTradeOffer : element.totalTradeOffer,
				salesIndentItems : this.PrescriptionsDetails.filter(a => a.salesIndentId === element.salesIndentId)
			};

			console.log("a", a);
			this.PrescriptionsViews.push(a);
		});
		console.log("PrescriptionsViews", this.PrescriptionsViews);
	}

	async onsubmit(value) {

		this.PrescriptionsViews = [];

		this.Prescriptions = await this.PharmacyService.GetSalesIndentsByDayAsync(value);
		console.log("Prescriptions", this.Prescriptions);
		this.PrescriptionsDetails = await this.PharmacyService.GetSalesIndentDetailsByDayAsync(value);
		console.log("PrescriptionsDetails", this.PrescriptionsDetails);

		this.Prescriptions.forEach(element => {
			var a : any = {
				salesIndentId : element.salesIndentId,
				salesIndentNumber : element.salesIndentNumber,
				customerCode : element.customerCode,
				customerName : element.customerName,
				customerSecondName : element.customerSecondName,
				consultantName : element.consultantName,
				issueDate : element.issueDate,
				totalQuantity : element.totalQuantity,
				totalTradePrice : element.totalTradePrice,
				totalTradeOffer : element.totalTradeOffer,
				salesIndentItems : this.PrescriptionsDetails.filter(a => a.salesIndentId === element.salesIndentId)
			};

			console.log("a", a);
			this.PrescriptionsViews.push(a);
		});
		console.log("PrescriptionsViews", this.PrescriptionsViews);
	}

}
