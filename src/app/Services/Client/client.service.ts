import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly apiurl = "http://localhost:27526/api"
  constructor(private http:HttpClient) { }

  getclientlist(){
    return this.http.get<any>(this.apiurl + '/Client');
  }

  addclient(data:any){
    return this.http.post(this.apiurl + '/Client',data);
  }

  updateclient( data:any){
    return this.http.put(this.apiurl + `/Client/`,data);
  }

  deleteclient(id:number | string){
    return this.http.delete(this.apiurl + `/Client/${id}`);
  }

}
