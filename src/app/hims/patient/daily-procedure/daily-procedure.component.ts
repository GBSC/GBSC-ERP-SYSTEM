import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from '../../../core';


@Component({
    selector: 'app-daily-procedure',
    templateUrl: './daily-procedure.component.html',
    styleUrls: ['./daily-procedure.component.scss']
})
export class DailyProcedureComponent implements OnInit {
    private DailyProcedureForm: FormGroup;
    private Patients: any;
    private Consultants: any;
    private Procedure: any;
    private DailyProcedure: any;

    constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private PatientServiceobj: PatientService) {

        this.DailyProcedureForm = this.formBuilder.group({
            Nature: [''],
            Time: [''],
            ProcedureType: [''],
            DoneByNature: [''],
            Remarks: [''],
            PatientId: [''],
            AssignedConsultantId: [''],
            ProcedureId: [''],
            PerformedByConsultantId: ['']

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

        this.PatientServiceobj.getDailyProcedure().subscribe(res => {
            this.DailyProcedure = res;
        });

    }


    addDailyProcedure(value) {
        console.log(value)
        this.PatientServiceobj.addDailyProcedure(value).subscribe(res => {
            console.log(res);

            this.PatientServiceobj.getDailyProcedure().subscribe(res => {
                this.DailyProcedure = res;
            });

        });
    }

    updateDailyProcedure(value) {
        console.log(value);
        this.PatientServiceobj.updateDailyProcedure(value.key).subscribe(res =>
            console.log(res));
    }

    deleteDailyProcedure(value) {
        console.log(value);
        this.PatientServiceobj.deleteDailyProcedure(value.key.dailyProcedureId).subscribe(res =>
            console.log(res)
        );
    }

}
