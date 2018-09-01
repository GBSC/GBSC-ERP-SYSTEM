import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultantService } from '../../sharedservices/consultant.service';
import { Consultant } from '../../../models/consultant';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../sharedservices/patient.service';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { Spouse } from '../../../models/spouse';

@Component({
  selector: 'app-biochemistry',
  templateUrl: './biochemistry.component.html',
  styleUrls: ['./biochemistry.component.scss']
})
export class BiochemistryComponent implements OnInit {

  private consultants: Consultant;
  private patients: Patient;
  private spouse : Spouse;
  private patient : Patient;

  @ViewChild("patientcb") patientcb: DxSelectBoxComponent

  constructor(private consultantService: ConsultantService, private patientService: PatientService) {

  }

  ngOnInit() {

    this.patientcb.onValueChanged.subscribe(res=>this.populatePatientDate(res.component.option("value")));

    this.consultantService.getConsultants()
      .subscribe(consultants => this.consultants = consultants)

    this.patientService.getPatient()
      .subscribe(patients => this.patients = patients);
  }

  populatePatientDate(patientId)
  {
      this.patientService.getPatientWithPartner(patientId).subscribe(patient=>{
        
        this.patient = patient;
        this.spouse = patient.partner;
        
      });
  }



}
