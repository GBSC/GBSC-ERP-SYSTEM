import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmbryologistService {


    public Url = "Hims/api/HimsSetup/"


    constructor(public http: HttpClient, public ApiService: ApiService) { }

    getEmbryologists(): Observable<any> {
        return this.ApiService.get(this.Url + "GetEmbryologists");
    }

    getEmbryologist(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "GetEmbryologist/" + id);
    }

    addEmbryologist(value): Observable<any> {
        return this.ApiService.post(this.Url + "AddEmbryologist", value);
    }

    updateEmbryologist(value): Observable<any> {
        return this.ApiService.put(this.Url + "UpdateEmbryologist", value);
    }

    deleteEmbryologist(id) {
        this.ApiService.delete(this.Url + "DeleteEmbryologist/" + id);
    }

}
