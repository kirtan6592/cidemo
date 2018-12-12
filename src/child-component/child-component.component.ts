import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { map, retry, retryWhen } from 'rxjs/operators';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit, OnChanges, OnDestroy {

  emitValue: string;
  @Input() firstName: string;
  @Output() emittedValue = new EventEmitter<string>();

  public subscription: Subscription;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  constructor() {
    const nums = of(1, 2, 3, 4, 5);
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);

    this.subscription = squaredNums.subscribe(x => { console.log(x); },
      (error) => { console.error(error); });
  }

  ngOnInit() {
  }

  onEmit(): void {
    this.emittedValue.emit(this.emitValue);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
