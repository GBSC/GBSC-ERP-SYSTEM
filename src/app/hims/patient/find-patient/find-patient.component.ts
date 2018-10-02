import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../patient/services/patient.services';
import { getLocaleDateTimeFormat } from '@angular/common';
import { visitValue } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';



@Component({
    selector: 'app-find-patient',
    templateUrl: './find-patient.component.html',
    styleUrls: ['./find-patient.component.css']
})

export class FindPatientComponent implements OnInit {

    //  public currentPatient: any;
    editPatientForm: FormGroup;

    searchPatientForm : FormGroup;

    public mypatient: any;
    public xyz: any;
    public Patientid: any;
    public searchpatinetbyname : any;
    // public patients;
    constructor(formBuilder: FormBuilder, private PatientServiceobj: PatientService, private router: Router) {
        this.editPatientForm = formBuilder.group({
            'FisrtName': ['', Validators.required],
            'MiddleName': ['', Validators.required],
            'LastName': ['', Validators.required],
            'DOB': ['', Validators.required],
            'Gender': ['', Validators.required],
            'PhoneNumber': ['', Validators.required],
            'Address': ['', Validators.required],
            'Country': ['', Validators.required],
            'City': ['', Validators.required],
            'State': ['', Validators.required],
            'PostalCode': ['', Validators.required],
            'PatientRelation': ['', Validators.required],
            'PersonName': ['', Validators.required]
        });

        this.searchPatientForm = formBuilder.group({
            'name':['',Validators.required],
            'mrn':['',Validators.required],
            'contact':['',Validators.required],
        });
    }


    async ngOnInit() {
        // await this.PatientServiceobj.getPatient();
        //     this.PatientServiceobj.patients;
        // this.searchpatinetbyname = this.PatientServiceobj.SearchPatientbyname;
        // console.log(this.searchpatinetbyname)

    }
    
  async  selectionChanged(e) {
        e.component.collapseAll(-1);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
      this.Patientid =  e.selectedRowsData[0].patientId
         console.log(this.Patientid);      
         this.router.navigate(['/hims/patient/profile/'+this.Patientid]);  
  
    }

async SearchPatient(value){
    for(let key in value) {
        if(!value[key]) {
            delete value[key];
        }
    }
    console.log(value);
 await this.PatientServiceobj.SearchPatient(value);
}

}

