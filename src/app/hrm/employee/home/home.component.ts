import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../core';

@Component({
    selector: 'app-employeehome',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class EmployeeHomeComponent implements OnInit {

    public id: number;

    constructor(public employeeService: EmployeeService, public router: Router, private activatedRoute: ActivatedRoute) { }

    async ngOnInit() {

        // get URL parameters
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id']; // --> Name must match wanted parameter 
        });

    }


}
