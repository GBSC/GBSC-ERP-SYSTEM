import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../../../core/Services/HIMS/treatment.service';

@Component({
    selector: 'app-treatmenttype',
    templateUrl: './treatmenttype.component.html',
    styleUrls: ['./treatmenttype.component.scss']
})
export class TreatmenttypeComponent implements OnInit {

    public treatments: any;

    constructor(public treatmentService: TreatmentService) { }

    ngOnInit() {

        this.treatmentService.gettreatmenttypes().subscribe(resp => {

            this.treatments = resp

            console.log(this.treatments);

        });
    }

    updateTreatmentType(value) {
        this.treatmentService.updatetreatmenttype(value.key).subscribe(resp => console.log(resp));
    }

    addTreatmentType(value) {
        console.log(value);
        this.treatmentService.addtreatmenttype(value.data).subscribe(resp => console.log(resp));
    }

}
