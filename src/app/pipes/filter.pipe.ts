import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform{
  transform(employees: any={},searchText: string=''){

    if(!employees){
      return {}
    }

    if(searchText == ''){
      return employees;
    }

    return employees.filter( items => {
     return items.employee_name.toLowerCase().includes(searchText);
    })

  }
}