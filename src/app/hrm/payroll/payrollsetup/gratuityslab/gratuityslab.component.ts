import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gratuityslab',
    templateUrl: './gratuityslab.component.html',
    styleUrls: ['./gratuityslab.component.css']
})
export class GratuityslabComponent implements OnInit {
    public Gratuity: any;
    public orderno: any;
    constructor() { }

    ngOnInit() {
        this.Gratuity = [
            {
                from: "1",
                to: "Meezan",
                multiplcationfactor: "001",
                orderno: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
            }


        ]

        this.orderno = [{ value: "General", display: "General" }];

    }

}
