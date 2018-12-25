import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-daily-semen-analysis',
    templateUrl: './daily-semen-analysis.component.html',
    styleUrls: ['./daily-semen-analysis.component.scss']
})
export class DailySemenAnalysisComponent implements OnInit {

    public DailySemenAnalysisForm: FormGroup;
    private ProcedureForm: FormGroup;
    public Patients: any;
    public Consultants: any;
    public Procedure: any;
    private Procedurearray: any = [];
    private dailysemenanalysisobj: any;

    constructor(private formBuilder: FormBuilder, private PatientServiceobj: PatientService,public router: Router) {
        this.DailySemenAnalysisForm = this.formBuilder.group({
            'Timein': ['', Validators.required],
            'Timeout': ['', Validators.required],
            'Payment': ['', Validators.required],
            'Remarks': ['', Validators.required],
            'PatientId': ['', Validators.required],
            'ConsultantId': ['', Validators.required],
            'DailySemenAnalysisProcedures': ['', this.formBuilder.array([])],
            // 'ProcedureId' :['',Validators.required] 
        });
    }

    ngOnInit() {
        this.PatientServiceobj.getPatientObservable().subscribe(res => {
            this.Patients = res;
            console.log(this.Patients);
        });

        this.PatientServiceobj.GetConsultants().subscribe(res => {
            this.Consultants = res;
            console.log(this.Consultants);
        });


        this.PatientServiceobj.getProcedure().subscribe(res => {
            this.Procedure = res;
            console.log(this.Procedure);

        });


    }

    addDailySemenAnalysis(value) {
        console.log(this.DailySemenAnalysisForm.value);
        this.DailySemenAnalysisForm.value.DailySemenAnalysisProcedures = this.Procedurearray
        this.PatientServiceobj.addDailySemenAnalysis(value).subscribe(res=> {
            console.log(res);
        });
        this.DailySemenAnalysisForm.reset();        
        this.router.navigate(['/hims/patient/dailysemenanalysisview']);
    }

    addProcedure(value) {
        let x = value.key;
        this.Procedurearray.push(x);
    }

    deleteProcedure(value) {
        this.Procedurearray.splice(value.key, 1)
    }



}
