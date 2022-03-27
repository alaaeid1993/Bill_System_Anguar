import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  readonly apiurl = "http://localhost:27526/api"
  constructor(private http:HttpClient) { }

  getunitlist(){
    return this.http.get<any>(this.apiurl + '/Unit');
  }

  addunit(data:any){
    return this.http.post(this.apiurl + '/Unit',data);
  }

  updateunit( data:any){
    return this.http.put(this.apiurl + `/Unit/`,data);
  }

  deleteunit(id:number | string){
    return this.http.delete(this.apiurl + `/Unit/${id}`);
  }

}
