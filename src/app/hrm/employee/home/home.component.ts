import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-employeehome',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class EmployeeHomeComponent implements OnInit {

    public id: number;

    constructor(public toastr: ToastrService, public employeeService: EmployeeService, public router: Router, public activatedRoute: ActivatedRoute) { }

    async ngOnInit() {

        // get URL parameters
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id']; // --> Name must match wanted parameter 
        });


    }

    displayToast(message) {

        this.toastr.success(message);

    }


}
