import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PayrollService {

    //private baseUrl: string = "http://gbsc-erp.azurewebsites.net/SystemAdmin/api";
    private baseUrl: string = "http://localhost:58090/api";
    
    constructor(private httpClient: HttpClient) { }




}
