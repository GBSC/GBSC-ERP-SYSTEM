import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from '../../patient/services/patient.services';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../../../app/models/patient'
import { AppointmentTest } from '../../../app/models/appointmentTest'
import { DxDataGridModule,DxLoadPanelModule,
  DxDataGridComponent,
  DxTemplateModule } from 'devextreme-angular';
@Component({
  selector: 'app-shd',
  templateUrl: './shd.component.html',
  styleUrls: ['./shd.component.css']
})
export class ShdComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  private patientForm: FormGroup;

  private appointmentForm: FormGroup;



  public PatientType: any;
  public consultant: any;
  public appointment: any;
  public appointmenttest: any;

  private newOrPrevious: string = 'previous';
  private showAddNewPatientRow: boolean = false;


  private appointmentTimeForm: FormGroup;
  public appointtime: any;

  public par: any;

  public profileForm : FormGroup;

  public appointmenttestForm: FormGroup;
  public Tests: any = [];
  public test: any;
  public currentpatient: any;

  public getaptbyid : any;

  constructor(private PatientServiceobj: PatientService, private formBuilder: FormBuilder) {

    // this.profileForm = new FormGroup({
    //   firstName: new FormControl('fajlksdjfas'),
    //   lastName: new FormControl('asldjflkasdjfsss'),
    // });
    
    this.appointmenttestForm = this.formBuilder.group({
      AppointmentId: ['', Validators.required],
      TestId: ['', Validators.required]
    });

    this.patientForm = this.formBuilder.group(
      {
        FirstName: ['', Validators.required],
        Gender: ['', Validators.required],
        LastName: ['', Validators.required],
        DOB: ['', Validators.required],
        PhoneNumber: ['', Validators.required],
        NIC: ['', Validators.required],
      });
  }

  showIt() {
    if(this.profileForm.valid) {
      console.log(this.profileForm);
    }
  }

  async  ngOnInit() {
    console.log(this.appointmentForm);


    await this.PatientServiceobj.getPatient();
    this.par = this.PatientServiceobj.patients;
    console.log(this.par);

    await this.PatientServiceobj.getappointments();
    this.appointment = this.PatientServiceobj.appointment;
    console.log(this.appointment);

    // await this.PatientServiceobj.getAppointmentById(this.currentpatient);
    // this.getaptbyid = this.PatientServiceobj.getApptbyId;
    // console.log(this.getaptbyid);
    


    await this.PatientServiceobj.getConsultant();
    this.consultant = this.PatientServiceobj.consultant;
    console.log(this.consultant);

    await this.PatientServiceobj.getTests();
    this.test = this.PatientServiceobj.testing;
    console.log(this.test);

    await this.PatientServiceobj.GetAppointmentTests();
    this.appointmenttest = this.PatientServiceobj.appointmenttesting;
    console.log(this.appointmenttest)




    // this.patientForm = this.formBuilder.group(
    //   {
    //     'FirstName': ['kljdfljasdlf', Validators.required],
    //     'Gender': ['', Validators.required],
    //     'LastName': ['', Validators.required],
    //     'DOB': ['', Validators.required],
    //     'PhoneNumber': ['', Validators.required],
    //     'NIC': ['', Validators.required],
    //   })

    this.appointmentForm = this.formBuilder.group(
      {
        'PatientType': ['', Validators.required],
        'ConsultantId': ['', Validators.required],
        'VisitStatus': ['', Validators.required],
        'VisitNature': ['', Validators.required],
        'FinalTime': ['', Validators.required],
        'PatientId': ['', Validators.required],
        'TimeIn': ['', Validators.required],
        'TimeOut': ['', Validators.required],
        'Remarks': ['', Validators.required]
      });

    // this.appointmenttestForm = this.formBuilder.group(
    //   {
    //     'AppointmentId': ['147', Validators.required],
    //     'TestId': ['1', Validators.required]
    //   })

    console.log(this.patientForm);

    this.appointmentTimeForm = this.formBuilder.group({
      'TimeIn': ['', Validators.required],
      'TimeOut': ['', Validators.required],
      'Remarks': ['', Validators.required]
    });

    this.PatientType = [{ value: "new", display: "New" }, { value: "previous", display: "Previous" }];
  }

  addrange(id) {
// console.log(id);

//    console.log(id.value);
    // let testFound = this.findTestById(id);
    // console.log(testFound);

    let { value } = this.appointmenttestForm;

    let doc = {
      AppointmentId: id.value,
      TestId: value.TestId,

    }
      this.Tests.push(doc);
      console.log(this.Tests);
      //this.appointmenttestForm.reset();

    
  }



  remove(index) {
    this.Tests.splice(index, 1);
  }

  async addappointmentTest(value: AppointmentTest) {
    console.log(value);
    
    
    let x = await this.PatientServiceobj.AddAppointmentTest(value);
    this.getaptbyid = await this.PatientServiceobj.getAppointmentById(this.currentpatient.appointmentId);
    this.appointmenttestForm.reset();
    console.log(x)
  }

  async updateappointmentTest(value) {
    console.log(value);
    let x = await this.PatientServiceobj.UpdateAppointmentTest(value.key);
    console.log(x)
    return x;
  }

  async deleteapointmentTest(value) {
    console.log(value);
    let x = await this.PatientServiceobj.DeleteAppointmentTest(value.key.appointmentTestId);
    console.log(x);
    return x;
  }

  valueChanged(d) {
    if (this.PatientType.value = "new") {
      console.log(d)
    }
  }

  addFieldValue() {
    this.showAddNewPatientRow = true;
  }

  deleteFieldValue() {
    this.showAddNewPatientRow = false;
  }


  async onAddPatient(value: Patient) {
    console.log(this.patientForm.value);
    console.log(value);
    let x = await this.PatientServiceobj.addPatient(value);
   // this.appointmentForm.updateValueAndValidity();
    return x;

  }

  // async getappointmentbyid(d)
  // {
  //   this.currentpatient = d.key;
  //   console.log(d.key)
  //   //console.log(value.key.appointmentId);
  //   let x = await this.PatientServiceobj.getAppointmentById(value.key.appointmentId);
  //   console.log(x);
  //   return x;
    
  // }

  async addApointment(value,cid) {
    console.log(cid.value);
    console.log(value);
    console.log(this.appointmentForm.value);
     this.appointmentForm.value.ConsultantId = cid.value;
     console.log(this.appointmentForm.value);
   let x = await this.PatientServiceobj.addAppointment(value);
    console.log(x);
    this.appointmentForm.reset();
   return x;
  }

  async updateAppointment(value) {
    console.log(value.key);

    let x = await this.PatientServiceobj.updateAppoint(value.key);
    console.log(x);
    return x;
  }

  async deleteAppointment(value) {
    console.log(value.key.appointmentId);
    let x = await this.PatientServiceobj.deleteAppointment(value.key.appointmentId);
    console.log(x);
    return x;
  }

  selectNewOrPrevious(e) {
    console.log(e.target.value);
    this.newOrPrevious = e.target.value;
    console.log(this.newOrPrevious);
  }

  hidePopup(e, popup) {
    if (e.target.id === 'popup') {
      popup.style.display = 'none'
    }
  }

  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length)
      e.component.selectRowsByIndexes(0);
    console.log(e)
  }
  selectionChanged(e) {
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
    console.log(e);

  }

 async getCurrentRowData(d) {
    this.currentpatient = d.key;
    console.log(d.key)
    console.log(this.currentpatient)
    console.log(this.currentpatient.appointmentId);

    this.getaptbyid = await this.PatientServiceobj.getAppointmentById(this.currentpatient.appointmentId);
    console.log(this.getaptbyid);
  
  }

  // findTestById(id) {
  //   let t;
  //   this.test.find(test => {
  //     console.log(test.testId);
  //     if(test.testId === id) {
  //       t = test;
  //       console.log(test);
  //       return test;
  //     } 
  //   });
  //   return t;
  // }

  //    selectionChanged(e)
  //    {

  //     console.log(e);


  // // this.appointtime = appointment;
  // // console.log(this.appointtime);
  // // console.log(this.appointtime.value);
  // // console.log(this.appointtime.key);
  // // console.log(this.appointtime.value.key);

  //    }

}
