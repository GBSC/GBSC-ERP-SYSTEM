import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OTService } from '../../../../core/Services/HIMS/ot.service';
import { HrmsService} from '../../../../core/Services/HRM/Setup/hrms.service';
import {EmployeeService} from '../../../../core/Services/HRM/Employee/employee.service';
@Component({
  selector: 'app-medicine-request-detail',
  templateUrl: './medicine-request-detail.component.html',
  styleUrls: ['./medicine-request-detail.component.css']
})
export class MedicineRequestDetailComponent implements OnInit {
  public medicineRequestDetail : any
  public departments : any;
  public users : any;

  constructor(public Router: Router,public otserviceobj : OTService , public objHrmsService : HrmsService  , public objEmployeeService:EmployeeService ) { }

  ngOnInit() {
    this.objHrmsService.GetAllDepartments().subscribe(res=>{
      this.departments = res;
      console.log(this.departments);
    });

    this.objEmployeeService.getAllEmployees().subscribe(res=>{
      this.users = res;
      console.log(this.users)
    });

    this.otserviceobj.getInvMedicineRequests().subscribe(res=>{
      this.medicineRequestDetail = res;
      console.log(this.medicineRequestDetail);
    })

  }

  addMedicineRequest(){
    this.Router.navigate(['/ot/otsetup/medicinerequest']);
  }
  medicineRequestReport(d){
    console.log(d.key.requestDate);
    let date = d.key.requestDate;
    // let date =  this.formatDate(new Date(d.key.requestDate)) ;
      console.log(date)
 
    this.Router.navigate(['/ot/report/medicinerequestreport/'+date]);
  }


  
  formatDate(date: Date) {
    return    date.getFullYear()   + "-" + ( date.getMonth() +1) + "-" + date.getDate()   + "T" + date.getHours()  + ":" + date.getMinutes() + ":" + date.getMilliseconds();
  }

}
