import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendancesetupService, EmployeeService } from '../../../../core';
import { FormGroup  , FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-updateassignroster',
  templateUrl: './updateassignroster.component.html',
  styleUrls: ['./updateassignroster.component.scss']
})
export class UpdateassignrosterComponent implements OnInit {
public id : any;
public asignreoter : any;
public roster : any;
public employees : any;
public shifts : any;
public asignRosterForm: FormGroup;
  constructor(public FormBuilder :FormBuilder, public rout: ActivatedRoute,public attendancesetupservice: AttendancesetupService,
    public empservice: EmployeeService) { 
      this.asignRosterForm = this.FormBuilder.group({
        assignRosterId: [''],
        daysoffs: this.FormBuilder.array([]),
        fromDate: [''],
        // month: [''],
        rosterId: [''],
        shiftsId: [''],
        toDate: [''],
        isDefaultRoster:[''],
        userAssignRosters: this.FormBuilder.array([])
        // year: [''],
    });
    }

  ngOnInit() {
    this.rout.params.subscribe(params => {
      this.id = +params['id'];
      let x = this.attendancesetupservice.getAsignRosterById(this.id).subscribe(res => {

          this.asignreoter = res
          if(this.asignreoter){
            this.asignRosterForm.patchValue({
              assignRosterId: this.asignreoter.assignRosterId,
              daysoffs: this.asignreoter.daysoffs,
              fromDate: this.asignreoter.fromDate,
              // month: this.asignreoter.month,
              rosterId: this.asignreoter.rosterId,
              shiftsId: this.asignreoter.shiftsId,
              toDate: this.asignreoter.toDate,
              isDefaultRoster : this.asignreoter.isDefaultRoster,
              userAssignRosters: this.asignreoter.userAssignRosters,
              // year: this.asignreoter.year
            })
          }

       });

  });




  this.attendancesetupservice.GetRosters().subscribe(res =>{
    this.roster = res;
   });

  this.attendancesetupservice.GetShifts().subscribe(res =>{
    this.shifts = res;
 
  });

  this.empservice.getAllEmployees().subscribe(res=> {
    this.employees = res;
   });



  }

  addUser(value){
    let a :any ={
      userId : value
      // user : null,
      // assignRosterId : this.asignreoter.userAssignRosters[0].assignRosterId
    }
    this.asignreoter.userAssignRosters.push(a);
   }


  removeUser(i){
         this.asignreoter.userAssignRosters.splice(i, 1)
   }
  changeremarks(e, i) {
    this.asignreoter.daysoffs[i].remarks = e.target.value
}

   async save(value){
    this.asignreoter.userAssignRosters.filter(t=>{
             delete t.user;
      return delete t.assignRosterId;
    })
    this.asignRosterForm.value.userAssignRosters =  this.asignreoter.userAssignRosters;
     this.asignRosterForm.value.daysoffs =  this.asignreoter.daysoffs;
 
      let x = await this.attendancesetupservice.updateAsignRoster(value);
    }


  //  save(value){
  //   this.asignRosterForm.value.userAssignRosters =  this.asignreoter.userAssignRosters;
  //   this.asignRosterForm.value.daysoffs =  this.asignreoter.daysoffs;
  //   console.log(value);

  //   this.attendancesetupservice.UpdateAsignRoster(value).subscribe(res=>{
  //     console.log(res);
  //   })
  //  }



}
