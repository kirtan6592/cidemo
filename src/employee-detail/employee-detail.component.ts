import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, OnChanges {


  @Input() employeeDetail: FormGroup;


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
  }

  ngOnInit(): void {
    debugger
    console.log(this.employeeDetail.value);
  }

}
