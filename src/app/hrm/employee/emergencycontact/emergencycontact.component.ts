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
    pattern: any = /^\d{4}-\d{7}$/i;

    @Input('employeeId') id: number;

    constructor(public employeeService: EmployeeService, private SetupServiceobj: SetupService,
        public router: Router, private route: ActivatedRoute) {

    }

    async ngOnInit() {

        this.employeeService.GetRelationsByUserId(this.id).subscribe(resp => this.relations = resp);

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
