import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-daily-semen-analysis-view',
    templateUrl: './daily-semen-analysis-view.component.html',
    styleUrls: ['./daily-semen-analysis-view.component.scss']
})
export class DailySemenAnalysisViewComponent implements OnInit {


    public dailySemenAnalysis: any;

    constructor(public PatientServiceObj: PatientService, public router: Router) { }

    ngOnInit() {
        this.PatientServiceObj.getDailySemenAnalysis().subscribe(res => {
            this.dailySemenAnalysis = res;
            console.log(this.dailySemenAnalysis)
        })
    }


    addDailysemenAnalysis() {
        this.router.navigate(['/hims/patient/dailysemenanalysis'])
    }
}
