import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular/ui/select-box';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConsultantService, PatientService } from '../../../../app/core';
import { ActivatedRoute } from '@angular/router';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { FreezepreprationService } from '../../../../app/core/Services/HIMS/Lab/freezeprepration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-freezepreparation',
    templateUrl: './freezepreparation.component.html',
    styleUrls: ['./freezepreparation.component.scss']
})
export class FreezepreparationComponent implements OnInit {

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    public patient: any;
    public spouse: any;
    public patients: any;
    public consultants: any;
    public treatments: any;
    public id: number;
    public clinicalRecord: any;
    public freezePrepration: any;

    public freePreprationForm: FormGroup;

    constructor(public formBuilder: FormBuilder,
        public consultantService: ConsultantService,
        public patientService: PatientService,
        public route: ActivatedRoute,
        public freezePreprationService: FreezepreprationService,
        public toastr: ToastrService,
        public clinicalrecordservice: PatientclinicalrecordService) {

        this.freePreprationForm = formBuilder.group({

            "FreezeDate": [''],
            "SemenRefNumber": [''],
            "CollectionNumber": [''],
            "Other": [''],
            "Type": [''],
            "PesaTese": [''],
            "CollectionDate": [''],
            "ProcedureNumber": [''],
            "NoOfStrawFrozen": [''],
            "DrawerNumber": [''],
            "CannisterNumber": [''],
            "Position": [''],
            "StrawIdFrom": [''],
            "StrawIdTo": [''],
            "Suffix": [''],
            "StrawColor": [''],
            "PlugColor": [''],
            "SurvivalRange": [''],
            "Survival": [''],
            "Remarks": ['']
        });

        this.freePreprationForm.disable();

    }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            this.clinicalrecordservice.getPatientClinicalRecord(this.id).subscribe(resp => {

                this.clinicalRecord = resp;

                this.freezePreprationService
                    .getFreezePreprationByClinicalRecordId(this.clinicalRecord.patientClinicalRecordId).subscribe(resp => {

                        this.freezePrepration = resp;
                        this.patchValues(this.freezePrepration);
                    });

            })

        })

        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatientDate(res.component.option("value"))
            this.freePreprationForm.enable();

        });


        this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientCb().subscribe(patients => this.patients = patients);

    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

    submitForm(value) {

        value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;

        this.freezePreprationService.addFreezePrepration(value).subscribe(resp => {
            this.displayToast("Freeze prep saved");
        });
    }

    updateForm(value) {
        value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
        value.freezePreprationId = this.freezePrepration.freezePreprationId;

        this.freezePreprationService.updateFreezePrepration(value).subscribe(resp => {
            this.displayToast("Freeze prep updated");
        });
    }

    displayToast(message) {

        this.toastr.success(message);

    }

    patchValues(freezePrepration) {
        this.freePreprationForm.patchValue({
            "FreezeDate": freezePrepration.freezeDate,
            "SemenRefNumber": freezePrepration.semenRefNumber,
            "CollectionNumber": freezePrepration.collectionNumber,
            "Other": freezePrepration.other,
            "Type": freezePrepration.type,
            "PesaTese": freezePrepration.pesaTese,
            "CollectionDate": freezePrepration.collectionDate,
            "ProcedureNumber": freezePrepration.procedureNumber,
            "NoOfStrawFrozen": freezePrepration.noOfStrawFrozen,
            "DrawerNumber": freezePrepration.drawerNumber,
            "CannisterNumber": freezePrepration.cannisterNumber,
            "Position": freezePrepration.position,
            "StrawIdFrom": freezePrepration.strawIdFrom,
            "StrawIdTo": freezePrepration.strawIdTo,
            "Suffix": freezePrepration.suffix,
            "StrawColor": freezePrepration.strawColor,
            "PlugColor": freezePrepration.plugColor,
            "SurvivalRange": freezePrepration.survivalRange,
            "Survival": freezePrepration.survival,
            "Remarks": freezePrepration.remarks,
        })
    }

}
