import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent1Component } from 'src/child-component1/child-component1.component';
import { CustomePipe } from 'src/shared/Pipe/custome.pipe';

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
  public tempArray = [{ id: 1, name: 'one' }, { id: 5, name: 'five' }, { id: 3, name: 'three' }, { id: 8, name: 'eight' }];


  
  constructor(private customePipe: CustomePipe) {
  }

  ngOnInit(): void {
    this.welcomeString = 'This Value is emitted from child component:';
    const newValue = this.customePipe.transform('Two');
    const a = this.tempArray.map((x) => x.id);
  }

  ngAfterViewInit(): void {
    console.log(this.appChild1);
    // this.appChild1.newVariable = 'test update after view init';
    console.log(this.appChild);
  }

  ngAfterViewChecked(): void {
  }

  onChange(event): void {
    this.firstName = event.target.value;
  }

  onEmitted(event): void {
    this.emittedValue = event;
  }

  onStep2Next(e: any): void {
    debugger
  }
}
