import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { ToastrService } from 'ngx-toastr';

// import { VisitTest } from 'src/app/core/Models/HIMS/visittest';

@Component({
    selector: 'app-visitdetail',
    templateUrl: './visitdetail.component.html',
    styleUrls: ['./visitdetail.component.scss']
})
export class VisitdetailComponent implements OnInit {

    id: number;
    public consultant: any = {};
    public visitdiagnos: any = {};
    public visittst: any = {};

    public visitnature: any = {};
    public visit: any = {};
    public appointment: any = {};
    private getconsultantbyId: any = {};
    private getvisitnatureId: any = {};
    private getvisitdiagnosesbyId: any = [];
    private getvisitTestbyId: any = [];

    private visitdiag: any = {};
    private visitTst: any = {};

    public visitnatures: any;

    private VisitVitalDetailForm: FormGroup;
    private VisitAppointmentForm: FormGroup;

    private VisitNoteForm: FormGroup;

    private VisitDiagnosesForm: FormGroup;

    private VisitTestForm: FormGroup;

    public updateTimeLimitExceeded: boolean = false;
    public vitalUpdateFieldsEnabled: boolean = false;


    constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private Location: Location, private PatientServiceobj: PatientService, private route: ActivatedRoute) {

        this.VisitVitalDetailForm = this.formBuilder.group({
            Height: ['', Validators.required],
            Weight: ['', Validators.required],
            Temperature: ['', Validators.required],
            RespiratoryRate: ['', Validators.required],
            Pulse: ['', Validators.required],
            BloodPressureUp: ['', Validators.required],
            BloodPressureDown: ['', Validators.required],
            BloodOxygenSaturation: ['', Validators.required],
            PatientVitalId: [''],
            VisitId: [''],
        });

        this.VisitAppointmentForm = formBuilder.group({
            VisitNatureId: [''],
            TentativeTime: [''],
            ConsultantId: [''],
            PatientType: ['pervious'],
            AppointmentId: [''],
            PatientId: [''],
            VisitId: [''],
        });

        this.VisitNoteForm = formBuilder.group({
            ClinicalNote: [''],
            VisitNoteId: [''],
            VisitId: [''],
        });

        this.VisitDiagnosesForm = formBuilder.group({
            diagnosisId: [''],
            visitId: [''],
            name: [''],
        });

        this.VisitTestForm = formBuilder.group({
            testId: [''],
            visitId: [''],
            testName: [''],
        });

    }





    enableVitalsInputFields() {
        //   console.log(this.formattime(new Date(this.visit.endTime)));
        //  console.log(this.formatDate(new Date()));
        console.log(this.formattime(new Date(this.visit.endTime)));
        if (this.formattime(new Date(this.visit.endTime)) > this.formatDate(new Date())) {
            //   console.log(true);
            this.vitalUpdateFieldsEnabled = false;
        } else {
            this.vitalUpdateFieldsEnabled = true;
            // console.log(false);
        }
    }








    async ngOnInit() {

        await this.PatientServiceobj.getConsultant();
        this.consultant = this.PatientServiceobj.consultant;
        //  console.log(this.consultant);

        await this.PatientServiceobj.getDiagnoses();
        this.visitdiagnos = this.PatientServiceobj.diagnoses;
        //  console.log(this.visitdiagnos)

        await this.PatientServiceobj.getTests();
        this.visittst = this.PatientServiceobj.testing;

        //   console.log(this.visittst);

        await this.PatientServiceobj.GetVisitNatures();
        this.visitnatures = this.PatientServiceobj.visitNatures;

        //   console.log(this.visitnatures);



        this.route.params.subscribe(params => {
            this.id = +params['id'];
            let x = this.PatientServiceobj.Getvisit(this.id).subscribe((visit: any) => {
                this.visit = visit;

                   console.log(this.visit);

                // work for disable time strat

                this.enableVitalsInputFields();


                // work for disable time end



                this.visitdiag = this.visit.visitDiagnoses

                // this.visitdiag.forEach(element => {
                //     this.getvisitdiagnosesbyId.push(this.visitdiagnos.find(t => 
                //         t.diagnosisId === element.diagnosisId));
                // });

                this.visitdiag.forEach(e => {
                    this.getvisitdiagnosesbyId.push(this.visitdiagnos.find(t => {
                        if (t.diagnosisId === e.diagnosisId) {
                            t.visitId = this.id;
                            //  console.log(t);
                            return t;
                        };
                    }));
                    //   console.log(this.getvisitdiagnosesbyId);
                });

                // this.PatientServiceobj.GetVisitTestsByVisitId(this.id).subscribe((res : VisitTest[]) =>{
                //     this.getvisitTestbyId = res;
                //     console.log( this.getvisitTestbyId);
                // });

                this.visitTst = this.visit.visitTests;

                this.visitTst.forEach(e => {
                    this.getvisitTestbyId.push(this.visittst.find(t => {
                        if (t.testId === e.testId) {
                            t.visitId = this.id;
                            //  console.log(t);
                            return t;
                        };
                    }));
                    //  console.log(this.getvisitTestbyId);
                });
                //  console.log(this.getvisitTestbyId);

                this.route.params.subscribe(params => {

                    this.id = +params['id'];

                    let x = this.PatientServiceobj.GetAppointmentByVisit(this.id).subscribe((appointment: any) => {
                        this.appointment = appointment;

                        console.log(this.appointment);
                        if (this.appointment == null || this.appointment == '') {
                            this.VisitAppointmentForm.value.VisitNatureId = '';
                            this.VisitAppointmentForm.value.TentativeTime = '';
                            this.VisitAppointmentForm.value.ConsultantId = '';
                        }
                        else {
                            this.getconsultantbyId = this.consultant.find(t => t.consultantId === appointment.consultantId);
                            this.getvisitnatureId = this.visitnatures.find(t => t.visitNatureId == appointment.visitNatureId);
                            this.VisitAppointmentForm.patchValue({
                                VisitNatureId: this.getvisitnatureId.visitNatureId,
                                TentativeTime: this.appointment.tentativeTime,
                                ConsultantId: this.getconsultantbyId.consultantId,
                            });
                        }




                    });


                });



                if (this.visit.patientVital) {
                    this.VisitVitalDetailForm.patchValue({
                        Height: visit.patientVital.height,
                        Weight: visit.patientVital.weight,
                        Temperature: visit.patientVital.temperature,
                        RespiratoryRate: visit.patientVital.respiratoryRate,
                        Pulse: visit.patientVital.pulse,
                        BloodPressureUp: visit.patientVital.bloodPressureUp,
                        BloodPressureDown: visit.patientVital.bloodPressureDown,
                        BloodOxygenSaturation: visit.patientVital.bloodOxygenSaturation,
                    });
                }

                if (this.visit.visitNote) {
                    this.VisitNoteForm.patchValue({
                        ClinicalNote: visit.visitNote.clinicalNote
                    });
                }




            });
        });



    }

    formatDate(date: Date) {



        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "/" + date.getHours() + "/" + (date.getMinutes() + 1);
    }
    formattime(date: Date) {

        //(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();

        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "/" + (date.getHours() + 5) + "/" + (date.getMinutes() + 16);
    }


    goback() {
        this.Location.back();
    }
    editvitals() {
        this.VisitVitalDetailForm.controls['Height'].enable();
    }

    async  editPatientVitals(value) {
        this.VisitVitalDetailForm.value.VisitId = this.id;
        if (this.visit.patientVitalId === null) {
            //   console.log(value);
            delete this.VisitVitalDetailForm.value.PatientVitalId;
            await this.PatientServiceobj.AddPatientVital(value);
            this.toastr.success('Saved');
        }
        else {
            this.VisitVitalDetailForm.value.PatientVitalId = this.visit.patientVitalId;

            await this.PatientServiceobj.UpdatePatientVital(value);
            this.toastr.success('Saved');
            //   console.log(value);
        }
    }

    async editPatientAppointment(value) {

        this.VisitAppointmentForm.value.PatientId = this.visit.patientId;
        this.VisitAppointmentForm.value.VisitId = this.id;
        if (this.VisitAppointmentForm.value.ConsultantId == null || this.VisitAppointmentForm.value.ConsultantId == '') {
            this.toastr.error('Please Select Consultant');
        }
        else if (this.VisitAppointmentForm.value.TentativeTime == null || this.VisitAppointmentForm.value.TentativeTime == '') {
            this.toastr.error('Please Select Tentative Time');
        }
        else if (this.VisitAppointmentForm.value.VisitNatureId == null || this.VisitAppointmentForm.value.VisitNatureId == '') {
            this.toastr.error('Please Select VisitNatur');
        }
        else {
            if (this.appointment === null) {
                delete this.VisitAppointmentForm.value.AppointmentId;
                await this.PatientServiceobj.addAppointment(value);
                this.toastr.success('Saved');
            }
            else {
                this.VisitAppointmentForm.value.AppointmentId = this.appointment.appointmentId;
                //   console.log(this.VisitAppointmentForm.value.visitNatureId);
                await this.PatientServiceobj.updateAppointmentFromVisitDetail(value);
                this.toastr.success('Saved');
                //   console.log(value);
            }
        }




    }

    async  editPatientclicnicalnote(value) {
        this.VisitNoteForm.value.VisitId = this.id;

        if (this.VisitNoteForm.value.ClinicalNote == null || this.VisitNoteForm.value.ClinicalNote == '') {
            this.toastr.error('Please Add Clinical Note');
        }
        else {
            if (this.visit.visitNote === null) {

                delete this.VisitNoteForm.value.VisitNoteId;
                await this.PatientServiceobj.addVisitNote(value);
                console.log(value);
                this.toastr.success('Saved');
            }
            else {
                this.VisitNoteForm.value.VisitNoteId = this.visit.visitNote.visitNoteId;
                await this.PatientServiceobj.updateVisitNote(value);
                console.log(value);
                this.toastr.success('Saved');
            }
        }

    }

    async  editviststest() {
        this.getvisitTestbyId = this.getvisitTestbyId.map(t => {
            let testId = {
                testId: t.testId,
                testName: t.testName,
                visitId: t.visitId,
            }
            return testId;
        });
        let visitsNTests = this.getvisitTestbyId.map(t => ({ testId: t.testId, visitId: t.visitId }));
        if (this.visit.visitTests.length > 0) {
            //  console.log(visitsNTests);
            await this.PatientServiceobj.AddVisitTestsByVisitId(this.id, visitsNTests);
            this.toastr.success('Saved');
        }
        else {
            //  console.log(visitsNTests);
            await this.PatientServiceobj.AddVisitTestsByVisitId(this.id, visitsNTests);
            this.toastr.success('Saved');
        }

        //  console.log(visitsNTests);
    }

    async editvistDiagnos() {

        this.getvisitdiagnosesbyId = this.getvisitdiagnosesbyId.map(t => {
            let diagnosisId = {
                diagnosisId: t.diagnosisId,
                name: t.name,
                visitId: t.visitId,
            }
            return diagnosisId;
        });
        let visitsNDiagnos = this.getvisitdiagnosesbyId.map(t => ({ diagnosisId: t.diagnosisId, visitId: t.visitId }));
        if (this.visit.visitTests.length > 0) {
            await this.PatientServiceobj.AddVisitDiagnosesByVisitId(this.id, visitsNDiagnos);
            this.toastr.success('Saved');
        }
        else {
            await this.PatientServiceobj.AddVisitDiagnosesByVisitId(this.id, visitsNDiagnos);
            this.toastr.success('Saved');
        }

        //  console.log(visitsNDiagnos);

        // this.getvisitdiagnosesbyId = this.getvisitdiagnosesbyId.map(t => {
        //     let diagnosisId = {
        //         diagnosisId: t.diagnosisId,
        //         name: t.name,
        //         visitId: t.visitId,
        //     }
        //     return diagnosisId;
        // });
        // console.log(this.getvisitdiagnosesbyId)

        // let visitsNDiagnoses = this.getvisitdiagnosesbyId.map(t => ({testId: t.testId, visitId: t.visitId}));
        // console.log(visitsNDiagnoses)
    }


    public VisitTst: any = [];

    addrangeVisittst() {
        if (this.VisitTestForm.value.testId == null || this.VisitTestForm.value.testId == '') {
            this.toastr.error('Please Select Test')
        }
        else {
            this.VisitTestForm.value.visitId = this.id;
            console.log(this.VisitTestForm.value.visitId);
            let { value } = this.VisitTestForm;

            let tst = this.visittst.find(t => t.testId === value.testId);
            let doc = {
                testId: value.testId,
                testName: tst.testName,
                visitId: this.id,

            }
            this.getvisitTestbyId.push(doc);
            console.log(this.VisitDiagnoses);

        }


    }
    public vitalUpdadddddteFieldsEnabled: boolean = false;

    removeTest(index) {
        //   this.vitalUpdadddddteFieldsEnabled = false;
        this.getvisitTestbyId.splice(index, 1);
    }


    public VisitDiagnoses: any = [];

    addrangeVisitdiagnis() {

        if (this.VisitDiagnosesForm.value.diagnosisId == null || this.VisitDiagnosesForm.value.diagnosisId == '') {
            this.toastr.error('Please select Diagnose')
        }
        else {
            this.VisitDiagnosesForm.value.visitId = this.id;

            let { value } = this.VisitDiagnosesForm;

            let diagnose = this.visitdiagnos.find(t => t.diagnosisId === value.diagnosisId);
            let doc = {
                diagnosisId: value.diagnosisId,
                name: diagnose.name,
                visitId: this.id,
            }
            this.getvisitdiagnosesbyId.push(doc);
            console.log(this.getvisitdiagnosesbyId);
        }


    }

    removediagnosis(index) {
        this.getvisitdiagnosesbyId.splice(index, 1);
    }

}
