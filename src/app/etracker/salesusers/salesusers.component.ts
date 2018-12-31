import { Component, OnInit, ViewChild } from '@angular/core';
import { eTrackerUserService, AuthService, InventorysystemService } from '../../../app/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';
import { ToastrService } from 'ngx-toastr';

export enum UserLevelStatus {
    showRegion = 1,
    showCity,
    showArea,
    showTerritory,
    showSection
}

@Component({
    selector: 'app-salesusers',
    templateUrl: './salesusers.component.html',
    styleUrls: ['./salesusers.component.scss']
})
export class SalesusersComponent implements OnInit {

    public companyId: any;
    public users: any;
    public sections: any;
    public assignedSubsections: any;

    public userLevelStatus: any;
    public userLevel: any;

    public sectionId: any;

    public userId: any;

    public loggedinUserId: any;

    public assignForm: FormGroup;

    public userLevels: any;

    public value: string[] = [];
    public options: Select2Options;
    public regionOptions: Array<Select2OptionData> = [];
    public cityOptions: Array<Select2OptionData> = [];
    public areaOptions: Array<Select2OptionData> = [];
    public territoryOptions: Array<Select2OptionData> = [];

    @ViewChild("sectioncb2") sectioncb2: DxSelectBoxComponent;
    @ViewChild("userlevelcb") userlevelcb: DxSelectBoxComponent;


    constructor(public authService: AuthService,
        public userService: eTrackerUserService,
        public inventoryService: InventorysystemService,
        public formBuilder: FormBuilder, public toastr: ToastrService) {

        this.companyId = this.authService.getUserCompanyId();
        this.loggedinUserId = this.authService.getUserId();

        // this.assignForm = this.formBuilder.group({
        //     'TerritoryId': ['', Validators.required],
        //     'DistributorId': ['', Validators.required],
        //     'SectionId': ['', Validators.required]
        // })
    }

    ngOnInit() {

        this.options = {
            multiple: true
        }

        this.userLevels = [{ value: "Admin" }, { value: "NSM" }, { value: "RSM" }, { value: "HO" }, { value: "ZSM" },
        { value: "ASM" },
        { value: "TSO/KPO" },
        { value: "DSF" }
        ];

        this.inventoryService.getRegionsByCompany(this.companyId).subscribe(t => {

            let regions = t;
            for (let region of regions) {
                this.regionOptions.push({ id: region.regionId.toString(), text: region.name })
            }

        });


        this.inventoryService.getCitiesByCompany(this.companyId).subscribe(t => {
            let cities = t;

            for (let city of cities) {
                this.cityOptions.push({ id: city.cityId.toString(), text: city.name })
            }

        });


        this.inventoryService.getAreasByCompany(this.companyId).subscribe(t => {
            let areas = t;

            for (let area of areas) {
                this.areaOptions.push({ id: area.areaId.toString(), text: area.name })
            }

        });

        this.inventoryService.getTerritoriesByCompany(this.companyId).subscribe(t => {
            let territories = t;

            for (let territory of territories) {
                this.territoryOptions.push({ id: territory.territoryId.toString(), text: territory.name })
            }

        });


        this.inventoryService.getSectionsByCompany(this.companyId).subscribe(sec => {
            this.sections = sec;
        });

        this.userService.getSalesUsersByCompany(this.companyId).subscribe(u => {

            this.users = u;
        });

        this.sectioncb2.onValueChanged.subscribe(res => this.onSectionChange(res.component.option("value")));

        this.userlevelcb.onValueChanged.subscribe(res => this.onUserLevelChange(res.component.option("value")));

    }

    sectionChange(value) {
        this.sectionId = value;
    }

    onUserSelect(userId) {
        this.userId = userId;
        this.userService.getUser(this.userId).subscribe(resp => {
            this.sectionId = resp.sectionId;
            this.userLevel = resp.userLevel;
            console.log(this.sectionId);
        });
    }

    changed(data: { value: string[] }) {
        this.value = data.value;
    }

    onUserLevelChange(value) {

        this.userLevel = value;

        if (value == "Admin" || value == "NSM" || value == "RSM" || value == "HO") {
            this.userLevelStatus = UserLevelStatus.showRegion;
            this.inventoryService.getRegionsByUser(this.userId).subscribe(resp => {
                let regions = resp;
                this.value = [];
                for (let region of regions) {
                    this.value.push(region.regionId.toString());
                }
            });


        }
        else if (value == "ZSM") {
            this.userLevelStatus = UserLevelStatus.showCity;
            this.inventoryService.getCitiesByUser(this.userId).subscribe(resp => {
                let cities = resp;
                this.value = [];
                for (let city of cities) {
                    this.value.push(city.cityId.toString());
                }
            });
        }
        else if (value == "ASM") {
            this.userLevelStatus = UserLevelStatus.showArea;
            this.inventoryService.getAreasByUser(this.userId).subscribe(resp => {
                let areas = resp;
                this.value = [];
                for (let area of areas) {
                    this.value.push(area.areaId.toString());
                }
            });
        }
        else if (value == "TSO/KPO") {
            this.userLevelStatus = UserLevelStatus.showTerritory;
            this.inventoryService.getTerritoriesByUser(this.userId).subscribe(resp => {
                let territories = resp;
                this.value = [];
                for (let territory of territories) {
                    this.value.push(territory.territoryId.toString());
                }
            });
        }
        else if (value == "DSF")
            this.userLevelStatus = UserLevelStatus.showSection;
    }

    assignUserLevel() {
        let assign;

        if (this.userLevelStatus == UserLevelStatus.showRegion) {
            assign = { userId: this.userId, userLevel: this.userLevel, regionIds: this.value };
        }
        else if (this.userLevelStatus == UserLevelStatus.showCity) {
            assign = { userId: this.userId, userLevel: this.userLevel, cityIds: this.value };
        }
        else if (this.userLevelStatus == UserLevelStatus.showArea) {
            assign = { userId: this.userId, userLevel: this.userLevel, areaIds: this.value };
        }
        else if (this.userLevelStatus == UserLevelStatus.showTerritory) {
            assign = { userId: this.userId, userLevel: this.userLevel, territoryIds: this.value };
        }
        else if (this.userLevelStatus == UserLevelStatus.showSection) {
            assign = { userId: this.userId, userLevel: this.userLevel, sectionId: this.sectionId };
        }

        this.userService.assignUserLevel(assign).subscribe(resp => console.log(resp));
        this.displayToastSuccess("Saved");

        this.userService.getSalesUsersByCompany(this.companyId).subscribe(u => {

            this.users = u;
        });

    }

    onAssignSubsections(userId, sectionId) {
        this.userId = userId;

        this.inventoryService.getSectionsByCompany(this.companyId).subscribe(resp => {
            this.sections = resp;
            this.sectionId = sectionId;

            if (this.sectionId)
                this.userService.getAssignedSubsectionsBySection(this.sectionId, this.userId).subscribe(resp => {
                    this.assignedSubsections = resp;
                });
        });
    }

    onSectionChange(id) {
        this.sectionId = id;
        if (this.sectionId)
            this.userService.getAssignedSubsectionsBySection(this.sectionId, this.userId).subscribe(resp => {
                this.assignedSubsections = resp;
            });
    }

    onSubsectionSelect(e, i) {
        this.assignedSubsections[i].userId = this.userId;
        this.assignedSubsections[i].isAssigned = e.target.checked;
    }

    assignSubsectionsOnSubmit() {
        this.userService.assignSubsections(this.assignedSubsections).subscribe(resp => {
            console.log(resp);
        })
        this.displayToastSuccess("Saved");
    }

    displayToastSuccess(message) {
        this.toastr.success(message);
    }
}


