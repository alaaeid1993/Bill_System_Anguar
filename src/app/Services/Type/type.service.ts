import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  readonly apiurl = "http://localhost:27526/api"
  constructor(private http:HttpClient) { }

  gettypelist(){
    return this.http.get<any>(this.apiurl + '/TypeData');
  }

  addtype(data:any){
    return this.http.post(this.apiurl + '/TypeData',data);
  }

  updatetype( data:any){
    return this.http.put(this.apiurl + `/TypeData/`,data);
  }

  deletetype(id:number | string){
    return this.http.delete(this.apiurl + `/TypeData/${id}`);
  }

}
