import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DxDataGridModule, DxLoadPanelModule, DxDataGridComponent,DxTemplateModule} from 'devextreme-angular';
import popup from 'devextreme/ui/popup';
import { find } from 'rxjs/operator/find';
import { PatientService } from '../../../core';
import { ToastrService } from 'ngx-toastr';

import { Patient } from '../../../core/Models/HIMS/patient';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
 

@Component({
    selector: 'app-appointmentschedule',
    templateUrl: './appointmentschedule.component.html',
    styleUrls: ['./appointmentschedule.component.scss']
})
export class AppointmentscheduleComponent implements OnInit {

    @ViewChild('appointmentgrid') appointmentgrid: DxDataGridComponent;

    private patientForm: FormGroup;
    public patientIdIs;
    private appointmentForm: FormGroup;



    public PatientType: any;
    public consultant: any;
    public appointment: any;
    public appointmenttest: any;

    private newOrPrevious: string = 'previous';
    private tentativeorfinal: string = 'tetative';
    private showAddNewPatientRow: boolean = false;


    private appointmentTimeForm: FormGroup;
    private InvoiceForm : FormGroup;
    public appointtime: any;

    public allpatients: any;

    public profileForm: FormGroup;

    private  PatientInvoiceItemsdata : any [] = [];

    public appointmenttestForm: FormGroup;
    public Tests: any = [];
    public tests: any;
    public currentpatient: any;
    public e: any;

    public getaptbyid: any;
    // ConsultantIdAndTentiveTime

    public ConsultantIdTentiveTime: any;
    public id: any;
    public date: any;
    public visitNatures: any;

    private getTestbyId: any = [];
    public gettestName: any = [];

    submitted = false;

    private tentativeAppointments: any[];
    private finalizedAppointments: any[];

    public appointmentbydate : any;

    public currentdate : any;

    constructor(private toastr: ToastrService,private PatientServiceobj: PatientService, private formBuilder: FormBuilder, private Http : HttpClient,private router: Router) {

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
                PhoneNumber: ['', [Validators.required, Validators.minLength(11)]],
                NIC: ['', [Validators.required, Validators.minLength(13)]],

            });
        this.appointmentForm = this.formBuilder.group(
            {
                'PatientType': [''],
                'ConsultantId': ['', Validators.required],
                'VisitStatus': [''],
                'VisitNatureId': [''],
                'PatientId': [''],
                'TimeIn': [''],
                'TimeOut': [''],
                'Remarks': [''],
                'IsFinalAppointment': [false],
                'TentativeTime': ['', Validators.required]
            });

        this.appointmentTimeForm = this.formBuilder.group({
            'TimeIn': ['', Validators.required],
            'TimeOut': ['', Validators.required],
            'Remarks': ['', Validators.required]
        });

         this.InvoiceForm = this.formBuilder.group({
            appointmentId :[''],
            patientInvoiceItems :  this.formBuilder.array([])
        });
    }

    async  ngOnInit() {
      
     this.currentdate =   this.formatDate(new Date());    
     console.log(this.formatDate(new Date()));

        await this.PatientServiceobj.getPatient();
        this.allpatients = this.PatientServiceobj.patients;
      //  console.log(this.par);

        await this.PatientServiceobj.getappointments();
        this.appointment = this.PatientServiceobj.appointment;
     //   console.log(this.appointment);

        await this.PatientServiceobj.getAppointmentById(this.currentpatient);
        this.getaptbyid = this.PatientServiceobj.getApptbyId;
     //   console.log(this.getaptbyid);



        await this.PatientServiceobj.getConsultant();
        this.consultant = this.PatientServiceobj.consultant;
     //   console.log(this.consultant);

        await this.PatientServiceobj.getTests();
        this.tests = this.PatientServiceobj.testing;
     //   console.log(this.tests);

        await this.PatientServiceobj.GetVisitNatures();
        this.visitNatures = this.PatientServiceobj.visitNatures;
      //  console.log(this.visitNatures);

        // await this.PatientServiceobj.GetAppointmentTests();
        // this.appointmenttest = this.PatientServiceobj.appointmenttesting;
        // console.log(this.appointmenttest)

        this.appointmentbydate = await this.PatientServiceobj.getAppointmentByDate(this.formatDate(new Date()));


         this.tentativeAppointments = this.appointmentbydate.filter(a => a.isFinalAppointment == false).map((a, i) => { a.index = i + 1; return a });
        this.finalizedAppointments = this.appointmentbydate.filter(a => a.isFinalAppointment == true).map((a, i) => { a.index = i + 1; return a });
//console.log(this.tentativeAppointments)
        this.PatientType = [{ value: "new", display: "New" }, { value: "previous", display: "Previous" }];
    }

    formatDate(date: Date) {
        return date.getFullYear( ) + "-" +( date.getMonth()+ 1 )+"-" + date.getDate();
    
        //return (date.getMonth() + 1) + "/" + date.getDate() + "/" +date.getFullYear() ;
    }



    calculateCellValue(data) {
        return [data.firstName, data.lastName].join(" ");
    }

    showIt() {
        if (this.profileForm.valid) {
         //   console.log(this.profileForm);
        }
    }



    addrange() {
        let { value } = this.appointmenttestForm;
        let test = this.tests.find(t => t.testId == value.TestId);
        let doc = {
            TestId: value.TestId,
            TestName: test.testName

        }
        this.Tests.push(doc);
     //   console.log(this.Tests);
    }

    remove(index) {
        this.Tests.splice(index, 1);
    }
    removeall(index) {
        // this.Tests.splice(index,10000000000);
        this.Tests.length = 0
    }

    // async addappointmentTest(value: AppointmentTest) {
    //   console.log(value);
    //   let x = await this.PatientServiceobj.AddAppointmentTest(value);
    //   this.getaptbyid = await this.PatientServiceobj.getAppointmentById(this.currentpatient.appointmentId);
    //   this.appointmenttestForm.reset();
    //   console.log(x)
    // }

    async addappointmentTest(value) {

        this.Tests.filter(t => {
            return delete t.TestName;
        });


      //  console.log(value);
        let x = await this.PatientServiceobj.UpdateAppointmentTests(this.currentpatient.appointmentId, value);
      //  console.log(x)
     //   console.log(this.currentpatient.appointmentId, value);

        this.getaptbyid = await this.PatientServiceobj.getAppointmentById(this.currentpatient.appointmentId);
       // console.log(this.getaptbyid);
        this.removeall(value);
        return x;
    }

    // refresh() {
    //     this.dataGrid.instance.refresh();
    // }

    // async deleteapointmentTest(value) {
    //   console.log(value);
    //   let x = await this.PatientServiceobj.DeleteAppointmentTest(value.key.appointmentTestId);
    //   console.log(x);
    //   return x;
    // }

    valueChanged(d) {
        if (this.PatientType.value = "new") {
         //   console.log(d)
        }
    }

    addFieldValue() {
        this.showAddNewPatientRow = true;
    }

    deleteFieldValue() {
        this.showAddNewPatientRow = false;
    }

    get f() { return this.patientForm.controls; }

    async onAddPatient(value: Patient, popup) {
        this.submitted = true;

        if (this.patientForm.invalid) {
            return alert('Please Select All Required Fileds');
        }

    //    console.log(this.patientForm)

     //   console.log(this.patientForm.value.FirstName);
     //   console.log(value);
        delete this.patientForm.value.patientId
        this.patientIdIs = await this.PatientServiceobj.addPatient(value);
        popup.style.display = 'none';
     //   console.log(this.PatientServiceobj.patientID);

        let x = this.PatientServiceobj.patientID;
     //   console.log(x)
        return this.patientIdIs;
        

    }

    async addApointment(value, cid) {
      
          
            if (this.appointmentForm.value.PatientId === null || this.appointmentForm.value.PatientId === '') {
                //        console.log(this.PatientServiceobj.patientID.patientId);
                        this.appointmentForm.value.PatientId = this.PatientServiceobj.patientID.patientId;
                        await this.PatientServiceobj.addAppointment(value);
                    }

           
                    this.appointmentForm.value.ConsultantId = cid.value;

                    // if(this.appointmentForm.value.IsFinalAppointment === null || this.appointmentForm.value.IsFinalAppointment === '')
                    // {
                    //     this.appointmentForm.value.IsFinalAppointment = false;
                    // }
                  ///////////////  this.appointmentForm.value.patientId = this.patientIdIs.patientId;
                   ////////////// //console.log(this.appointmentForm.value);
        
                      let x = await this.PatientServiceobj.addAppointment(value);

                  //   this.allpatients = await this.PatientServiceobj.GetPatientById();
        
                    //  await this.PatientServiceobj.getPatient();
                    // this.allpatients = this.PatientServiceobj.patients;
                    console.log(cid.value, value.TentativeTime);
        
                     await this.PatientServiceobj.getConsultantIdAndTentiveTime(cid.value, value.TentativeTime);
                //  
                    this.ConsultantIdTentiveTime = this.PatientServiceobj.ConsultantIdAndTentiveTime;
                //    console.log(this.ConsultantIdTentiveTime);
                    this.tentativeAppointments = this.ConsultantIdTentiveTime.filter(a =>
                         a.isFinalAppointment == false);
                   console.log(this.tentativeAppointments);
                    this.finalizedAppointments = this.ConsultantIdTentiveTime.filter(a => a.isFinalAppointment == true).map((a, i) => { a.index = i + 1; return a });;
        
                    this.deleteFieldValue();
        
                    this.appointmentForm.reset();
                    this.patientForm.reset();
                    this.patientForm.value.FirstName = '';
                    this.patientForm.value.LastName = '';
                    this.displayToastSuccess("Appointment Schedule");
                    return x;
    }
    private consultantfee: any = {};

    async updateAppointment(value) {

      console.log(value.key);
      if(value.key.isFinalAppointment === true){
        this.InvoiceForm.value.appointmentId = value.key.appointmentId;
      this.consultantfee =   this.consultant.find(t=> t.consultantId ==  value.key.consultantId);
        let x = [{
            name: "Appointment Fee",
            quantity: "1",
            grossAmount : this.consultantfee.charges
          }];
         this.PatientInvoiceItemsdata =  x ;
         this.InvoiceForm.value.patientInvoiceItems = this.PatientInvoiceItemsdata;
          console.log(this.InvoiceForm.value);
          await this.PatientServiceobj.AddPatientInvoice(this.InvoiceForm.value);

          await this.PatientServiceobj.updateAppointment(value.key);

          
        //  this.appointmentbydate = await this.PatientServiceobj.getAppointmentByDate(this.formatDate(new Date()));
        //   if(value.key.)
        if( this.ConsultantIdTentiveTime == null        ){ 
            this.ConsultantIdTentiveTime = this.appointmentbydate;
        console.log(this.ConsultantIdTentiveTime);
        this.tentativeAppointments = this.ConsultantIdTentiveTime.filter(a => a.isFinalAppointment == false).map((a, i) => { a.index = i + 1; return a });
        this.finalizedAppointments = this.ConsultantIdTentiveTime.filter(a => a.isFinalAppointment == true).map((a, i) => { a.index = i + 1; return a });
    }
    else{
        this.ConsultantIdTentiveTime = this.PatientServiceobj.ConsultantIdAndTentiveTime;
        console.log(this.ConsultantIdTentiveTime);
        this.tentativeAppointments = this.ConsultantIdTentiveTime.filter(a => a.isFinalAppointment == false).map((a, i) => { a.index = i + 1; return a });
        this.finalizedAppointments = this.ConsultantIdTentiveTime.filter(a => a.isFinalAppointment == true).map((a, i) => { a.index = i + 1; return a });
    }   
     
    }

    await this.PatientServiceobj.updateAppointment(value.key);
    if( this.ConsultantIdTentiveTime == null        ){ 
        this.ConsultantIdTentiveTime = this.appointmentbydate;
    console.log(this.ConsultantIdTentiveTime);
    this.tentativeAppointments = this.ConsultantIdTentiveTime.filter(a => a.isFinalAppointment == false).map((a, i) => { a.index = i + 1; return a });
    this.finalizedAppointments = this.ConsultantIdTentiveTime.filter(a => a.isFinalAppointment == true).map((a, i) => { a.index = i + 1; return a });
}
else{
    this.ConsultantIdTentiveTime = this.PatientServiceobj.ConsultantIdAndTentiveTime;
    console.log(this.ConsultantIdTentiveTime);
    this.tentativeAppointments = this.ConsultantIdTentiveTime.filter(a => a.isFinalAppointment == false).map((a, i) => { a.index = i + 1; return a });
    this.finalizedAppointments = this.ConsultantIdTentiveTime.filter(a => a.isFinalAppointment == true).map((a, i) => { a.index = i + 1; return a });
}   
             
    }

    public SetTime: any;
    getCurrentRowDataForSetTime(d) {
        // if (d.key.timeIn === '' || d.key.timeOut === '' || d.key.remarks === ''){
        //     this.SetTime = d.key;
        //     console.log(d.key);

        // }
        // else{
        //     console.log('else body');

        // }
        this.SetTime = d.key;
    //    console.log(d.key);
    }

    async  SetTimeInOut(value) {
     //   console.log(value);
        this.SetTime.timeIn = <Date>value.TimeIn;
        this.SetTime.timeOut = <Date>value.TimeOut;
        this.SetTime.remarks = value.Remarks;
    //    console.log(this.SetTime);
        let x = await this.PatientServiceobj.updateAppointment(this.SetTime);
    //    console.log(x);
        this.appointmentTimeForm.reset();
        return x;
    }


    async deleteAppointment(value) {
      //  console.log(value.key.appointmentId);
        let x = await this.PatientServiceobj.deleteAppointment(value.key.appointmentId);
      //  console.log(x);
        return x;
    }

    async getConsultantIdAndTentive(cid, date) {
      //  console.log(cid.value, date.value);
        await this.PatientServiceobj.getConsultantIdAndTentiveTime(cid.value, date.value);
        this.ConsultantIdTentiveTime = this.PatientServiceobj.ConsultantIdAndTentiveTime;
        this.tentativeAppointments = this.ConsultantIdTentiveTime.filter(a => a.isFinalAppointment == false).map((a, i) => { a.index = i + 1; return a });
        this.finalizedAppointments = this.ConsultantIdTentiveTime.filter(a => a.isFinalAppointment == true).map((a, i) => { a.index = i + 1; return a });
     //   console.log(this.tentativeAppointments);
      //  console.log(this.ConsultantIdTentiveTime);

     //   console.log(this.ConsultantIdTentiveTime.visitNature);
    }

    selectNewOrPrevious(e) {
     //   console.log(e.target.value);
        this.newOrPrevious = e.target.value;
       // console.log(this.newOrPrevious);
    }

    hidePopup(e, popup) {
        if (e.target.id === 'popup') {
            popup.style.display = 'none'
        }
    }

    contentReady(e) {
        if (!e.component.getSelectedRowKeys().length)
            e.component.selectRowsByIndexes(0);
     //   console.log(e)
    }
    selectionChanged(e) {
        e.component.collapseAll(-1);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
     //   console.log(e);

    }

    async getCurrentRowData(d) {
        this.currentpatient = d.key;
      //  console.log(d.key)
     //   console.log(this.currentpatient)
      //  console.log(this.currentpatient.appointmentId);
        this.getaptbyid = await this.PatientServiceobj.getAppointmentById(this.currentpatient.appointmentId);
      //  console.log(this.getaptbyid);

    }


    ViewInvoice(d){
        console.log(d);
    let appointmentID =     d.data.appointmentId ;
    this.router.navigate(['/hims/patient/paymentreceipt/' + appointmentID]);



    }

    hidepopup(popup) {
     //   console.log('popup')
        popup.style.display = 'none';
    }

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    displayToastSuccess(message) {
        this.toastr.success(message);
    }

    displayToastError(message) {
        this.toastr.error(message);
    }

}

