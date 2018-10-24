import { Component, OnInit } from '@angular/core';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';

@Component({
  selector: 'app-clinicalrecords',
  templateUrl: './clinicalrecords.component.html',
  styleUrls: ['./clinicalrecords.component.scss']
})
export class ClinicalrecordsComponent implements OnInit {

  private clinicalRecords : any;

  constructor(private clinicalRecordService : PatientclinicalrecordService) { }

  ngOnInit() {

    this.clinicalRecordService.searchClinicalRecords('','','MRN00001','','').subscribe(resp=>{
      this.clinicalRecords = resp;
    })
  }

}
