import { Component, OnInit } from '@angular/core';
import { PharmacyService, AuthService } from '../../core';
import { SalesIndent } from '../../core/Models/Pharmacy/SalesIndent';
import { SalesIndentViewModel } from '../../core/Models/Pharmacy/IndentViewModel';
import { FormGroup , FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-prescription-view',
    templateUrl: './prescription-view.component.html',
    styleUrls: ['./prescription-view.component.scss']
})
export class PrescriptionViewComponent implements OnInit {
    public Prescriptions: SalesIndent[] = [];
    public PrescriptionsDetails: SalesIndentViewModel[] = [];
    public PrescriptionsViews: SalesIndent[] = [];
    // public PresciptionForm : FormGroup

    public date : any ;

    constructor(public PharmacyService: PharmacyService, public FormBuilder : FormBuilder, public Auth : AuthService) {
        // this.PresciptionForm = this.FormBuilder.group({
        //     Date : [''],

        // });
    }

    async ngOnInit() {

        this.date = (new Date().getDate() + '-' + new Date().getMonth() + 1) + '-' + (new Date().getFullYear());
        console.log("Date",  this.date );

        // this.PharmacyService.GetSalesIndentsByDay(date).subscribe((res : SalesIndent[]) => {
        // 	this.Prescriptions = res;
        // 	console.log("Prescriptions", this.Prescriptions);
        // });

        // this.PharmacyService.GetSalesIndentDetailsByDay(date).subscribe((res : SalesIndentViewModel[]) => {
        // 	this.PrescriptionsDetails = res;
        // 	console.log("PrescriptionsDetails", this.PrescriptionsDetails);
        // });

        this.Prescriptions = await this.PharmacyService.GetSalesIndentsByDayAsync( this.date );
        console.log("Prescriptions", this.Prescriptions);
        this.PrescriptionsDetails = await this.PharmacyService.GetSalesIndentDetailsByDayAsync( this.date );
        console.log("PrescriptionsDetails", this.PrescriptionsDetails);

        this.Prescriptions.forEach(element => {
            var a: any = {
                companyId : this.Auth.getUserCompanyId(),
                salesIndentId: element.salesIndentId,
                salesIndentNumber: element.salesIndentNumber,
                customerCode: element.customerCode,
                customerName: element.customerName,
                customerSecondName: element.customerSecondName,
                consultantName: element.consultantName,
                issueDate: element.issueDate,
                totalQuantity: element.totalQuantity,
                totalTradePrice: element.totalTradePrice,
                totalTradeOffer: element.totalTradeOffer,
                salesIndentItems: this.PrescriptionsDetails.filter(a => a.salesIndentId === element.salesIndentId)
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
            var a: any = {
                companyId : this.Auth.getUserCompanyId(),
                salesIndentId: element.salesIndentId,
                salesIndentNumber: element.salesIndentNumber,
                customerCode: element.customerCode,
                customerName: element.customerName,
                customerSecondName: element.customerSecondName,
                consultantName: element.consultantName,
                issueDate: element.issueDate,
                totalQuantity: element.totalQuantity,
                totalTradePrice: element.totalTradePrice,
                totalTradeOffer: element.totalTradeOffer,
                salesIndentItems: this.PrescriptionsDetails.filter(a => a.salesIndentId === element.salesIndentId)
            };

            console.log("a", a);
            this.PrescriptionsViews.push(a);
        });
        console.log("PrescriptionsViews", this.PrescriptionsViews);
    }

}
