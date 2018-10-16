import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { PatientService, ConsultantService } from '../../../../app/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';
import { ProtocolService } from '../../../../app/core/Services/HIMS/protocol.service';

@Component({
  selector: 'app-clinicalrecord',
  templateUrl: './clinicalrecord.component.html',
  styleUrls: ['./clinicalrecord.component.scss']
})
export class ClinicalrecordComponent implements OnInit {

  @ViewChild("patientcb") patientcb: DxSelectBoxComponent

  private patient: any;
  private spouse: any;
  private patients: any;
  private consultants: any;
  private treatments : any;
  private protocols : any;
  private clinicalrecordform: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private consultantService: ConsultantService, 
     private patientService: PatientService,
     private treatmentService : TreatmentService,
     private protocolService : ProtocolService) {

    this.clinicalrecordform = this.formBuilder.group({
      'CycleNumber': ['', Validators.required],
      'Lmp1': [''],
      'Lmp2': [''],
      'TypewiseTreatmentNumber': [''],
      'ActiveInactive': [],
      'Outcome': [''],
      'Reason': [''],
      'SupressionDate': [''],
      'SimulationDate': [''],
      'TriggerDate': [''],
      'EtDate': [''],
      'PatientId': [''],
      'TreatmentTypeId': [''],
      'ConsultantId': [''],
      'ProtocolId': ['']
    })

    this.clinicalrecordform.disable();

  }

  ngOnInit() {

    this.patientcb.onValueChanged.subscribe(res =>{
      this.populatePatientDate(res.component.option("value"))
      this.clinicalrecordform.enable();
    });

    this.consultantService.getConsultants()
      .subscribe(consultants => this.consultants = consultants)

    this.patientService.getPatientObservable()
      .subscribe(patients => this.patients = patients);

      this.protocolService.getProtocols().subscribe(resp=>this.protocols = resp);

      this.treatmentService.gettreatmenttypes().subscribe(resp=>this.treatments = resp);

  }

  populatePatientDate(patientId) {
    this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
      this.patient = patient;
      this.spouse = patient.partner;
    });
  }

  submit(value)
  {
    value.patientId = this.patient.patientId;
    console.log(value);
  }

}
