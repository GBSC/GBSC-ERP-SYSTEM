import { Component, OnInit, Input } from '@angular/core';
 import { EmployeeService, SetupService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
    selector: 'app-employeequalification',
    templateUrl: './qualification.component.html',
    styleUrls: ['./qualification.component.css']
})
export class EmployeeQualificationComponent implements OnInit {

    public degrees: any;
    public qualifications: any;


    @Input('employeeId') id: number;


    constructor(public employeeService: EmployeeService, public SetupServiceobj: SetupService,
        public router: Router, public route: ActivatedRoute) {
    }

    async ngOnInit() {

        this.SetupServiceobj.getDegrees().subscribe(rsp => this.degrees = rsp);

        this.employeeService.getQualifications(this.id).subscribe(resp => this.qualifications = resp);
    }

    addQualification(value) {
        
        value.data.userId = this.id;  
        this.employeeService.addQualification(value.data).subscribe(resp => console.log(resp)); 
    } 
    updateQualification(value) {
 
        let qualification = this.qualifications.find(x => x.universityId == value.key); 
        qualification = { ...qualification, ...value.data };  
        this.employeeService.updateQualification(qualification).subscribe(resp => console.log(resp));  
}


}

