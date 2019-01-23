import { Component, OnInit, Input } from '@angular/core';
import { PayrollSetupService, EmployeeService, SetupService } from '../../../../core';
import { FormBuilder, Validators } from '@angular/forms';
import { MasterPayrollDetail } from '../../../../core/Models/HRM/masterPayrollDetail';
import { MasterPayroll } from '../../../../core/Models/HRM/masterPayroll';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-masterpayroll',
    templateUrl: './masterpayroll.component.html',
    styleUrls: ['./masterpayroll.component.scss']
})
export class MasterpayrollComponent implements OnInit {

    public masterPayroll: any;
    public payrollMaster: any;
    public masterDetail: any[] = [];
    public users: any;
    public frequency: any;
    public masterdetailupdating: any;
    public masterPayrollDetail: any;
    public payrollDetail: MasterPayrollDetail[];
    public banksPayroll: any;
    public payrollType: any;
    public MasterPayrollForm: any;
    public allowance: any;
    public MasterDetailForm: any;
    public userBank: any ={};
    public masterpayroll: any;
    public group: any;
    public getAllowances: any;
    public employee: any;
    public currency: any;
    @Input('masterPayrollId') id: number;

    constructor(public fb: FormBuilder, public toastr: ToastrService, public router: Router, public activatedRoute: ActivatedRoute,
        public payrollsetupservice: PayrollSetupService, public empservice: EmployeeService, public setupService: SetupService) { }

    async ngOnInit() {

        this.payrollDetail = [];

        this.MasterPayrollForm = this.fb.group({
            UserId: [''],
            BankTransferCode: [''],
            CurrencyId: [''],
            BankId: ['']
        });

        this.masterPayroll = await this.payrollsetupservice.getMasterPayrolls();

        this.masterPayrollDetail = await this.payrollsetupservice.getMasterPayrollDetails();

        this.users = await this.empservice.GetAllEmployees();

        this.currency = await this.payrollsetupservice.getCurrencies();

        this.allowance = await this.payrollsetupservice.getAllowances();

        this.banksPayroll = await this.payrollsetupservice.getPayrollBanks();

        this.frequency = await this.payrollsetupservice.getFrequencies();

        this.payrollType = await this.payrollsetupservice.getPayrollTypes();

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
        if (this.isUpdate() === true) {
            this.payrollsetupservice.getMasterPayroll(this.id).subscribe(resp => {
                this.masterpayroll = resp;
                let a = this.masterpayroll.masterPayrollDetails;
                this.masterDetail = a.filter(b => {
                    delete b.masterPayrollDetailsId;
                    delete b.masterPayrollId;
                    console.log(b);
                    return b;
                    
                });
                this.patchValues(this.masterpayroll);
            });
        }
    }


     addMasterPayrolldetail(value) {
        let data = value.data;
        this.payrollDetail.push(data);
    }

    async submitForm(value) {
        let masterPayroll = new MasterPayroll();
        masterPayroll = { ...masterPayroll, ...value };
        masterPayroll.MasterPayrollDetails = this.payrollDetail;
        await this.payrollsetupservice.addMasterPayroll(masterPayroll);
        this.toastr.success("Successfully! Master Payroll Add");
        this.router.navigate(['/hrm/payroll/payrollsetup/masterpayrolldetail']);

    }

    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    getAllowance(id){ 
        console.log(id);
        
         this.empservice.GetEmployee(id).subscribe(resp=>{
            this.employee = resp;  
            if(this.employee){
                this.payrollsetupservice.GetSalaryStructures().subscribe(sc=>{
                    console.log(sc);

                this.getAllowances = sc.find(t=>  t.groupId == this.employee.groupId )

                console.log(this.getAllowances);

                });
            }
            console.log(this.employee); 
        });
 
    }

     updateMasterpayrollDetail(value) {
        console.log(value);
    }

     update(value) { 
        value.masterPayrollId = this.id;
        value.MasterPayrollDetails = this.masterDetail; 
        this.payrollsetupservice.updateMasterPayroll(value).subscribe(resp => {
            this.toastr.success("Master Payroll Updated");
            this.router.navigate(['/hrm/payroll/masterpayrolldetail']);

        });
    }

    patchValues(masterpayroll: any) {

        this.MasterPayrollForm.patchValue({

            UserId: masterpayroll.userId,
            BankTransferCode: masterpayroll.bankTransferCode,
            CurrencyId: masterpayroll.currencyId,
            BankId: masterpayroll.bankId
        })

    }


}