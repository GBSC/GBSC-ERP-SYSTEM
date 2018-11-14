import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable()
export class ProtocolService {

    private Url = "Hims/api/Protocol/"

    constructor(private http: HttpClient, private ApiService: ApiService) { }

    getProtocols(): Observable<any> {
        return this.ApiService.get(this.Url + "GetAllProtocols");
    }

    getProtocol(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "GetProtocol/" + id);
    }

    addProtocol(value): Observable<any> {
        return this.ApiService.post(this.Url + "AddProtocol", value);
    }

    updateProtocol(value): Observable<any> {
        return this.ApiService.put(this.Url + "UpdateProtocol", value);
    }

    deleteProtocol(id) {
        this.ApiService.delete(this.Url + "DeleteProtocol" + id);
    }
}
