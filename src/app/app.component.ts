import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent1Component } from 'src/child-component1/child-component1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {


  firstName = 'test';
  emittedValue: string;
  @ViewChildren(ChildComponent1Component) appChild1: QueryList<ChildComponent1Component>;
  @ViewChild('appChild') appChild: ElementRef;
  welcomeString: string;

  ngOnInit(): void {
    this.welcomeString = 'This Value is emitted from child component:';
  }

  ngAfterViewInit(): void {
    debugger;
    console.log(this.appChild1);
    //this.appChild1.newVariable = 'test update after view init';
    console.log(this.appChild);
  }

  ngAfterViewChecked(): void {
    debugger
  }

  onChange(event): void {
    this.firstName = event.target.value;
  }

  onEmitted(event): void {
    debugger
    this.emittedValue = event;
  }
}
