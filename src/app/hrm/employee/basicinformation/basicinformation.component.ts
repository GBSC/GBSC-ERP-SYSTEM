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
    public id : any;
    public Employee : any;
    @Output('setbasicinfoFormValue') setBasicinfoFormValue = new EventEmitter();

    public EmpbasicForm: FormGroup;
    constructor(public employee: EmployeeService, public fb: FormBuilder, private SetupServiceobj: SetupService,  public router: Router, private route: ActivatedRoute) { }
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
       this.employee.EmpbasicForm.value.userId = this.id;
            // value = {...this.Employee, ...value}
           // this.joinValues(value, this.Employee);
         await this.employee.updateEmployee(value);
    }

    async updateUersById(value)
    {
        console.log(value);
        await this.employee.updateUersById(value);
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



        console.log(this.router.url);

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

                    this.employee.GetEmployee(this.id).subscribe((Employee) => {
                       this.Employee = Employee
                      //  let emp = this.Employee;
                            this.employee.EmpbasicForm.patchValue({
                                FirstName : this.Employee.firstName,
                                LastName : this.Employee.lastName,
                                FatherName  : this.Employee.fatherName,
                                DOB  : this.Employee.dob,
                                POB  : this.Employee.pob,
                                Cnic  : this.Employee.cnic,
                                CnicExpiry  : this.Employee.cnicExpiry,
                                Email  : this.Employee.email,
                                LanguageId  : this.Employee.languageId,
                                ReligionId  : this.Employee.religionId,
                                CityId  : this.Employee.cityId,
                                BloodGroup  : this.Employee.bloodGroup,
                                MaritalStatus  : this.Employee.maritalStatus,
                                PhoneNumber  : this.Employee.phoneNumber,
                                HomeNumber  : this.Employee.homeNumber,
                                Address  : this.Employee.address,
                                PermanentAddress  : this.Employee.permanentAddress,




                            });
                            console.log(Employee)
                            console.log(this.Employee.firstName)
                          //  console.log(emp.firstName)

                            
                    });


                    
                    

        

        });

            // this.basicInfo = await this.employee.getBasicInfoOfCurrentUser();
            // console.log(this.basicInfo);
            // await this.employee.GetAllEmployees();
            // this.basic = this.employee.employeereg;
            // this.employee.EmpbasicForm.value.FirstName = this.basicInfo.firstName;
            // this.employee.EmpbasicForm.value.LastName = this.basicInfo.lastName;
    
            // console.log(this.employee.EmpbasicForm.value);
    
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