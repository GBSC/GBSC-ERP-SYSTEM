import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PatientService } from '../../../core';
import { Loginform } from '../../../core/Models/Auth/loginform';
import { Reference } from '../../../core/Models/HIMS/reference';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
})

export class RegistrationComponent implements OnInit {

    public patientForm: FormGroup;
    public partnerForm: FormGroup;
    public documentForm: FormGroup;
    public referenceForm: FormGroup;
    public patientReferenceForm: FormGroup;

    public editdocumentForm: FormGroup;
    public documents: any = [];
    public currentDoc: any = {};
    public addpartnet: any;
    public addDocument: any;
    public updateDocument = [];

    public addReference: any;

    public partnerDetails: any;
    public currentUser = new Loginform();
    public visitnature: any;
    id: number;
    public Patient: any = '';
    public forevent: File = null;
    public Documentupload: File;
    public patientId: any;
    submitted = false;
    spousesubmitted = false;
    referencesubmitted = false;
    documentsumitted = false;
    public getreferncdata: any;

    constructor(public toastr: ToastrService, public Location: Location, public cd: ChangeDetectorRef, public formBuilder: FormBuilder, public PatientServiceobj: PatientService, public router: Router, public route: ActivatedRoute) {

        this.referenceForm = this.formBuilder.group({
            //  'ReferredBy': [''],
            'PersonName': [''],
            // 'RefAddress': [''],
            // 'ReferenceTel': [''],
            'PatientId': [''],
            'patientReferenceId': ['']
        });



        this.documentForm = this.formBuilder.group({
            'DocumentName': ['', Validators.required],
            'Remarks': ['', Validators.required],
            'FilePath': ['', Validators.required]
        });
        this.partnerForm = this.formBuilder.group({
            'FirstName': ['', Validators.required],
            'MiddleName': [''],
            'LastName': ['', Validators.required],
            'DOB': [''],
            'PlaceOfBirth': [''],
            'Occupation': [''],
            'NIC': ['' ],
            'PartnerEmail': ['' ],
            'PhoneNumber': ['', Validators.required],
            'PatientId': [''],
            'PartnerId': ['']
        });
        this.patientForm = this.formBuilder.group({
            'RegCity': [''],
            'visitNatureId': [''],
            'FirstName': ['', Validators.required],
            'MiddleName': [''],
            'LastName': ['', Validators.required],
            'DOB': ['', Validators.required],
            'PlaceOfBirth': [''],
            'Occupation': [''],
            'NIC': ['', [Validators.required, Validators.minLength(13)]],
            'Gender': ['', Validators.required],
            'PhoneNumber': ['', [Validators.required, Validators.minLength(11)] ],
            'PhoneNumberSecond': [''],
            'PhoneNumberThird': [''],
            'PatientEmail': [''],
            'OfficeAddress': [''],
            'ResidenceAddress': [''],
            'Remarks': [''],
            'OfficeTel': [''],
            'ForeignAddress': [''],
            'Country': ['Pakistan', Validators.required],
            'City': ['Karachi', Validators.required],
            'State': [''],
            'PostalCode': [''],
            'Initial': [''],
            'PrivatePatientCons': [''],
            'PrivateHospital': [''],
            'AuthorizedPerson': [''],
            'patientReferenceId': ['']
            //'patientId' :['',Validators.required]
        });

        this.patientReferenceForm = this.formBuilder.group({
            'referredBy': [''],
            'initial': [''],
            'refAddress': [''],
            'referenceTel': ['']
        })
    }

      ngOnInit() {
          console.log("da")

        // this.PatientServiceobj.getCityList().subscribe((data) => {
        //     console.log("mydata",data)
        // });

        //  console.log(this.router.url);

        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.PatientServiceobj.GetPatientDetailPatientId(this.id).subscribe((Patient: any) => {
                this.Patient = Patient;
                console.log("H")
                    console.log("Patient",Patient)
                if (Patient) {
                    this.patientForm.patchValue({
                        RegCity : Patient.regCity,
                        visitNatureId: Patient.visitNatureId,
                        FirstName: Patient.firstName,
                        MiddleName: Patient.middleName,
                        LastName: Patient.lastName,
                        DOB: Patient.dob,
                        PlaceOfBirth: Patient.placeOfBirth,
                        Occupation: Patient.occupation,
                        NIC: Patient.nic,
                        Gender: Patient.gender,
                        PhoneNumber: Patient.phoneNumber,
                        PhoneNumberSecond: Patient.phoneNumberSecond,
                        PhoneNumberThird: Patient.phoneNumberThird,
                        PatientrEmail: Patient.patientrEmail,
                        OfficeAddress: Patient.officeAddress,
                        ResidenceAddress: Patient.residenceAddress,
                        Remarks: Patient.remarks,
                        OfficeTel: Patient.officeTel,
                        ForeignAddress: Patient.foreignAddress,
                        Country: Patient.country,
                        City: Patient.city,
                        State: Patient.state,
                        PostalCode: Patient.postalCode,
                        Initial: Patient.initial,
                        PrivatePatientCons: Patient.privatePatientCons,
                        PrivateHospital: Patient.privateHospital,
                        AuthorizedPerson: Patient.authorizedPerson,
                        patientReferenceId: Patient.patientReferenceId,

                    });
                    if (Patient.partner) {
                        console.log("Patient.partner",Patient.partner)
                        this.partnerForm.patchValue({
                            FirstName: Patient.partner.firstName,
                            MiddleName: Patient.partner.middleName,
                            LastName: Patient.partner.lastName,
                            DOB: Patient.partner.dob,
                            PlaceOfBirth: Patient.partner.placeOfBirth,
                            Occupation: Patient.partner.occupation,
                            NIC: Patient.partner.nic,
                            PartnerEmail: Patient.partner.partnerEmail,
                            PhoneNumber: Patient.partner.phoneNumber,
                        });
                    }


                    // this.referenceForm.patchValue({
                    //     ReferredBy: Patient.patientReference.referredBy,
                    //     PersonName: Patient.patientReference.personName,
                    //     RefAddress: Patient.patientReference.refAddress,
                    //     ReferenceTel: Patient.patientReference.referenceTel,
                    // });
                    
                    console.log(this.patientForm.value)

                }
            });
        });

        // await this.PatientServiceobj.getPatient();
        // let x = this.PatientServiceobj.patients;


        // await this.PatientServiceobj.getpatientForupdating(this.partnerDetails);
        // let y = this.PatientServiceobj.patientData;

        this.PatientServiceobj.getPatientDocumentByPatientId(this.id).subscribe((document) => {
            this.documents = document;
        });

        this.PatientServiceobj.getReference().subscribe((res: Reference) => {
            this.getreferncdata = res;
            console.log(this.getreferncdata);
        });

        // await this.PatientServiceobj.GetVisitNatures();
        // this.visitnature = this.PatientServiceobj.visitNatures;

        this.PatientServiceobj.getVisitNatures().subscribe(res =>{
            this.visitnature = res;
            console.log(this.visitnature);
    
        });

    
    }


    async addreference(value) {
        console.log(value)
        if ((value.initial == null || value.initial == '') && (value.refAddress == null || value.refAddress == '') && (value.referenceTel == null || value.referenceTel == '') && (value.referredBy == null || value.referredBy == '')) {
            this.toastr.error('Please Fill All Fields');
        }
        else {
            await this.PatientServiceobj.addReferenceAsync(value);

            // // // this.PatientServiceobj.addReference(value.key).subscribe(res => {
            // // //   console.log(res);
            // // // });
            this.PatientServiceobj.getReference().subscribe((res: Reference) => {
                this.getreferncdata = res;
                console.log(this.getreferncdata);
            });
            this.patientReferenceForm.reset();
        }

    }

    addrange() {



        //   let { value } = this.documentForm;

        // let doc = {
        //     //  DocumentName: value.DocumentName,
        //     //  Remarks: value.Remarks,
        //     FilePath: value.FilePath
        // }

        //this.allDocs.push(this.forevent2);
        this.allDocs.push(this.forevent2);

        // console.log(this.allDocs)
        //          this.documentss.push(doc);
        // console.log(this.documentss);
        this.documentForm.reset();

        // if (this.documentForm.valid) {
        //     this.documentss.push(doc);
        //     console.log(this.documentss);
        //     this.documentForm.reset();
        // } else {
        //     alert('All fields are required');
        // }

    }

    remove(index) {
        this.allDocs.splice(index, 1);
        //   console.log(index)
    }

    get f() { return this.patientForm.controls; }

    async onSubmit(value) {
        console.log(value);
        this.submitted = true;

        if (this.patientForm.invalid) {
            return alert('Please Select All Required Fields');
        }
        //  console.log(this.patientForm.invalid);

        // value.partner = this.addpartnet;
        // value.patientReference = this.addReference;

         this.patientId = await this.PatientServiceobj.addPatient(value);
        //  console.log(this.patientId);
        this.displayToastSuccess("Patient Registered");
        //  this.patientForm.reset();
        //    console.log(this.patientForm);


        // this.upload(this.patientId);
        // this.router.navigate(['/hims/patient/findpatient']);
        // this.PatientServiceobj.getPatient();
    }

    get s() { return this.partnerForm.controls; }

    async   onAddPartner(value) {
        this.spousesubmitted = true;

        if (this.partnerForm.invalid) {
            return alert('Please Select All Required Fields');
        }
        // delete this.partnerForm.value.PatientId;
        delete this.partnerForm.value.PartnerId;
        if (this.patientId === undefined) {
            return alert('First Add Patient Detail');
        }
        this.partnerForm.value.PatientId = this.PatientServiceobj.patientID.patientId;
        // this.addpartnet = value

        await this.PatientServiceobj.addSpouse(value);
        this.displayToastSuccess("Saved");

    }

    get r() { return this.referenceForm.controls; }

    async  onAddReference(value) {
        this.referencesubmitted = true;

        if (this.referenceForm.invalid) {
            return alert('Please Select All Required Fields');
        }
        //delete this.referenceForm.value.PatientId;
        delete this.referenceForm.value.patientReferenceId;
        if (this.patientId === undefined) {
            return alert('First Add Patient Detail');
        }
        this.referenceForm.value.PatientId = this.PatientServiceobj.patientID.patientId;
        await this.PatientServiceobj.addPatientReference(value);
        this.displayToastSuccess("Saved");

    }
    public docs: File[] = [];


    onAddDocument() {


        if (this.patientId === undefined) {
            return alert('First Add Patient Detail');
        }

        // this.docs = this.allDocs

        // console.log(this.docs);

        this.upload(this.patientId);
        this.displayToastSuccess("Saved");




    }

    async updatepatientRef(value) {
        this.referenceForm.value.PatientId = this.id;
        //  console.log(this.referenceForm.value.PatientId);

        if (this.Patient.patientReference === null) {
            delete this.referenceForm.value.patientReferenceId
            await this.PatientServiceobj.addPatientRef(value)
            this.displayToastSuccess("Saved");
            //  console.log(value)
        }

        else if (this.Patient.patientReference.patientReferenceId !== null) {
            //   console.log(this.Patient.patientReference.patientReferenceId);
            this.referenceForm.value.patientReferenceId = this.Patient.patientReference.patientReferenceId
            await this.PatientServiceobj.updatePatientRef(value)
            //   console.log(value);
            let updatepatientRefId = this.id;
            //  console.log(updatepatientRefId);
            this.router.navigate(['/hims/patient/profile/' + updatepatientRefId]);
            this.displayToastSuccess("Updated");
        }
    }



    async  updatePatientSpouse(value) {

        this.partnerForm.value.PatientId = this.id;
        //    console.log(this.partnerForm.value.PatientId);

        if (this.Patient.partner === null) {
            delete this.partnerForm.value.PartnerId
            await this.PatientServiceobj.addPatientSpouse(value);
            this.displayToastSuccess("Saved");

            //     console.log(value)
        }

        else if (this.Patient.partner.partnerId !== null) {
            //   console.log(this.Patient.partner.partnerId);
            this.partnerForm.value.PartnerId = this.Patient.partner.partnerId;
            await this.PatientServiceobj.updatePatientSpouse(value)
            //  console.log(value);
            let updatedpatientId = this.id;
            this.router.navigate(['/hims/patient/profile/' + updatedpatientId]);
            this.displayToastSuccess("Updated");

        }

    }







    async  updatePatient(value) {
        console.log(value);
        console.log(this.patientForm.value);
        
        this.patientForm.value.patientId = this.id;
        this.patientForm.value.mrn = this.Patient.mrn;
        this.patientForm.value.date = this.Patient.date;
        if (this.patientForm.value.dob === '') {
            this.patientForm.value.dob = this.Patient.dob;
        }
        //value.partner = this.Patient.partner;
        //value.patientDocuments = this.document;
        // value.patientReference = this.addReference;
        // value.partner = this.addpartnet;
        value.display = value.FirstName + ' ' + value.LastName + ' ' + value.mrn
        value.fullName = value.FirstName + ' ' + value.LastName
        console.log(value)
        await this.PatientServiceobj.updatePatient(value);
        let updatedpatientId = this.id;
        this.router.navigate(['/hims/patient/profile/' + updatedpatientId]);
        this.displayToastSuccess("Updated");
    }



    // <start work for image uploading .......... update record
    onfileselect(event) {
        this.forevent = <File>event.target.files[0];
        //    console.log(this.forevent)
    }
    async  onupload() {
        //   console.log('d');
        const f = new FormData();
        f.append('f', this.forevent);

        await this.PatientServiceobj.addDocument(f, this.id).toPromise();

        this.PatientServiceobj.getPatientDocumentByPatientId(this.id).subscribe(resp => this.documents = resp);
    }
    // <end work for image uploading

    public allDocs: File[] = [];
    public forevent2: any;
    public uploaded = 0;

    fileselect(event) {
        //  console.log(event);
        this.forevent2 = <File>event.target.files[0];
        //   console.log(this.forevent2);
    }
    async upload(patientId) {

        let fileCount: number = this.allDocs.length;
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('models', this.allDocs[i]);
            }
        }
        //   console.log(formData);

        await this.PatientServiceobj.addDocuments(formData, patientId);
    }


    // async deleteDocument(id, i) {
    //          console.log(i)
    //     await this.PatientServiceobj.deleteDocument(id);
    //     this.documents.splice(i, 1)
    // }
    
    deleteDocument(id , i ){
        console.log(id);
        this.PatientServiceobj.deletePatientDocument(id).subscribe(res=>{
            console.log(res);
 
              this.documents.splice(i, 1)
        });
    }





    goback() {
        this.Location.back();
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

    public Other: string = 'NoOther';
    public disable: boolean = true;

    // valueChanged(e){
    //     console.log(e);
    //     e.value == 

    // }


}