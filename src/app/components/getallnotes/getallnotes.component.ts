import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/DemoServices/noteService/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit{
notesList:Array<any>=[]
  //getall notes api 

  constructor(private noteService:NoteService){

  }
  receiveMessage(e: any) {
    console.log(e);
    this.getAllnote()

  }

  // document.ready

  // compoonent life cycle component hooks 8 methods
  ngOnInit(): void {
    // whener this component get load 
    this.getAllnote()
  }

  callFromChild(fromChildData:any){
    console.log('child data is calling',fromChildData);
    this.getAllnote()
    
  }
  
  getAllnote() {
console.log(" get all notes is called ");

  
    this.noteService.getAllNotes().subscribe((res:any)=>{
      console.log(res.data.data);
      this.notesList=res.data.data

      this.notesList.reverse()
      

    })
  }

}



// callback, promises , async await , observable - programs 

// code resuse 
// 1 share data from Parent to child - @input()
// 2. share data from child to parent @output()/ 4 #view child
// 3. Unrelated component data sharing using data service- Observable.
// 4. @Inject() DailogData - dailog box 
