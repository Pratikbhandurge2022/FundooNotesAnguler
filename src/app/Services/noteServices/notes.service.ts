import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Httpservice } from '../httpServices/http.service';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token : any;
  updateColor: any;

  constructor(private httpService : Httpservice) { 
    this.token = localStorage.getItem('token');

  }

  createNote(reqData : any){
     console.log(reqData)
    let header = {
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postService('https://localhost:44359/api/Notes/AddNote', reqData, true, header);
  }

  getNotes(){
    let header = {
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':`Bearer `+this.token
      })
    }
    return this.httpService.getService( 'https://localhost:44359/api/Notes/AllNotes',true,header);
  }

  updateNotes(data:any, noteId:any){
     console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putservice('https://localhost:44359/api/Notes/Update?noteid='+noteId,data,true,header);
   }

   ArchiveNotes(data:any ){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putservice('https://localhost:44359/api/Notes/Archive?noteid='+data,{},true,header);
   }

   TrashNotes(data:any){
    console.log(data);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putservice('https://localhost:44359/api/Notes/Trash?noteid='+data,{},true,header);
  }
  //https://localhost:44359/api/Notes/Trash?noteid=83

  NoteColor(data:any){
    console.log(data);
    let header = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ this.token
        
      })
    }
    //https://localhost:44359/api/Notes/Color?noteid=10&color=m 
    return this.httpService.putservice(`https://localhost:44359/api/Notes/Color?noteid=${data.noteID}&color=${data.color}`,{},true,header)
  }






}
