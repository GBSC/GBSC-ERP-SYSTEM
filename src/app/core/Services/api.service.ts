import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

    public user: any;

    constructor(
        public http: HttpClient,
        // public jwtService: JwtService
    ) {
        this.user = JSON.parse(localStorage.getItem('user'));
       
    }

    public formatErrors(error: any) {
        return _throw(error.error);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {

        if (this.user && params.keys().length == 0) {
            params = new HttpParams()
                .set("companyId", this.user.assignedId.companyId)
                .set("departmentId", this.user.assignedId.departmentId)
                .set("branchId", this.user.assignedId.branchId)
                .set("cityId", this.user.assignedId.cityId)
                .set("countryId", this.user.assignedId.countryId)
        }

        return this.http.get(`${environment.api_url}${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }
    
    Get(path: string, params: HttpParams = new HttpParams()): Observable<any> {

        if (this.user && params.keys().length == 0) {
            params = new HttpParams()

                .set("companyId", this.user.assignedId.companyId)
        }

        return this.http.get(`${environment.api_url}${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }

    put(path: string, body: any = {}): Observable<any> {
        if(this.user){
            body.companyId = this.user.assignedId.companyId;
            body.departmentId = this.user.assignedId.departmentId;
            body.branchId = this.user.assignedId.branchId;
            body.cityId = this.user.assignedId.cityId;
            body.countryId = this.user.assignedId.countryId;
        }
        return this.http.put(
            `${environment.api_url}${path}`,
            body
        ).pipe(catchError(this.formatErrors));
    }


    post(path: string, body: any = {}): Observable<any> {
        console.log(this.user)
        if(this.user){
            body.companyId = this.user.assignedId.companyId;
            body.departmentId = this.user.assignedId.departmentId;
            body.branchId = this.user.assignedId.branchId;
            body.cityId = this.user.assignedId.cityId;
            body.countryId = this.user.assignedId.countryId;
        }
        return this.http.post(
            `${environment.api_url}${path}`,
            body
        ).pipe(catchError(this.formatErrors));
    }

    delete(path): Observable<any> {
        return this.http.delete(
            `${environment.api_url}${path}`
        ).pipe(catchError(this.formatErrors));
    }
}
