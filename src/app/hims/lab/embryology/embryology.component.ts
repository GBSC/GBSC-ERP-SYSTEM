import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular/ui/select-box';
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

    public patient: any;
    public spouse: any;
    public patients: any;
    public consultants: any;
    public treatments: any;
    public id: number;
    public clinicalRecord: any;
    public embryology: any;
    public tvopu: any;
    public embryologists: any;
    public embryologydetails: any;
    public eggNumber: any = "";
    public fateOptions: any;

    public embryologyForm: FormGroup;

    constructor(public formBuilder: FormBuilder,
        public consultantService: ConsultantService,
        public patientService: PatientService,
        public treatmentService: TreatmentService,
        public route: ActivatedRoute,
        public router: Router,
        public tvopuService: TvopuService,
        public embryologyService: EmbryologyService,
        public embryologistService: EmbryologistService,
        public toastr: ToastrService,
        public clinicalrecordservice: PatientclinicalrecordService) {

        this.fateOptions = [{ name: "Stored" }, { name: "Replaced" }, { name: "Discarded" }, { name: "None" }];

        this.embryologyForm = formBuilder.group({
            EggNumber: [''],
            CreateDate: [''],
            FreshEmbryoTransferDate: [''],
            FreshEmbryoTransferTime: [''],
            EmbryoDate: [''],
            Time: [''],
            Staff: [''],
            Status: [''],
            Verify: [''],
            Remarks: [''],
            EggStatusNumber: [''],
            ConsultantId: [''],
            EmbryologistId: ['']

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

                    this.setValues();
                }

            });

            this.patientcb.onValueChanged.subscribe(res => {
                this.populatePatientDate(res.component.option("value"))

            });

            this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

            this.patientService.getPatientCb().subscribe(patients => this.patients = patients);

            this.treatmentService.gettreatmenttypes().subscribe(resp => this.treatments = resp);

            this.embryologistService.getEmbryologists().subscribe(resp => this.embryologists = resp);


        });
    }

    setValues() {

        this.embryologyService.getPatientEmbryologyByTvopuId(this.tvopu.tvopuId).subscribe(emb => {

            this.embryology = emb;
            if (this.embryology) {
                this.patchValues(this.embryology);
                this.embryologydetails = emb.patientEmbryologyDetails;
            }
        });
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

    rowInserted(value) {
        if (value.data.fate == "Discarded") {
            if (this.eggNumber != "")
                this.eggNumber = this.eggNumber + "," + value.data.eggNumber;
            else
                this.eggNumber = value.data.eggNumber;
        }
    }

    rowUpdated(value) {
        if (value.data.fate == "Discarded") {
            if (this.eggNumber != "")
                this.eggNumber = this.eggNumber + "," + value.data.eggNumber;
            else
                this.eggNumber = value.data.eggNumber;
        }
    }


    submitForm(value) {

        value.tvopuId = this.tvopu.tvopuId;
        value.patientEmbryologyDetails = this.embryologydetails;

        this.embryologyService.addPatientEmbryology(value).subscribe(resp => {
            this.displayToast("Patient Embryology Saved");
            this.setValues();
        });
    }

    update(value) {
        value.tvopuId = this.id;
        value.patientEmbryologyId = this.embryology.patientEmbryologyId;
        value.patientEmbryologyDetails = this.embryologydetails;
        this.embryologyService.updatePatientEmbryology(value).subscribe(resp => {

            this.displayToast("Patient Embryology Updated");

        });

        console.log(value);
    }

    patchValues(embryology) {

        this.embryologyForm.patchValue({
            EggNumber: embryology.eggNumber,
            CreateDate: embryology.createDate,
            FreshEmbryoTransferDate: embryology.freshEmbryoTransferDate,
            FreshEmbryoTransferTime: embryology.freshEmbryoTransferTime,
            EmbryoDate: embryology.embryoDate,
            Time: embryology.time,
            Staff: embryology.staff,
            Status: embryology.status,
            Verify: embryology.verify,
            Remarks: embryology.remarks,
            EggStatusNumber: embryology.eggStatusNumber,
            ConsultantId: embryology.consultantId,
            EmbryologistId: embryology.embryologistId
        })
    }

    displayToast(message) {

        this.toastr.success(message);

    }


}
