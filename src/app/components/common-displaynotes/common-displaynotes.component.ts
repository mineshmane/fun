import { Component, Input ,OnInit} from '@angular/core';
import { DataServiceService } from 'src/app/services/demo-data-service/data-service.service';
@Component({
  selector: 'app-common-displaynotes',
  templateUrl: './common-displaynotes.component.html',
  styleUrls: ['./common-displaynotes.component.scss']
})
export class CommonDisplaynotesComponent implements OnInit{
  @Input() NoteListArray:any
  searchValue:any
  constructor(private dataService:DataServiceService){

  }

  ngOnInit(): void {
    this.dataService.getData.subscribe((res:any)=>{
      console.log(res);
      this.searchValue=res
      
    })
  }



}
