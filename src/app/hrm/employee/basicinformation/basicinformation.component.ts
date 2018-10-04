import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService, SetupService } from '../../../core';
import { Employee } from '../../../core/Models/HRM/employee';

@Component({
    selector: 'app-basicinformation',
    templateUrl: './basicinformation.component.html',
    styleUrls: ['./basicinformation.component.css']
})
export class BasicinformationComponent implements OnInit {


    public basic: any;
    public Employee : Employee;

    @Input('id') id : number;
    @Output('setbasicinfoFormValue') setBasicinfoFormValue = new EventEmitter();

    public EmpbasicForm: FormGroup;

    constructor(public employeeService: EmployeeService, public fb: FormBuilder, private SetupServiceobj: SetupService,  public router: Router, private route: ActivatedRoute) { 

        this.EmpbasicForm = this.fb.group({
            FirstName: [''],
            LastName: [''],
            FatherName: [''],
            Email: [''],
            Cnic: [''],
            CnicExpiry: [''],
            PhoneNumber: [''],
            HomeNumber: [''],
            DOB: [''],
            POB: [''],
            BloodGroup: [''],
            MaritalStatus: [''],
            Gender: [''],
            countryId: [''],
            CityId: [''],
            ReligionId: [''],
            LanguageId: [''],
            Address: [''],
            PermanentAddress: ['']
        });

    }
    public basicInfo: any = {};

    // async ngOnInit() {

    //     this.basicInfo = await this.employee.getBasicInfoOfCurrentUser();
    //     console.log(this.basicInfo);
    //     await this.employee.GetAllEmployees();
    //     this.basic = this.employee.employeereg;
    //     this.employee.EmpbasicForm.value.FirstName = this.basicInfo.firstName;
    //     this.employee.EmpbasicForm.value.LastName = this.basicInfo.lastName;

    //     console.log(this.employee.EmpbasicForm.value);

    //     await this.SetupServiceobj.getAllDesignations();
    //     let dsg = this.SetupServiceobj.designation;

    //     await this.SetupServiceobj.getAllLanguages();
    //     let lng = this.SetupServiceobj.language;


    //     await this.SetupServiceobj.getAllFunctions();
    //     let func = this.SetupServiceobj.function;

    //     await this.SetupServiceobj.getAllReligions();
    //     let relg = this.SetupServiceobj.religion;
    //     console.log(relg);

    //     await this.SetupServiceobj.getAllGazettedHolidays();
    //     let holiday = this.SetupServiceobj.gazetholidays;

    //     await this.SetupServiceobj.getAllCities();
    //     let cty = this.SetupServiceobj.city;

    // }

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
    async update(value){
        console.log(value);
    //    this.employeeService.EmpbasicForm.value.userId = this.id;
    //         // value = {...this.Employee, ...value}
    //        // this.joinValues(value, this.Employee);
    //      await this.employeeService.updateEmployee();
    }

    async updateUersById(value)
    {
        console.log(value);
        await this.employeeService.updateUersById(value);
    }

    // joinValues(form, data) {
    //     console.log(data)
      
    //     for(let k in data) {
    //         for(let p in form) {
    //             p = p.substr(0, 1).toLowerCase() + p.substr(1);
    //             // console.log(p);
    //             if(p === k) {
    //                 console.log('--------------')
    //                 console.log('fro,m join values', k, data[k], p, form[p]);
    //                 // console.log(form)
    //                 console.log('--------------')
    //             }
    //         }
    //     }
    // }

    async ngOnInit() {

        this.employeeService.GetEmployee(this.id).subscribe(resp=>{

            this.Employee = resp;

            console.log(this.Employee);
        });


    
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
}