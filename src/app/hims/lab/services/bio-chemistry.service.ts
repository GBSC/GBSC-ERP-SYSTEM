import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BioChemistryTest } from '../../../models/biochemistrytest';
import { referenceRange } from '../../../models/referenceRange';
import { Observable } from 'rxjs/Observable';
import { TestUnit } from '../../../models/testunit';
import { Embryologists } from '../../../models/embryologists'
import { EmbryologyCode } from '../../../models/embryologycodes'


@Injectable()
export class BioChemistryService {

    public referencerange: any;
    public embryologist: any;
    public embryologycode: any;

    private readonly API_URL = 'http://gbsc-erp.azurewebsites.net/hims/api/';

    constructor(private http: HttpClient) { }


    getTests(): Observable<BioChemistryTest> {
        return this.http.get<BioChemistryTest>(this.API_URL + 'BioChemistry/GetBioChemistryTests');
    }

    getUnits(): Observable<TestUnit> {
        return this.http.get<TestUnit>(this.API_URL + "BioChemistry/GetTestUnits");
    }

    addTest(test: BioChemistryTest) {

        this.http.post(this.API_URL + 'BioChemistry/AddBioChemistryTest', test).subscribe(resp => console.log(resp));
    }

    addUnit(test: TestUnit) {

        this.http.post(this.API_URL + 'BioChemistry/AddTestUnit', test).subscribe(resp => console.log(resp));
    }

    async getReferenceRanges() {
        this.referencerange = await this.http.get<referenceRange>(this.API_URL + 'BioChemistry/GetReferenceRanges').toPromise()
        console.log(this.referencerange);
        return this.referencerange;
    }

    async addReferenceRange(ReferenceRange: referenceRange) {
        let x = this.http.post(this.API_URL + 'BioChemistry/AddReferenceRange/', ReferenceRange).toPromise();
        console.log(x);
        return x;
    }

    async updateReferenceRange(ReferenceRange: referenceRange) {

        let x = await this.http.put(`${this.API_URL}/BioChemistry/UpdateReferenceRange/`, ReferenceRange).toPromise();
        console.log(x);
        return x;

    }

    async getEmbryologists() {

        this.embryologist = await this.http.get<Embryologists>(this.API_URL + '/HimsSetup/GetEmbryologists/').toPromise()
        console.log(this.embryologist);
        return this.embryologist;
    }

    async addEmbryologist(embryologists: Embryologists) {

        let x = await this.http.post(this.API_URL + '/HimsSetup/AddEmbryologist/', embryologists).toPromise();
        console.log(x);
        return x;
    }

    async updateEmbryologist(embryologists: Embryologists) {

        let x = await this.http.put(this.API_URL + '/HimsSetup/UpdateEmbryologist/', embryologists).toPromise();
        console.log(x);
        return x;
    }

    async deleteEmbryologist(id) {

        let x = await this.http.delete(this.API_URL + '/HimsSetup/' + id).toPromise();
        console.log(x);
        return x;
    }


    async getEmbryologyCodes() {

        this.embryologycode = await this.http.get<EmbryologyCode>(this.API_URL + '/HimsSetup/GetEmbryologyCodes/').toPromise();
        console.log(this.embryologycode);
        return this.embryologycode;
    }

    async addEmbryologyCode(embryologyCode: EmbryologyCode) {
        let x = await this.http.post(this.API_URL + '/HimsSetup/AddEmbryologyCode/', embryologyCode).toPromise();
        console.log(x);
        return x;
    }

    async updateEmbryologyCode(embryologyCode: EmbryologyCode) {

        let x = await this.http.put(this.API_URL + '/HimsSetup/UpdateEmbryologyCode/', embryologyCode).toPromise();
        console.log(x);
        return x;

    }

    async deleteEmbryologyCode(id) {
        let x = await this.http.delete(this.API_URL + '' + id).toPromise();
        console.log(x);
        return x;
    }

}
