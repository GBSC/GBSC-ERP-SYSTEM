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
<<<<<<< HEAD
    @Input('id') id: number;
=======
    @Input('employeeId') id: number;
    @Output() updateMessage = new EventEmitter();

>>>>>>> master
    public SocialForm: any;

    constructor(public fb: FormBuilder, public SetupServiceobj: SetupService, public employeeService: EmployeeService,
        public router: Router, private route: ActivatedRoute) {
        this.SocialForm = this.fb.group({
<<<<<<< HEAD
            Fb: ['', Validators.required],
            Twitter: ['', Validators.required],
            Instagram: ['', Validators.required],
            Linkedin: ['', Validators.required],
            GooglePlus: ['', Validators.required],
            Youtube: ['', Validators.required],
            Blog: ['', Validators.required],
            Pinterest: ['', Validators.required]
=======
            FacebookUrl: [''],
            TwitterUrl: [''],
            BloggerProfile: [''],
            LinkedinUrl: [''],
            GooglePlusUrl: [''],
            InstagramUrl: [''],
            PinterestUrl: [''],
            YoutubeUrl: ['']
>>>>>>> master
        });

    }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.id = +params['id'];
<<<<<<< HEAD
            console.log(this.id)

            //     this.PatientServiceobj.getpatient(this.id).subscribe((Patient : any)=> {
            //       this.Patient = Patient;
=======

        });

>>>>>>> master

            //       this.patientForm.patchValue({
            //           FirstName: Patient.firstName,
            //         });

            //    });

<<<<<<< HEAD
            this.employeeService.GetEmployee(this.id).subscribe(resp => {

                this.Employee = resp;

                console.log(this.Employee);
            });

=======
            this.patchValues(resp);
>>>>>>> master

        });

    }

<<<<<<< HEAD

        });

        this.employeeService.GetEmployee(this.id).subscribe(resp => {
            console.log(this.id);
            this.Employee = resp;
=======
    update(value) {

        this.employeeService.updateuserSocial(this.id, value).subscribe(resp => this.showSuccess("Social information updated"));
>>>>>>> master

    }

    showSuccess(message) {

        this.updateMessage.emit(message);
    }

<<<<<<< HEAD
    async update(value) {
        console.log(value);
        await this.employeeService.updateuserSocial(value);

    }
=======

>>>>>>> master
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
