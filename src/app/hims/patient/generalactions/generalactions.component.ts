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

     this.today = Date.now();
      let   fixedTimezone = this.today;
      
      console.log(fixedTimezone)
      console.log(this.today)
        // let require;
        // let dateFormat =   require('dateformat');
        // let now = new Date();
        // dateFormat(now, "dd, mm, yyyy, h:MM:ss TT"); 
        // console.log('111',now);
        // console.log('22222222',dateFormat);
        // console.log('333333333333',require);



    }

    public today : any;

async onSubmit()  {

     await this.PatientServiceobj.AddVisits(this.id);
        this.router.navigate(['/hims/patient/visits/'+this.id]);
        console.log(this.id);

   
    }

}