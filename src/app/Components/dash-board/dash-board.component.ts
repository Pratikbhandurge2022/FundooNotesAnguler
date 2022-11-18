import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/noteServices/notes.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: 'dash-board.component.html',
  styleUrls: ['dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  public sidenavText : boolean=true;
 
  constructor(private notesService : NotesService) { }

  ngOnInit(): void {
  }

  getAllNotes(){
    this.notesService.getNotes().subscribe((response:any)=>{
      console.log("GetAll Notes successful", response);
    })
  }

  sideNav(){
    this.sidenavText = !this.sidenavText
  }

}