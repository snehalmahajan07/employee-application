import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import {Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {requireCheckboxesToBeCheckedValidator} from './require-checkboxes-to-be-checked.validator';

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
  showInputField = true;

  form = new FormGroup({ 
    id: new FormControl({value: '', disabled: this.showInputField}, [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    name: new FormControl({value: '', disabled: this.showInputField}, [
      Validators.required,
    ]),
    age: new FormControl({value: '', disabled: this.showInputField}, [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.maxLength(2)
    ]),
    salary: new FormControl({value: '', disabled: this.showInputField}, [
      Validators.required,
      Validators.pattern("^[0-9]*$"),      
    ]),
    myCheckboxGroup: new FormGroup({
      it: new FormControl(false),
      management: new FormControl(false),
      rmg: new FormControl(false),
    }, requireCheckboxesToBeCheckedValidator()),
    
   });
 
  constructor(private service : EmployeeService) { 

  }

  ngOnInit() {   
    this.service.getEmpList().subscribe( list => {this.EmpList = list;
      this.EmpList = this.EmpList.data;
    });
  }

  empDetail( id : number ) {
    this.showPopUpModel = !this.showPopUpModel;
    this.service.getEmpDetail(id).subscribe( detail => {
      this.Employee =  detail;
      this.Employee = this.Employee.data;
    });
  }

  deleteEmpRecord( id : number ) {
    this.service.deleteEmp(id).subscribe( responce => 
      console.log(responce)
    );
  }

  onSubmit(){
    this.service.addEmployee(JSON.stringify(this.form.value)).subscribe( responce => {
      this.form.reset();
    });
  }

  showEmployeeDetail(empDetail){
    this.showPopUpModel = !this.showPopUpModel
    this.employeeDetail=empDetail;
    
  }

  onCheckboxChange(e) {
    if (e.target.checked) {
      const state = 'enable';
      Object.keys(this.form.controls).forEach((controlName) => {
        this.form.controls[controlName][state](); 
    });
    } 
  }

}
