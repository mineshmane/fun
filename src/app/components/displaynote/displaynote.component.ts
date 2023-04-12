import { Component, Input, OnInit } from '@angular/core';
 import { DataService } from 'src/app/services/dataService/data.service';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements  OnInit {
  // getallnotes apui
  searchValue:string=''

  @Input() NotesListArray:any
  constructor(private dataService:DataService){
    console.log("this is data in display notes",this.NotesListArray);
    
  }

  ngOnInit(): void {

    this.dataService.recivedData.subscribe((res:any)=>{
      console.log("data in display notes",res);
      this.searchValue=res
      
    })
    
  }



}
