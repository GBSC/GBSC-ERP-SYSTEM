import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banks',
    templateUrl: './banks.component.html',
    styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

    public banks: any;

    public banksAdvicetemplate: any;
    public Chequetemplate: any;

    constructor() { }

    ngOnInit() {
        this.banks = [
            {
                id: "1",
                bankTitle: "Meezan",
                bankBranchCode: "001",
                branch: "Tariq Road",
                companyBank: "Abc",
                bankAdviceTemplate: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
                chequeTemplate: ["--Select--", "Bank Al Habib", "UBL"],
                active: "yes"
            }


        ]

        this.banksAdvicetemplate = [{ value: "General", display: "General" }, { value: "General-With-NIC", display: "General With NIC" }, { value: "UBL", display: "UBL" }];
        this.Chequetemplate = [{ value: "", display: "--Select--" }, { value: "Bank-Al-Habib", display: "Bank Al Habib" }, { value: "UBL", display: "UBL" }];

        console.log(this.banks);


    }

}
