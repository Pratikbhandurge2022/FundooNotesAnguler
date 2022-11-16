import { Component, OnInit } from '@angular/core';
//import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  public takeNote: boolean = false;
  title: string = "";
  description: string = "";
  color: string = "";
  image: string = "";
  isArchive: boolean = false;
  isPin: boolean = false;
  isTrash: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }
  clickTakeNote() {
    this.takeNote = true
  }
  createNote() {
    this.takeNote = true
  }

  closeNote() {
    this.takeNote = false
  }

}