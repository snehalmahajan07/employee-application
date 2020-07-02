import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient ) { }

  getEmpList() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  getEmpDetail( id:number ) {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employee/'+id);
  }

  deleteEmp( id:number ){
    return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/'+id);
  }

  addEmployee(empData){
    return this.http.post('	http://dummy.restapiexample.com/api/v1/create',empData);
  }

}
