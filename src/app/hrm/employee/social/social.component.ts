import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SetupService, EmployeeService } from '../../../core';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
    public Employee: any;
    @Input('employeeId') id: number;
    @Output() updateMessage = new EventEmitter();

    public SocialForm: any;

    constructor(public fb: FormBuilder, public SetupServiceobj: SetupService, public employeeService: EmployeeService,
        public router: Router, private route: ActivatedRoute) {
        this.SocialForm = this.fb.group({
            FacebookUrl: [''],
            TwitterUrl: [''],
            BloggerProfile: [''],
            LinkedinUrl: [''],
            GooglePlusUrl: [''],
            InstagramUrl: [''],
            PinterestUrl: [''],
            YoutubeUrl: ['']
        });

    }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

        });


        this.employeeService.GetEmployee(this.id).subscribe(resp => {

            this.Employee = resp;

            this.patchValues(resp);

        });

    }

    update(value) {

        this.employeeService.updateuserSocial(this.id, value).subscribe(resp => this.showSuccess("Social information updated"));

    }

    showSuccess(message) {

        this.updateMessage.emit(message);
    }


    patchValues(social: any) {

        this.SocialForm.patchValue({

            FacebookUrl: social.facebookUrl,
            TwitterUrl: social.twitterUrl,
            BloggerProfile: social.bloggerProfile,
            LinkedinUrGooglePlusUrll: social.linkedinUrl,
            GooglePlusUrl: social.googlePlusUrl,
            InstagramUrl: social.instagramUrl,
            PinterestUrl: social.pinterestUrl,
            YoutubeUrl: social.youtubeUrl

        });
    }

}
