import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { PatientService } from '../../../core';
import { ActivatedRoute } from '@angular/router';
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
    public Patient: any = {};

    public visitnature: any;
    public vistnatr: any = [];
    public PatientPackage: any = {};
    public patientpackagebypatientid: any = {};
    public patientpackagedetail: any;

    public patientref: any;
    public patientreferenc: any;

    constructor(public PatientServiceobj: PatientService, public Router: Router, public route: ActivatedRoute) { }


    async ngOnInit() {
        // this.currentPatient = this.PatientServiceobj.currentPatient;
        await this.PatientServiceobj.GetVisitNatures();
        this.visitnature = this.PatientServiceobj.visitNatures;

        this.patientref = await this.PatientServiceobj.getReferenceAsync();
        console.log(this.patientref)




        this.route.params.subscribe(params => {
            this.id = +params['id'];
            let x = this.PatientServiceobj.GetPatientDetailPatientId(this.id).subscribe((Patient: any) => {
                this.Patient = Patient;
                console.log(this.Patient)
                // console.log(this.visitnature)

                this.vistnatr = this.visitnature.find(t => t.visitNatureId === Patient.visitNatureId);
                // if(this.Patient.patientPackage){
                //   this.PatientPackage =  this.Patient.patientPackage
                // }

                //console.log( this.PatientPackage );



                console.log(this.Patient.patientId);
                this.PatientServiceobj.getPatientPackageByPatientId(this.Patient.patientId).subscribe(res => {
                    this.patientpackagebypatientid = res
                    if (this.patientpackagebypatientid != null) {
                        if (this.patientpackagebypatientid.package) {
                            this.PatientPackage = this.patientpackagebypatientid.package;
                            console.log(this.PatientPackage);
                        }
                    }
                    // if()
                    // if(this.patientpackagebypatientid.package){

                    //     this.PatientPackage = this.patientpackagebypatientid.package;
                    //     console.log(this.PatientPackage);

                    // }
                    console.log(this.patientpackagebypatientid)
                })


                // this.patientreferenc = this.patientref.find(t=> t.patientReferenceId == this.Patient.patientReferenceId);
                // console.log(this.patientreferenc);
                if (this.Patient.patientPackage) {
                    this.patientpackagedetail = this.Patient.patientPackage
                }

                console.log(Patient)
            });

        });

    }


    async editPatient(value) {
        // console.log(value)
        this.Router.navigate(['/hims/patient/updatepatient/' + this.id]);
        await this.PatientServiceobj.getpatientForupdating(value)
        //    console.log(value)
    }
    downloadimage(index) {

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
