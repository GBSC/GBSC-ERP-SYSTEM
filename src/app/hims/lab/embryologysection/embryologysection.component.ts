import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultantService, PatientService } from '../../../../app/core';
import { ActivatedRoute } from '@angular/router';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { DxSelectBoxComponent } from 'devextreme-angular';

@Component({
    selector: 'app-embryologysection',
    templateUrl: './embryologysection.component.html',
    styleUrls: ['./embryologysection.component.scss']
})
export class EmbryologysectionComponent implements OnInit {

    private patient: any;
    private spouse: any;
    private patients: any;
    private consultants: any;
    private treatments: any;
    private id: number;
    private clinicalRecord: any;

    private patientInsemenation: any;
    private bioChemistryTestOnTreatment: any;
    private thawAssessment: any;
    private freezePrepration: any;
    private insemenationPrep: any;
    private biopsy: any;
    private tvopu : any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(private consultantService: ConsultantService,
        private patientService: PatientService,
        private treatmentService: TreatmentService,
        private route: ActivatedRoute,
        private clinicalrecordservice: PatientclinicalrecordService) { }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            this.clinicalrecordservice.getPatientClinicalRecordWithChildren(this.id).subscribe(resp => {

                this.clinicalRecord = resp;

                if (this.clinicalRecord != null) {
                    this.bioChemistryTestOnTreatment = this.clinicalRecord.bioChemistryTestOnTreatment;
                    this.biopsy = this.clinicalRecord.biopsy;
                    this.insemenationPrep = this.clinicalRecord.insemenationPrep;
                    this.freezePrepration = this.clinicalRecord.freezePrepration;
                    this.thawAssessment = this.clinicalRecord.thawAssessment;
                    this.patientInsemenation = this.clinicalRecord.patientInsemenation;
                    this.tvopu = this.clinicalRecord.tvopu;
                }


            })

        })

        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatientDate(res.component.option("value"))

        });


        this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientObservable().subscribe(patients => this.patients = patients);

        this.treatmentService.gettreatmenttypes().subscribe(resp => this.treatments = resp);
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

}
