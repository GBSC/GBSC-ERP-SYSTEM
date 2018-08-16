import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient/services/patient.services';


@Component({
    selector: 'app-paymentreceipt',
    templateUrl: './paymentreceipt.component.html',
    styleUrls: ['./paymentreceipt.component.css']
})
export class PaymentreceiptComponent implements OnInit {

    private nature: any[] = ['Select Nature', 'Package', 'Lab Tests', 'Medicines', 'Others'];
    constructor(private PatientServiceobj: PatientService) { }

    async  ngOnInit() {
        await this.PatientServiceobj.getPatient();
        let par = this.PatientServiceobj.patients;
        console.log(par);

        this.nature = this.nature.map((item, index) => {
            return { ID: index, Name: item }
        });

        console.log(this.nature);
    }



}
