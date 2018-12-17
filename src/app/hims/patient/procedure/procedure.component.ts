import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-procedure',
    templateUrl: './procedure.component.html',
    styleUrls: ['./procedure.component.scss']
})
export class ProcedureComponent implements OnInit {

    public procedure: any;

    constructor(public toastr: ToastrService, public PatientServiceobj: PatientService) { }

    ngOnInit() {

        this.PatientServiceobj.getProcedure().subscribe(res => this.procedure = res);

    }

    async  addProcedure(value) {
        await this.PatientServiceobj.addProcedure(value.data);
    }



    async  updateProcedure(value) {
        await this.PatientServiceobj.updateProcedure(value.key);
    }


    async  deleteProcedure(value) {
        await this.PatientServiceobj.deleteProcedure(value.key.procedureId);
    }







}
