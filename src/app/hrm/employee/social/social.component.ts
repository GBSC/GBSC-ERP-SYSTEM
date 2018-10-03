import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SetupService, EmployeeService } from '../../../core';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

    public SocialForm: any;
    constructor(public fb: FormBuilder, public SetupServiceobj: SetupService, public employee: EmployeeService) { }

    ngOnInit() {

        // this.SocialForm = this.fb.group({
        //   Fb: ['', Validators.required],
        //   Twitter: ['', Validators.required],
        //   Instagram: ['', Validators.required],
        //   Linkedin: ['', Validators.required],
        //   GooglePlus: ['', Validators.required],
        //   Youtube: ['', Validators.required],
        //   Blog: ['', Validators.required],
        //   Pinterest: ['', Validators.required]
        // });

    }

}
