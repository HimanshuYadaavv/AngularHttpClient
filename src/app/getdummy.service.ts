import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Userdata} from "./userdata";
import {Userdetails} from "./userdetails";

@Injectable({
  providedIn: 'root'
})
export class GetdummyService {
  url1="https://reqres.in/api/users/2";
  url2="http://localhost:8090/api/0.1/newuserdetail";

  constructor(private  httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get<Userdata>(this.url1);
  }
  getOurData(){
    return this.httpClient.get<Userdetails>(this.url2)
  }
}
