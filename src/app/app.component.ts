import { Component } from '@angular/core';
import {GetdummyService} from "./getdummy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHttpClient';
  email='some@gmail.com'

  constructor(private getDummyService:GetdummyService) {
  }
  showData(){
    this.getDummyService.getData().subscribe((resData)=> this.email=resData.data.email);
}
  showOurData(){
    this.getDummyService.getOurData().subscribe((resOutData)=>this.email=resOutData.email)
  }


}
