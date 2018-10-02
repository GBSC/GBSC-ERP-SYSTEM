import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../patient/services/patient.services';
import { ActivatedRoute } from '@angular/router';
import { FindPatientComponent } from '../../patient/find-patient/find-patient.component';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    public patientObj;
    public currentPatient: {};
            id: number;
    public Patient : any ={};

    public visitnature :any ;
    public vistnatr = [];


    constructor(private PatientServiceobj: PatientService, private Router : Router,  private route : ActivatedRoute) { }


 async ngOnInit() {
       // this.currentPatient = this.PatientServiceobj.currentPatient;
       await this.PatientServiceobj.GetVisitNatures();
        this.visitnature = this.PatientServiceobj.visitNatures;

    this.route.params.subscribe(params => {
        this.id = +params['id'];
       let x = this.PatientServiceobj.getpatient(this.id).subscribe((Patient : any)=> {
           this.Patient = Patient;
           console.log(this.visitnature)

           this.vistnatr = this.visitnature.find(t=>t.visitNatureId === Patient.visitNatureId);
         
           console.log(Patient)
        });
       
    });

}


async editPatient(value){
    console.log(value)
    this.Router.navigate(['/hims/patient/updatepatient/'+this.id]);
    await this.PatientServiceobj.getpatientForupdating(value)
    console.log(value)
}
downloadimage(index){

}

// startDownload( ) {
//     Content-Disposition: attachment; filename="sad";
//     }



// saveStringToFile() {
//     let a:any = document.createElement("a");
//     document.body.appendChild(a);
//     a.style = 'display: none';
//     this.data.saveLicenseToFile('lic', a);
//   }

}
