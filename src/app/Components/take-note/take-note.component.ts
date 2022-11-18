import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/Services/noteServices/notes.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  show=false;
  createNoteForm!:FormGroup;
  submitted=false;
 constructor(private formbuilder:FormBuilder, private note:NotesService) { }

 ngOnInit(): void {
   this.createNoteForm=this.formbuilder.group({
     title:['',Validators.required],
     description:['',Validators.required]
   });
 }
isShow(){
 this.show=true;
}
close(){
 this.show=false;
 this.submitted=true;
 if(this.createNoteForm.valid){
   console.log("notes created successfully");
   let resdata={
     title:this.createNoteForm.value.title,
     note:this.createNoteForm.value.description
   }
   console.log(resdata);
   this.note.createNote(resdata).subscribe((result:any)=>{
     console.log(result);
   })
 }
 
}
onSubmit(){
 this.submitted=true;

}
}