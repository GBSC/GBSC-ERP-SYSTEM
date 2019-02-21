import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService, SetupService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../../core/Models/HRM/employee';
import { ApiService } from '../../../core/Services/api.service'

@Component({
    selector: 'app-employeebank',
    templateUrl: './bank.component.html',
    styleUrls: ['./bank.component.css']
})
export class EmployeeBankComponent implements OnInit {

    public Employee: any;
    public banks: any;

    @Input('employeeId') id: number;

    constructor(public employeeService: EmployeeService , public ApiServiceobj : ApiService) {
    }

     ngOnInit() {
         
        this.employeeService.getBanks(this.id).subscribe(resp => this.banks = resp);

    }

    addBank(value) {
        value.data.userId = this.id;

        this.employeeService.addBank(value.data).subscribe(resp => console.log(resp));
    }

    updateBank(value) {

        let bank = this.banks.find(x => x.bankId == value.key);

        bank = { ...bank, ...value.data };

        this.employeeService.updateBank(bank).subscribe(resp => console.log(resp));
    }


}
