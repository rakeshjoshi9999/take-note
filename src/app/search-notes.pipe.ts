import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNotes'
})
export class SearchNotesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } else {
      return value.filter(item => item.title.toLowerCase().indexOf(args.toLowerCase()) > -1);
    }
  }

}
