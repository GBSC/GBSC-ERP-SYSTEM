import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent, DxLookupComponent } from 'devextreme-angular';
import { PatientService, ConsultantService } from '../../../../app/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';
import { ProtocolService } from '../../../../app/core/Services/HIMS/protocol.service';
import { MedicineService } from '../../../../app/core/Services/HIMS/medicine.service';
import { PatientclinicalrecordService } from '../../../core/Services/HIMS/patientclinicalrecord.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private treatments: any;
    private protocols: any;
    private medicines: any;
    private id: number;
    private drugs: any[];
    private clinicalRecord: any;

    private clinicalrecordform: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private consultantService: ConsultantService,
        private patientService: PatientService,
        private treatmentService: TreatmentService,
        private medicineService: MedicineService,
        private protocolService: ProtocolService,
        public router: Router,
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private clinicalrecordservice: PatientclinicalrecordService) {

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
            'TreatmentTypeId': [''],
            'ConsultantId': [''],
            'ProtocolId': ['']
        })

        this.clinicalrecordform.disable();

    }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            this.setupValues();

        })

        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatientDate(res.component.option("value"))
            this.clinicalrecordform.enable();
        });


        this.consultantService.getConsultants()
            .subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientObservable()
            .subscribe(patients => this.patients = patients);

        this.protocolService.getProtocols().subscribe(resp => this.protocols = resp);

        this.treatmentService.gettreatmenttypes().subscribe(resp => this.treatments = resp);

        this.medicineService.getMedicines().subscribe(resp => this.medicines = resp);

        this.drugs = [];

    }

    setupValues() {

        this.clinicalrecordservice.getPatientClinicalRecord(this.id).subscribe(resp => {

            this.clinicalRecord = resp;

            if (this.clinicalRecord)
                this.patchValues(this.clinicalRecord);

            if (resp != null) {
                this.drugs = resp.clinicalRecordDrugs;

            }
        });
    }

    submitForm(value) {

        if (this.patient) {

            value.patientId = this.patient.patientId;
            value.clinicalRecordDrugs = this.drugs;

            this.clinicalrecordservice.addPatientClinicalRecord(value).subscribe(resp => {
                this.displayToast("Patient Clinical Record Saved");
                this.setupValues();
            });

        }

    }

    displayToast(message) {

        this.toastr.success(message);

    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

    patchValues(clinicalRecord) {

        this.clinicalrecordform.patchValue({

            'CycleNumber': clinicalRecord.cycleNumber,
            'Lmp1': clinicalRecord.lmp1,
            'Lmp2': clinicalRecord.lmp2,
            'TypewiseTreatmentNumber': clinicalRecord.typewiseTreatmentNumber,
            'ActiveInactive': clinicalRecord.activeInactive,
            'Outcome': clinicalRecord.outcome,
            'Reason': clinicalRecord.reason,
            'SupressionDate': clinicalRecord.supressionDate,
            'SimulationDate': clinicalRecord.simulationDate,
            'TriggerDate': clinicalRecord.triggerDate,
            'EtDate': clinicalRecord.etDate,
            'TreatmentTypeId': clinicalRecord.treatmentTypeId,
            'ConsultantId': clinicalRecord.consultantId,
            'ProtocolId': clinicalRecord.protocolId
        })
    }



}
