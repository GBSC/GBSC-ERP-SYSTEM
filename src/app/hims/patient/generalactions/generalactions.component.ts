import { Component, OnInit  ,VERSION} from '@angular/core';
import { PatientService } from '../../../core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../core/Models/HIMS/patient';
import date_box from 'devextreme/ui/date_box';

@Component({
    selector: 'app-generalactions',
    templateUrl: './generalactions.component.html',
    styleUrls: ['./generalactions.component.css']
})
export class GeneralactionsComponent implements OnInit {

    version = VERSION.full;

    public currentPatient: any;
    public visitid: any;
    id: number;
    Patient : Patient;
    public lastpatientvisit : any;
    public visits : any;

    public time : any;

    constructor(private PatientServiceobj: PatientService, private router: Router, private route: ActivatedRoute) { }

  async  ngOnInit() {

    this.time = new Date();
    console.log(this.time,'MM/dd/yyyy')
     


  
    this.route.params.subscribe(params => {

        this.id = +params['id'];
 
       this.currentPatient = this.PatientServiceobj.getpatient(this.id).subscribe(Patient=> this.Patient = Patient);

       this.PatientServiceobj.GetPatientVisits(this.id).subscribe((res) =>{ this.visits = res
    //     if(this.visits[0].startTime ===  this.lastpatientvisit){
    //         console.log('ok')
    //     }
    //     else{
    //         console.log('not ok')

    //     }
    console.log(this.visits[0])
    });
      

       
     });
     console.log(this.id);
 


        // let require;;
        // let dateFormat =   require('dateformat');
        // let now = new Date();
        // dateFormat(now, "dd, mm, yyyy, h:MM:ss TT"); 
        // console.log('111',now);
        // console.log('22222222',dateFormat);
        // console.log('333333333333',require);

        this.lastpatientvisit =   await this.PatientServiceobj.GetLastestVisitByPatientId(this.id)

        console.log(this.lastpatientvisit);

            this.currentPatient = this.PatientServiceobj.getpatient(this.id).subscribe(Patient => this.Patient = Patient);

    }
    async onSubmit()  {
     console.log(this.id);
     await this.PatientServiceobj.AddVisits(this.id);
    this.router.navigate(['/hims/patient/visits/'+this.id]);
    console.log(this.id);
    }

    async Endvisit(){
       let x = await this.PatientServiceobj.endVisit(this.visits[0].visitId , this.visits[0]);
        console.log(x)
        this.lastpatientvisit =   await this.PatientServiceobj.GetLastestVisitByPatientId(this.id)
        console.log(this.lastpatientvisit);
    }

    already(){
        alert('already started');
    }


}