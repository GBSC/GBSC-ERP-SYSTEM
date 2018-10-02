
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../patient/services/patient.services';
<<<<<<< HEAD
=======
import { getLocaleDateTimeFormat } from '@angular/common';
>>>>>>> master
import { visitValue } from '@angular/compiler/src/util';
import { Loginform } from '../../../models/loginform';
import { InventorysystemService } from '../../../../app/Inventorysystem/service/Inventorysystem.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { Location } from '@angular/common';
=======

>>>>>>> master


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

<<<<<<< HEAD
    public editdocumentForm: FormGroup;
=======
    public editdocumentForm : FormGroup;
>>>>>>> master
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

<<<<<<< HEAD
    private document: any = [];

    private forevent: File = null;

=======
>>>>>>> master




    public documentss: any = [];
<<<<<<< HEAD
    constructor(private Location: Location, private cd: ChangeDetectorRef, private formBuilder: FormBuilder, private PatientServiceobj: PatientService, public router: Router, private route: ActivatedRoute) {
=======
    constructor(private formBuilder: FormBuilder, private PatientServiceobj: PatientService, public router: Router, private route : ActivatedRoute) {
>>>>>>> master

        this.referenceForm = this.formBuilder.group({
            'ReferredBy': ['', Validators.required],
            'PersonName': ['', Validators.required],
            'RefAddress': ['', Validators.required],
<<<<<<< HEAD
            'ReferenceTel': ['', Validators.required],
            'PatientId': [''],
            'patientReferenceId': ['']
=======
            'ReferenceTel': ['', Validators.required]
>>>>>>> master
        });
        this.documentForm = this.formBuilder.group({
            'DocumentName': ['', Validators.required],
            'Remarks': ['', Validators.required],
            'FilePath': ['', Validators.required]
        });
        this.partnerForm = this.formBuilder.group({
            'FirstName': ['', Validators.required],
            'MiddleName': ['', Validators.required],
            'LastName': ['', Validators.required],
            'DOB': ['', Validators.required],
            'PlaceOfBirth': ['', Validators.required],
            'Occupation': ['', Validators.required],
            'NIC': ['', Validators.required],
            'PhoneNumber': ['', Validators.required],
<<<<<<< HEAD
            'PatientId': [''],
            'PartnerId': ['']
=======
>>>>>>> master
        });
        this.patientForm = this.formBuilder.group({
            'RegCity': ['', Validators.required],
            'visitNatureId': ['', Validators.required],
            'FirstName': ['', Validators.required],
            'MiddleName': ['', Validators.required],
            'LastName': ['', Validators.required],
            'DOB': ['', Validators.required],
            'PlaceOfBirth': ['', Validators.required],
            'Occupation': ['', Validators.required],
            'NIC': ['', Validators.required],
            'Gender': ['', Validators.required],
            'PhoneNumber': ['', Validators.required],
            'OfficeAddress': ['', Validators.required],

            'ResidenceAddress': ['', Validators.required],
            'Remarks': ['', Validators.required],
            'OfficeTel': ['', Validators.required],
            'ForeignAddress': ['', Validators.required],
            'Country': ['', Validators.required],
            'City': ['', Validators.required],
            'State': ['', Validators.required],
            'PostalCode': ['', Validators.required],
            'Initial': ['', Validators.required],
            'PrivatePatientCons': ['', Validators.required],
            'PrivateHospital': ['', Validators.required],
            'AuthorizedPerson': ['', Validators.required],
            //'patientId' :['',Validators.required]
        });

        this.editdocumentForm = this.formBuilder.group({
            'DocumentName': ['', Validators.required],
            'Remarks': ['', Validators.required],
            'FilePath': ['', Validators.required]
        });
    }


<<<<<<< HEAD

=======
>>>>>>> master
    addrange() {

        let { value } = this.documentForm;

        let doc = {
<<<<<<< HEAD
            //  DocumentName: value.DocumentName,
            //  Remarks: value.Remarks,
            FilePath: value.FilePath
        }
        this.documentss.push(doc);
        console.log(this.documentss);
        this.documentForm.reset();

        // if (this.documentForm.valid) {
        //     this.documentss.push(doc);
        //     console.log(this.documentss);
        //     this.documentForm.reset();
        // } else {
        //     alert('All fields are required');
        // }
=======
            DocumentName: value.DocumentName,
            Remarks: value.Remarks,
            FilePath: value.FilePath
        }

        if (this.documentForm.valid) {
            this.documentss.push(doc);
            console.log(this.documentss);
            this.documentForm.reset();
        } else {
            alert('All fields are required');
        }
>>>>>>> master

    }

    remove(index) {
        this.documentss.splice(index, 1);
    }
    removeaddeddata(i)
    {
        this.Patient.patientDocuments.splice(i,1 )
        console.log(i)
    }

    async onSubmit(value) {
        localStorage.setItem('patientdata', JSON.stringify(value));
        value.partner = this.addpartnet;
        value.patientReference = this.addReference;
        value.patientDocuments = this.addDocument;
        console.log(value);
<<<<<<< HEAD

        await this.PatientServiceobj.addPatient(value);
        this.router.navigate(['/hims/patient/findpatient']);
        this.PatientServiceobj.getPatient();
=======
        await this.PatientServiceobj.addPatient(value);
        this.router.navigate(['/hims/patient/findpatient']);
        this.PatientServiceobj.getPatient();
        
        // this.PatientServiceobj.getPatient();
        // console.log(value);
        // return
>>>>>>> master
    }

    onAddPartner(value) {
        console.log(value);
        this.addpartnet = value
    }

<<<<<<< HEAD
    onAddDocument(value) {
        this.addDocument = value;
        console.log(value);
    }

    //   async updatepatientRef(value){
    //         this.referenceForm.value.PatientId = this.id;
    //         this.referenceForm.value.patientReferenceId = this.Patient.patientReference.patientReferenceId
    //         await this.PatientServiceobj.updatePatientRef(value)
    //     }

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





=======

    onupdatedocument(value){
       // this.updateDocument = value
        // console.log(this.documentss)
        console.log(value)
     }

    onAddDocument(value) {
       
        console.log(value);
     this.addDocument = value;
    }
>>>>>>> master

    onAddReference(value) {
        console.log(value);
        this.addReference = value;
    }

<<<<<<< HEAD
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

    downlaodImage(i) {
        console.log(i)
        console.log(this.route.url + this.document.filePath[i])
        // this.route.url+this.document.FilePath

    }

    // <start work for image uploading .......... update record
    onfileselect(event) {
        this.forevent = <File>event.target.files[0];
    }
    onupload() {
        const f = new FormData();
        f.append('f', this.forevent);
        this.PatientServiceobj.getPatientDocumentByPatientId(this.id).subscribe((document) => {
            this.document = document
            console.log(document)
        });
        this.PatientServiceobj.addDocument(f, this.id);
        this.PatientServiceobj.getPatientDocumentByPatientId(this.id).subscribe((document) => {
            this.document = document
            console.log(document)
        });
        // this.Patient.patientDocuments
    }
    // <end work for image uploading

    async deleteDocument(id, i) {
        console.log(i)
        await this.PatientServiceobj.deleteDocument(id);
        this.document.splice(i, 1)
=======
  async  updatePatient(value){
      console.log(value);
   // this.patientForm.value.patientId = this.id;
    //  let x = await  this.PatientServiceobj.updatePatient(value);
    // console.log(x);
>>>>>>> master
    }


    async ngOnInit() {

<<<<<<< HEAD
        console.log(this.router.url);

        this.route.params.subscribe((params) => {
            this.id = +params['id'];


            this.PatientServiceobj.getpatient(this.id).subscribe((Patient: any) => {
                this.Patient = Patient;
                this.documents = Patient.patientDocuments
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
=======
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
  
         
            this.PatientServiceobj.getpatient(this.id).subscribe((Patient : any)=> {
              this.Patient = Patient;
              
              this.patientForm.patchValue({
                  FirstName: Patient.firstName,
                });

           });


          });


        await this.PatientServiceobj.getPatient()
        let x = this.PatientServiceobj.patients
        console.log(x);
        console.log(this.PatientServiceobj.patients)
>>>>>>> master

        await this.PatientServiceobj.getpatientForupdating(this.partnerDetails);
        let y = this.PatientServiceobj.patientData
        console.log(y);

<<<<<<< HEAD
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

=======
        await this.PatientServiceobj.GetVisitNatures();
        this.visitnature = this.PatientServiceobj.visitNatures;
        console.log(this.visitnature);

   


    }
>>>>>>> master


}
