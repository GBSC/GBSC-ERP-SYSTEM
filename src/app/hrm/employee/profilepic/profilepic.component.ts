import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-profilepic',
    templateUrl: './profilepic.component.html',
    styleUrls: ['./profilepic.component.css']
})
export class ProfilepicComponent implements OnInit {
    @Output('setBankFormValue') setpicFormValue = new EventEmitter();
    public selectedPic;
    public Profilepic: FormGroup;
    @Input('employeeId') id: number;

    constructor(public employee: EmployeeService, public fb: FormBuilder, public router: Router, public route: ActivatedRoute) {
    }

    async ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
        });

    }

    getProfilepicFormValue() {
        this.setpicFormValue.emit(this.Profilepic.value);
    }

    getProfilePic(e) {
    }

    public forevent: File = null;

    onfileselect(event) {
        this.forevent = <File>event.target.files[0];
    }


    onupload() {
        const file = new FormData();
        file.append('file', this.forevent);

    }

}
