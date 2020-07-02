import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

  transform(name: any) {
    return name.replace(/[^a-zA-Z ]/g, "");
  }

}
