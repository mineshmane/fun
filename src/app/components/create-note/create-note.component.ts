import { Component, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/DemoServices/noteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})

export class CreateNoteComponent {
  @Output() createNoteRefresh = new EventEmitter<any>();
  @Output() anythingEvent = new EventEmitter<any>();

  hide:boolean=false
  title:any
  description:any

  constructor(private noteService:NoteService){

  }
  showFullview(){

    this.hide=true

  }



  createNote(){
    console.log("this is user filled data", this.title,this.description);
    this.hide=false

    let data={
      title:this.title,
      description:this.description
    }
    
    this.noteService.createNote(data).subscribe((response:any)=>{
      console.log("note created succfully",response);
      this.anythingEvent.emit(response)
      //child to parent data shareing
      
    })

    // this.createNoteRefresh.emit(data)
    
  }


}
