import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../hims/patient/services/patient.services'

@Component({
    selector: 'app-recentvisits',
    templateUrl: './recentvisits.component.html',
    styleUrls: ['./recentvisits.component.css']
})
export class RecentvisitsComponent implements OnInit {

    public currentPatient = {};

    constructor(private PatientServiceobj : PatientService) {

     }

    ngOnInit() {

     this.currentPatient = this.PatientServiceobj.currentPatientvisits;
     console.log(this.currentPatient);
     

        // console.log(this.currentPatient.appointments);
        // console.log(this.currentPatient.visits);
        
        // console.log(this.currentPatient.visits.value);
        // console.log(this.currentPatient.value.visits);
    }

}
