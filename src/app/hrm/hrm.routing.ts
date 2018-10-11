import { ModuleWithProviders, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeHomeComponent } from './employee/home/home.component';
import { BasicinformationComponent } from './employee/basicinformation/basicinformation.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { EmployeedetailComponent } from './employee/employeedetail/employeedetail.component';
import { LeavepurposeComponent } from './leave/leavesetup/leavepurpose/leavepurpose.component';
import { LeaveyearsetupComponent } from './leave/leavesetup/leaveyearsetup/leaveyearsetup.component';
import { LeavepolicyComponent } from './leave/leavesetup/leavepolicy/leavepolicy.component';
import { LeavetypeComponent } from './leave/leavesetup/leavetype/leavetype.component';
import { LeavedaytypeComponent } from './leave/leavesetup/leavedaytype/leavedaytype.component';
import { LeaveeligibilityComponent } from './leave/leavesetup/leaveeligibility/leaveeligibility.component';
import { LeavesubtypeComponent } from './leave/leavesetup/leavesubtype/leavesubtype.component';
import { DecimalroundingmatrixComponent } from './leave/leavesetup/decimalroundingmatrix/decimalroundingmatrix.component';
import { ProratematrixComponent } from './leave/leavesetup/proratematrix/proratematrix.component';
import { EmployeeleaveopeningComponent } from './leave/leaveadmin/employeeleaveopening/employeeleaveopening.component';
import { UploadleaverequestComponent } from './leave/leaveadmin/uploadleaverequest/uploadleaverequest.component';
import { CountryComponent } from './hrmsSetup/country/country.component';
import { EmployeeTypes } from './hrmsSetup/employeetype/employeetype.component';
import { FunctionComponent } from './hrmsSetup/function/function.component';
import { GradesComponent } from './hrmsSetup/grade/grade.component';
import { QualificationComponent } from './hrmsSetup/qualification/qualification.component';
import { EmployeeStatuscomponent } from './hrmsSetup/employeestatus/employeestatus.component';
import { ReligionComponent } from './hrmsSetup/religion/religion.component';
import { ShiftComponent } from './attendance/attendancesetup/shift/shift.component';
//import { BankComponent } from './hrmsSetup/bank/bank.component';
import { DegreeComponent } from './hrmsSetup/degree/degree.component';
import { AccountTypeComponent } from './hrmsSetup/accounttype/accounttype.component';
import { ManagementLevelsComponent } from './hrmsSetup/managementlevels/managementlevels.component';
import { DesignationComponent } from './hrmsSetup/designations/designations.component';
import { GroupComponent } from './hrmsSetup/groups/groups.component';
import { GazettedHolidaysComponent } from './hrmsSetup/gazettedholidays/gazettedholidays.component';
import { CostCenterComponent } from './hrmsSetup/costcenters/costcenters.component';
import { LanguageComponent } from './hrmsSetup/languages/languages.component';
import { SkillLevelsComponent } from './hrmsSetup/skilllevels/skilllevels.component';
import { RelationComponent } from './hrmsSetup/relations/relations.component';
import { CityComponent } from './hrmsSetup/cities/cities.component';
import { UniversityComponent } from './hrmsSetup/university/university.component';
import { RootComponent } from './root/root.component';
import { HrmSetupHomeComponent } from './hrmsSetup/home/home.component';
import { AssignrosterComponent } from './attendance/attendancesetup/assignroster/assignroster.component';
import { AttendanceflagComponent } from './attendance/attendancesetup/attendanceflag/attendanceflag.component';
import { AttendancerequestapproverComponent } from './attendance/attendancesetup/attendancerequestapprover/attendancerequestapprover.component';
import { AttendancerequesttypeComponent } from './attendance/attendancesetup/attendancerequesttype/attendancerequesttype.component';
import { FlagcategoryComponent } from './attendance/attendancesetup/flagcategory/flagcategory.component';
import { FlageffecttypeComponent } from './attendance/attendancesetup/flageffecttype/flageffecttype.component';
import { FlagtypeComponent } from './attendance/attendancesetup/flagtype/flagtype.component';
import { FlagvalueComponent } from './attendance/attendancesetup/flagvalue/flagvalue.component';
import { RosterComponent } from './attendance/attendancesetup/roster/roster.component';
import { BranchComponent } from '../hrm/branch/branch.component';
import { RolesandprivilegesComponent } from '../hrm/rolesandprivileges/rolesandprivileges.component';
import { CompanyComponent } from '../hrm/company/company.component';
import { DepartmentComponent } from '../hrm/department/department.component';
import { FeatureComponent } from '../hrm/feature/feature.component';
import { ModuleComponent } from '../hrm/module/module.component';
import { RoleComponent } from '../hrm/role/role.component';
import { EmployeeBankComponent } from './employee/bank/bank.component';
import { LeavetypebalanceComponent } from './leave/leavesetup/leavetypebalance/leavetypebalance.component';
import { LeaverequestComponent } from './leave/leaverequest/leaverequest.component';
import { AttendanceFlagExemptionComponent } from './attendance/attendanceadmin/attendance-flag-exemption/attendance-flag-exemption.component';
import { AttendanceruleComponent } from './attendance/attendanceadmin/attendancerule/attendancerule.component';
import { AttendancerequestComponent } from './attendance/attendancerequest/attendancerequest.component';
import { EmployeeQualificationComponent } from './employee/qualification/qualification.component';
import { BankComponent } from './hrmsSetup/bank/bank.component';
import { EmpleavepolicyComponent } from './leave/leaveadmin/employeeleavepolicy/empleavepolicy.component';
import { LeaveapproverComponent } from './leave/leavesetup/leaveapprover/leaveapprover.component';
import { OvertimeflagComponent } from './attendance/overtime/overtimeflag/overtimeflag.component';
import { OvertimetypeComponent } from './attendance/overtime/overtimetype/overtimetype.component';
import { LeaveclosingComponent } from './leave/leaveclosing/leaveclosing.component';
import { LeaveapprovalComponent } from './leave/leaveapproval/leaveapproval.component';
import { RostercopyComponent } from './attendance/rostercopy/rostercopy.component';
import { RostermappingComponent } from './attendance/rostermapping/rostermapping.component';
import { OfficialVisitEntryComponent } from './attendance/official-visit-entry/official-visit-entry.component';
import { OvertimeEntitlementComponent } from './attendance/overtime-entitlement/overtime-entitlement.component';
import { EmployeeOvertimeEntitlementComponent } from './attendance/employee-overtime-entitlement/employee-overtime-entitlement.component';
import { AllowanceComponent } from './payroll/payrollsetup/allowance/allowance.component';
import { AllowancearrearComponent } from './payroll/payrollsetup/allowancearrear/allowancearrear.component';
import { AllowanceDeductionComponent } from './payroll/payrollsetup/allowance-deduction/allowance-deduction.component';
import { AllowancecalculationtypeComponent } from './payroll/payrollsetup/allowancecalculationtype/allowancecalculationtype.component';
import { AllowancerateComponent } from './payroll/payrollsetup/allowancerate/allowancerate.component';
import { BankAdviceTemplateComponent } from './payroll/payrollsetup/bank-advice-template/bank-advice-template.component';
import { BanksComponent } from './payroll/payrollsetup/banks/banks.component';
import { BenefitComponent } from './payroll/payrollsetup/benefit/benefit.component';
import { ChequeTemplateComponent } from './payroll/payrollsetup/cheque-template/cheque-template.component';
import { CompensationTransactionComponent } from './payroll/payrollsetup/compensation-transaction/compensation-transaction.component';
import { CurrencyComponent } from './payroll/payrollsetup/currency/currency.component';
import { FrequencyComponent } from './payroll/payrollsetup/frequency/frequency.component';
import { FundsetupComponent } from './payroll/payrollsetup/fundsetup/fundsetup.component';
import { GratuitySlabGratuityComponent } from './payroll/payrollsetup/gratuity-slab-gratuity/gratuity-slab-gratuity.component';
import { GratuityslabComponent } from './payroll/payrollsetup/gratuityslab/gratuityslab.component';
import { GratuitytypeComponent } from './payroll/payrollsetup/gratuitytype/gratuitytype.component';
import { LeavingreasonComponent } from './payroll/payrollsetup/leavingreason/leavingreason.component';
import { MasterpayrollComponent } from './payroll/payrollsetup/masterpayroll/masterpayroll.component';
import { MasterPayrollDetailComponent } from './payroll/payrollsetup/master-payroll-detail/master-payroll-detail.component';
import { PayrollComponent } from './payroll/payrollsetup/payroll/payroll.component';
import { PayrollbankComponent } from './payroll/payrollsetup/payrollbank/payrollbank.component';
import { PayrolltypeComponent } from './payroll/payrollsetup/payrolltype/payrolltype.component';
import { PayrollyearComponent } from './payroll/payrollsetup/payrollyear/payrollyear.component';
import { PfPaymentComponent } from './payroll/payrollsetup/pf-payment/pf-payment.component';
import { SalaryCalculationTypeComponent } from './payroll/payrollsetup/salary-calculation-type/salary-calculation-type.component';
import { SalarystructureComponent } from './payroll/payrollsetup/salarystructure/salarystructure.component';
import { SalarystructuredetailComponent } from './payroll/payrollsetup/salarystructuredetail/salarystructuredetail.component';
import { UsersalaryComponent } from './payroll/payrollsetup/usersalary/usersalary.component';
import { LoantypeComponent } from './payroll/loansetup/loantype/loantype.component';
import { UserloanComponent } from './payroll/loansetup/userloan/userloan.component';
import { IncomeTaxRuleComponent } from './payroll/taxsetup/income-tax-rule/income-tax-rule.component';
import { TaxAdjustmentReasonComponent } from './payroll/taxsetup/tax-adjustment-reason/tax-adjustment-reason.component';
import { TaxBenefitComponent } from './payroll/taxsetup/tax-benefit/tax-benefit.component';
import { TaxableIncomeAdjustmentComponent } from './payroll/taxsetup/taxable-income-adjustment/taxable-income-adjustment.component';
import { TaxreliefComponent } from './payroll/taxsetup/taxrelief/taxrelief.component';
import { TaxscheduleComponent } from './payroll/taxsetup/taxschedule/taxschedule.component';
import { TaxyearComponent } from './payroll/taxsetup/taxyear/taxyear.component';
import { StopsalaryComponent } from './payroll/payrolladmin/stopsalary/stopsalary.component';
import { GratuityComponent } from './payroll/gratuity/gratuity.component';
import { MonthlyUserSalaryComponent } from './payroll/monthly-user-salary/monthly-user-salary.component';
import { PayslipComponent } from './payroll/payslip/payslip.component';
import { AuthGuardService } from '../core/Services/Auth/auth-guard.service';

export const routing: ModuleWithProviders = RouterModule.forChild([


    {
        path: 'hrm', component: RootComponent,
        canActivate: [AuthGuardService],
        children: [

            { path: 'rolesandprivileges', component: RolesandprivilegesComponent },
            { path: 'branch', component: BranchComponent },
            { path: 'company', component: CompanyComponent },
            { path: 'department', component: DepartmentComponent },
            { path: 'feature', component: FeatureComponent },
            { path: 'module', component: ModuleComponent },
            { path: 'role', component: RoleComponent },

            {
                path: 'setup',
                children: [

                    { path: 'home', component: HrmSetupHomeComponent },
                    { path: 'employeetype', component: EmployeeTypes },
                    { path: 'country', component: CountryComponent },
                    { path: 'function', component: FunctionComponent },
                    { path: 'qualification', component: QualificationComponent },
                    { path: 'employeestatus', component: EmployeeStatuscomponent },
                    { path: 'religion', component: ReligionComponent },
                    { path: 'bank', component: BankComponent },
                    { path: 'degree', component: DegreeComponent },
                    { path: 'managementlevel', component: ManagementLevelsComponent },
                    { path: 'designation', component: DesignationComponent },
                    { path: 'groups', component: GroupComponent },
                    { path: 'gazettedholidays', component: GazettedHolidaysComponent },
                    { path: 'costcenters', component: CostCenterComponent },
                    { path: 'languages', component: LanguageComponent },
                    { path: 'skilllevel', component: SkillLevelsComponent },
                    { path: 'relation', component: RelationComponent },
                    { path: 'cities', component: CityComponent },
                    { path: 'university', component: UniversityComponent }
                ]
            },

            {
                path: 'leave',
                children: [
                    {
                        path: 'leavesetup',
                        children: [

                            { path: 'leavepurpose', component: LeavepurposeComponent },
                            { path: 'leaveapprover', component: LeaveapproverComponent },
                            { path: 'leaveyear', component: LeaveyearsetupComponent },
                            { path: 'leavepolicy', component: LeavepolicyComponent },
                            { path: 'leavetype', component: LeavetypeComponent },
                            { path: 'leavedaytype', component: LeavedaytypeComponent },
                            { path: 'leaveeligibility', component: LeaveeligibilityComponent },
                            { path: 'leavesubtype', component: LeavesubtypeComponent },
                            { path: 'leavetypebalance', component: LeavetypebalanceComponent },
                            { path: 'decimalroundmatrix', component: DecimalroundingmatrixComponent },
                            { path: 'proratematrix', component: ProratematrixComponent }
                        ]
                    },
                    {
                        path: 'leaveadmin',
                        children: [
                            { path: 'leaveopening', component: EmployeeleaveopeningComponent },
                            { path: 'employeeleavepolicy', component: EmpleavepolicyComponent },
                        ]                    
},
                    { path: 'leaverequest', component: LeaverequestComponent },
                    { path: 'leaveclosing', component: LeaveclosingComponent },
                    { path: 'leaveapproval', component: LeaveapprovalComponent }

                ]
            },

            {
                path: 'employee',
                children: [
                    { path: '', component: EmployeesComponent },
                    { path: 'registration', component: EmployeeHomeComponent },
                    { path: 'updateemployee/:id', component: EmployeeHomeComponent },
                    { path: 'basicinformation', component: BasicinformationComponent },
                    { path: 'employees', component: EmployeesComponent },
                    { path: 'employeequalification', component: EmployeeQualificationComponent },
                    { path: 'employeedetail', component: EmployeedetailComponent }
                ],

            },


            {
                path: 'attendance',
                children: [
                    {
                        path: 'attendancesetup',
                        children: [

                            { path: 'assignroster', component: AssignrosterComponent },
                            { path: 'attendanceflag', component: AttendanceflagComponent },
                            { path: 'attendancerequestapprover', component: AttendancerequestapproverComponent },
                            { path: 'attendancerequesttype', component: AttendancerequesttypeComponent },
                            { path: 'flagcategory', component: FlagcategoryComponent },
                            { path: 'flageffecttype', component: FlageffecttypeComponent },
                            { path: 'flagtype', component: FlagtypeComponent },
                            { path: 'flagvalue', component: FlagvalueComponent },
                            { path: 'roster', component: RosterComponent },
                            { path: 'shift', component: ShiftComponent }
                        ]
                    },
                    {
                        path: 'attendanceadmin',
                        children: [
                            { path: 'attendanceflagexemption', component: AttendanceFlagExemptionComponent },
                            { path: 'attendancerule', component: AttendanceruleComponent },
                        ]
                    },
                    {
                        path: 'overtime',
                        children: [
                            { path: 'overtimeflag', component: OvertimeflagComponent },
                            { path: 'overtimetype', component: OvertimetypeComponent },
                        ]
                    },
                    { path: 'attendancerequest', component: AttendancerequestComponent },
                    { path: 'official-visit-entry', component: OfficialVisitEntryComponent },
                    { path: 'overtime-entitlement', component: OvertimeEntitlementComponent },
                    { path: 'employee-overtime-entitlement', component: EmployeeOvertimeEntitlementComponent },
                    { path: 'rostercopy', component: RostercopyComponent },
                    { path: 'rostermapping', component: RostermappingComponent },
                ]
            },


            {
                path: 'payroll',
                children: [
                    {
                        path: 'payrollsetup',
                        children: [

                            { path: 'allowance', component: AllowanceComponent },
                            { path: 'allowancearrear', component: AllowancearrearComponent },
                            { path: 'allowancededuction', component: AllowanceDeductionComponent },
                            { path: 'allowancecalculationtype', component: AllowancecalculationtypeComponent },
                            { path: 'allowancerate', component: AllowancerateComponent },
                            { path: 'bankadvicetemplate', component: BankAdviceTemplateComponent },
                            { path: 'benefit', component: BenefitComponent },
                            { path: 'chequetemplate', component: ChequeTemplateComponent },
                            { path: 'compensationtransaction', component: CompensationTransactionComponent },
                            { path: 'currency', component: CurrencyComponent },
                            { path: 'frequency', component: FrequencyComponent },
                            { path: 'fundsetup', component: FundsetupComponent },
                            { path: 'gratuityslabgratuity', component: GratuitySlabGratuityComponent },
                            { path: 'gratuityslab', component: GratuityslabComponent },
                            { path: 'gratuitytype', component: GratuitytypeComponent },
                            { path: 'leavingreason', component: LeavingreasonComponent },
                            { path: 'masterpayroll', component: MasterpayrollComponent },
                            { path: 'masterpayrolldetail', component: MasterPayrollDetailComponent },
                            { path: 'payroll', component: PayrollComponent },
                            { path: 'payrollbank', component: PayrollbankComponent },
                            { path: 'payrolltype', component: PayrolltypeComponent },
                            { path: 'payrollyear', component: PayrollyearComponent },
                            { path: 'pfpayment', component: PfPaymentComponent },
                            { path: 'salarycalculationtype', component: SalaryCalculationTypeComponent },
                            { path: 'salarystructure', component: SalarystructureComponent },
                            { path: 'salarystructuredetail', component: SalarystructuredetailComponent },
                            { path: 'usersalary', component: UsersalaryComponent }

                        ]
                    },
                    {
                        path: 'taxsetup',
                        children: [
                            { path: 'incometaxrule', component: IncomeTaxRuleComponent },
                            { path: 'taxadjustmentreason', component: TaxAdjustmentReasonComponent },
                            { path: 'taxbenefit', component: TaxBenefitComponent },
                            { path: 'taxableincomeadjustment', component: TaxableIncomeAdjustmentComponent },
                            { path: 'taxrelief', component: TaxreliefComponent },
                            { path: 'taxschedule', component: TaxscheduleComponent },
                            { path: 'taxyear', component: TaxyearComponent },
                        ]
                    },

                    {
                        path: 'loansetup',
                        children: [
                            { path: 'loantype', component: LoantypeComponent },
                            { path: 'userloan', component: UserloanComponent }
                        ]
                    },

                    {
                        path: 'payrolladmin',
                        children: [
                            { path: 'stopsalary', component: StopsalaryComponent }
                        ]
                    },

                    { path: 'gratuity', component: GratuityComponent },
                    { path: 'monthlyusersalary', component: MonthlyUserSalaryComponent },
                    { path: 'payslip', component: PayslipComponent }

                ]
            }


        ]
    }
])