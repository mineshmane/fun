import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listarray: any, searchValues?: any) {

    console.log(listarray);
    console.log(searchValues);

    if (!searchValues) {
      return listarray;

    }
   return listarray.filter((item: any) => {
      return item.title.includes(searchValues) || item.descriprion.includes(searchValues)
    })
  }
}
