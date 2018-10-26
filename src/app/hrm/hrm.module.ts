import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './hrm.routing';
import { HttpClientModule } from '@angular/common/http';
import { DevExtremeModule, DxSchedulerModule } from 'devextreme-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UniversityComponent } from './hrmsSetup/university/university.component';
import { CountryComponent } from './hrmsSetup/country/country.component';
import { AccountTypeComponent } from './hrmsSetup/accounttype/accounttype.component';
import { CityComponent } from './hrmsSetup/cities/cities.component';
import { BankComponent } from './hrmsSetup/bank/bank.component';
import { ReligionComponent } from './hrmsSetup/religion/religion.component';
import { MaritalStatusComponent } from './hrmsSetup/maritalstatus/maritalstatus.component';
import { EmployeeStatuscomponent } from './hrmsSetup/employeestatus/employeestatus.component';
import { QualificationComponent } from './hrmsSetup/qualification/qualification.component';
import { FunctionComponent } from './hrmsSetup/function/function.component';
import { EmployeeTypes } from './hrmsSetup/employeetype/employeetype.component';
import { GenderComponent } from './hrmsSetup/genders/genders.component';
import { RelationComponent } from './hrmsSetup/relations/relations.component';
import { BloodGroupComponent } from './hrmsSetup/bloodgroups/bloodgroups.component';
import { SkillLevelsComponent } from './hrmsSetup/skilllevels/skilllevels.component';
import { LanguageComponent } from './hrmsSetup/languages/languages.component';
import { CostCenterComponent } from './hrmsSetup/costcenters/costcenters.component';
import { GazettedHolidaysComponent } from './hrmsSetup/gazettedholidays/gazettedholidays.component';
import { ManagementLevelsComponent } from './hrmsSetup/managementlevels/managementlevels.component';
import { DesignationComponent } from './hrmsSetup/designations/designations.component';
import { HrmSetupHomeComponent } from './hrmsSetup/home/home.component';
import { RootComponent } from './root/root.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LeavepolicyComponent } from './leave/leavesetup/leavepolicy/leavepolicy.component';
import { LeavetypeComponent } from './leave/leavesetup/leavetype/leavetype.component';
import { LeavedaytypeComponent } from './leave/leavesetup/leavedaytype/leavedaytype.component';
import { LeavepurposeComponent } from './leave/leavesetup/leavepurpose/leavepurpose.component';
import { LeaveeligibilityComponent } from './leave/leavesetup/leaveeligibility/leaveeligibility.component';
import { LeaveyearsetupComponent } from './leave/leavesetup/leaveyearsetup/leaveyearsetup.component';
import { LeaverequestComponent } from './leave/leaverequest/leaverequest.component';
import { EmployeeleaveopeningComponent } from './leave/leaveadmin/employeeleaveopening/employeeleaveopening.component';
import { UploadleaverequestComponent } from './leave/leaveadmin/uploadleaverequest/uploadleaverequest.component';
import { EmpleavepolicyComponent } from './leave/leaveadmin/employeeleavepolicy/empleavepolicy.component';
import { LeavesubtypeComponent } from './leave/leavesetup/leavesubtype/leavesubtype.component';
import { LeavetypebalanceComponent } from './leave/leavesetup/leavetypebalance/leavetypebalance.component';
import { DecimalroundingmatrixComponent } from './leave/leavesetup/decimalroundingmatrix/decimalroundingmatrix.component';
import { ProratematrixComponent } from './leave/leavesetup/proratematrix/proratematrix.component';


import { EmployeeHomeComponent } from './employee/home/home.component';
import { BasicinformationComponent } from './employee/basicinformation/basicinformation.component';
import { ProfilepicComponent } from './employee/profilepic/profilepic.component';
import { ImmigrationComponent } from './employee/immigration/immigration.component';
import { EmergencycontactComponent } from './employee/emergencycontact/emergencycontact.component';
import { SocialComponent } from './employee/social/social.component';
import { DocumentComponent } from './employee/document/document.component';
import { EmployeeQualificationComponent } from './employee/qualification/qualification.component';
import { CpasswordComponent } from './employee/cpassword/cpassword.component';
import { EmployeeBankComponent } from './employee/bank/bank.component';
import { ExperienceComponent } from './employee/experience/experience.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { EmployeeCompanyComponent } from './employee/company/company.component';
import { EmployeedetailComponent } from './employee/employeedetail/employeedetail.component';

import { DegreeComponent } from './hrmsSetup/degree/degree.component';
import { GroupComponent } from './hrmsSetup/groups/groups.component';

import { AttendanceFlagExemptionComponent } from './attendance/attendanceadmin/attendance-flag-exemption/attendance-flag-exemption.component';
import { AttendanceruleComponent } from './attendance/attendanceadmin/attendancerule/attendancerule.component';
import { AttendancerequestComponent } from './attendance/attendancerequest/attendancerequest.component';
import { OvertimeEntitlementComponent } from './attendance/overtime-entitlement/overtime-entitlement.component';
import { OfficialVisitEntryComponent } from './attendance/official-visit-entry/official-visit-entry.component';
import { EmployeeOvertimeEntitlementComponent } from './attendance/employee-overtime-entitlement/employee-overtime-entitlement.component';
import { OvertimeflagComponent } from './attendance/overtime/overtimeflag/overtimeflag.component';
import { OvertimetypeComponent } from './attendance/overtime/overtimetype/overtimetype.component';
import { AssignrosterComponent } from './attendance/attendancesetup/assignroster/assignroster.component';
import { AttendanceflagComponent } from './attendance/attendancesetup/attendanceflag/attendanceflag.component';
import { AttendancerequestapproverComponent } from './attendance/attendancesetup/attendancerequestapprover/attendancerequestapprover.component';
import { AttendancerequesttypeComponent } from './attendance/attendancesetup/attendancerequesttype/attendancerequesttype.component';
import { FlagcategoryComponent } from './attendance/attendancesetup/flagcategory/flagcategory.component';
import { FlageffecttypeComponent } from './attendance/attendancesetup/flageffecttype/flageffecttype.component';
import { FlagtypeComponent } from './attendance/attendancesetup/flagtype/flagtype.component';
import { FlagvalueComponent } from './attendance/attendancesetup/flagvalue/flagvalue.component';
import { RosterComponent } from './attendance/attendancesetup/roster/roster.component';
import { ShiftComponent } from './attendance/attendancesetup/shift/shift.component';
import { BranchComponent } from '../hrm/branch/branch.component';
import { DepartmentComponent } from '../hrm/department/department.component';
import { CompanyComponent } from '../hrm/company/company.component';
import { FeatureComponent } from '../hrm/feature/feature.component';
import { ModuleComponent } from '../hrm/module/module.component';
import { RoleComponent } from '../hrm/role/role.component';
import { RolesandprivilegesComponent } from '../hrm/rolesandprivileges/rolesandprivileges.component';
import { LeaveapproverComponent } from './leave/leavesetup/leaveapprover/leaveapprover.component';
import { LeaveclosingComponent } from './leave/leaveclosing/leaveclosing.component';
import { LeaveapprovalComponent } from './leave/leaveapproval/leaveapproval.component';
import { RostermappingComponent } from './attendance/rostermapping/rostermapping.component';
import { RostercopyComponent } from './attendance/rostercopy/rostercopy.component';
import { AllowanceComponent } from './payroll/payrollsetup/allowance/allowance.component';
import { AllowancearrearComponent } from './payroll/payrollsetup/allowancearrear/allowancearrear.component';
import { AllowancecalculationtypeComponent } from './payroll/payrollsetup/allowancecalculationtype/allowancecalculationtype.component';
import { BankAdviceTemplateComponent } from './payroll/payrollsetup/bank-advice-template/bank-advice-template.component';
import { BenefitComponent } from './payroll/payrollsetup/benefit/benefit.component';
import { ChequeTemplateComponent } from './payroll/payrollsetup/cheque-template/cheque-template.component';
import { CompensationTransactionComponent } from './payroll/payrollsetup/compensation-transaction/compensation-transaction.component';
import { FrequencyComponent } from './payroll/payrollsetup/frequency/frequency.component';
import { GratuitySlabGratuityComponent } from './payroll/payrollsetup/gratuity-slab-gratuity/gratuity-slab-gratuity.component';
import { GratuitytypeComponent } from './payroll/payrollsetup/gratuitytype/gratuitytype.component';
import { LeavingreasonComponent } from './payroll/payrollsetup/leavingreason/leavingreason.component';
import { MasterpayrollComponent } from './payroll/payrollsetup/masterpayroll/masterpayroll.component';
import { MasterPayrollDetailComponent } from './payroll/payrollsetup/master-payroll-detail/master-payroll-detail.component';
import { PayrollComponent } from './payroll/payrollsetup/payroll/payroll.component';
import { PayrollbankComponent } from './payroll/payrollsetup/payrollbank/payrollbank.component';
import { PayrolltypeComponent } from './payroll/payrollsetup/payrolltype/payrolltype.component';
import { SalaryCalculationTypeComponent } from './payroll/payrollsetup/salary-calculation-type/salary-calculation-type.component';
import { SalarystructureComponent } from './payroll/payrollsetup/salarystructure/salarystructure.component';
import { SalarystructuredetailComponent } from './payroll/payrollsetup/salarystructuredetail/salarystructuredetail.component';
import { UsersalaryComponent } from './payroll/payrollsetup/usersalary/usersalary.component';
import { StopsalaryComponent } from './payroll/payrolladmin/stopsalary/stopsalary.component';
import { LoantypeComponent } from './payroll/loansetup/loantype/loantype.component';
import { UserloanComponent } from './payroll/loansetup/userloan/userloan.component';
import { IncomeTaxRuleComponent } from './payroll/taxsetup/income-tax-rule/income-tax-rule.component';
import { TaxableIncomeAdjustmentComponent } from './payroll/taxsetup/taxable-income-adjustment/taxable-income-adjustment.component';
import { TaxAdjustmentReasonComponent } from './payroll/taxsetup/tax-adjustment-reason/tax-adjustment-reason.component';
import { TaxBenefitComponent } from './payroll/taxsetup/tax-benefit/tax-benefit.component';
import { TaxreliefComponent } from './payroll/taxsetup/taxrelief/taxrelief.component';
import { TaxscheduleComponent } from './payroll/taxsetup/taxschedule/taxschedule.component';
import { TaxyearComponent } from './payroll/taxsetup/taxyear/taxyear.component';
import { GratuityComponent } from './payroll/gratuity/gratuity.component';
import { MonthlyUserSalaryComponent } from './payroll/monthly-user-salary/monthly-user-salary.component';
import { AllowanceDeductionComponent } from './payroll/payrollsetup/allowance-deduction/allowance-deduction.component';
import { AllowancerateComponent } from './payroll/payrollsetup/allowancerate/allowancerate.component';
import { CurrencyComponent } from './payroll/payrollsetup/currency/currency.component';
import { FundsetupComponent } from './payroll/payrollsetup/fundsetup/fundsetup.component';
import { GratuityslabComponent } from './payroll/payrollsetup/gratuityslab/gratuityslab.component';
import { PayrollyearComponent } from './payroll/payrollsetup/payrollyear/payrollyear.component';
import { PfPaymentComponent } from './payroll/payrollsetup/pf-payment/pf-payment.component';
import { PayslipComponent } from './payroll/payslip/payslip.component';
import { ViewemployeeleaveopeningComponent } from './leave/leaveadmin/viewemployeeleaveopening/viewemployeeleaveopening.component';
import { ViewleaverequestComponent } from './leave/viewleaverequest/viewleaverequest.component';
import { ViewCompensationTransactionComponent } from './payroll/payrollsetup/view-compensation-transaction/view-compensation-transaction.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DevExtremeModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        RootComponent,

        BranchComponent,
        DepartmentComponent,
        CompanyComponent,
        FeatureComponent,
        ModuleComponent,
        RoleComponent,
        RolesandprivilegesComponent,

        HrmSetupHomeComponent,
        DesignationComponent,
        ManagementLevelsComponent,
        GazettedHolidaysComponent,
        CostCenterComponent,
        LanguageComponent,
        SkillLevelsComponent,
        BloodGroupComponent,
        CountryComponent,
        DegreeComponent,
        GroupComponent,
        RelationComponent,
        GenderComponent,
        CityComponent,
        EmployeeTypes,
        FunctionComponent,
        QualificationComponent,
        EmployeeStatuscomponent,
        MaritalStatusComponent,
        ReligionComponent,
        BankComponent,
        CityComponent,
        AccountTypeComponent,
        UniversityComponent,


        /* HRM Attendance Components */

        AttendanceFlagExemptionComponent,
        AttendanceruleComponent,
        AttendancerequestComponent,
        OvertimeEntitlementComponent,
        OfficialVisitEntryComponent,
        EmployeeOvertimeEntitlementComponent,

        OvertimeflagComponent,
        OvertimetypeComponent,

        AssignrosterComponent,
        AttendanceflagComponent,
        AttendancerequestapproverComponent,
        AttendancerequesttypeComponent,
        FlagcategoryComponent,
        FlageffecttypeComponent,
        FlagtypeComponent,
        FlagvalueComponent,
        RosterComponent,
        ShiftComponent,


        /* HRM Leave Components */
        LeavepolicyComponent,
        LeaveapproverComponent,
        LeavetypeComponent,
        LeavedaytypeComponent,
        LeavepurposeComponent,
        LeaveeligibilityComponent,
        LeaveyearsetupComponent,
        LeaverequestComponent,
        EmployeeleaveopeningComponent,
        UploadleaverequestComponent,
        EmpleavepolicyComponent,
        LeavesubtypeComponent,
        LeavetypebalanceComponent,
        DecimalroundingmatrixComponent,
        ProratematrixComponent,
        LeaveclosingComponent,
        LeaveapprovalComponent,

        /* Employee Registration */

        EmployeeHomeComponent,
        BasicinformationComponent,
        ProfilepicComponent,
        ImmigrationComponent,
        EmployeesComponent,
        EmergencycontactComponent,
        SocialComponent,
        DocumentComponent,
        EmployeeQualificationComponent,
        CpasswordComponent,
        EmployeeBankComponent,
        ExperienceComponent,
        EmployeesComponent,
        EmployeeCompanyComponent,
        EmployeedetailComponent,
        RostermappingComponent,
        RostercopyComponent,

        /* Payroll */


        AllowanceComponent,
        AllowancearrearComponent,
        AllowancecalculationtypeComponent,
        AllowanceDeductionComponent,
        AllowancerateComponent,
        BankAdviceTemplateComponent,
        BenefitComponent,
        CurrencyComponent,
        ChequeTemplateComponent,
        CompensationTransactionComponent,
        FrequencyComponent,
        GratuityslabComponent,
        GratuitySlabGratuityComponent,
        GratuitytypeComponent,
        FundsetupComponent,
        LeavingreasonComponent,
        MasterpayrollComponent,
        MasterPayrollDetailComponent,
        PayrollComponent,
        PayrollbankComponent,
        PayrolltypeComponent,
        SalaryCalculationTypeComponent,
        SalarystructureComponent,
        SalarystructuredetailComponent,
        UsersalaryComponent,
        PayrollyearComponent,
        StopsalaryComponent,
        LoantypeComponent,
        UserloanComponent,
        IncomeTaxRuleComponent,
        TaxableIncomeAdjustmentComponent,
        TaxAdjustmentReasonComponent,
        TaxBenefitComponent,
        TaxreliefComponent,
        TaxscheduleComponent,
        PfPaymentComponent,
        TaxyearComponent,
        GratuityComponent,
        MonthlyUserSalaryComponent,
        PayslipComponent,
        ViewemployeeleaveopeningComponent,
        ViewleaverequestComponent,
        ViewCompensationTransactionComponent



    ],
    exports: []

})
export class HrmModule { }
