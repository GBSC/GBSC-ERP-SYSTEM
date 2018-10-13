import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService, SetupService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../../core/Models/HRM/employee';

@Component({
    selector: 'app-employeebank',
    templateUrl: './bank.component.html',
    styleUrls: ['./bank.component.css']
})
export class EmployeeBankComponent implements OnInit {

    public Employee: any;
<<<<<<< HEAD
    @Input('id') id: number;

    @Output('setBankFormValue') setBankFormValue = new EventEmitter();

    public EmpbankForm: FormGroup;
    // public EmpBankForm: FormGroup;
    constructor(public employee: EmployeeService, public fb: FormBuilder, public SetupServiceobj: SetupService,
        public router: Router, private route: ActivatedRoute) {
        this.EmpbankForm = this.fb.group({
            AccountTitle: [''],
            AccountNumber: [''],
            BankTitle: [''],
            BankCode: [''],
            BankBranch: ['']
        });
    }
=======
    public banks: any;
>>>>>>> master

    @Input('employeeId') id: number;

<<<<<<< HEAD
        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            this.employee.GetEmployee(this.id).subscribe(resp => {

                this.Employee = resp;

                this.patchValues(resp);

            });
        });
    }

    async update(value) {
        console.log(value);
        await this.employee.updateuserBank(value);
=======
    constructor(public employeeService: EmployeeService) {
    }

    async ngOnInit() {

        this.employeeService.getBanks(this.id).subscribe(resp => this.banks = resp);


    }

    addBank(value) {
        value.data.userId = this.id;
>>>>>>> master

        this.employeeService.addBank(value.data).subscribe(resp => console.log(resp));
    }

    updateBank(value) {

        let bank = this.banks.find(x => x.bankId == value.key);

<<<<<<< HEAD
    patchValues(employeeBank: any) {
=======
        bank = { ...bank, ...value.data };

        this.employeeService.updateBank(bank).subscribe(resp => console.log(resp));
    }
>>>>>>> master


<<<<<<< HEAD
            AccountNumber: employeeBank.accountNumber,
            AccountTitle: employeeBank.accountTitle,
            BankTitle: employeeBank.bankTitle,
            BankCode: employeeBank.bankCode,
            BankBranch: employeeBank.bankBranch,
        });
    }
=======
>>>>>>> master
}
