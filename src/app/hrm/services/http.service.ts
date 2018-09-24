import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  async get(url) {
    return await this.http.get(url).toPromise()
  }

  async post(url, body, headers) {
    return await this.http.post(url, body, headers).toPromise();

  }

 async put(url, body, headers) {
   return await this.http.put(url, body, headers).toPromise();
   
  }
  
  async delete(url) { 
  return await this.http.delete(url).toPromise();
  }
}
