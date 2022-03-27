import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  readonly apiurl = "http://localhost:27526/api"
  constructor(private http:HttpClient) { }

  getcompanylist(){
    return this.http.get<any>(this.apiurl + '/CompanyDatas');
  }

  addcompany(data:any){
    return this.http.post(this.apiurl + '/CompanyDatas',data);
  }

  updatecompany( data:any){
    return this.http.put(this.apiurl + `/CompanyDatas/`,data);
  }

  deletecompany(id:number | string){
    return this.http.delete(this.apiurl + `/CompanyDatas/${id}`);
  }
  
}
