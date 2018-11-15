import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConsultantService, PatientService } from '../../../../app/core';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';
import { BiopsyService } from '../../../../app/core/Services/HIMS/Lab/biopsy.service';
import { ActivatedRoute } from '@angular/router';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-biopsy',
    templateUrl: './biopsy.component.html',
    styleUrls: ['./biopsy.component.scss']
})
export class BiopsyComponent implements OnInit {

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    private patient: any;
    private spouse: any;
    private patients: any;
    private consultants: any;
    private treatments: any;
    private id: number;
    private clinicalRecord: any;
    private biopsy: any;

    private biopsyForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private consultantService: ConsultantService,
        private patientService: PatientService,
        private treatmentService: TreatmentService,
        private biopsyService: BiopsyService,
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private clinicalrecordservice: PatientclinicalrecordService) {

        this.biopsyForm = formBuilder.group({

            "BiopsyType": [''],
            "CollectionNumber": [''],
            "CollectionDate": [''],
            "ProcedureNumber": [''],
            "Remarks": [''],
            "PesaTime": [''],
            "PesaLeft": [''],
            "PesaRight": [''],
            "PesaResult": [''],
            "TeseTime": [''],
            "TeseLeft": [''],
            "TeseRight": [''],
            "TeseResult": [''],
            "PatientId": []
        });

        this.biopsyForm.disable();
    }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            if (this.id) {
                this.clinicalrecordservice.getPatientClinicalRecord(this.id).subscribe(resp => {

                    this.clinicalRecord = resp;

                    this.setupValues();

                })
            }


        })

        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatientDate(res.component.option("value"))
            this.biopsyForm.enable();

        });


        this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientObservable().subscribe(patients => this.patients = patients);

        this.treatmentService.gettreatmenttypes().subscribe(resp => this.treatments = resp);


    }

    setupValues() {

        this.biopsyService
            .getPatientBiopsyByClinicalRecordId(this.clinicalRecord.patientClinicalRecordId).subscribe(resp => {
                this.biopsy = resp;

                if (this.biopsy)
                    this.patchValues(this.biopsy);
            });
    }

    searchBiopsyByCollectionDate(value) {

        let date = new Date(value).toLocaleDateString();

        this.biopsyService.getPatientBiopsyByCollectionDate(date).subscribe(resp => console.log(resp));
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

    submitForm(value) {

        if (this.clinicalRecord) {
            value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;

        }

        this.biopsyService.addPatientBiopsy(value).subscribe(resp => {
            this.displayToast("Biopsy Saved");
            this.setupValues();
        });
    }

    updateForm(value) {

        if (this.clinicalRecord) {
            value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;

        }

        value.biopsyId = this.biopsy.biopsyId;

        this.biopsyService.updatePatientBiopsy(value).subscribe(resp => {
            this.displayToast("Biopsy Saved");
        });

    }

    displayToast(message) {

        this.toastr.success(message);

    }

    patchValues(biopsy) {

        this.biopsyForm.patchValue({

            "BiopsyType": biopsy.biopsyType,
            "CollectionNumber": biopsy.collectionNumber,
            "CollectionDate": biopsy.collectionDate,
            "ProcedureNumber": biopsy.procedureNumber,
            "Remarks": biopsy.remarks,
            "PesaTime": biopsy.pesaTime,
            "PesaLeft": biopsy.pesaLeft,
            "PesaRight": biopsy.pesaRight,
            "PesaResult": biopsy.pesaResult,
            "TeseTime": biopsy.teseTime,
            "TeseLeft": biopsy.teseLeft,
            "TeseRight": biopsy.teseRight,
            "TeseResult": biopsy.teseResult,
            "PatientId": biopsy.patientId
        })
    }

}
