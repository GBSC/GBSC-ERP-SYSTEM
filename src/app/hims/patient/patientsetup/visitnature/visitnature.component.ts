import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../core';


@Component({
    selector: 'app-visitnature',
    templateUrl: './visitnature.component.html',
    styleUrls: ['./visitnature.component.scss']
})
export class VisitnatureComponent implements OnInit {
    public visitnatr: any;
    constructor(public PatientServiceobj: PatientService) { }

    async ngOnInit() {
        await this.PatientServiceobj.GetVisitNatures();
        this.visitnatr = this.PatientServiceobj.visitNatures;
        //  console.log(this.visitnatr);
    }

    async AddVisitNature(value) {
        let x = await this.PatientServiceobj.AddVisitNature(value.key);
        await this.PatientServiceobj.GetVisitNatures();
        this.visitnatr = this.PatientServiceobj.visitNatures;
        //    console.log(x);
    }

    async UpdateVisitNature(value) {
        let x = await this.PatientServiceobj.UpdateVisitNature(value.key);
        await this.PatientServiceobj.GetVisitNatures();
        this.visitnatr = this.PatientServiceobj.visitNatures;
        //     console.log(x);
    }

    async DeleteVisitNature(value) {
        let x = await this.PatientServiceobj.DeleteVisitNature(value.key.visitNatureId);
        await this.PatientServiceobj.GetVisitNatures();
        this.visitnatr = this.PatientServiceobj.visitNatures;
        //   console.log(x);

    }
}
