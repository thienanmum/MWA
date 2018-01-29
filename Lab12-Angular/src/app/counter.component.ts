import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  // inputs: ['counterValue:counter'],
  // outputs: ['counterChange'],
  template: `
    Counter component:
    <input type='button' value='-' (click) = 'decrease()'/>
    <span>{{counterValue}}</span>
    <input type='button' value='+' (click) = 'increase()'/>    
  `,
  styles: []
})

export class CounterComponent implements OnInit {
  @Input('counter') counterValue: number = 0;
  @Output('counterChange') counterChange: EventEmitter<number>;

  constructor() {this.counterChange = new EventEmitter()}  

  ngOnInit() {
    
  }

  increase() {
    this.counterValue ++;
    this.counterChange.emit(this.counterValue);
  }

  decrease() {
    this.counterValue --;
    this.counterChange.emit(this.counterValue);
  }

}
