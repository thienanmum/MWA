import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input('appMyvisibility') visible: boolean;
  constructor(private element: ElementRef, private render: Renderer) { }
  ngOnInit() {
    if (this.visible) {
      this.element.nativeElement.style.display='none';
    }
  }
}
