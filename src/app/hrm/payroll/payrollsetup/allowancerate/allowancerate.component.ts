import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-allowancerate',
    templateUrl: './allowancerate.component.html',
    styleUrls: ['./allowancerate.component.css']
})
export class AllowancerateComponent implements OnInit {
    public allowancerate: any;
    public allowance: any;


    constructor() { }

    ngOnInit() {
        this.allowancerate = [
            {
                id: "1",
                allowance: [{ display: "select", value: "select" }],
                allowancerate: "1200",
                effectivedate: "12-4-2018",

            }
        ]

        this.allowance = [{ value: "select", display: "select" }];

    }

}
