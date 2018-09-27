import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SetupService } from '../../hrmsSetup/services/setup.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-basicinformation',
    templateUrl: './basicinformation.component.html',
    styleUrls: ['./basicinformation.component.css']
})
export class BasicinformationComponent implements OnInit {


    public basic: any;
    @Output('setbasicinfoFormValue') setBasicinfoFormValue = new EventEmitter();

    public EmpbasicForm: FormGroup;
    constructor(public employee: EmployeeService, public fb: FormBuilder, private SetupServiceobj: SetupService, public router: Router, private activatedRoute: ActivatedRoute) { }
    public basicInfo: any = {};

    async ngOnInit() {

        this.basicInfo = await this.employee.getBasicInfoOfCurrentUser();
        console.log(this.basicInfo);
        await this.employee.GetAllEmployees();
        this.basic = this.employee.employeereg;
        this.employee.EmpbasicForm.value.FirstName = this.basicInfo.firstName;
        this.employee.EmpbasicForm.value.LastName = this.basicInfo.lastName;

        console.log(this.employee.EmpbasicForm.value);

        await this.SetupServiceobj.getAllDesignations();
        let dsg = this.SetupServiceobj.designation;

        await this.SetupServiceobj.getAllLanguages();
        let lng = this.SetupServiceobj.language;


        await this.SetupServiceobj.getAllFunctions();
        let func = this.SetupServiceobj.function;

        await this.SetupServiceobj.getAllReligions();
        let relg = this.SetupServiceobj.religion;
        console.log(relg);

        await this.SetupServiceobj.getAllGazettedHolidays();
        let holiday = this.SetupServiceobj.gazetholidays;

        await this.SetupServiceobj.getAllCities();
        let cty = this.SetupServiceobj.city;

    }

    getbasicinfoFormValue() {
        this.setBasicinfoFormValue.emit(this.EmpbasicForm.value);
    }

    // async onsubmit() {
    //   console.log(this.activatedRoute.url);
    //   // let basicinfo = await this.employee.addEmployee();
    //   // console.log(basicinfo);
    //   // this.router.navigate(['employees']);

    //   // if (basicinfo){
    //   //   } 
    //   //   else{
    //   //     alert('User could not created');

    //   //   }
    // }

}