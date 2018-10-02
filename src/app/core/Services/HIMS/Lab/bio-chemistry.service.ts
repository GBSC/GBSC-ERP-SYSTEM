import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { BioChemistryTest } from '../../../../models/biochemistrytest';
import { Observable } from 'rxjs';
import { TestUnit } from '../../../../models/testunit';
import { referenceRange } from '../../../../models/referenceRange';
import { Embryologists } from '../../../../models/embryologists';
import { EmbryologyCode } from '../../../../models/embryologycodes';


@Injectable()
export class BioChemistryService {

    public referencerange: any;
    public embryologist: any;
    public embryologycode: any;

    private readonly API_URL = 'hims/api/';

    constructor(private http: HttpClient, private ApiService : ApiService) { }


    getTests(): Observable<BioChemistryTest> {
        return this.ApiService.get(this.API_URL + 'BioChemistry/GetBioChemistryTests');
        //return this.http.get<BioChemistryTest>(this.API_URL + 'BioChemistry/GetBioChemistryTests');
    }

    getUnits(): Observable<TestUnit> {
        return this.ApiService.get(this.API_URL + 'BioChemistry/GetTestUnits');
        //return this.http.get<TestUnit>(this.API_URL + "BioChemistry/GetTestUnits");
    }

    async addTest(test: BioChemistryTest) {
        return await this.ApiService.post(this.API_URL + 'BioChemistry/AddBioChemistryTest', test).subscribe(resp => console.log(resp));
        //this.http.post(this.API_URL + 'BioChemistry/AddBioChemistryTest', test).subscribe(resp => console.log(resp));
    }

    async addUnit(test: TestUnit) {
        return await this.ApiService.post(this.API_URL + 'BioChemistry/AddTestUnit', test).subscribe(resp => console.log(resp));
        //this.http.post(this.API_URL + 'BioChemistry/AddTestUnit', test).subscribe(resp => console.log(resp));
    }

    async getReferenceRanges() {
        this.referencerange = await this.ApiService.get(this.API_URL + 'BioChemistry/GetReferenceRanges').toPromise()
        //this.referencerange = await this.http.get<referenceRange>(this.API_URL + 'BioChemistry/GetReferenceRanges').toPromise()
        //console.log(this.referencerange);
        return this.referencerange;
    }

    async addReferenceRange(ReferenceRange: referenceRange) {
        return await this.ApiService.post(this.API_URL + '', ReferenceRange).toPromise();
        //let x = this.http.post(this.API_URL + 'BioChemistry/AddReferenceRange/', ReferenceRange).toPromise();
        //console.log(x);
        //return x;
    }

    async updateReferenceRange(ReferenceRange: referenceRange) {
        return await this.ApiService.put(this.API_URL + 'BioChemistry/UpdateReferenceRange', ReferenceRange).toPromise();
        // let x = await this.http.put(`${this.API_URL}/BioChemistry/UpdateReferenceRange/`, ReferenceRange).toPromise();
        // console.log(x);
        // return x;

    }

    async getEmbryologists() {
        this.embryologist = await this.ApiService.get(this.API_URL + 'HimsSetup/GetEmbryologists').toPromise();
        // this.embryologist = await this.http.get<Embryologists>(this.API_URL + '/HimsSetup/GetEmbryologists/').toPromise()
        // console.log(this.embryologist);
        return this.embryologist;
    }

    async addEmbryologist(embryologists: Embryologists) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddEmbryologist', embryologists).toPromise();
        // let x = await this.http.post(this.API_URL + '/HimsSetup/AddEmbryologist/', embryologists).toPromise();
        // console.log(x);
        // return x;
    }

    async updateEmbryologist(embryologists: Embryologists) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateEmbryologist', embryologists).toPromise();
        // let x = await this.http.put(this.API_URL + '/HimsSetup/UpdateEmbryologist/', embryologists).toPromise();
        // console.log(x);
        // return x;
    }

    async deleteEmbryologist(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteEmbryologist/' + id).toPromise();
        // let x = await this.http.delete(this.API_URL + '/HimsSetup/' + id).toPromise();
        // console.log(x);
        // return x;
    }


    async getEmbryologyCodes() {
        this.embryologycode = await this.ApiService.get(this.API_URL + 'HimsSetup/GetEmbryologyCodes').toPromise();
        // this.embryologycode = await this.http.get<EmbryologyCode>(this.API_URL + '/HimsSetup/GetEmbryologyCodes/').toPromise();
        // console.log(this.embryologycode);
        return this.embryologycode;
    }

    async addEmbryologyCode(embryologyCode: EmbryologyCode) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddEmbryologyCode', this.embryologycode).toPromise();
        // let x = await this.http.post(this.API_URL + '/HimsSetup/AddEmbryologyCode/', embryologyCode).toPromise();
        // console.log(x);
        // return x;
    }

    async updateEmbryologyCode(embryologyCode: EmbryologyCode) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateEmbryologyCode', this.embryologycode).toPromise();
        // let x = await this.http.put(this.API_URL + '/HimsSetup/UpdateEmbryologyCode/', embryologyCode).toPromise();
        // console.log(x);
        // return x;

    }

    async deleteEmbryologyCode(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteEmbryologyCode/' + id).toPromise();
        // let x = await this.http.delete(this.API_URL + '' + id).toPromise();
        // console.log(x);
        // return x;
    }

}
