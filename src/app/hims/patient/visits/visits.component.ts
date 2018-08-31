import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../hims/patient/services/patient.services'
import { Router } from '@angular/router';

@Component({
    selector: 'app-visits',
    templateUrl: './visits.component.html',
    styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

    public currentPatient: any;
    public visitid : any;

    constructor(private PatientServiceobj : PatientService , private router: Router) { }

    ngOnInit() {
        this.currentPatient = this.PatientServiceobj.currentPatient;
        console.log(this.currentPatient);

        // this.visitid = this.PatientServiceobj.visitid;
        // console.log(this.visitid);
        
    }

    onSubmit()  {
        
        console.log(this.PatientServiceobj.currentPatient);
        this.router.navigate(['/hims/patient/patientvitals']);

    }

}
