import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { BioChemistryTest } from '../../../Models/HIMS/biochemistrytest';
import { TestUnit } from '../../../Models/HIMS/testunit';
import { referenceRange } from '../../../Models/HIMS/referenceRange';
import { Embryologists } from '../../../Models/HIMS/embryologists';
import { EmbryologyCode } from '../../../Models/HIMS/embryologycodes';


@Injectable()
export class BioChemistryService {

    public referencerange: any;
    public embryologist: any;
    public embryologycode: any;

    private readonly API_URL = 'hims/api/biochemistry/';

    constructor(private http: HttpClient, private ApiService: ApiService) { }


    getPatientBioChemistryTestByClinicalRecordId(id: number) {
        return this.ApiService.get(this.API_URL + 'GetPatientBioChemistryTestByClinicalRecordId/' + id);
    }

    getPatientBioChemistryTests(): Observable<any> {
        return this.ApiService.get(this.API_URL + "GetPatientBioChemistryTests");
    }

    getPatientBioChemistryTestsByPatientId(patientId): Observable<any> {
        return this.ApiService.get(this.API_URL + "GetPatientBioChemistryTestsByPatientId/" + patientId);
    }

    getPatientBioChemistryTest(id: number): Observable<any> {
        return this.ApiService.get(this.API_URL + "GetPatientBioChemistryTest/" + id);
    }

    addPatientBioChemistryTest(value): Observable<any> {
        return this.ApiService.post(this.API_URL + "AddPatientBioChemistryTest", value);
    }

    updatePatientBioChemistryTest(value): Observable<any> {
        return this.ApiService.put(this.API_URL + "UpdatePatientBioChemistryTest", value);
    }

    deletePatientBiopsy(id) {
        this.ApiService.delete(this.API_URL + "DeleteBiopsy" + id);
    }

    getTests(): Observable<any> {
        return this.ApiService.get(this.API_URL + 'GetBioChemistryTests');
    }

    getUnits(): Observable<TestUnit> {
        return this.ApiService.get(this.API_URL + 'GetTestUnits');
    }

    addTest(test: BioChemistryTest): Observable<any> {
        return this.ApiService.post(this.API_URL + 'AddBioChemistryTest', test);
    }

    async addUnit(test: TestUnit) {
        return await this.ApiService.post(this.API_URL + 'AddTestUnit', test).subscribe(resp => console.log(resp));
    }

    async getReferenceRanges() {
        this.referencerange = await this.ApiService.get(this.API_URL + 'GetReferenceRanges').toPromise()
        return this.referencerange;
    }

    async addReferenceRange(ReferenceRange: referenceRange) {
        return await this.ApiService.post(this.API_URL + '', ReferenceRange).toPromise();
    }

    async updateReferenceRange(ReferenceRange: referenceRange) {
        return await this.ApiService.put(this.API_URL + 'UpdateReferenceRange', ReferenceRange).toPromise();

    }

    async getEmbryologists() {
        this.embryologist = await this.ApiService.get(this.API_URL + 'HimsSetup/GetEmbryologists').toPromise();

        return this.embryologist;
    }

    async addEmbryologist(embryologists: Embryologists) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddEmbryologist', embryologists).toPromise();
    }

    async updateEmbryologist(embryologists: Embryologists) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateEmbryologist', embryologists).toPromise();
    }

    async deleteEmbryologist(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteEmbryologist/' + id).toPromise();

    }


    async getEmbryologyCodes() {
        this.embryologycode = await this.ApiService.get(this.API_URL + 'HimsSetup/GetEmbryologyCodes').toPromise();
        return this.embryologycode;
    }

    async addEmbryologyCode(embryologyCode: EmbryologyCode) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddEmbryologyCode', this.embryologycode).toPromise();
    }

    async updateEmbryologyCode(embryologyCode: EmbryologyCode) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateEmbryologyCode', this.embryologycode).toPromise();


    }

    async deleteEmbryologyCode(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteEmbryologyCode/' + id).toPromise();

    }

}
