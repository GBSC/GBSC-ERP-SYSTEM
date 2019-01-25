import { Component, OnInit, Input } from '@angular/core';
import { PayrollSetupService, EmployeeService, SetupService, AuthService } from '../../../../core';
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
    public allowanceValue: any;
    public payrollMaster: any;
    public masterDetail: any[] = [];
    public users: any;
    public frequency: any;
    public masterdetailupdating: any;
    public masterPayrollDetail: any;
    public payrollDetail: MasterPayrollDetail[];
    public salaryCalculationtype: any;
    public benefit: any;
    public banksPayroll: any;
    public payrollType: any;
    public MasterPayrollForm: any;
    public allowance: any;
    public MasterDetailForm: any;
    public userBank: any = {};
    public masterpayroll: any;
    public group: any;
    public getAllowances: any = [];
    public employee: any;
    public currency: any;
    public calculationttypes : any[] = [];
    @Input('masterPayrollId') id: number;

    public datasource: any[] = [];

    constructor(public fb: FormBuilder, public toastr: ToastrService, public router: Router, public activatedRoute: ActivatedRoute,
        public payrollsetupservice: PayrollSetupService, public empservice: EmployeeService, public setupService: SetupService,
        public Auth : AuthService) {

            this.MasterPayrollForm = this.fb.group({
                UserId: [''],
                BankTransferCode: [''],
                CurrencyId: [''],
                BankId: ['']
            });

        }

    async ngOnInit() {

        this.payrollDetail = [];

        console.log(this.Auth.getUserCompanyId());
        this.payrollsetupservice.getSalaryCalculationTypesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
            this.calculationttypes = res;
        });

        this.masterPayroll = await this.payrollsetupservice.getMasterPayrolls();

        this.masterPayrollDetail = await this.payrollsetupservice.getMasterPayrollDetails();

        this.users = await this.empservice.GetAllEmployees();

        this.salaryCalculationtype = await this.payrollsetupservice.getSalaryCalculationTypes();

        this.currency = await this.payrollsetupservice.getCurrencies();

        this.allowance = await this.payrollsetupservice.getAllowanceDeductions();

        this.benefit = await this.payrollsetupservice.getBenefits();

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
    public SalaryCalculationTypesById: any;
    getAllowance(id) {
        this.empservice.GetEmployee(id).subscribe(resp => {
            this.employee = resp;
            if (this.employee) {
                this.payrollsetupservice.GetSalaryStructures().subscribe(sc => {
                    this.getAllowances = sc.find(t => t.groupId == this.employee.groupId);
                    console.log(this.getAllowances);
                    console.log(this.getAllowances.salaryStructureDetails);
                    this.getAllowances.salaryStructureDetails.forEach(element => {
                        console.log(element.salaryCalculationTypeId);
                      
                        this.calculationttypes.filter(res =>{
                            (res.name == '% of Gross')
                            console.log(res);
                            
                            this.allowanceValue = this.getAllowances.minimumSalary * Number.parseFloat(element.value) / 100;
                            console.log(this.allowanceValue);
                        })
                        console.log(this.calculationttypes); 

                            let a: any = {
                                salaryCalculationTypeId: element.salaryCalculationTypeId,
                                benefitId: element.benefitId,
                                allowanceDeductionId: element.allowanceDeductionId,
                                value: this.allowanceValue,
                                formula: element.formula
                            };

                            console.log(a);
                            console.log(element);

                            this.datasource.push(a);

                            console.log(this.datasource);
                        }); 

                    });

             
            }
            // this.calcallowances = 0;
            // let c =  this.datasource.filter(w => w.value);
            // for (let d of c) {
            //     this.calcallowances += (+d.value.DebitAmount);
            //     console.log(this.calcallowances);
            // }
            // console.log(this.calcallowances);
        });

    }
 public calcallowances : any;

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