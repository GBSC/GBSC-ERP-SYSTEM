import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Visits } from '../../../core/Models/HIMS/visits';



@Component({
    selector: 'app-recentvisits',
    templateUrl: './recentvisits.component.html',
    styleUrls: ['./recentvisits.component.css']
})
export class RecentvisitsComponent implements OnInit {

    public currentPatient: any = [];
    id : number;
    visits : Visits;
    constructor(private PatientServiceobj: PatientService, public router: Router , private rout : ActivatedRoute) {

    }

    async ngOnInit() {
        this.rout.params.subscribe(params => {
        this.id = +params['id'];    
        let x = this.PatientServiceobj.GetPatientVisits(this.id).subscribe(visits=> this.visits = visits );
        console.log(x);
    }); 


}

    async onclick(id) {
        this.router.navigate(['/hims/patient/visitdetail/' + id]);
    }
}
