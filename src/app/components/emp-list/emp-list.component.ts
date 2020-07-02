import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import {Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  EmpList : any;
  Employee : any;
  showPopUpModel:boolean = false;
  dataSend = "";
  employeeDetail : any = {};

  form = new FormGroup({ 
    id: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    name: new FormControl('', [
      Validators.required,
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.maxLength(2)
    ]),
    salary: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),      
    ]),
    myCheckboxGroup: new FormGroup({
      myCheckbox1: new FormControl(false),
      myCheckbox2: new FormControl(false),
      myCheckbox3: new FormControl(false),
    }, [Validators.required]),
    
   });
 
  constructor(private service : EmployeeService) { 

  }

  ngOnInit() {   
    this.service.getEmpList().subscribe( list => {this.EmpList = list;
      this.EmpList = this.EmpList.data;
      console.log(this.EmpList); 
    });
  }

  empDetail( id : number ) {
    this.showPopUpModel = !this.showPopUpModel;
    this.service.getEmpDetail(id).subscribe( detail => {
      this.Employee =  detail;
      this.Employee = this.Employee.data;
      console.log(this.Employee)
    });
  }

  deleteEmpRecord( id : number ) {
    this.service.deleteEmp(id).subscribe( responce => 
      console.log(responce)
    );
  }

  onSubmit(){
    this.service.addEmployee(JSON.stringify(this.form.value)).subscribe( responce => {
      console.log(responce);
      this.form.reset();
    });
  }

  sordByDetail(name){
    console.log(name);
  }

  showEmployeeDetail(empDetail){
    this.showPopUpModel = !this.showPopUpModel
    this.employeeDetail=empDetail;
    
  }

}
