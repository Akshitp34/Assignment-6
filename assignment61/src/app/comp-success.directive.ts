import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core' ;

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private newEle: ElementRef) { }

  @HostListener('mouseenter') mouseEnter() {
    this.newEle.nativeElement.style.color = 'green' ;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.newEle.nativeElement.style.color = 'black' ;
  }

}
