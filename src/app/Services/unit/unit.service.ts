import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class unitService {

  readonly apiurl = "http://localhost:27526/api"
  constructor(private http:HttpClient) { }

  getunitlist(){
    return this.http.get<any>(this.apiurl + '/unit');
  }

  addunit(data:any){
    return this.http.post(this.apiurl + '/unit',data);
  }

  updateunit( data:any){
    return this.http.put(this.apiurl + `/unit/`,data);
  }

  deleteunit(id:number | string){
    return this.http.delete(this.apiurl + `/unit/${id}`);
  }

}
