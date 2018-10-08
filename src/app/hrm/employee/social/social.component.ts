import { Component, OnInit, Input } from '@angular/core';
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
    @Input('id') id: number;
    public SocialForm: any; 
    
    constructor(public fb: FormBuilder, public SetupServiceobj: SetupService, public employeeService: EmployeeService,
        public router: Router, private route: ActivatedRoute) 
    {
        this.SocialForm = this.fb.group({
            Fb: ['', Validators.required],
            Twitter: ['', Validators.required],
            Instagram: ['', Validators.required],
            Linkedin: ['', Validators.required],
            GooglePlus: ['', Validators.required],
            Youtube: ['', Validators.required],
            Blog: ['', Validators.required],
            Pinterest: ['', Validators.required]
          });
  
     }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.id = +params['id'];
  console.log(this.id)
         
        //     this.PatientServiceobj.getpatient(this.id).subscribe((Patient : any)=> {
        //       this.Patient = Patient;
              
        //       this.patientForm.patchValue({
        //           FirstName: Patient.firstName,
        //         });

        //    });

        this.employeeService.GetEmployee(this.id).subscribe(resp => {

            this.Employee = resp;

 console.log(this.Employee);
        });





          });

        this.employeeService.GetEmployee(this.id).subscribe(resp => {
console.log(this.id);
            this.Employee = resp;

            this.patchValues(resp);

        });

    }

    async update(value) {
        console.log(value);
      await this.employeeService.updateuserSocial(value);

    }
    patchValues(social : any) {

        this.employeeService.SocialForm.patchValue({

            FacebookUrl:  social.facebookUrl,
            TwitterUrl: social.twitterUrl,
            BloggerProfile: social.bloggerProfile,
            LinkedinUrl: social.linkedinUrl,
            GooglePlusUrl: social.googlePlusUrl,
            InstagramUrl: social.instagramUrl,
            PinterestUrl: social.pinterestUrl,
            YoutubeUrl: social.youtubeUrl 

        });
      }

}
