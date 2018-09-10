import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {PatientService} from '../../../hims/patient/services/patient.services'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../models/patient';
import { Visits } from '../../../models/visits';
 import {Location} from '@angular/common';




@Component({
    selector: 'app-visits',
    templateUrl: './visits.component.html',
    styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

    public PatientVisitNoteForm: FormGroup;
    public PatientAppointmentForm: FormGroup;

    public currentPatient: any;
    public consultant : any;
    public visitNatures : any;

    public visitid : any;
    public vist = '';
    id: number;
    vistid: number;
    Patient : Patient;
    Visits : Visits;

    constructor( private formBuilder: FormBuilder,private PatientServiceobj : PatientService , private router: Router,  private route : ActivatedRoute) { 

        this.PatientVisitNoteForm = this.formBuilder.group({
            'ClinicalNote' : ['',Validators.required],
            'VisitId' :['',Validators.required],
        });

        this.PatientAppointmentForm = this.formBuilder.group({
            'PatientType':['pervious',Validators.required],
            'ConsultantId': ['', Validators.required],
            'visitNatureId': ['', Validators.required],
            'PatientId': ['', Validators.required],
            'TentativeTime': ['', Validators.required]
        });

    }

   async ngOnInit() {

        this.route.params.subscribe(params => {
            this.id = +params['id'];
     
           this.currentPatient = this.PatientServiceobj.getpatient(this.id).subscribe((Patient)=> {

            this.Patient = Patient;
            console.log(Patient.PatientId)
         });
           
         });
        
          console.log(this.id);

        this.vist = await this.PatientServiceobj.getVisitId(this.id);
          console.log(this.vist)
    
        this.vistid = await this.PatientServiceobj.visitid.visitID;

        await this.PatientServiceobj.getConsultant();
        this.consultant = this.PatientServiceobj.consultant;
        console.log(this.consultant);

        await this.PatientServiceobj.GetVisitNatures();
        this.visitNatures = this.PatientServiceobj.visitNatures;
        console.log(this.visitNatures);

     }

    onSubmit()  {
        
        //console.log(this.PatientServiceobj.currentPatient);
       // console.log(this.id);
        this.router.navigate(['/hims/patient/patientvitals/'+this.vistid]);
        console.log(this.visitid);

    }

 async onEndVisit(){
        let x = await this.PatientServiceobj.getVisitId(this.vistid);
        await this.PatientServiceobj.endVisit(this.vistid , x);
        console.log(x)
        this.router.navigate(['/hims/patient/profile/'+this.id]);
        console.log(this.id);
    }
//add visitnote
    async onsubmit(value){
        let y = await this.PatientServiceobj.visitid.visitID;
        this.PatientVisitNoteForm.value.VisitId = y;
        let x=  await this.PatientServiceobj.addVisitNote(value);
        console.log(x)
    }

    async addappointment(value){
   this.PatientAppointmentForm.value.PatientId = this.id;
   let x = await this.PatientServiceobj.addAppointment(value);
   console.log(value)
    console.log(x)
    }


 
}
