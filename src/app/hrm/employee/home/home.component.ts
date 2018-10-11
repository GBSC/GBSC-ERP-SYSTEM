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

    constructor(private toastr: ToastrService, public employeeService: EmployeeService, public router: Router, private activatedRoute: ActivatedRoute) { }

    async ngOnInit() {

        // get URL parameters
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id']; // --> Name must match wanted parameter 

            console.log("route id ", this.id);
        });

        console.log("user id ", this.id)

    }

    displayToast(message) {

        this.toastr.success(message);

    }


}
