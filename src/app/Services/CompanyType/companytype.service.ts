import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanytypeService {

  readonly apiurl = "http://localhost:27526/api"
  constructor(private http:HttpClient) { }

  getcomtylist(){
    return this.http.get<any>(this.apiurl + '/CompanyType');
  }


  addcomty(data:any){
    return this.http.post(this.apiurl + '/CompanyType',data);
  }

  updatecomty( data:any){
    return this.http.put(this.apiurl + `/CompanyType/`,data);
  }

  deletecomty(id:number | string){
    return this.http.delete(this.apiurl + `/CompanyType/${id}`);
  }


}
