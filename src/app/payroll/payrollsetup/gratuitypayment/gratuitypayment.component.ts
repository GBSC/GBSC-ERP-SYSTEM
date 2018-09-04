import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gratuitypayment',
    templateUrl: './gratuitypayment.component.html',
    styleUrls: ['./gratuitypayment.component.css']
})
export class GratuitypaymentComponent implements OnInit {
    public GratuityPayment: any;
    public valuetype: any;
    public leavingreason: any;
    constructor() { }

    ngOnInit() {
        this.GratuityPayment = [
            {
                from: "12-4-2018",
                to: "12-4-2018",
                multiplcationfactor: "001",
                valuetype: [{ display: "select", value: "select" }],
                leavingreason: [{ display: "select", value: "select" }],

            }


        ]

        this.valuetype = [{ value: "select", display: "select" }];
        this.leavingreason = [{ value: "select", display: "select" }];

    }

}
