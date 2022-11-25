import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/Services/noteServices/notes.service';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';
import { ActivatedRoute } from '@angular/router';
import { outputAst } from '@angular/compiler';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject: any;
  //@Output() displayicons = new EventEmitter<string>();
  


  isArchieve: boolean = false;
  isTrash: boolean = false;
  colorArray = [{ colorCode: "maroon" },
  { colorCode: "silver" },
  { colorCode: "Yellow" },
  { colorCode: "Purple" },
  { colorCode: "pink" },
  { colorCode: "chocolate" },
  { colorCode: "Wheat" },
  { colorCode: "indigo" },
  { colorCode: "hotpink" },
  { colorCode: "lightblue" },
  { colorCode: "green" },
  { colorCode: "olive" }];
  noteListId: any;

  constructor(private note: NotesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let component = this.route.snapshot.component;
    if (component == TrashComponent) {
      this.isTrash = true;
    }
    if (component == ArchiveComponent) {
      this.isArchieve = true;
    }
  }
  onArchive() {
    let reqData = {
      NoteID: [this.noteObject.noteID],
    }
    console.log(reqData);
    this.note.ArchiveNotes(this.noteObject.noteID).subscribe((response: any) => {
      console.log("Note Archived Successfully", response);
      // window.location.reload();
    })
  }
  onUnArchievenote() {

    this.note.ArchiveNotes(this.noteObject.noteID).subscribe((response: any) => {
      console.log(response);

    })
  }
  selectColor(color: any) 
  {
    this.noteListId = this.noteObject.color = color;
    let reqData = {
      noteID: this.noteObject.noteID,
      color: color,
    };
    console.log("color", reqData)
    this.note.NoteColor(reqData).subscribe((response: any) => {
      console.log(response);
      
    })
  }

  onTrash() {
    let reqData = {
      noteID: [this.noteObject.noteID],
    }
    console.log(reqData)
    this.note.TrashNotes(this.noteObject.noteID).subscribe((response: any) => {
      console.log("Note trash Successfully", response);

    })
  }



  onDelete() {
    let reqData = {
      noteID: [this.noteObject.noteID],
    }
    console.log(reqData)
    this.note.DeleteNotes(this.noteObject.noteID).subscribe((response: any) => {
      console.log("Note trash Successfully", response);

    })
  }
  onRestore() {

    this.note.TrashNotes(this.noteObject.noteID).subscribe((response: any) => {
      console.log(response);


    })
  }
  
}
  