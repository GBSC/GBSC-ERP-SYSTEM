import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';

@Component({
    selector: 'app-active-visits',
    templateUrl: './active-visits.component.html',
    styleUrls: ['./active-visits.component.scss']
})
export class ActiveVisitsComponent implements OnInit {

    public activeVisits: any;
    public visitType: any;

    constructor(public PatientServiceobj: PatientService) { }

    async ngOnInit() {
        this.activeVisits = await this.PatientServiceobj.getActiveVisits();
        ///    console.log(this.activeVisits);

        this.visitType = await this.PatientServiceobj.GetVisitNatures();
        //    console.log(this.visitType);



    }

}
