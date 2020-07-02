import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  @Input('selectedEmployeeDetail') __employeeDetail;
  @Output() public closeModal = new  EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  removeDetail(){
    this.closeModal.emit(false);
  }

}
