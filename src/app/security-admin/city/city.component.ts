import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemAdministrationService } from '../../../app/core/Services/HRM/systemadministration.services';
import { HrmsService } from '../../../app/core/Services/HRM/Setup/hrms.service';
import { AuthService } from '../../core';
import { City } from '../../core/Models/HRM/city';

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

    public city: any;
    public updatingModel: any;
    public country: any;
    public company: any;

    constructor(public httpClient: HttpClient,
        public hrmService: HrmsService, public companyService: SystemAdministrationService, public authService : AuthService) { }

    async ngOnInit() {

        this.hrmService.GetCitiesByCompanyId(this.authService.getUserCompanyId()).subscribe((res : City[]) => {
            this.city = res;
        });

        this.hrmService.getCountriesByCompanyId(this.authService.getUserCompanyId()).subscribe((res : any[]) => {
            this.country = res;
        });
    }

    async addcity(value) {
        // console.log(value);
        value.data.companyId = this.authService.getUserCompanyId();   
        await this.hrmService.addCity(value.data);
        this.hrmService.GetCitiesByCompanyId(this.authService.getUserCompanyId()).subscribe((res : City[]) => {
            this.city = res;
        }); 
    }

    UpdatingCity(value) {
        this.updatingModel = { ...value.oldData, ...value.newData };
        this.updatingModel.companyId = this.authService.getUserCompanyId();
    }

    Updatecity() {
        this.hrmService.updateCity(this.updatingModel)
    }

    deletecity(value) {
        this.hrmService.deleteCity(value.key);
    }

}
