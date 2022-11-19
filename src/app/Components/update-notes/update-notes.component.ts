import { Component, OnInit, Inject } from '@angular/core';
import { NotesService } from 'src/app/Services/noteServices/notes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  title: any
  note: any
  id: any
  constructor(private notes: NotesService, public dialogRef: MatDialogRef<UpdateNotesComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.notes = data.note;
    this.id = data.noteId;
  }

  ngOnInit(): void {
  }
  closeDialog() {
    let reqData = {
      title: this.title,
      notes: this.note,
      noteId: this.id,
    }
    this.note.updateNotes(reqData, this.id).subscribe((response: any) => {
      console.log("update response", response);

    })
    this.dialogRef.close()
  }
}