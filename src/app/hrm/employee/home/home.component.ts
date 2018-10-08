import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../core';

@Component({
    selector: 'app-employeehome',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class EmployeeHomeComponent implements OnInit {

    private UserId : number;
    public currentUser: any;
    public id: number;
    tabItem: any;
    public text = 'Next';
    public selectedTabStyles = '.m-nav .m-nav__item:hover:not(.m-nav__item--disabled) > .m-nav__link .m-nav__link-icon, .m-nav .m-nav__item:hover:not(.m-nav__item--disabled) > .m-nav__link .m-nav__link-text, .m-nav .m-nav__item:hover:not(.m-nav__item--disabled) > .m-nav__link .m-nav__link-arrow, .m-nav .m-nav__item.m-nav__item--active > .m-nav__link .m-nav__link-icon, .m-nav .m-nav__item.m-nav__item--active > .m-nav__link .m-nav__link-text, .m-nav .m-nav__item.m-nav__item--active > .m-nav__link .m-nav__link-arrow';
    public showingCurrently: any = 0;
    public tabs =
        [
            { name: "Basic Information", icon: 'm-nav__link-icon fa fa-info-circle', selected: false },
            { name: "Profile Picture", icon: 'm-nav__link-icon fa fa-user-circle', selected: false },
            { name: "Employee Company Information", icon: 'm-nav__link-icon fa fa-building', selected: false },
            { name: "Employee Dependants", icon: 'm-nav__link-icon fa fa-contao', selected: false },
            { name: "Social Networking", icon: 'm-nav__link-icon fa fa-linkedin', selected: false },
            { name: "Employee Qualification", icon: 'm-nav__link-icon fa fa-graduation-cap', selected: false },
            { name: "Work Experience", icon: 'm-nav__link-icon fa fa-black-tie', selected: false },
            { name: "Employee Bank Account", icon: 'm-nav__link-icon fa fa-money', selected: false },
            { name: "Documents", icon: 'm-nav__link-icon fa fa-file', selected: false }
        ]

    constructor(public employeeService: EmployeeService, public router: Router, private activatedRoute: ActivatedRoute) { }

    async ngOnInit() {

        // get URL parameters
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id']; // --> Name must match wanted parameter 
            this.employeeService.latestAddedUserId = this.id;    
        });

        this.tabItem = this.tabs[this.showingCurrently];
        this.currentUser = await this.employeeService.getBasicInfoOfCurrentUser();
        this.employeeService.currentUser = this.currentUser;
        console.log(this.currentUser);

    }


    setTabItem(item, i) {
        this.tabItem = item;
        this.showingCurrently = i;

        if (this.tabItem.name === 'Documents') {
            this.text = 'Save';
        }
        console.log(item,i); 
        this.tabItem.selected = true;

    }

    setForms() {
        this.employeeService.allFormData.Empbasicinfo = this.employeeService.EmpbasicForm.value;
        console.log(this.employeeService.allFormData);
        this.employeeService.allFormData.QualificationForm = this.employeeService.QualificationForm.value;
        this.employeeService.allFormData.experience = this.employeeService.experienceForm.value;
        this.employeeService.allFormData.Profilepic = this.employeeService.Profilepic.value;
        this.employeeService.allFormData.DependantForm = this.employeeService.DependantForm.value;
        this.employeeService.allFormData.SocialForm = this.employeeService.SocialForm.value;
        this.employeeService.allFormData.documentForm = this.employeeService.documentForm.value;
        this.employeeService.allFormData.EmpCompanyForm = this.employeeService.EmpCompanyForm.value;
        this.employeeService.allFormData.EmpbankForm = this.employeeService.EmpbankForm.value;

    }

    async next(e) {
        if (this.showingCurrently < 8) {
            this.showingCurrently++;
            console.log(this.showingCurrently);
            this.tabItem = this.tabs[this.showingCurrently];
            this.tabItem.selected = true;
            if (this.tabItem.name === 'Documents') {
                this.text = 'Save';
            }

        }

        if (this.text === 'Save') {
            console.log(this.employeeService.allFormData);
            this.setForms();
            let ab = await this.employeeService.addEmployee();
            console.log(ab);

        }

    }

    async submit() {
        console.log(this.tabItem);
        switch (this.tabItem.name) {
            case 'Basic Information': 
                let a  = await this.employeeService.addEmployee();
                console.log(this.employeeService.latestAddedUserId);
                break;
            case 'Profile Picture':
                await this.employeeService.adduserProfilepic();
                break;

            case 'Employee Company Information':
                await this.employeeService.addusercompany();
                break;

            case 'Employee Dependants':
               // await this.employeeService.adduserRelation();

                break;

            case 'Social Networking':
                await this.employeeService.adduserSocial();
                break;

            case 'Employee Qualification':
               // await this.employeeService.adduserUniversities();
                break;

            case 'Work Experience':
                //await this.employeeService.adduserexperience();
                break;

            case 'Employee Bank Account':
                await this.employeeService.addBank();
                break;

            case 'Documents':
                await this.employeeService.adduserDocuments();
                break;

            default:
                break;
        }
    }



}
