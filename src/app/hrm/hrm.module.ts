import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './hrm.routing';
import { HttpClientModule } from '@angular/common/http';
import { DevExtremeModule } from 'devextreme-angular';
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
import { LeaveapprovalComponent } from './leave/leavesetup/leaveapproval/leaveapproval.component';
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
import { LeaveService } from './leave/leave.service';
import { LeaveSetupService } from './leave/leaveSetup.service';


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
import { EmployeeService } from './employee/services/employee.service';
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
import { UserRosterAttendanceComponent } from './attendance/user-roster-attendance/user-roster-attendance.component';
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
import { SystemAdministrationService } from '../hrm/services/systemadministration.services';
import { AttendanceService } from './attendance/services/attendance.service';
import { AttendancesetupService } from './attendance/services/attendancesetup.service';
import { HrmsService } from './hrmsSetup/services/hrms.service';
import { SetupService } from './hrmsSetup/services/setup.service';
import { RostermappingComponent } from './attendance/rostermapping/rostermapping.component';
import { RostercopyComponent } from './attendance/rostercopy/rostercopy.component';


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
        UserRosterAttendanceComponent,

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
        LeavetypeComponent,
        LeavedaytypeComponent,
        LeaveapprovalComponent,
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
        RostercopyComponent

    ],
    exports: [],
    providers: [LeaveService, SetupService,
        AttendanceService,
        AttendancesetupService, HrmsService,
        LeaveSetupService, EmployeeService,
        SystemAdministrationService]

})
export class HrmModule { }
