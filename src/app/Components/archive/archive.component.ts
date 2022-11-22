import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/Services/noteServices/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
 
  archiveList: any
  
  constructor(private notes:NotesService) { }

  ngOnInit(): void {
    this.getArchiveNotes();
  }

  getArchiveNotes(){
    this.notes.getNotes().subscribe((Response:any)=>{
      this.archiveList=Response;
      this.archiveList.reverse();
      this.archiveList=this.archiveList.filter((Object:any)=>{
        return Object.isArchive==true;
      })
      console.log("Archive notes ",this.archiveList);
      
    })

  }


}


