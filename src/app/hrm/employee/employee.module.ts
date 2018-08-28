import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../employee/home/home.component';
import { BasicinformationComponent } from '../employee/basicinformation/basicinformation.component';
import { ProfilepicComponent } from '../employee/profilepic/profilepic.component';
import { ImmigrationComponent } from '../employee/immigration/immigration.component';
import { EmergencycontactComponent } from '../employee/emergencycontact/emergencycontact.component';
import { SocialComponent } from '../employee/social/social.component';
import { DocumentComponent } from '../employee/document/document.component';
import { QualificationComponent } from '../employee/qualification/qualification.component';
import { CpasswordComponent } from '../employee/cpassword/cpassword.component';
import { BankComponent } from '../employee/bank/bank.component';
import { ExperienceComponent } from '../employee/experience/experience.component';
import { EmployeeService } from '../employee/services/employee.service';
import { EmployeesComponent } from '../employee/employees/employees.component';
import { DevExtremeModule } from 'devextreme-angular';
import { CompanyComponent } from '../employee/company/company.component';
import { EmployeedetailComponent } from '../employee/employeedetail/employeedetail.component';
import { routing } from './employee.routing';
import { RootComponent } from '../employee/root/root.component';
import { FooterComponent } from '../employee/shared/footer/footer.component';
import { HeaderComponent } from '../employee/shared/header/header.component';
import { MenuComponent } from '../employee/shared/menu/menu.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DevExtremeModule,
        routing

    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        RootComponent,
        HomeComponent,
        BasicinformationComponent,
        ProfilepicComponent,
        ImmigrationComponent,
        EmployeesComponent,
        EmergencycontactComponent,
        SocialComponent,
        DocumentComponent,
        QualificationComponent,
        CpasswordComponent,
        BankComponent,
        ExperienceComponent, EmployeesComponent, CompanyComponent, EmployeedetailComponent

    ],
    exports: [],
    providers: [EmployeeService]
})
export class EmployeeModule { }
