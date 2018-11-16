import { Component, OnInit } from '@angular/core';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-clinicalrecords',
    templateUrl: './clinicalrecords.component.html',
    styleUrls: ['./clinicalrecords.component.scss']
})
export class ClinicalrecordsComponent implements OnInit {

    private clinicalRecords: any;
    private searchForm: FormGroup;

    constructor(private clinicalRecordService: PatientclinicalrecordService, private formBuilder: FormBuilder) {

        this.searchForm = this.formBuilder.group({
            'Mrn': [''],
            'Patient': [''],
            'Spouse': [''],
            'TreatmentNumber': [''],
            'CycleNumber': ['']
        });

    }

    ngOnInit() {


    }

    submitForm(value) {
        this.clinicalRecordService.searchClinicalRecords(value.Patient, value.Spouse, value.Mrn, value.CycleNumber, value.TreatmentNumber)
            .subscribe(resp => {
                this.clinicalRecords = resp;
            })
    }

}
