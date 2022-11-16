import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Httpservice } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token : any;

  constructor(private httpService : Httpservice) { 
    this.token = localStorage.getItem('token');

  }

  createNote(reqData : any){
    console.log(reqData)
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postService('Notes/Create', reqData, true, header);
  }
  
}
