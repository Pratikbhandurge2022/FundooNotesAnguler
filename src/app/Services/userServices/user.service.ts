import { Injectable } from '@angular/core';
import { Httpservice } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Userservice {

  constructor(private httpService: Httpservice) { }

  register(Data: any) {
    console.log(Data)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService('https://localhost:44359/api/Users/Register', Data, false, header);
  }
  login(Data: any) {
    //console.log(Data)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService('https://localhost:44359/api/Users/LoginUser', Data, false, header);
  }
  forgotPassword(Data: any){
    // console.log(reqData)
    let header = {
      header:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService(`https://localhost:44359/api/Users/ForgetPassword?email=${Data.email}`, Data, false, header);
  }
  resetPassword(Data: any,token:any){
     //console.log(Data)
    let header = {
      header:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorization':`Bearer ${token}`
      })
    }
    return this.httpService.postService(`https://localhost:44359/api/Users/Reset?password=${Data.Password}&confirmPassword=${Data.confirmPassword}`, Data, false, header);
  }
  


}