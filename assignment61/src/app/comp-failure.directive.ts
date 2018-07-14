import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core' ;

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private failure: ElementRef) { }

  @HostListener('mouseenter') mouseEnter() {
    this.failure.nativeElement.style.color = 'red' ;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.failure.nativeElement.style.color = 'black' ;
  }

}
