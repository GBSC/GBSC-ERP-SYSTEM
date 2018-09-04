import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pf-payment',
    templateUrl: './pf-payment.component.html',
    styleUrls: ['./pf-payment.component.css']
})
export class PfPaymentComponent implements OnInit {
    public pfpayment: any;
    public allowance: any;
    constructor() { }

    ngOnInit() {
        this.pfpayment = [
            {
                allowance: [{ value: "select", display: "select" }],
                employercontribution: "yes",
                employeecontribution: "yes",

            }
        ]

        this.allowance = [{ value: "select", display: "select" }];

    }

}
