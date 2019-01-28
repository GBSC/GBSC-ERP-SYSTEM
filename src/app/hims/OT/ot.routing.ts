import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
 import { PatientCaseComponent } from './patient-case/patient-case.component';
 import { PatientCaseDetailComponent } from './detail/patient-case-detail/patient-case-detail.component';
 import { LaproscopySpDetailComponent } from './detail/laproscopy-sp-detail/laproscopy-sp-detail.component';

 import { PatientCaseRepotComponent } from './report/patient-case-repot/patient-case-repot.component';
 import { LaproscopySpReportComponent } from './report/laproscopy-sp-report/laproscopy-sp-report.component';

 import { MedicineRequestComponent } from './OtSteup/medicine-request/medicine-request.component';
 import { OtEquipmentComponent } from './OtSteup/ot-equipment/ot-equipment.component';
 import { OtProcedureComponent } from './OtSteup/ot-procedure/ot-procedure.component';
 import { OtTerminologiesComponent } from './OtSteup/ot-terminologies/ot-terminologies.component';
 import { LaproscopySpComponent } from './laproscopy-sp/laproscopy-sp.component';
 import { LaproscopyFsComponent } from './laproscopy-fs/laproscopy-fs.component';











export const OTRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'ot',
         component: RootComponent,
        // canActivate: [AuthGuardService, ModuleGuardService],
        children: [

               { path: 'patientcase', component: PatientCaseComponent },
               { path: 'patientcase/:id'  , component: PatientCaseComponent },
               { path: 'laproscopysp', component: LaproscopySpComponent },
               { path: 'laproscopysp/:id', component: LaproscopySpComponent },
               { path: 'laproscopyfs', component: LaproscopyFsComponent },
               { path: 'laproscopyfs/:id', component: LaproscopyFsComponent },

               {
                path: 'detail',
                children: [
                    { path: 'patientcasedetail', component: PatientCaseDetailComponent },
                    { path: 'laproscopysp', component: LaproscopySpDetailComponent }

                ]
            },
            {
                path: 'report',
                children: [
                    { path: 'patientcaserepot/:id/:date', component: PatientCaseRepotComponent },
                    { path: 'laproscopyspreport/:id/:date', component: LaproscopySpReportComponent }

                ]
            },
            {
                path: 'otsetup',
                children: [
                    { path: 'medicinerequest', component: MedicineRequestComponent },
                    { path: 'otequipment', component: OtEquipmentComponent },
                    { path: 'otprocedure', component: OtProcedureComponent },
                    { path: 'otterminologies', component: OtTerminologiesComponent },
                ]
            }
        ]

    }

]);