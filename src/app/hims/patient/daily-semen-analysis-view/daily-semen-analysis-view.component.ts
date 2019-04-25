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
    public Procedure : any;
    public consultants : any;
    public patients : any;

    constructor(public PatientServiceObj: PatientService, public router: Router) { }

    ngOnInit() {
        this.PatientServiceObj.getDailySemenAnalysis().subscribe(res => {
            this.dailySemenAnalysis = res;
            console.log(this.dailySemenAnalysis)
        });

        this.PatientServiceObj.getProcedure().subscribe(res => {
            this.Procedure = res;
            console.log(this.Procedure)
        });

        this.PatientServiceObj.GetConsultants().subscribe(res=>{
            this.consultants = res;
            console.log(this.consultants);
        });

        this.PatientServiceObj.getPatientObservable().subscribe(res=>{
                this.patients  = res;
                console.log(this.patients);
        })



    }


    addDailysemenAnalysis() {
        this.router.navigate(['/hims/patient/dailysemenanalysis'])
    }
}
