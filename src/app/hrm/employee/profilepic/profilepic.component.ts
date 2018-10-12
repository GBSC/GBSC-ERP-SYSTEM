import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators } from '@angular/forms';
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
    public Profilepic: any;
    constructor(public employee: EmployeeService, public fb: FormBuilder, public router: Router, private route: ActivatedRoute) { }

    public selectedPic;

    @Input('employeeId') id: number;

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



    private forevent: File = null;

    onfileselect(event) {
        this.forevent = <File>event.target.files[0]; 
    }


    onupload() {
        const file = new FormData();
        file.append('file', this.forevent);

    }
 
}
