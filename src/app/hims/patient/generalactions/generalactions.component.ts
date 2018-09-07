import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../hims/patient/services/patient.services'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../models/patient';




@Component({
    selector: 'app-generalactions',
    templateUrl: './generalactions.component.html',
    styleUrls: ['./generalactions.component.css']
})
export class GeneralactionsComponent implements OnInit {

    public currentPatient: any;
    public visitid : any;
    id: number;
    Patient : Patient;


    constructor(private PatientServiceobj : PatientService , private router: Router ,  private route : ActivatedRoute) { }

    ngOnInit() {

    // this.currentPatient = this.PatientServiceobj.currentPatient;

    // console.log(this.currentPatient);

  
    this.route.params.subscribe(params => {

        this.id = +params['id'];
 
       this.currentPatient = this.PatientServiceobj.getpatient(this.id).subscribe(Patient=> this.Patient = Patient);
       
     });
     console.log(this.id);

    }

async onSubmit()  {

    
        // let id = this.PatientServiceobj.currentPatient.patientId;
        // console.log(this.PatientServiceobj.currentPatient);
        // console.log(this.PatientServiceobj.currentPatient.patientId);

     //this.visitid =  await this.PatientServiceobj.AddVisits(this.id);

     await this.PatientServiceobj.AddVisits(this.id);
        this.router.navigate(['/hims/patient/visits/'+this.id]);
        console.log(this.id);
    }

}
