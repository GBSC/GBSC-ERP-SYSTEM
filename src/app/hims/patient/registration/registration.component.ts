import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PatientService } from '../../../core';
import { Loginform } from '../../../core/Models/Auth/loginform';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],

})


export class RegistrationComponent implements OnInit {

    private patientForm: FormGroup;
    public partnerForm: FormGroup;
    public documentForm: FormGroup;
    public referenceForm: FormGroup;

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

    public Patient: any = ' ';

    private document: any = [];

    private forevent: File = null;


    private Documentupload: File;

    private patientId: any;


    submitted = false;

    spousesubmitted = false;

    referencesubmitted = false;




    public documentss: any = [];
    constructor(private Location: Location, private cd: ChangeDetectorRef, private formBuilder: FormBuilder, private PatientServiceobj: PatientService, public router: Router, private route: ActivatedRoute) {

        this.referenceForm = this.formBuilder.group({
            'ReferredBy': [''],
            'PersonName': ['', Validators.required],
            'RefAddress': [''],
            'ReferenceTel': [''],
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
            'NIC': [''],
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
            'NIC': ['', [Validators.required , Validators.minLength(13)]],
            'Gender': ['', Validators.required],
            'PhoneNumber': ['',  [Validators.required , Validators.minLength(11)]],
            'OfficeAddress': [''],
            'ResidenceAddress': [''],
            'Remarks': [''],
            'OfficeTel': [''],
            'ForeignAddress': [''],
            'Country': ['', Validators.required],
            'City': ['', Validators.required],
            'State': [''],
            'PostalCode': [''],
            'Initial': [''],
            'PrivatePatientCons': [''],
            'PrivateHospital': [''],
            'AuthorizedPerson': [''],
            //'patientId' :['',Validators.required]
        });
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

        console.log(this.allDocs)
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
        console.log(index)
    }

    get f() { return this.patientForm.controls; }
    
    async onSubmit(value) {
        this.submitted = true;
     
        if (this.patientForm.invalid) {
            return alert('Please Select All Required Fileds') ;
        }
        console.log(this.patientForm.invalid);
    
            value.partner = this.addpartnet;
            value.patientReference = this.addReference;
            this.patientId = await this.PatientServiceobj.addPatient(value);
            this.upload(this.patientId.patientId);
            this.router.navigate(['/hims/patient/findpatient']);
            this.PatientServiceobj.getPatient();
    }

    get s() { return this.partnerForm.controls; }
    onAddPartner(value) {
        this.spousesubmitted = true;

        if (this.partnerForm.invalid) {
            return alert('Please Select All Required Fileds') ;
        }

        delete this.partnerForm.value.PatientId;
        delete this.partnerForm.value.PartnerId;
        console.log(value);
        this.addpartnet = value
     }
    public docs: File[] = [];
    onAddDocument() {

        // this.docs = {
        //     filePath: this.allDocs
        // }

        this.docs = this.allDocs

        console.log(this.docs);



    }

    async updatepatientRef(value) {
        this.referenceForm.value.PatientId = this.id;
        console.log(this.referenceForm.value.PatientId);

        if (this.Patient.patientReference === null) {
            delete this.referenceForm.value.patientReferenceId
            await this.PatientServiceobj.addPatientRef(value)
            console.log(value)
        }

        else if (this.Patient.patientReference.patientReferenceId !== null) {
            console.log(this.Patient.patientReference.patientReferenceId);
            this.referenceForm.value.patientReferenceId = this.Patient.patientReference.patientReferenceId
            await this.PatientServiceobj.updatePatientRef(value)
            console.log(value);
        }
    }



    async  updatePatientSpouse(value) {

        this.partnerForm.value.PatientId = this.id;
        console.log(this.partnerForm.value.PatientId);

        if (this.Patient.partner === null) {
            delete this.partnerForm.value.PartnerId
            await this.PatientServiceobj.addPatientSpouse(value)
            console.log(value)
        }

        else if (this.Patient.partner.partnerId !== null) {
            console.log(this.Patient.partner.partnerId);
            this.partnerForm.value.PartnerId = this.Patient.partner.partnerId;
            await this.PatientServiceobj.updatePatientSpouse(value)
            console.log(value);
        }

    }





    get r() { return this.referenceForm.controls; }

    onAddReference(value) {
        this.referencesubmitted = true;

        if (this.referenceForm.invalid) {
            return alert('Please Select All Required Fileds') ;
        }

        delete this.referenceForm.value.PatientId;
        delete this.referenceForm.value.patientReferenceId;
        console.log(value);
        this.addReference = value;
     }

    async  updatePatient(value) {
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
        let x = await this.PatientServiceobj.updatePatient(value);
        console.log(x);

        console.log(value)

    }



    // <start work for image uploading .......... update record
    onfileselect(event) {
        this.forevent = <File>event.target.files[0];
        console.log(this.forevent)
    }
    onupload() {
        const f = new FormData();
        f.append('f', this.forevent);
        this.PatientServiceobj.getPatientDocumentByPatientId(this.id).subscribe((document) => {
            this.document = document
            console.log(document)
        });
        console.log(f);
        this.PatientServiceobj.addDocument(f, this.id);
        console.log(f);
        this.PatientServiceobj.getPatientDocumentByPatientId(this.id).subscribe((document) => {
            this.document = document
            console.log(document)
        });
        // this.Patient.patientDocuments
    }
    // <end work for image uploading

    public allDocs: File[] = [];
    public forevent2: any;
    public uploaded = 0;
 

    fileselect(event) {
        console.log(event);
        this.forevent2 = <File>event.target.files[0];
        console.log(this.forevent2);
    }
    async upload(patientId) {

        let fileCount: number = this.docs.length;
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('models', this.docs[i]);
            }
        }
        console.log(formData);
        await this.PatientServiceobj.addDocuments(formData, patientId);
    }


    async deleteDocument(id, i) {
        console.log(i)
        await this.PatientServiceobj.deleteDocument(id);
        this.document.splice(i, 1)
    }


    async ngOnInit() {

        console.log(this.router.url);

        this.route.params.subscribe((params) => {
            this.id = +params['id'];


            this.PatientServiceobj.getpatient(this.id).subscribe((Patient: any) => {
                this.Patient = Patient;
                // this.documents = Patient.patientDocuments 
                console.log(Patient)

                this.patientForm.patchValue({
                    RegCity: Patient.regCity,
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
                });

                this.partnerForm.patchValue({

                    FirstName: Patient.partner.firstName,
                    MiddleName: Patient.partner.middleName,
                    LastName: Patient.partner.lastName,
                    DOB: Patient.partner.dob,
                    PlaceOfBirth: Patient.partner.placeOfBirth,
                    Occupation: Patient.partner.occupation,
                    NIC: Patient.partner.nic,
                    PhoneNumber: Patient.partner.phoneNumber,
                });

                this.referenceForm.patchValue({

                    ReferredBy: Patient.patientReference.referredBy,
                    PersonName: Patient.patientReference.personName,
                    RefAddress: Patient.patientReference.refAddress,
                    ReferenceTel: Patient.patientReference.referenceTel,
                });
            });


        });

        await this.PatientServiceobj.getPatient()
        let x = this.PatientServiceobj.patients
        console.log(x);
        console.log(this.PatientServiceobj.patients)

        await this.PatientServiceobj.getpatientForupdating(this.partnerDetails);
        let y = this.PatientServiceobj.patientData
        console.log(y);

        this.PatientServiceobj.getPatientDocumentByPatientId(this.id).subscribe((document) => {
            this.document = document
            console.log(document)
        });


        await this.PatientServiceobj.GetVisitNatures();
        this.visitnature = this.PatientServiceobj.visitNatures;
        console.log(this.visitnature);
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



}
