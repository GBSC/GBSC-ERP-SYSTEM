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

    public patient: any;
    public spouse: any;
    public patients: any;
    public consultants: any;
    public treatments: any;
    public protocols: any;
    public medicines: any;
    public id: number;
    public drugs: any[];
    public clinicalRecord: any;

    public clinicalrecordform: FormGroup;

    constructor(public formBuilder: FormBuilder,
        public consultantService: ConsultantService,
        public patientService: PatientService,
        public treatmentService: TreatmentService,
        public medicineService: MedicineService,
        public protocolService: ProtocolService,
        public router: Router,
        public route: ActivatedRoute,
        public toastr: ToastrService,
        public clinicalrecordservice: PatientclinicalrecordService) {

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

            this.clinicalrecordservice.getPatientClinicalRecord(this.id).subscribe(resp => {

                this.clinicalRecord = resp;

                if (resp != null) {
                    this.drugs = resp.clinicalRecordDrugs;

                }


            })

        })

        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatientDate(res.component.option("value"))
            this.clinicalrecordform.enable();
        });


        this.consultantService.getConsultants()
            .subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientCb()
            .subscribe(patients => this.patients = patients);

        this.protocolService.getProtocols().subscribe(resp => this.protocols = resp);

        this.treatmentService.gettreatmenttypes().subscribe(resp => this.treatments = resp);

        this.medicineService.getMedicines().subscribe(resp => this.medicines = resp);

        this.drugs = [];

    }

    submitForm(value) {

        if (this.patient) {

            value.patientId = this.patient.patientId;
            value.clinicalRecordDrugs = this.drugs;

            this.clinicalrecordservice.addPatientClinicalRecord(value).subscribe(resp => {
                this.displayToast("Patient Clinical Record Saved");
                this.router.navigate(['coordination/clinical-record/' + resp.patientClinicalRecordId]);
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



}
