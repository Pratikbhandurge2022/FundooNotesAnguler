import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Httpservice {

  constructor(private httpClient: HttpClient) { }
  postService(url: any, Data: any, token: boolean = false, Options: any={}) {
    return this.httpClient.post(url, Data, token && Options);
  }

  getService(url: any, token: boolean = false, Options: any={} ) {
    return this.httpClient.get(url,token && Options);
  }
  
  
  putservice(url:any, data:any, token:boolean=false, option:any){
    return this.httpClient.put(url,data,token && option);
  }
  Deleteservice(url:any, data:any, token:boolean=false, option:any){
    return this.httpClient.delete(url,token && option);
   }
}
