import { Component, OnInit, ViewChild } from '@angular/core';
import { TvopuService } from '../../../../app/core/Services/HIMS/Lab/tvopu.service';
import { PatientService } from '../../../../app/core';
import { DxSelectBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-tvopu-records',
  templateUrl: './tvopu-records.component.html',
  styleUrls: ['./tvopu-records.component.scss']
})
export class TvopuRecordsComponent implements OnInit {

  private patients: any;
  private spouse: any;
  private patient: any;
  private tests: any;
  private id: any;

  @ViewChild("patientcb") patientcb: DxSelectBoxComponent

  constructor(private tvopuService: TvopuService,
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

      this.tvopuService
        .getTvopusByPatientId(this.patient.patientId).subscribe(resp => {
          console.log(resp)
          this.tests = resp;
        });

    });
  }

}
