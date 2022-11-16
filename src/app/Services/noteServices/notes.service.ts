import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Httpservice } from '../httpServices/http.service';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token: any;

  constructor(private httpService: Httpservice) {
    this.token = localStorage.getItem('token');

  }

  createNote(reqData: any) {
    console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postService('https://localhost:44359/api/Notes/Add', reqData, true, header);
  }

  getAllNotes(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.getService('https://localhost:44359/api/Notes/AllNotes', reqData, true, header);
  }

  // displayNote(id : any){
  //    console.log(id)
  //   let header = {
  //     headers:new HttpHeaders({
  //       'Content-type':'application/json',
  //       'Authorization':`Bearer ${this.token}`
  //     })
  //   }
  //   return this.httpService.getService('Notes/View/'+id, true);
  // }

}