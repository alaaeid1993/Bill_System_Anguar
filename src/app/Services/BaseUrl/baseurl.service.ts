import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseurlService {

  readonly BaseUrl = "http://localhost:27526/api"
  constructor(private http:HttpClient) { }
}
