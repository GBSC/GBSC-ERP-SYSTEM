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
    public patientById : any;

    public profileForm: FormGroup;

    private  PatientInvoiceItemsdata : any [] = [];

    public appointmenttestForm: FormGroup;
    public Tests: any = [];
    public tests: any;
    public currentpatient: any;
    public e: any;

    public getaptbyid: any;
    // ConsultantIdAndTentiveTime

    public ConsultantIdAppointmentDate: any;
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

    public currenttime : any;


    constructor(private toastr: ToastrService,private PatientServiceobj: PatientService, private formBuilder: FormBuilder, private Http : HttpClient,private router: Router) {

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
                'VisitStatus': ['pendding'],
                'VisitNatureId': [''],
                'PatientId': [''],
                'TimeIn': [''],
                'TimeOut': [''],
                'Remarks': [''],
                'IsFinalAppointment': [false],
                'IsCancelled' :[false],
                'TentativeTime': ['', Validators.required],
                'AppointmentDate':['']
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
      
    this.currentdate =  this.formatDate(new Date());   
    this.currenttime = new Date();

        await this.PatientServiceobj.getPatient();
        this.allpatients = this.PatientServiceobj.patients;
         console.log(this.allpatients);

        await this.PatientServiceobj.getappointments();
        this.appointment = this.PatientServiceobj.appointment;
         console.log(this.appointment);

        await this.PatientServiceobj.getAppointmentById(this.currentpatient);
        this.getaptbyid = this.PatientServiceobj.getApptbyId;
         console.log(this.getaptbyid);



        await this.PatientServiceobj.getConsultant();
        this.consultant = this.PatientServiceobj.consultant;
         console.log(this.consultant);

        await this.PatientServiceobj.getTests();
        this.tests = this.PatientServiceobj.testing;
         console.log(this.tests);

        await this.PatientServiceobj.GetVisitNatures();
        this.visitNatures = this.PatientServiceobj.visitNatures;
         console.log(this.visitNatures);

        this.appointmentbydate = await this.PatientServiceobj.getAppointmentByDate(this.formatDate(new Date()));
        console.log(this.appointmentbydate);

         this.tentativeAppointments = this.appointmentbydate.filter(a => a.isFinalAppointment == false  && a.isCancelled == false).map((a, i) => { a.index = i + 1; return a });
        this.finalizedAppointments = this.appointmentbydate.filter(a => a.isFinalAppointment == true).map((a, i) => { a.index = i + 1; return a });
        this.PatientType = [{ value: "new", display: "New" }, { value: "previous", display: "Previous" }];
   
   
        // var diff = Math.abs(this.date.getTime() - this.date.getTime());
        // var diffDays = Math.ceil(diff / (1000 * 3600 * 24));    
       
   
    }

    formatDate(date: Date) {
        return  date.getFullYear() + "-" + ( date.getMonth()+ 1 )+"-" + date.getDate();
    }

    formateDateTime(date: Date) {
        return  date.getHours()+":" + date.getMinutes() ;
    }

    formateDateAndTime(date : Date){
        return  date.getFullYear() + "-" + ( date.getMonth()+ 1 )+"-" + date.getDate() +"T" +  date.getHours()+":" + date.getMinutes();
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
    }

    remove(index) {
        this.Tests.splice(index, 1);
    }
    removeall(index) {
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

        let x = await this.PatientServiceobj.UpdateAppointmentTests(this.currentpatient.appointmentId, value);

        this.getaptbyid = await this.PatientServiceobj.getAppointmentById(this.currentpatient.appointmentId);
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
        }
    }

    addFieldValue() {
        this.showAddNewPatientRow = true;
    }

    deleteFieldValue() {
        this.showAddNewPatientRow = false;
    }


   
    private patid : number = null;

    get f() { return this.patientForm.controls; }

    async onAddPatient(value: Patient, popup) {
        this.submitted = true;
        this.patid = null;
        if (this.patientForm.invalid) {
            return alert('Please Select All Required Fileds');
        }
        delete this.patientForm.value.patientId
        this.patientIdIs = await this.PatientServiceobj.addPatient(value);
        popup.style.display = 'none';

        let x = this.PatientServiceobj.patientID;
         console.log(x)
        this.patientById =   await this.PatientServiceobj.GetPatientById(x.patientId);
        if(this.patientById) {
            this.patid = this.patientById.patientId;
        }
        console.log(this.patientById);
        this.allpatients.push(this.patientById);
        console.log(this.allpatients)
        this.patientForm.reset();
        return this.patientIdIs;
    }

    async addApointment(value, cid , date , time) {
        this.appointmentForm.value.AppointmentDate = date;
        this.appointmentForm.value.TentativeTime = date +'T' + time;
        if(this.patid) {
            value.PatientId = this.patid;
            this.patid = null;
        }


        if(value.PatientId == null || value.PatientId == ''){
            this.toastr.error('Please Select Patient');
        }
        else{
            console.log(this.allpatients);
            let x = this.allpatients.find(t => t.patientId == value.PatientId)
            console.log(x);
            if(x.appointments.length){
                if( x.appointments.find(t => 
                    (this.formatDate(new Date(t.appointmentDate)) == this.formatDate(new Date(value.AppointmentDate)))  && (t.consultantId == value.ConsultantId)   && (t.visitStatus == 'pendding' ||  t.visitStatus == 'start')) ){   
                    this.toastr.error('Appointment Already Started');
                 }
                else{
                    if( date == null ||  date == '' || date.length == 0 && time == null ||  time == '' || time.length == 0  && cid.value == null ||  cid.value == '' || cid.value.length == 0 ) {
                        this.toastr.error('Please Select AppointmentDate or Tentative Time Or Consultant');
                    }
                    else{
                        if(this.appointmentForm.value.IsFinalAppointment == true){
                                            this.appointmentForm.value.FinalTime = this.appointmentForm.value.TentativeTime ;
                                            this.appointmentForm.value.VisitStatus = 'pendding';
                                            this.appointmentForm.value.IsCancelled = 'false';
                                            this.appointmentForm.value.AppointmentDate = this.appointmentForm.value.FinalTime;
                                        }
                                        else {
                                            this.appointmentForm.value.IsFinalAppointment = 'false';
                                            this.appointmentForm.value.VisitStatus = 'pendding';
                                            this.appointmentForm.value.IsCancelled = 'false';
                                        }
                                        console.log(value);
                                          await this.PatientServiceobj.addAppointment(value);
                                                  
                         
                                        //let tr = await this.PatientServiceobj.addAppointment(value);
                                        // console.log(tr);
                                        // value.AppointmentId = tr.appointmentID;
                                        // console.log("New Appointment", value);
                                        // console.log("Before", x.appointments);
                                        // x.appointments.push(value);
                                        // console.log("After", x.appointments);

                                        this.ConsultantIdAppointmentDate =   await this.PatientServiceobj.GetAppointmentByConsultantNameAndDate(value.ConsultantId, value.AppointmentDate);
                                        this.tentativeAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == false && a.isCancelled == false   ).map((a, i) => { a.index = i + 1; return a });
                                        this.finalizedAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == true ).map((a, i) => { a.index = i + 1; return a });
                                        this.deleteFieldValue();
                                        this.appointmentForm.reset();
                                        this.patientForm.reset();
                                        this.patientForm.value.FirstName = '';
                                        this.patientForm.value.LastName = '';
                                        this.patientById = '';
                                        console.log('1');
                                        // this.patientById =   await this.PatientServiceobj.GetPatientById(x.patientId);
                                        // this.allpatients.push(this.patientById);
                                        // console.log(this.allpatients);  
                                        this.toastr.success('Appointment  Started');
                     }
                }
            }
            else{
                if(this.appointmentForm.value.IsFinalAppointment == true){
                    this.appointmentForm.value.FinalTime = this.appointmentForm.value.TentativeTime ;
                    this.appointmentForm.value.VisitStatus = 'pendding';
                    this.appointmentForm.value.IsCancelled = 'false';
                    this.appointmentForm.value.AppointmentDate = this.appointmentForm.value.FinalTime;
                }
                else {
                    this.appointmentForm.value.IsFinalAppointment = 'false';
                    this.appointmentForm.value.VisitStatus = 'pendding';
                    this.appointmentForm.value.IsCancelled = 'false';
                }
                console.log(value);
                await this.PatientServiceobj.addAppointment(value);
                // let tr = await this.PatientServiceobj.addAppointment(value);
                // console.log(tr);
                // value.AppointmentId = tr.appointmentID;
                // console.log("New Appointment", value);
                // console.log("Before", x.appointments);
                // x.appointments.push(value);
                // console.log("After", x.appointments);
                this.ConsultantIdAppointmentDate =   await this.PatientServiceobj.GetAppointmentByConsultantNameAndDate(value.ConsultantId, value.AppointmentDate);
                this.tentativeAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == false && a.isCancelled == false   ).map((a, i) => { a.index = i + 1; return a });
                this.finalizedAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == true ).map((a, i) => { a.index = i + 1; return a });
                this.deleteFieldValue();
                this.appointmentForm.reset();
                this.patientForm.reset();
                this.patientForm.value.FirstName = '';
                this.patientForm.value.LastName = '';
                this.patientById = '';
                console.log('2');
                // this.patientById =   await this.PatientServiceobj.GetPatientById(x.patientId);
                // this.allpatients.push(this.patientById);
                // console.log(this.allpatients);
                this.toastr.success('Appointment  Started');
            }
        }
      

          

        //       if( date == null ||  date == '' || date.length == 0 && time == null ||  time == '' || time.length == 0  && cid.value == null ||  cid.value == '' || cid.value.length == 0 ) {
        //     this.toastr.error('Please Select AppointmentDate or Tentative Time');
        // }
        //     else{
        //         this.appointmentForm.value.AppointmentDate = date;
        //         this.appointmentForm.value.TentativeTime = date +'T' + time;
        //         if(this.appointmentForm.value.PatientType == 'new'){
        //             this.appointmentForm.value.PatientId = this.PatientServiceobj.patientID.patientId;
        //             if(this.appointmentForm.value.IsFinalAppointment == true){
        //                 this.appointmentForm.value.FinalTime = this.appointmentForm.value.TentativeTime ;
        //                 this.appointmentForm.value.VisitStatus = 'pendding';
        //                 this.appointmentForm.value.IsCancelled = 'false';
        //                 this.appointmentForm.value.AppointmentDate = this.appointmentForm.value.FinalTime;
        //             }
        //             else {
        //                 this.appointmentForm.value.IsFinalAppointment = 'false';
        //                 this.appointmentForm.value.VisitStatus = 'pendding';
        //                 this.appointmentForm.value.IsCancelled = 'false';
        //             }
                  
        //             await this.PatientServiceobj.addAppointment(value);
        //             this.ConsultantIdAppointmentDate =   await this.PatientServiceobj.GetAppointmentByConsultantNameAndDate(value.ConsultantId, value.AppointmentDate);
        //             this.tentativeAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == false && a.isCancelled == false   ).map((a, i) => { a.index = i + 1; return a });
        //             this.finalizedAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == true ).map((a, i) => { a.index = i + 1; return a });
        //             this.deleteFieldValue();
        //             this.appointmentForm.reset();
        //             this.patientForm.reset();
        //             this.patientForm.value.FirstName = '';
        //             this.patientForm.value.LastName = '';
        //         }
        //         else{
        //             if(this.appointmentForm.value.IsFinalAppointment == true){
        //                 this.appointmentForm.value.FinalTime = this.appointmentForm.value.TentativeTime 
        //                 this.appointmentForm.value.VisitStatus = 'pendding';
        //                 this.appointmentForm.value.IsCancelled = 'false';
        //                 this.appointmentForm.value.AppointmentDate = this.appointmentForm.value.FinalTime ;
        //             }
        //             else {
        //                 this.appointmentForm.value.IsFinalAppointment = 'false';
        //                 this.appointmentForm.value.VisitStatus = 'pendding';
        //                 this.appointmentForm.value.IsCancelled = 'false';
        //             }
        //             await this.PatientServiceobj.addAppointment(value);
        //             this.ConsultantIdAppointmentDate =   await this.PatientServiceobj.GetAppointmentByConsultantNameAndDate(value.ConsultantId, value.AppointmentDate);
        //             this.tentativeAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == false  && a.isCancelled == false  ).map((a, i) => { a.index = i + 1; return a });
        //             this.finalizedAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == true ).map((a, i) => { a.index = i + 1; return a });
        //             this.deleteFieldValue();
        //             this.appointmentForm.reset();
        //             this.patientForm.reset();
        //             this.patientForm.value.FirstName = '';
        //             this.patientForm.value.LastName = '';
        //         }
        //     }
        }


    
    private consultantfee: any = {};

    async updateAppointment(value) {
       
      console.log(value.key);
       if(value.key.isFinalAppointment == true ){
          if(value.key.finalTime == null || value.key.finalTime == ''){
              console.log(value.key.tentativeTime);
            value.key.finalTime =  value.key.tentativeTime ;
            console.log(value.key.tentativeTime);
             value.key.appointmentDate = value.key.finalTime;
             console.log(value.key.finalTime);
             value.key.isCancelled = 'false';
            console.log('1',value.key);
          }

          else{console.log(value);
            let finaltime =   this.formateDateAndTime(new Date(value.key.finalTime));
            console.log(value);
            console.log(finaltime)
            value.key.finalTime = finaltime;
            value.key.appointmentDate = value.key.finalTime;
            value.key.isCancelled = 'false';
            console.log(value.key.finalTime);
            console.log('2',value.key);
          }

        // this.InvoiceForm.value.appointmentId = value.key.appointmentId;
        // this.consultantfee =   this.consultant.find(t=> t.consultantId ==  value.key.consultantId);
        // let x = [{
        //     name: "Appointment Fee",
        //     quantity: "1",
        //     grossAmount : this.consultantfee.charges
        //   }];
        //  this.PatientInvoiceItemsdata =  x ;
        //  this.InvoiceForm.value.patientInvoiceItems = this.PatientInvoiceItemsdata;
        //    await this.PatientServiceobj.AddPatientInvoice(this.InvoiceForm.value);
        //   console.log('AddPatientInvoice');
          console.log(value.key.finalTime);
           await this.PatientServiceobj.updateAppointment(value.key);
           console.log(value.key)
          console.log('updateAppointment');
          this.ConsultantIdAppointmentDate =   await this.PatientServiceobj.GetAppointmentByConsultantNameAndDate(value.key.consultantId, value.key.appointmentDate);
          console.log( this.ConsultantIdAppointmentDate);
          this.tentativeAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == false  && a.isCancelled == false  ).map((a, i) => { a.index = i + 1; return a });
          this.finalizedAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == true ).map((a, i) => { a.index = i + 1; return a });
            
    
     
    }
     
        await this.PatientServiceobj.updateAppointment(value.key);
    
        this.ConsultantIdAppointmentDate =   await this.PatientServiceobj.GetAppointmentByConsultantNameAndDate(value.key.consultantId, value.key.appointmentDate);
        console.log( this.ConsultantIdAppointmentDate);
        this.tentativeAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == false  && a.isCancelled == false  ).map((a, i) => { a.index = i + 1; return a });
        console.log(this.tentativeAppointments);
        this.finalizedAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == true ).map((a, i) => { a.index = i + 1; return a });
        console.log(this.finalizedAppointments);
                
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

    async GetAppointmentByConsultantNameAndDate(cid, date,value) {
         console.log(value.ConsultantId);
         console.log(cid);
         console.log(date);
         console.log(value);
         console.log(value.AppointmentDate);
         if(value.AppointmentDate == null || value.AppointmentDate == ''){
            value.AppointmentDate = this.currentdate;
         }   
        if( cid.value ==  null || cid.value  == '' ){
        // value.AppointmentDate = this.currentdate;
        this.appointmentbydate = await this.PatientServiceobj.getAppointmentByDate(value.AppointmentDate);
        this.tentativeAppointments = this.appointmentbydate.filter(a => a.isFinalAppointment == false && a.isCancelled == false ).map((a, i) => { a.index = i + 1; return a });
        this.finalizedAppointments = this.appointmentbydate.filter(a => a.isFinalAppointment == true).map((a, i) => { a.index = i + 1; return a });
        this.appointmentForm.reset();
        }
        else{
            if(cid.value !=  null || cid.value!= '' && value.AppointmentDate != null || value.AppointmentDate  != '' ){
                // value.AppointmentDate = this.currentdate;
                console.log(value.AppointmentDate);
                this.ConsultantIdAppointmentDate =   await this.PatientServiceobj.GetAppointmentByConsultantNameAndDate(cid.value, value.AppointmentDate);
                 console.log( this.ConsultantIdAppointmentDate);
                this.tentativeAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == false  && a.isCancelled == false ).map((a, i) => { a.index = i + 1; return a });
                this.finalizedAppointments = this.ConsultantIdAppointmentDate.filter(a => a.isFinalAppointment == true ).map((a, i) => { a.index = i + 1; return a });
                this.appointmentForm.reset();
         }
        }
    }

    selectNewOrPrevious(e) {
         console.log(e.target.value);
        this.newOrPrevious = e.target.value;
        console.log(this.appointmentForm.value.PatientId);
        if(this.appointmentForm.value.PatientId){
            this.appointmentForm.value.PatientId= '';
        }
       
        console.log(this.appointmentForm.value.PatientId);


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
        this.getaptbyid = await this.PatientServiceobj.getAppointmentById(this.currentpatient.appointmentId);
    }


    ViewInvoice(d){
        console.log(d);
    let appointmentID =     d.data.appointmentId ;
    this.router.navigate(['/hims/patient/paymentreceipt/' + appointmentID]);



    }

    hidepopup(popup) {
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
    log(e){
        console.log(e);
    }

}

