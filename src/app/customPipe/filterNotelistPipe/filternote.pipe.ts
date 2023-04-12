import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filternote'
})
export class FilternotePipe implements PipeTransform {

  transform(NoteListArray: any, searchValue: any) {

    return NoteListArray.filter((item: any) => {
      return item.title.toLowerCase().includes(searchValue) || item.description.toLowerCase().includes(searchValue)

    });

  }

}
