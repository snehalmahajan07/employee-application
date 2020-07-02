import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})

export class SortPipe implements PipeTransform{
  transform(empList: any,fieldName: string){
    
     empList.sort((a:any,b:any) => {
        if(a[fieldName] < b[fieldName]){
          return -1;
        }else if(a[fieldName] > b[fieldName]){
          return 1;
        }else{
          return 0;
        }
    })
    
    return empList;

  }
}