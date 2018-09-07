import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../hims/patient/services/patient.services'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../models/patient';



@Component({
    selector: 'app-visits',
    templateUrl: './visits.component.html',
    styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

    public currentPatient: any;
    public visitid : any;
    id: number;
    Patient : Patient;

    constructor(private PatientServiceobj : PatientService , private router: Router,  private route : ActivatedRoute) { }

   async ngOnInit() {

        // this.route.params.subscribe(params => {

        //     this.id = +params['id'];
     
        //    this.currentPatient = this.PatientServiceobj.getpatient(this.id).subscribe(Patient=> this.Patient = Patient);
           
        //  });
        //  console.log(this.id);
    
        this.id = await this.PatientServiceobj.visitid.visitID;
     }

    onSubmit()  {
        
        //console.log(this.PatientServiceobj.currentPatient);
        this.router.navigate(['/hims/patient/patientvitals/'+this.id]);
        console.log(this.visitid);

    }

}
