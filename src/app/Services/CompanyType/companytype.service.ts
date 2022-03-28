import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanytypeService {

  readonly apiurl = "http://localhost:27526/api"
  constructor(private http:HttpClient) { }

  getclientlist(){
    return this.http.get<any>(this.apiurl + '/CompanyType');
  }

  addclient(data:any){
    return this.http.post(this.apiurl + '/CompanyType',data);
  }



}
