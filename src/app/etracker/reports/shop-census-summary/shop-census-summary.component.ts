import { Component, OnInit } from '@angular/core';
import { AuthService, InventorysystemService, eTrackerUserService } from '../../../core';
import { Region } from '../../../core/Models/Inventory/Setup/Region';
import { Area } from '../../../core/Models/Inventory/Setup/Area';
import { Distributor } from '../../../core/Models/Inventory/Setup/Distributor';
import { Territory } from '../../../core/Models/Inventory/Setup/Territory';
import { Employee } from '../../../core/Models/HRM/employee';
import { City } from '../../../core/Models/HRM/city';

@Component({
    selector: 'app-shop-census-summary',
    templateUrl: './shop-census-summary.component.html',
    styleUrls: ['./shop-census-summary.component.scss']
})
export class ShopCensusSummaryComponent implements OnInit {
    
    private showHideFilter: boolean = false;
    private DisableRegion : boolean  = true;
    private DisableCity : boolean = true;
    private DisableArea : boolean  = true;
    private DistributorDisable : boolean = true;
    private TerritoryDisable : boolean = true;
    private SectionDisable : boolean = true;
    private SubsectionDisable : boolean = true;
    private DsfDisable : boolean = true;

    private Regions : Region[] = [];
    private Cities : any[] = [];
    private Areas : Area[] = [];
    private Distributors : Distributor[] = [];
    private Territories : Territory[] = [];
    private Sections : any[] = [];
    private Subsections : any[] = [];
    private DSFs : Employee[] = [];

    private SelectedRegion : Region;
    private SelectedCity : any
    private SelectedArea : Area;
    private SelectedDistributor : Distributor;
    private SelectedTerritory : Territory;
    private SelectedSection : any;


    constructor(private Auth : AuthService, private InventoryService : InventorysystemService, private eTrackerUserService : eTrackerUserService) { }

    ngOnInit() {

        // console.log("User Level: ", this.Auth.getUserLevel());

        if(this.Auth.getUserLevel() == 'Admin' || this.Auth.getUserLevel() == 'NSM' || this.Auth.getUserLevel() == 'HO') {
            
            this.DisableRegion = false;
            this.DisableCity = false;
            this.DisableArea = false;
            this.DistributorDisable = false;
            this.TerritoryDisable = false;
            this.SectionDisable = false;
            this.SubsectionDisable = false;
            this.DsfDisable  = false;

            this.InventoryService.getRegionsByUser(this.Auth.getUserId()).subscribe((res : Region[]) => {
                this.Regions = res;
            });

        } else if(this.Auth.getUserLevel() == 'RSM') {

            this.DisableCity = false;
            this.DisableArea = false;
            this.DistributorDisable = false;
            this.TerritoryDisable = false;
            this.SectionDisable = false;
            this.SubsectionDisable = false;
            this.DsfDisable  = false;

            this.InventoryService.getCitiesByUser(this.Auth.getUserId()).subscribe((res : any[]) => {
                this.Cities = res;
                this.InventoryService.getRegionByCity(this.Cities[0].regionId).subscribe((res : Region) => {
                    this.Regions = [res];
                    this.SelectedRegion = res;
                });
            });

        } else if(this.Auth.getUserLevel() == 'ZSM') {

            this.DisableArea = false;
            this.DistributorDisable = false;
            this.TerritoryDisable = false;
            this.SectionDisable = false;
            this.SubsectionDisable = false;
            this.DsfDisable  = false;

            this.InventoryService.getAreasByUser(this.Auth.getUserId()).subscribe((res : Area[]) => {
                this.Areas = res;
                this.InventoryService.getCityByArea(res[0].areaId).subscribe((res : City) => {
                    this.Cities = [res];
                    this.SelectedCity = res;
                    this.InventoryService.getRegionByCity(res.regionId).subscribe((res : Region) => {
                        this.Regions = [res];
                        this.SelectedRegion = res;
                    });
                })
            });

        } else {

        }
    }

    onRegionChange(value) {
        console.log(value);
        
        this.InventoryService.getCitiesByUserAndRegion(value, this.Auth.getUserId()).subscribe((res : any[]) => {
            this.Cities = res;
            this.SelectedRegion = this.Regions.find(a => a.regionId == value);
        });
    }

    onCityChange(value) {
        this.InventoryService.getAreasByUserAndCity(value, this.Auth.getUserId()).subscribe((res : Area[]) => {
            this.Areas = res;
            this.SelectedCity = this.Cities.find(a => a.cityId == value);
        });
    }

    onAreaChange(value) {
        this.InventoryService.getDistributorsByUserAndArea(value, this.Auth.getUserId()).subscribe((res : Distributor[]) => {
            this.Distributors = res;
            this.SelectedArea = this.Areas.find(a => a.areaId == value);
        });
    }

    onDistributorChange(value) {
        this.InventoryService.getTerritoriesByUserAndDistributor(value, this.Auth.getUserId()).subscribe((res : Territory[]) => {
            this.Territories = res;
            this.SelectedDistributor = this.Distributors.find(a => a.distributorId == value);
        });
    }

    onTerritoryChange(value) {
        this.InventoryService.getSectionsByUserAndTerritory(value, this.Auth.getUserId()).subscribe((res : Territory[]) => {
            this.Sections = res;
            this.SelectedTerritory = this.Territories.find(a => a.territoryId == value);
        });
    }

    onSectionChange(value) {
        this.SelectedSection = this.Sections.find(a => a.sectionId == value);
        this.eTrackerUserService.getUsersBySection(value).subscribe((res : Employee[]) => {
            this.DSFs = res;
        });
        this.InventoryService.getSubsectionsBySection(value).subscribe((res : any[]) => {
            this.Subsections = res;
        });
    }

    toggleFilter() {
        this.showHideFilter = !this.showHideFilter;
    }
}
