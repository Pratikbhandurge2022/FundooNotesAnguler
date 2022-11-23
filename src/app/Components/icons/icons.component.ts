import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/noteServices/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject: any

  constructor(public note: NotesService) { }

  ngOnInit(): void {
  }
  onArchive() {

    let reqData = {
      noteID: [this.noteObject.noteID],
    }
    console.log(this.noteObject.noteID);
    this.note.ArchiveNotes(this.noteObject.noteID).subscribe((response: any) => {
      console.log("Note Archived Successfully", response);

    })
  }

}
