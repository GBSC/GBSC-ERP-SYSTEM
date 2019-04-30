import { Component, OnInit, Input } from '@angular/core';
import { PayrollSetupService, EmployeeService, SetupService, AuthService, UserService } from '../../../../core';
import { FormBuilder, Validators } from '@angular/forms';
import { MasterPayrollDetail } from '../../../../core/Models/HRM/masterPayrollDetail';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-masterpayroll',
    templateUrl: './masterpayroll.component.html',
    styleUrls: ['./masterpayroll.component.scss']
})
export class MasterpayrollComponent implements OnInit {

    public masterPayroll: any;
    public allowances: any;
    public masterDetail: any[] = [];
    public users: any;
    public payrollDetail: MasterPayrollDetail[];
    public salaryCalculationtype: any;
    public benefit: any;
    public MasterPayrollForm: any;
    public allowance: any;
    public allowance2: any[] = [];

    public deduction: any;
    public deduction2: any[] = [];
    public calcallowances: any;
    public caldeduction: any;
    public calfixAmmount: any;
    public totalAllowanceAndDeduction: any;

    public getcal: any;
    public getcal2: any[] = [];
    public calculationvalue: any;
    public getAllos: any;
    public fixedType: any;
    public fixedType2: any = [];
    public countFixedType: any;

    public masterpayroll: any;
    public getAllowances: any = [];
    public employee: any;
    public payrollYears: any;
    submitted = false;

    @Input('masterPayrollId') id: number;

    public datasource: any = [];

    constructor(public fb: FormBuilder, public authService: AuthService, public userService: UserService, public toastr: ToastrService, public router: Router, public activatedRoute: ActivatedRoute,
        public payrollsetupservice: PayrollSetupService, public empservice: EmployeeService, public setupService: SetupService,
        public Auth: AuthService) {

        this.MasterPayrollForm = this.fb.group({
            UserId: ['', Validators.required],
            Salary: [''],
            PayrollYearId: [''],
            masterPayrollDetails: this.fb.array([])

        });

    }

    async ngOnInit() {

        this.payrollDetail = [];

        this.users = await this.empservice.GetAllEmployees();

        this.payrollsetupservice.getPayrollYears().subscribe((res: any) => {
            this.payrollYears = res;
            this.payrollYears = this.payrollYears.filter(py => py.isCurrent == true);
            console.log(this.payrollYears);
        });

        this.payrollsetupservice.getMasterPayrolls().subscribe(rsp => {
            this.masterPayroll = rsp
        });

        this.salaryCalculationtype = await this.payrollsetupservice.getSalaryCalculationTypes();

        this.payrollsetupservice.getAllowanceDeductions().subscribe(rep => {
            this.allowances = rep
        });

        this.benefit = await this.payrollsetupservice.getBenefits();

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

    submitForm(value, salary) {
        this.submitted = true;
        if (this.MasterPayrollForm.invalid) {
            this.toastr.error("Fill All Required Fields");
        }
        else {
            this.MasterPayrollForm.value.Salary = salary;
            this.MasterPayrollForm.value.masterPayrollDetails = this.getAllowances.salaryStructureDetails

            if (this.getAllowances.salaryStructureDetails.length) {

                this.payrollsetupservice.addMasterPayroll(value).subscribe(resp => {
                    console.log(resp);
                    this.payrollsetupservice.getMasterPayrolls().subscribe(r => {
                        this.masterPayroll = r
                    });
                });
                this.toastr.success("Successfully! Master Payroll Add");
                this.router.navigate(['/hrm/payroll/masterpayrolldetail']);

            }
            else {
                this.toastr.error("Empty Data")
            }

        }
    }

    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }


    getAllowance(id) {
        this.empservice.GetEmployee(id).subscribe(resp => {
            this.employee = resp;
            if (this.employee) {
                this.payrollsetupservice.GetSalaryStructures().subscribe(sc => {
                    this.getAllowances = sc.find(t => t.groupId == this.employee.groupId);
                    console.log(this.getAllowances);
                    this.getAllos = this.getAllowances;
                    this.getcal = this.getAllowances.salaryStructureDetails.filter(e => e.salaryCalculationType === '% of Gross')

                    if (this.getcal != undefined && this.getcal != []) {
                        this.getcal2.push(...this.getcal)
                    }

                    this.getcal2.forEach(element => {
                        this.calculationvalue = this.getAllowances.minimumSalary * Number.parseFloat(element.value) / 100;


                        let a: any = {
                            companyId: this.authService.getUserCompanyId(),
                            salaryStructureDetailId: element.salaryStructureDetailId,
                            salaryStructureId: element.salaryStructureId,
                            salaryCalculationType: element.salaryCalculationType,
                            benefitId: element.benefitId,
                            allowanceDeductionId: element.allowanceDeductionId,
                            value: this.calculationvalue
                        };
                        this.datasource.push(a);



                    });

                    for (let x of this.datasource) {
                        let a = this.getAllowances.salaryStructureDetails.find((b, i) => {
                            if (b.salaryStructureDetailId === x.salaryStructureDetailId) {
                                this.getAllowances.salaryStructureDetails[i] = x
                            }
                        })
                    }

                    this.fixedType2 = [];
                    this.fixedType = this.getAllowances.salaryStructureDetails.find(t => t.salaryCalculationType === 'Fixed Value')

                    if (this.fixedType != undefined) {
                        this.fixedType2.push(this.fixedType)
                    }

                    this.getcal2 = [];
                    this.datasource = [];

                    this.allowance2 = [];
                    this.allowances.filter(a => {
                        this.allowance = this.getAllowances.salaryStructureDetails.find(e => ((e.allowanceDeductionId === a.allowanceDeductionId) && (a.type === 'allowance' || a.type === 'Allowance')))
                        if (this.allowance != undefined) {
                            this.allowance2.push(this.allowance);

                        }
                    });

                    this.calcallowances = 0;
                    for (let d of this.allowance2) {
                        this.calcallowances += (+d.value);
                    }

                    this.deduction2 = [];

                    this.allowances.filter(a => {
                        this.deduction = this.getAllowances.salaryStructureDetails.find(e => ((e.allowanceDeductionId === a.allowanceDeductionId) && (a.type === 'deduction' || a.type === 'Deduction')))
                        if (this.deduction != undefined) {
                            this.deduction2.push(this.deduction);
                        }
                    });

                    this.caldeduction = 0;
                    for (let d of this.deduction2) {
                        this.caldeduction += (+d.value);
                    }

                    this.totalAllowanceAndDeduction = this.calcallowances - this.caldeduction;

                    this.countFixedType = 0;
                    for (let d of this.fixedType2) {
                        this.countFixedType += (+d.value);
                    }

                    this.totalAllowanceAndDeduction = this.totalAllowanceAndDeduction - this.countFixedType;
                });


            }

        });

    }

    updateMasterpayrollDetail(value) {
        console.log(value);
    }

    update(value) {
        if (value != null || value != undefined || value != "") {
            value.masterPayrollId = this.id;
            value.MasterPayrollDetails = this.masterDetail;
            this.payrollsetupservice.updateMasterPayroll(value).subscribe(resp => {
                this.toastr.success("Master Payroll Updated");
                this.router.navigate(['/hrm/payroll/masterpayrolldetail']);

            });
        }
        else {
            alert("Error")
        }
    }

    get m() { return this.MasterPayrollForm.controls; }


    patchValues(masterpayroll: any) {

        this.MasterPayrollForm.patchValue({

            UserId: masterpayroll.userId
        })

    }

    updateSalary(value, id) {
        this.empservice.GetEmployee(id).subscribe(resp => {
            this.employee = resp;
            if (this.employee) {
                this.payrollsetupservice.GetSalaryStructures().subscribe(sc => {
                    this.getAllowances = sc.find(t => t.groupId == this.employee.groupId);

                    this.getAllos = this.getAllowances;
                    this.getcal = this.getAllowances.salaryStructureDetails.filter(e => e.salaryCalculationType === '% of Gross')
                    if (this.getcal != undefined && this.getcal != []) {
                        this.getcal2.push(...this.getcal)
                    }

                    this.getcal2.forEach(element => {
                        this.calculationvalue = value * Number.parseFloat(element.value) / 100;

                        let a: any = {
                            salaryStructureDetailId: element.salaryStructureDetailId,
                            salaryStructureId: element.salaryStructureId,
                            salaryCalculationType: element.salaryCalculationType,
                            benefitId: element.benefitId,
                            allowanceDeductionId: element.allowanceDeductionId,
                            value: this.calculationvalue
                        };
                        this.datasource.push(a);



                    });

                    for (let x of this.datasource) {
                        let a = this.getAllowances.salaryStructureDetails.find((b, i) => {
                            if (b.salaryStructureDetailId === x.salaryStructureDetailId) {
                                this.getAllowances.salaryStructureDetails[i] = x
                            }
                        })
                    }

                    this.fixedType2 = [];
                    this.fixedType = this.getAllowances.salaryStructureDetails.find(t => t.salaryCalculationType === 'Fixed Value')
                    if (this.fixedType != undefined) {
                        this.fixedType2.push(this.fixedType)
                    }


                    for (let x of this.datasource) {
                        let a = this.getAllowances.salaryStructureDetails.find((b, i) => {
                            if (b.salaryStructureDetailId === x.salaryStructureDetailId) {
                                this.getAllowances.salaryStructureDetails[i] = x
                            }
                        })
                    }

                    this.getcal2 = [];
                    this.datasource = [];

                    this.allowance2 = [];
                    this.allowances.filter(a => {
                        this.allowance = this.getAllowances.salaryStructureDetails.find(e => ((e.allowanceDeductionId === a.allowanceDeductionId) && (a.type === 'allowance' || a.type === 'Allowance')))
                        if (this.allowance != undefined) {
                            console.log(this.allowance);

                            this.allowance2.push(this.allowance);
                        }
                    });
                    console.log(this.allowance2);
                    this.calcallowances = 0;
                    for (let d of this.allowance2) {
                        this.calcallowances += (+d.value);
                    }

                    console.log(this.calcallowances);

                    this.deduction2 = [];

                    this.allowances.filter(a => {
                        this.deduction = this.getAllowances.salaryStructureDetails.find(e => ((e.allowanceDeductionId === a.allowanceDeductionId) && (a.type === 'deduction' || a.type === 'Deduction')))
                        if (this.deduction != undefined) {
                            this.deduction2.push(this.deduction);
                        }
                    });
                    console.log(this.deduction2);



                    console.log(this.deduction2);
                    this.caldeduction = 0;
                    for (let d of this.deduction2) {
                        this.caldeduction += (+d.value);
                    }

                    console.log(this.caldeduction);


                    this.calfixAmmount = 0;
                    this.totalAllowanceAndDeduction = this.calcallowances - this.caldeduction;
                    console.log(this.fixedType2)
                    this.countFixedType = 0;
                    for (let d of this.fixedType2) {
                        this.countFixedType += (+d.value);
                    }
                    console.log(this.countFixedType);
                    console.log(this.totalAllowanceAndDeduction);
                    this.totalAllowanceAndDeduction = this.totalAllowanceAndDeduction - this.countFixedType;
                    console.log(this.totalAllowanceAndDeduction);
                });


            }

        });

    }


}