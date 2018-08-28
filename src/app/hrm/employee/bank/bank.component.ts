import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SetupService } from '../../hrmsSetup/services/setup.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'app-bank',
    templateUrl: './bank.component.html',
    styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
    @Output('setBankFormValue') setBankFormValue = new EventEmitter();

    public EmpbankForm: FormGroup;
    // public EmpBankForm: FormGroup;
    constructor(public employee: EmployeeService, public fb: FormBuilder, private SetupServiceobj: SetupService) { }

    async ngOnInit() {


        this.EmpbankForm = this.fb.group({
            AccountTitle: ['', Validators.required],
            AccountNumber: ['', Validators.required],
            BankName: ['', Validators.required],
            BankCode: ['', Validators.required],
            BankBranch: ['', Validators.required]
        });


        await this.SetupServiceobj.getAllBanks();
        let bnk = this.SetupServiceobj.bank;
    }

    getBankFormValue() {
        this.setBankFormValue.emit(this.EmpbankForm.value);
    }

    async adduserbank() {
        let usrbnk = await this.employee.adduserBank();
        console.log(usrbnk);

    }

}
