import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService, SetupService } from '../../../core';

@Component({
    selector: 'app-employeebank',
    templateUrl: './bank.component.html',
    styleUrls: ['./bank.component.css']
})
export class EmployeeBankComponent implements OnInit {
    @Output('setBankFormValue') setBankFormValue = new EventEmitter();

    public EmpbankForm: FormGroup;
    // public EmpBankForm: FormGroup;
    constructor(public employee: EmployeeService, public fb: FormBuilder, public SetupServiceobj: SetupService) { }

    async ngOnInit() {

    }

    getBankFormValue() {
        this.setBankFormValue.emit(this.EmpbankForm.value);
    }

    async adduserbank() {
        let usrbnk = await this.employee.addBank();
        console.log(usrbnk);

    }

}
