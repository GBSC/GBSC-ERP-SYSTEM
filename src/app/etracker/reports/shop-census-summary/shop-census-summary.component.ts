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

    private SelectedRegions : Region[] = [];
    private SelectedCities : any[] = [];
    private SelectedAreas : Area[] = [];
    private SelectedDistributors : Distributor[] = [];
    private SelectedTerritories : Territory[] = [];
    private SelectedSections : any[] = [];
    private SelectedSubsections : any[] = [];
    private SelectedDSFs : Employee[] = [];

    private IsAdmin : boolean = false;
    private IsRsm : boolean = false;
    private IsZsm : boolean = false;


    constructor(private Auth : AuthService, private InventoryService : InventorysystemService, private eTrackerUserService : eTrackerUserService) { }

    ngOnInit() {

        if(this.Auth.getUserLevel() == 'Admin' || this.Auth.getUserLevel() == 'NSM' || this.Auth.getUserLevel() == 'HO') {
            this.IsAdmin = true;
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
                this.SelectedRegions = res;
            });

            this.InventoryService.getCitiesByCompany(this.Auth.getUserCompanyId()).subscribe((res : City[]) => {
                this.Cities = res;
            });

            this.InventoryService.getAreasByCompany(this.Auth.getUserCompanyId()).subscribe((res : Area[]) => {
                this.Areas = res;
            });

            this.InventoryService.getDistributorsByCompany(this.Auth.getUserCompanyId()).subscribe((res : Distributor[]) => {
                this.Distributors = res;
            });

            this.InventoryService.getTerritoriesByCompany(this.Auth.getUserCompanyId()).subscribe((res : Territory[]) => {
                this.Territories = res;
            });

            this.InventoryService.getSectionsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
                this.Sections = res;
            });

            this.InventoryService.getSubsectionsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) =>{
                this.Subsections = res;
            });

            this.eTrackerUserService.getSalesUsersByCompany(this.Auth.getUserCompanyId()).subscribe((res : Employee[]) => {
                this.DSFs = res;
            })

        } else if(this.Auth.getUserLevel() == 'RSM') {
            this.IsRsm = true;
            this.DisableCity = false;
            this.DisableArea = false;
            this.DistributorDisable = false;
            this.TerritoryDisable = false;
            this.SectionDisable = false;
            this.SubsectionDisable = false;
            this.DsfDisable  = false;

            this.InventoryService.getCitiesByUser(this.Auth.getUserId()).subscribe((res : any[]) => {
                this.Cities = res;
                this.SelectedCities = res;
                this.InventoryService.getRegionByCity(this.Cities[0].regionId).subscribe((res : Region) => {
                    this.Regions = [res];
                    this.SelectedRegions = [res];
                });
                this.Cities.forEach(city => {
                    this.InventoryService.getAreasByCity(city.cityId).subscribe((res : Area[]) => {
                        this.Areas = res;
                        this.Areas.forEach(area => {
                            this.InventoryService.getDistributorsByArea(area.areaId).subscribe((res : Distributor[]) => {
                                this.Distributors = res;
                                this.Distributors.forEach(distributor => {
                                    this.InventoryService.getTerritoriesByDistributor(distributor.distributorId).subscribe((res : Territory[]) => {
                                        this.Territories = res;
                                        this.Territories.forEach(territory => {
                                            this.InventoryService.getSectionsByTerritory(territory.territoryId).subscribe((res : any[]) => {
                                                this.Sections = res;
                                                this.Sections.forEach(section => {
                                                    this.InventoryService.getSubsectionsBySection(section.sectionId).subscribe((res : any[]) => {
                                                        this.Subsections = res;
                                                    });
                                                    this.eTrackerUserService.getUsersBySection(section.sectionId).subscribe((res : Employee[]) => {
                                                        this.DSFs = res;
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });

        } else if(this.Auth.getUserLevel() == 'ZSM') {
            this.IsZsm = true;
            this.DisableArea = false;
            this.DistributorDisable = false;
            this.TerritoryDisable = false;
            this.SectionDisable = false;
            this.SubsectionDisable = false;
            this.DsfDisable  = false;

            this.InventoryService.getAreasByUser(this.Auth.getUserId()).subscribe((res : Area[]) => {
                this.Areas = res;
                this.SelectedAreas = res;
                this.InventoryService.getCityByArea(res[0].areaId).subscribe((res1 : City) => {
                    this.Cities = [res1];
                    this.SelectedCities = [res1];
                    this.InventoryService.getRegionByCity(res1.regionId).subscribe((res2 : Region) => {
                        this.Regions = [res2];
                        this.SelectedRegions = [res2];
                    });
                });
                this.Areas.forEach(area => {
                    this.InventoryService.getDistributorsByArea(area.areaId).subscribe((res : Distributor[]) => {
                        this.Distributors = res;
                        this.Distributors.forEach(distributor => {
                            this.InventoryService.getTerritoriesByDistributor(distributor.distributorId).subscribe((res : Territory[]) => {
                                this.Territories = res;
                                this.Territories.forEach(territory => {
                                    this.InventoryService.getSectionsByTerritory(territory.territoryId).subscribe((res : any[]) => {
                                        this.Sections = res;
                                        this.Sections.forEach(section => {
                                            this.InventoryService.getSubsectionsBySection(section.sectionId).subscribe((res : any[]) => {
                                                this.Subsections = res;
                                            });
                                            this.eTrackerUserService.getUsersBySection(section.sectionId).subscribe((res : Employee[]) => {
                                                this.DSFs = res;
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });

        } else {

        }
    }

    onRegionChange(value : number) {
        this.SelectedCities = this.Cities.filter(a => a.regionId == value);
    }

    onCityChange(value : number) {
        this.SelectedAreas = this.Areas.filter(a => a.cityId == value);
    }

    onAreaChange(value : number) {
        this.InventoryService.getDistributorsByArea(value).subscribe((res : Distributor[]) => {
            this.SelectedDistributors = res;
        });
    }

    onDistributorChange(value : number) {
        this.SelectedTerritories = this.Territories.filter(a => a.distributorId == value);
    }

    onTerritoryChange(value : number) {
        this.SelectedSections = this.Sections.filter(a => a.territoryId == value);
    }

    onSectionChange(value : number) {
        this.SelectedSubsections = this.Subsections.filter(a => a.sectionId == value);
        this.SelectedDSFs = this.DSFs.filter(a => a.sectionId == value);
    }

    toggleFilter() {
        this.showHideFilter = !this.showHideFilter;
    }

    filterFromDate(value : Date) {
        console.log(value);
    }

    filterToDate(value : Date) {
        console.log(value);
    }
}
