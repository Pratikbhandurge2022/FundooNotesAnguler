import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() childMessage: any;
  @Output()  getAllNotes: any;
  @Output() refreshDisplay=new EventEmitter<any>();
  @Output() messagevent=new EventEmitter<any>();
  @Output() colorchange=new EventEmitter<any>();
 

  //show=false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(notes: any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '40%',
      height: 'auto',
      panelClass: 'updateDialog',
      data: notes,
    });
    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed', response);
      this.getAllNotes.emit(response);
    })
  }
  notearchive(event:any){
    console.log(event);
    
    this.messagevent.emit(event)
  }
  iconautorefresh(event:any){
    console.log(event);   
    this.refreshDisplay.emit(event)
    
  }
  colorRefresh(event:any){
   this.colorchange.emit(event)
  }
  
}