
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../../models/patient';
import { PatientService } from '../../patient/services/patient.services';
import { ScriptLoaderService } from "../../_services/script-loader.service";
import { getLocaleDateTimeFormat } from '@angular/common';
import { visitValue } from '@angular/compiler/src/util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],

})

export class RegistrationComponent implements OnInit {

  public patientForm: FormGroup;
  public partnerForm: FormGroup;

  public partnerDetails: any;

  constructor(private formBuilder: FormBuilder, private PatientServiceobj: PatientService, private _script: ScriptLoaderService) {
  }

  ngAfterViewInit() {
    this._script.loadScripts('app-registration',
        ['assets/demo/default/custom/components/forms/wizard/wizard.js']
        );

}
  async onSubmit(value) {
    localStorage.setItem('patientdata', JSON.stringify(value));
    //this.patientForm = value;
    value.partner = this.partnerDetails;
    console.log(value);

    await this.PatientServiceobj.addPatient(value);
  }

  onAddPartner(value) {
    console.log(value);
    this.partnerDetails = value;
  }

  ngOnInit() {
    this.PatientServiceobj.getPatient()
    console.log(this.PatientServiceobj.getPatient());
    
    console.log(this.PatientServiceobj.patients)
    this.partnerForm = this.formBuilder.group({
      'FisrtName': ['', Validators.required],
      'MiddleName': ['', Validators.required],
      'LastName': ['', Validators.required],
      'FullName': ['', Validators.required],
      'DOB': ['', Validators.required],
      'PlaceOfBirth': ['', Validators.required],
      'Occupation': ['', Validators.required],
      'NIC': ['', Validators.required],
      'PhoneNumber': ['', Validators.required],
    });
    
    this.patientForm = this.formBuilder.group({
      'FisrtName': ['das', Validators.required],
      'MiddleName': ['dasd', Validators.required],
      'LastName': ['dasda', Validators.required],
      'FullName': ['dasda', Validators.required],
      'DOB': ['', Validators.required],
      'PlaceOfBirth': ['dasda', Validators.required],
      'Occupation': ['', Validators.required],
      'NIC': ['dasd', Validators.required],
      'PhoneNumber': ['dasda', Validators.required],
      'RegCity': ['', Validators.required],
      'VisitNature': ['', Validators.required],
      'Remarks': ['', Validators.required],
      'Gender': ['', Validators.required],
      'ResidenceAddress': ['dad', Validators.required],
      'OfficeAddress': ['dasd', Validators.required],
      'OfficeTel': ['', Validators.required],
      'ForeignAddress': ['', Validators.required],
      'Country': ['', Validators.required],
      'City': ['', Validators.required],
      'State': ['', Validators.required],
      'PostalCode': ['', Validators.required],
      'Initial': ['', Validators.required],
      'ReferredBy': ['', Validators.required],
      'PersonName': ['', Validators.required],
      'AuthorizedPerson': ['', Validators.required],
      'PrivateHospital': ['', Validators.required],
      'RefAddress': ['', Validators.required],
      'ReferenceTel': ['', Validators.required],
      'PrivatePatientCons': ['', Validators.required]
    });
  }
 

}
