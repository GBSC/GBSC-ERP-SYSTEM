import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { EmbryologyService } from '../../../../app/core/Services/HIMS/Lab/embryology.service';
import { PatientService } from '../../../../app/core';

@Component({
  selector: 'app-embryology-records',
  templateUrl: './embryology-records.component.html',
  styleUrls: ['./embryology-records.component.scss']
})
export class EmbryologyRecordsComponent implements OnInit {

  private patients: any;
  private spouse: any;
  private patient: any;
  private tests: any;
  private id: any;

  @ViewChild("patientcb") patientcb: DxSelectBoxComponent

  constructor(private embryologyService: EmbryologyService,
    private patientService: PatientService) {

    this.tests = [];
  }

  ngOnInit() {

    this.patientcb.onValueChanged.subscribe(res => {
      this.populatePatientDate(res.component.option("value"))

    });

    this.patientService.getPatientCb().subscribe(patients => this.patients = patients);

  }

  populatePatientDate(patientId) {
    this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
      this.patient = patient;
      this.spouse = patient.partner;

      this.embryologyService
        .getAllPatientEmbryologiesByPatientId(this.patient.patientId).subscribe(resp => {
          console.log(resp)
          this.tests = resp;
        });

    });
  }

  
}
