import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../../models/patient';
import { PatientService } from '../../patient/services/patient.services';
import { getLocaleDateTimeFormat } from '@angular/common';
import { visitValue } from '@angular/compiler/src/util';
import { Router } from '@angular/router';



@Component({
  selector: 'app-find-patient',
  templateUrl: './find-patient.component.html',
  styleUrls: ['./find-patient.component.css']
})

export class FindPatientComponent implements OnInit {

  //  public currentPatient: any;
  editPatientForm: FormGroup;
  public mypatient: any;
  public xyz: any;
  public myid: any;
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

  }

  async ngOnInit() {
    await this.PatientServiceobj.getPatient();
    let par = this.PatientServiceobj.patients;
    console.log(par);
    // console.log(this.PatientServiceobj.patients.partner['0'])
    // .subscribe(data => {
    //   this.patients = data;
    //   console.log(data);
    //   console.log(this.patients.partner);
    // });

  }
  // contentReady(e) {
  //   if (!e.component.getSelectedRowKeys().length)
  //     e.component.selectRowsByIndexes(0);
  //     console.log('content ready has been called');
  //     console.log(e);
  //     console.log('content ready has been called');
  // }
  selectionChanged(e) {
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
    console.log(e);
    this.setCurrentPatient(e.selectedRowsData[0]);
    
  }
  // async onSubmit({key}) {
  //   // key is accquired through desctructuring 
  //   // key is = data.key
  //   console.log(key);
  //   console.log(key.patientId);
  //  await this.PatientServiceobj.updatePatient(key);
  // }


  setCurrentPatient(patient) {
    this.router.navigate(['/patient/profile']);
    this.PatientServiceobj.setCurrentPatient(patient);
  }



}
