import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  readonly apiurl = "http://localhost:27526/api"
  constructor(private http:HttpClient) { }

  getitem(){
    return this.http.get<any>(this.apiurl + '/Item');
  }

  additem(data:any){
    return this.http.post(this.apiurl + '/Item',data);
  }

  getbyId(id:number){
    return this.http.get<any>(`${this.apiurl}/Item/${id}`)
  }
  // updateclient( data:any){
  //   return this.http.put(this.apiurl + `/Item/`,data);
  // }

  deleteitem(id:number | string){
    return this.http.delete(this.apiurl + `/Item/${id}`);
  }
}
