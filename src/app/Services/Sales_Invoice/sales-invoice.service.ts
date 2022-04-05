import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesInvoiceService {

  
  readonly apiurl = "http://localhost:27526/api"
  constructor(private http:HttpClient) { }

  getsale(){
    return this.http.get<any>(this.apiurl + '/Bill');
  }

  addsale(data:any){
    return this.http.post(this.apiurl + '/Bill',data);
  }

  updatsale( data:any){
    return this.http.put(this.apiurl + `/Bill/`,data);
  }

  deletesale(id:number | string){
    return this.http.delete(this.apiurl + `/Bill/${id}`);
  }


}
