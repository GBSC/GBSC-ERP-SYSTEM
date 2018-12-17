import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService, SetupService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeDependant } from '../../../core/Models/HRM/employeeDependant';

@Component({
    selector: 'app-emergencycontact',
    templateUrl: './emergencycontact.component.html',
    styleUrls: ['./emergencycontact.component.css']
})
export class EmergencycontactComponent implements OnInit {
    public relations: any;
    public dependantrelations: any;
    pattern: any = /^\d{11}$/i;

    @Input('employeeId') id: number;

    constructor(public employeeService: EmployeeService, public SetupServiceobj: SetupService,
        public router: Router, public route: ActivatedRoute) {

    }

    async ngOnInit() {

        this.employeeService.GetRelationsByUserId(this.id).subscribe(resp => this.relations = resp);

        this.dependantrelations = await this.SetupServiceobj.getDependantsRelations();
        console.log(this.dependantrelations);

    }

    addRelation(value) {
        value.data.userId = this.id;

        this.employeeService.addUserRelation(value.data).subscribe(resp => console.log(resp));
    }

    updateRelation(value) {

        let relation = this.relations.find(r => r.relationId == value.key);

        relation = { ...relation, ...value.data };

        this.employeeService.updateUserRelation(relation).subscribe(resp => console.log(resp));
    }

}
