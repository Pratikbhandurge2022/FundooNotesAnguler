import { Injectable } from '@angular/core';
import { Httpservice } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Userservice {

  constructor(private httpService :Httpservice) { }

  register(Data : any){
    console.log(Data)
    let header = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService('https://localhost:44353/api/Users/Register', Data, false, header);
  }
   login(Data : any){
    //console.log(Data)
    let header = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService('https://localhost:44353/api/Users/LoginUser', Data, false, header);
  }
}