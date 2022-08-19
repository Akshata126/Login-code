import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {

   }
   userLogin(data:any) {
    console.log("data", data,`https://retoolapi.dev/B13laa/getusers?user_id=${data.user_id}&password=${data.password}`)
    return this.http.get(`https://retoolapi.dev/B13laa/getusers?user_id=${data.user_id}&password=${data.password}`)
      
  }



  getEmpData(){
    return this.http.get('https://retoolapi.dev/GFHqAV/getemployees');
  }


  getEmpDetails(data1:any){
    console.log("data", data1,`https://retoolapi.dev/H2F0Ui/getemployedetail?id=${data1}`)
    return this.http.get(`https://retoolapi.dev/H2F0Ui/getemployedetail?id=${data1.id}`)


  }
}
