import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConsultantService, PatientService } from '../../../../app/core';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { EmbryologyService } from '../../../../app/core/Services/HIMS/Lab/embryology.service';
import { TvopuService } from '../../../../app/core/Services/HIMS/Lab/tvopu.service';
import { EmbryologistService } from '../../../../app/core/Services/HIMS/Lab/embryologist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-embryology',
    templateUrl: './embryology.component.html',
    styleUrls: ['./embryology.component.scss']
})
export class EmbryologyComponent implements OnInit {

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    private patient: any;
    private spouse: any;
    private patients: any;
    private consultants: any;
    private treatments: any;
    private id: number;
    private clinicalRecord: any;
    private embryology: any;
    private tvopu: any;
    private embryologists: any;
    private embryologydetails: any;

    private embryologyForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private consultantService: ConsultantService,
        private patientService: PatientService,
        private treatmentService: TreatmentService,
        private route: ActivatedRoute,
        private tvopuService: TvopuService,
        private embryologyService: EmbryologyService,
        private embryologistService: EmbryologistService,
        private toastr: ToastrService,
        private clinicalrecordservice: PatientclinicalrecordService) {

        this.embryologyForm = formBuilder.group({
            "EggNumber": [''],
            "CreateDate": [''],
            "FreshEmbryoTransferDate": [''],
            "FreshEmbryoTransferTime": [''],
            "EmbryoDate": [''],
            "Time": [''],
            "Staff": [''],
            "Status": [''],
            "Verify": [''],
            "Remarks": [''],
            "EggStatusNumber": [''],
            "ConsultantId": [''],
            "EmbryologistId": ['']

        })

        this.embryologyForm.disable();

    }

    ngOnInit() {

        this.embryologydetails = [];

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            this.tvopuService.getTvopu(this.id).subscribe(resp => {

                this.tvopu = resp;

                if (this.tvopu != null) {
                    this.clinicalrecordservice.getPatientClinicalRecord(this.tvopu.patientClinicalRecordId).subscribe(cresp => {

                        this.clinicalRecord = cresp;

                        this.embryologyForm.enable();

                    })

                    this.embryologyService.getPatientEmbryologyByTvopuId(this.tvopu.tvopuId).subscribe(emb => {

                        this.embryology = emb;
                        this.embryologydetails = emb.patientEmbryologyDetails;

                    })
                }

            });

            this.patientcb.onValueChanged.subscribe(res => {
                this.populatePatientDate(res.component.option("value"))

            });

            this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

            this.patientService.getPatientObservable().subscribe(patients => this.patients = patients);

            this.treatmentService.gettreatmenttypes().subscribe(resp => this.treatments = resp);

            this.embryologistService.getEmbryologists().subscribe(resp => this.embryologists = resp);


        });
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }


    submitForm(value) {

        value.tvopuId = this.tvopu.tvopuId;
        value.patientEmbryologyDetails = this.embryologydetails;

        this.embryologyService.addPatientEmbryology(value).subscribe(resp => this.displayToast("Patient Embryology Saved"));

    }

    update(value) {
        value.tvopuId = this.tvopu.tvopuId;
        this.embryologyService.updatePatientEmbryology(value).subscribe(resp => {

            this.displayToast("Patient Embryology Saved");

        });
    }

    displayToast(message) {

        this.toastr.success(message);

    }


}
