import { Directive, Output, EventEmitter, HostListener  } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  private predefinedColors:string[] = ["red", "green", "blue"];
  private color: string;
  @Output() changeColor: EventEmitter<string>;
  
  constructor() { 
    this.changeColor = new EventEmitter<string>();
  }

  @HostListener('click') onClick () {
    const idx:number = Math.trunc(Math.random() * this.predefinedColors.length);
    this.color = this.predefinedColors[idx];
    this.changeColor.emit(this.color);
  }
}
