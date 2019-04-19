import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../app/core/Services/Security/user.service';
import { AuthService, InventorysystemService, eTrackerUserService } from '../../../app/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Select2OptionData } from 'ng2-select2';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { UserLevelStatus } from '../../../app/etracker/salesusers/salesusers.component';
 
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    public companyId: any;
    public users: any;
    public selectedUserId: any;
    public registrationForm: FormGroup;
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


    constructor(public userService1: UserService,
        public authService: AuthService,
        public userService: eTrackerUserService,
        public inventoryService: InventorysystemService,
        public toastr: ToastrService,
        formBuilder: FormBuilder) {
        this.companyId = this.authService.getUserCompanyId();

        this.registrationForm = formBuilder.group({
            'Email': ['', Validators.required],
            'Username': ['', Validators.required],
            'Password': ['', Validators.required]
        })
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

        this.userlevelcb.onValueChanged.subscribe(res => this.onUserLevelChange(res.component.option("value")));

        this.userService1.getUsersByCompany(this.companyId).subscribe(resp => {
            this.users = resp;
        })

    }

    getdata(data) {
        console.log(data);
    }

    setSelectedUserId(id) {
        this.selectedUserId = id;
    }

    submitRegisterUserForm(value) {

        let user = this.users.find(u => u.userId = this.selectedUserId);

        value.firstName = user.firstName;
        value.lastName = user.lastName;
        value.email = user.email;
        value.phone = user.phone;
        value.cityId = user.cityId;
        value.roleId = user.roleId; 
        value.companyId = this.companyId; 
     }

    DeleteUser(value) {

        this.userService1.deleteuser(value.key).subscribe(resp => console.log("User Deleted"));
    }

    onUserSelect(userId) {
        this.userId = userId;
        this.userService.getUser(this.userId).subscribe(resp => {
            this.sectionId = resp.sectionId;
            this.userLevel = resp.userLevel;
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


    displayToastSuccess(message) {
        this.toastr.success(message);
    }

}
