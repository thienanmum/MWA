import { Directive, ElementRef, Renderer2, TemplateRef, ViewContainerRef, HostBinding } from '@angular/core';


@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {
  constructor(private element: ElementRef) { 
      element.nativeElement.style.textTransform = 'uppercase';      
    }
}
