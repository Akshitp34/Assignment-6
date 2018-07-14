import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyles]'
})
export class CustomStylesDirective {

  constructor(private MyStyle: ElementRef) {
    this.MyStyle.nativeElement.style.color = 'darkgoldenrod' ;
    this.MyStyle.nativeElement.style.fontWeight = 'bold' ;
   }

}
