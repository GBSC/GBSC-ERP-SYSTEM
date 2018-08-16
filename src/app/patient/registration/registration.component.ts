
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../../models/patient';
import { PatientService } from '../../patient/services/patient.services';
import { getLocaleDateTimeFormat } from '@angular/common';
import { visitValue } from '@angular/compiler/src/util';

import { Loginform } from '../../models/loginform';
import { InventorysystemService } from '../../../app/Inventorysystem/service/Inventorysystem.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],

})

export class RegistrationComponent implements OnInit {

  private patientForm: FormGroup;
  public partnerForm: FormGroup;
  public documentForm: FormGroup;
  public referenceForm: FormGroup;
  public documents: any = [];
  public currentDoc: any = {};
  public addpartnet: any;
  public addDocument: any;
  public addReference: any;

  public partnerDetails: any;
  public currentUser = new Loginform();



  public documentss: any = [];
  constructor(private formBuilder: FormBuilder, private PatientServiceobj: PatientService) {
  }


  addrange() {

    let { value } = this.documentForm;

    let doc = {
      DocumentName: value.DocumentName,
      Remarks: value.Remarks,
      FilePath: value.FilePath
    }

    if (this.documentForm.valid) {
      this.documentss.push(doc);
      console.log(this.documentss);
      this.documentForm.reset();
    } else {
      alert('All fields are required');
    }

  }

  remove(index) {
    this.documentss.splice(index, 1);
  }

  async onSubmit(value) {
    localStorage.setItem('patientdata', JSON.stringify(value));
    value.partner = this.addpartnet;
    value.patientReference = this.addReference;
    value.patientDocuments = this.addDocument;
    console.log(value);
    await this.PatientServiceobj.addPatient(value);
  }

  onAddPartner(value) {
    console.log(value);
    this.addpartnet = value
  }
  onAddDocument(value) {
    console.log(value);
    this.addDocument = value;
  }
  onAddReference(value) {
    console.log(value);
    this.addReference = value;
  }



async ngOnInit() {

    await this.PatientServiceobj.getPatient()
    let x = this.PatientServiceobj.patients
    console.log(x);
    console.log(this.PatientServiceobj.patients)

    
    this.referenceForm = this.formBuilder.group({
      'ReferredBy': ['', Validators.required],
      'PersonName': ['', Validators.required],
      'RefAddress': ['', Validators.required],
      'ReferenceTel': ['', Validators.required]
    });


    this.documentForm = this.formBuilder.group({
      'DocumentName': ['', Validators.required],
      'Remarks': ['', Validators.required],
      'FilePath': ['', Validators.required]
    });
    this.partnerForm = this.formBuilder.group({
      'FirstName': ['', Validators.required],
      'MiddleName': ['', Validators.required],
      'LastName': ['', Validators.required],
      'DOB': ['', Validators.required],
      'PlaceOfBirth': ['', Validators.required],
      'Occupation': ['', Validators.required],
      'NIC': ['', Validators.required],
      'PhoneNumber': ['', Validators.required],
    });
    this.patientForm = this.formBuilder.group({
      'RegCity': ['', Validators.required],
      'VisitNature': ['', Validators.required],
      'FisrtName': ['', Validators.required],
      'MiddleName': ['', Validators.required],
      'LastName': ['', Validators.required],
      'DOB': ['', Validators.required],
      'PlaceOfBirth': ['', Validators.required],
      'Occupation': ['', Validators.required],
      'NIC': ['', Validators.required],
      'Gender': ['', Validators.required],
      'PhoneNumber': ['', Validators.required],
      'OfficeAddress': ['', Validators.required],

      'ResidenceAddress': ['', Validators.required],
      'Remarks': ['', Validators.required],
      'OfficeTel': ['', Validators.required],
      'ForeignAddress': ['', Validators.required],
      'Country': ['', Validators.required],
      'City': ['', Validators.required],
      'State': ['', Validators.required],
      'PostalCode': ['', Validators.required],
      'Initial': ['', Validators.required],
      'PrivatePatientCons': ['', Validators.required],
      'PrivateHospital': ['', Validators.required],
      'AuthorizedPerson': ['', Validators.required],
    });

  }


}
