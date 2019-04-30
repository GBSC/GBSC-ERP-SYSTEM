import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';


@Component({
    selector: 'app-consultant',
    templateUrl: './consultant.component.html',
    styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {

    constructor(public PatientServiceobj: PatientService) { }

    async  ngOnInit() {

        await this.PatientServiceobj.getConsultant();
        this.PatientServiceobj.consultant;
        console.log(this.PatientServiceobj.consultant);
        //    console.log(x);
    }

    async  addConsultant(value) {
        console.log(value)
             console.log(value.key);
          await this.PatientServiceobj.addConsultant(value.key);
          await this.PatientServiceobj.getConsultant();
          this.PatientServiceobj.consultant;

    }

    async updateConsultant(value) {
        //    console.log(value);
        await this.PatientServiceobj.updateConsultant(value.key)
        this.PatientServiceobj.consultant;
    }

    async deleteConsultant(value) {
        //   console.log(value.key.consultantId);
        await this.PatientServiceobj.deleteConsultant(value.key.consultantId);
        this.PatientServiceobj.consultant;
    }

}
