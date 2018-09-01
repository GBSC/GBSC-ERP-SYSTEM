import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../hims/patient/services/patient.services'

@Component({
    selector: 'app-vitals',
    templateUrl: './vitals.component.html',
    styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {

    public leatestPatientVitals = {};
    public id : any;

    constructor(private PatientServiceobj : PatientService) { }

   async ngOnInit() {
         await this.PatientServiceobj.GetLastestPatientVital();
         this.leatestPatientVitals = this.PatientServiceobj.LastestPatientVital;
         console.log(this.leatestPatientVitals);
        

    }

}
