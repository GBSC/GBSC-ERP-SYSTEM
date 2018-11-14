import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountryComponent } from '../hrmsSetup/country/country.component';
import { EmployeeTypes } from '../hrmsSetup/employeetype/employeetype.component';
import { FunctionComponent } from '../hrmsSetup/function/function.component';
import { GradesComponent } from '../hrmsSetup/grade/grade.component';
import { QualificationComponent } from '../hrmsSetup/qualification/qualification.component';
import { EmployeeStatuscomponent } from '../hrmsSetup/employeestatus/employeestatus.component';
import { ReligionComponent } from '../hrmsSetup/religion/religion.component';
import { BankComponent } from '../hrmsSetup/bank/bank.component';
import { DegreeComponent } from '../hrmsSetup/degree/degree.component';
import { ManagementLevelsComponent } from '../hrmsSetup/managementlevels/managementlevels.component';
import { DesignationComponent } from '../hrmsSetup/designations/designations.component';
import { GroupComponent } from '../hrmsSetup/groups/groups.component';
import { GazettedHolidaysComponent } from '../hrmsSetup/gazettedholidays/gazettedholidays.component';
import { CostCenterComponent } from '../hrmsSetup/costcenters/costcenters.component';
import { LanguageComponent } from '../hrmsSetup/languages/languages.component';
import { SkillLevelsComponent } from '../hrmsSetup/skilllevels/skilllevels.component';
import { RelationComponent } from '../hrmsSetup/relations/relations.component';
import { UniversityComponent } from '../hrmsSetup/university/university.component';
import { RootComponent } from '../root/root.component';
import { ShiftComponent } from '../attendance/attendancesetup/shift/shift.component';
import { HrmSetupHomeComponent } from './home/home.component';
import { AuthGuardService, ModuleGuardService } from '../../core';


export const routing: ModuleWithProviders = RouterModule.forChild([
    {

        path: 'hrm',
        component: RootComponent,
        canActivate: [AuthGuardService, ModuleGuardService],
        children: [
            {
                path: 'hrmsSetup',
                children: [

                    { path: 'home', component: HrmSetupHomeComponent },
                    { path: 'country', component: CountryComponent },
                    { path: 'employeetype', component: EmployeeTypes },
                    { path: 'function', component: FunctionComponent },
                    { path: 'grade', component: GradesComponent },
                    { path: 'qualification', component: QualificationComponent },
                    { path: 'employeestatus', component: EmployeeStatuscomponent },
                    { path: 'religion', component: ReligionComponent },
                    { path: 'shift', component: ShiftComponent },
                    { path: 'bank', component: BankComponent },
                    { path: 'degree', component: DegreeComponent },
                    { path: 'managementlevels', component: ManagementLevelsComponent },
                    { path: 'designations', component: DesignationComponent },
                    { path: 'groups', component: GroupComponent },
                    { path: 'gazettedholidays', component: GazettedHolidaysComponent },
                    { path: 'costcenters', component: CostCenterComponent },
                    { path: 'languages', component: LanguageComponent },
                    { path: 'skilllevels', component: SkillLevelsComponent },
                    { path: 'grade', component: GradesComponent },
                    { path: 'relations', component: RelationComponent },
                    { path: 'university', component: UniversityComponent }
                ]
            }
        ]
    }
])


