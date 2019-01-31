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
    public allowances: any;
    public allowanceValue: any;
    public masterDetail: any[] = [];
    public users: any;  
    public payrollDetail: MasterPayrollDetail[];
    public salaryCalculationtype: any;
    public benefit: any;  
    public MasterPayrollForm: any;
    public allowance: any;
    public calcallowances: any;  
    public masterpayroll: any; 
    public getAllowances: any = [];
    public employee: any; 
    public deduction: any; 
    public calculationttypes: any[] = [];

    @Input('masterPayrollId') id: number;

    public datasource: any= [];

    constructor(public fb: FormBuilder, public toastr: ToastrService, public router: Router, public activatedRoute: ActivatedRoute,
        public payrollsetupservice: PayrollSetupService, public empservice: EmployeeService, public setupService: SetupService,
        public Auth: AuthService) {

        this.MasterPayrollForm = this.fb.group({
            UserId: [''] 

        });

    }

    async ngOnInit() {

        this.payrollDetail = [];

        console.log(this.Auth.getUserCompanyId());
        this.payrollsetupservice.getSalaryCalculationTypesByCompany(this.Auth.getUserCompanyId()).subscribe((res: any) => {
            this.calculationttypes = res;
        });

        this.masterPayroll = await this.payrollsetupservice.getMasterPayrolls();

        this.users = await this.empservice.GetAllEmployees();

        this.salaryCalculationtype = await this.payrollsetupservice.getSalaryCalculationTypes();

        this.allowances = await this.payrollsetupservice.getAllowanceDeductions();

        //  this.allowance = this.allowances.filter(s => s.type == 'Allowance');
        //  console.log(this.allowance);

        // this.deduction = this.allowances.filter(s => s.type == 'Deduction');
        // console.log(this.deduction);
        
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
        console.log(data);

    }

    async submitForm(value) {

         let masterPayroll = new MasterPayroll();
         masterPayroll = { ...masterPayroll, ...value};
         masterPayroll.MasterPayrollDetails = this.payrollDetail && this.datasource;   
        await this.payrollsetupservice.addMasterPayroll(masterPayroll);        
        this.toastr.success("Successfully! Master Payroll Add");
        this.router.navigate(['/hrm/payroll/masterpayrolldetail']);
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
                    this.getAllowances.salaryStructureDetails.forEach(element => {
                        this.calculationttypes.filter(res => {
                            (res.name == '% of Gross')
                            this.allowanceValue = this.getAllowances.minimumSalary * Number.parseFloat(element.value) / 100;
                        }) 

                        let a: any = {
                            salaryCalculationTypeId: element.salaryCalculationTypeId,
                            benefitId: element.benefitId,
                            allowanceDeductionId: element.allowanceDeductionId,
                            value: this.allowanceValue,
                            formula: element.formula
                        }; 
                        this.datasource.push(a);
                    console.log(this.datasource);

                    
                    this.calcallowances = 0;
                    for (let d of this.datasource) {
                        this.calcallowances += (+d.value);
                    }
                });
                console.log(this.datasource);
                console.log(this.allowances);
        //         this.datasource.filter(a => {
        //    this.allowances.find(e =>  (e.allowanceDeductionId ===  a.allowanceDeductionId && e.type === 'Allowance' ))
               
        //           this.allowance.push(a);
        //            console.log(a);
        //           console.log(this.allowance);
        //      });
            this.allowances.filter(a => {
            this.datasource.filter(d =>{
                (d.allowanceDeductionId ===  a.allowanceDeductionId && a.type === 'Allowance')
                
                this.allowance = d; 
            })
                console.log(this.allowance);
               
                    //  this.a2.push(this.allowance);
                //     console.log(a);
                //    console.log(this.a2);
              });

            });
            
    
          
        
    }
        
    });

    }
public a2 : any ;
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

            UserId: masterpayroll.userId
        })

    }


}