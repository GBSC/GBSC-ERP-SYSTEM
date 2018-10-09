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
    public Userbank: any;
    @Input('id') id: number;

    @Output('setBankFormValue') setBankFormValue = new EventEmitter();

    public EmpbankForm: FormGroup;
    // public EmpBankForm: FormGroup;
    constructor(public employee: EmployeeService, public fb: FormBuilder, public SetupServiceobj: SetupService,
        public router: Router, private route: ActivatedRoute)
     {
        this.EmpbankForm = this.fb.group({
            AccountTitle: [''],
            AccountNumber: [''],
            BankTitle: [''],
            BankCode: [''],
            BankBranch: ['']
        });
      }

    async ngOnInit() {

        this.Userbank = await this.employee.GetBankByUserId(); 

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

    }
    getBankFormValue() {
        this.setBankFormValue.emit(this.EmpbankForm.value);
    }

    async adduserbank() {
        let usrbnk = await this.employee.addBank();
        console.log(usrbnk);

    }

    patchValues(employeeBank : any) {

        this.EmpbankForm.patchValue({

            AccountNumber:  employeeBank.accountNumber, 
            AccountName:  employeeBank.accountName, 
            BankTitle:  employeeBank.bankTitle, 
            BankCode:  employeeBank.bankCode, 
            Branch:  employeeBank.branch
        });
      }
}
