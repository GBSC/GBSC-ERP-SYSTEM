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
import { BankComponent } from './hrmsSetup/bank/bank.component';
import { LeavetypebalanceComponent } from './leave/leavesetup/leavetypebalance/leavetypebalance.component';
import { LeaveapprovalComponent } from './leave/leavesetup/leaveapproval/leaveapproval.component';
import { LeaverequestComponent } from './leave/leaverequest/leaverequest.component';
import { AttendanceFlagExemptionComponent } from './attendance/attendanceadmin/attendance-flag-exemption/attendance-flag-exemption.component';
import { AttendanceruleComponent } from './attendance/attendanceadmin/attendancerule/attendancerule.component';
import { AttendancerequestComponent } from './attendance/attendancerequest/attendancerequest.component';

export const routing: ModuleWithProviders = RouterModule.forChild([


    {
        path: 'hrm', component: RootComponent,
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
             { path: 'leavesetup',
                    children: [
 
                        { path: 'leavepurpose', component: LeavepurposeComponent },
                        { path: 'leaveyear', component: LeaveyearsetupComponent },
                        { path: 'leavepolicy', component: LeavepolicyComponent },
                        { path: 'leavetype', component: LeavetypeComponent }, 
                        { path: 'leavedaytype', component: LeavedaytypeComponent },
                        { path: 'leaveeligibility', component: LeaveeligibilityComponent },
                        { path: 'leavesubtype', component: LeavesubtypeComponent },
                        { path: 'leavetypebalance', component: LeavetypebalanceComponent },
                        { path: 'leaveapproval', component: LeaveapprovalComponent },
                        { path: 'decimalroundmatrix', component: DecimalroundingmatrixComponent },
                        { path: 'proratematrix', component: ProratematrixComponent }
                    ]
                },
               {path: 'employeeleaveopening', component: EmployeeleaveopeningComponent},
               {path: 'leaverequest', component: LeaverequestComponent},
 
            ]},

            { 
                path: 'employee',
                children: [
                    { path: '', component: EmployeesComponent },
                    { path: 'registration', component: EmployeeHomeComponent },
                    { path: 'basicinformation', component: BasicinformationComponent },
                    { path: 'employees', component: EmployeesComponent },
                    { path: 'employeedetail', component: EmployeedetailComponent }
                ],
                
            },


            {
                path: 'attendance',
                children: [
             { path: 'attendancesetup',
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
                { path: 'attendanceadmin',
                children: [
                {path: 'attendanceflagexemption', component: AttendanceFlagExemptionComponent},
                {path: 'attendancerule', component: AttendanceruleComponent},
            ]},
            {path: 'attendancerequest', component: AttendancerequestComponent},
        ]},
                    {
                        path: 'attendancesetup', component: RootComponent,
                        children: [

                            { path: 'assignroster', component: AssignrosterComponent },
                            { path: 'attendanceflag', component: AttendanceflagComponent },
                            { path: 'attendancerequestapprover', component: AttendancerequestapproverComponent },
                            { path: 'attendancerequesttype', component: AttendancerequesttypeComponent },
                            { path: 'flagcategory', component: FlagcategoryComponent },
                            { path: 'flageffecttype', component: FlageffecttypeComponent },
                            { path: 'flagtype', component: FlagtypeComponent },
                            { path: 'flagvalue', component: FlagvalueComponent },
                            { path: 'roster', component: RosterComponent }
                        ]
                    },
                    { path: 'employeeleaveopening', component: EmployeeleaveopeningComponent },
                    { path: 'uploadleaverequest', component: UploadleaverequestComponent }
                ]
            }
        ])