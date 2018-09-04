import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../hims/patient/services/patient.services'
import { Router } from '@angular/router';



@Component({
    selector: 'app-generalactions',
    templateUrl: './generalactions.component.html',
    styleUrls: ['./generalactions.component.css']
})
export class GeneralactionsComponent implements OnInit {

    public currentPatient: any;
    public visitid: any;

    constructor(private PatientServiceobj: PatientService, private router: Router) { }

    ngOnInit() {

        // this.currentPatient = this.PatientServiceobj.currentPatient;

        // console.log(this.currentPatient);




    }

    async onSubmit() {
        let id = this.PatientServiceobj.currentPatient.patientId;
        console.log(this.PatientServiceobj.currentPatient);
        console.log(this.PatientServiceobj.currentPatient.patientId);
        this.visitid = await this.PatientServiceobj.AddVisits(id);


        // let x = this.PatientServiceobj.currentPatient.patientId
        this.router.navigate(['/hims/patient/visits']);
        return this.visitid;
    }

}
