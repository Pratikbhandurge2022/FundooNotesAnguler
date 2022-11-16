import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/noteServices/notes.service';

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

    constructor(private notesService: NotesService) { }

    ngOnInit(): void {

    }

    clickTakeNote() {
        this.takeNote = true
    }

    createNote() {
        this.takeNote = false

        if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
            let reqData = {
                title: this.title,
                description: this.description,
                color: this.color,
                image: this.image,
               
                isArchive: this.isArchive,
                isPin: this.isPin,
                isTrash: this.isTrash
            }
            this.notesService.createNote(reqData).subscribe((response: any) => {
                console.log("Note Created successfully", response);
                this.title = "",
                this.description="";
                this.color="";
                this.image=""
                
                this.isArchive = false;
                this.isPin = false;
                this.isTrash = false;

                
            });
        }
        else
        {
            console.log("Both Title and Description should not be null or empty");
           
        }
    }

    pinUnPin(){
        this.isPin = !this.isPin;            
    }
    archiveUnArchive(){
        this.isArchive = !this.isArchive;            
    }

}