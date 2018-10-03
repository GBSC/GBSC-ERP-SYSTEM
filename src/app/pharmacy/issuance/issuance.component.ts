import { Component, OnInit } from '@angular/core';

import { PharmacyService } from '../../core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-issuance',
    templateUrl: './issuance.component.html',
    styleUrls: ['./issuance.component.css']
})
export class IssuanceComponent implements OnInit {
    
    private SalesOrderForm : FormGroup;
    private SalesOrders : any;

    constructor(private PharmacyService: PharmacyService, private FormBuilder : FormBuilder) {
        
        this.SalesOrderForm = this.FormBuilder.group( {
            salesOrderId : [''],
            salesOrderCode : [''],
            issueDate : [''],
            isIssued : [''],
            approvedDate : [''],
            isApproved : [''],
            processedDate : [''],
            isProcessed : [''],
            remarks : [''],
            slipNumber : [''],
            status : [''],
            contactPerson : [''],
            contactPersonNumber : [''],
            againstLotNumber : [''],
            deliveryDate : [''],
            totalQuantity : [''],
            extendedAmount : [''],
            discountedAmount : [''],
            shipped : [''],
            discountAmount : [''],
            salesTaxAmount : [''],
            orderAmount : [''],
            specialDiscountPercentage : [''],
            specialDiscountAmount : [''],
            extraDiscountPercentage : [''],
            extraDiscountAmount : [''],
            userId : [''],
            deliveryOrderId : [''],
            salesIndentId : [''],
            salesPersonId : [''],
            modeOfPaymentId : [''],
            customerId : [''],
            taxId : ['']
        });
    }

    async ngOnInit() {
        this.SalesOrders = await this.PharmacyService.GetSalesOrders();
    }

    async AddSalesOrder(value) {
        return await this.PharmacyService.AddSalesOrder(value);
    }

    async UpdateSalesOrder(value) {
        return await this.PharmacyService.UpdateSalesOrder(value.Key);
    }

    async DeleteSalesOrder(value) {
        return await this.PharmacyService.DeleteSalesOrder(value.Key.SalesOrderId);
    }

    SubmitSalesOrderForm(value) {
        console.log(value);
    }

}
