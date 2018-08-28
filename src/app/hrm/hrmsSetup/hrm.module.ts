import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './hrm.routing';
import { HrmsService } from '../hrmsSetup/services/hrms.service';
import { SetupService } from '../hrmsSetup/services/setup.service';
import { HomeComponent } from '../hrmsSetup/home/home.component';
import { UniversityComponent } from '../hrmsSetup/university/university.component';
import { CountryComponent } from '../hrmsSetup/country/country.component';
import { AccountTypeComponent } from '../hrmsSetup/accounttype/accounttype.component';
import { DegreeComponent } from '../hrmsSetup/degree/degree.component';
import { BankComponent } from '../hrmsSetup/bank/bank.component';
import { ShiftComponent } from '../hrmsSetup/shift/shift.component';
import { RosterComponent } from '../hrmsSetup/roster/roster.component';
import { ReligionComponent } from '../hrmsSetup/religion/religion.component';
import { MaritalStatusComponent } from '../hrmsSetup/maritalstatus/maritalstatus.component';
import { EmployeeStatuscomponent } from '../hrmsSetup/employeestatus/employeestatus.component';
import { QualificationComponent } from '../hrmsSetup/qualification/qualification.component';
import { GradesComponent } from '../hrmsSetup/grade/grade.component';
import { FunctionComponent } from '../hrmsSetup/function/function.component';
import { BranchComponent } from '../hrmsSetup/branch/branch.component';
import { EmployeeTypes } from '../hrmsSetup/employeetype/employeetype.component';
import { DepartmentComponent } from '../hrmsSetup/department/department.component';
import { CityComponent } from '../hrmsSetup/cities/cities.component';
import { GenderComponent } from '../hrmsSetup/genders/genders.component';
import { RelationComponent } from '../hrmsSetup/relations/relations.component';
import { AllowancesTypeComponent } from '../hrmsSetup/allowancestypes/allowancestypes.component';
import { AdvanceTypeComponent } from '../hrmsSetup/advancetypes/advancetypes.component';
import { LanguageComponent } from '../hrmsSetup/languages/languages.component';
import { LeaveTypeComponent } from '../hrmsSetup/leavetypes/leavetypes.component';
import { BloodGroupComponent } from '../hrmsSetup/bloodgroups/bloodgroups.component';
import { SkillLevelsComponent } from '../hrmsSetup/skilllevels/skilllevels.component';
import { CostCenterComponent } from '../hrmsSetup/costcenters/costcenters.component';
import { GazettedHolidaysComponent } from '../hrmsSetup/gazettedholidays/gazettedholidays.component';
import { GroupComponent } from '../hrmsSetup/groups/groups.component';
import { ManagementLevelsComponent } from '../hrmsSetup/managementlevels/managementlevels.component';
import { DesignationComponent } from '../hrmsSetup/designations/designations.component';
import { SettingsComponent } from '../hrmsSetup/settings/settings.component';
import { HeaderComponent } from '../hrmsSetup/shared/header/header.component';
import { FooterComponent } from '../hrmsSetup/shared/footer/footer.component';
import { MenuComponent } from '../hrmsSetup/shared/menu/menu.component';
import { RootComponent } from '../hrmsSetup/root/root.component';
import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';

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
        HomeComponent,
        SettingsComponent,
        DesignationComponent,
        ManagementLevelsComponent,
        GroupComponent,
        GazettedHolidaysComponent,
        CostCenterComponent,
        LanguageComponent,
        SkillLevelsComponent,
        BloodGroupComponent,
        LeaveTypeComponent,
        AdvanceTypeComponent,
        AllowancesTypeComponent,
        RelationComponent,
        GenderComponent,
        CityComponent,
        DepartmentComponent,
        EmployeeTypes,
        BranchComponent,
        FunctionComponent,
        GradesComponent,
        QualificationComponent,
        EmployeeStatuscomponent,
        MaritalStatusComponent,
        ReligionComponent,
        RosterComponent,
        ShiftComponent,
        BankComponent,
        DegreeComponent,
        AccountTypeComponent,
        CountryComponent,
        UniversityComponent

    ],

    providers: [SetupService]

})
export class HrmModule { }
