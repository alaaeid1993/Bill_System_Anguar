import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedServiseService {

  readonly APIUrl="http://localhost:4200/";
  
  constructor(private http:HttpClient) { }

  GetCompanyDatas():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/companydata')
  }

  addcom(val:any){
    return this.http.post(this.APIUrl+'/companydata',val)
  }

  updatecom(val:any){
    return this.http.put(this.APIUrl+'/companydata',val)
  }

  delcom(val:any){
    return this.http.delete(this.APIUrl+'/companydata',val)
  }




}
