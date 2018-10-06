import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../core/Models/HIMS/patient';

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
  
    this.route.params.subscribe(params => {

        this.id = +params['id'];
 
       this.currentPatient = this.PatientServiceobj.getpatient(this.id).subscribe(Patient=> this.Patient = Patient);
       
     });
     console.log(this.id);

    }

async onSubmit()  {

     await this.PatientServiceobj.AddVisits(this.id);
        this.router.navigate(['/hims/patient/visits/'+this.id]);
        console.log(this.id);
    }

}