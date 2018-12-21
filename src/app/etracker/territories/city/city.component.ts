import { Component, OnInit } from '@angular/core';
import { AuthService, InventorysystemService } from '../../../../app/core';

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

    public companyId: any;
    public cities: any;
    public regions: any;

    constructor(public authService: AuthService, public inventoryService: InventorysystemService) {
        this.companyId = this.authService.getUserCompanyId();
    }

    ngOnInit() {

        this.inventoryService.getRegionsByCompany(this.companyId).subscribe(resp => {
            this.regions = resp;
        });

        this.inventoryService.getCitiesByCompany(this.companyId).subscribe(resp => {
            this.cities = resp;
        });


    }

    addCity(value) {
        value.data.companyId = this.companyId;
        this.inventoryService.addCity(value.data).subscribe(resp => {
            console.log(resp);
        })
    }

  updateCity(value)
  {
    value.data.cityId = value.key;
    value.data.companyId = this.companyId;
    this.inventoryService.updateCity(value.data).subscribe(resp=>{
        console.log(resp);
    });

    }

    deleteCity(value) {

    }

}
