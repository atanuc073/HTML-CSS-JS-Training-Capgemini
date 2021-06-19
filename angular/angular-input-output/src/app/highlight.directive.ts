import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {



constructor(public el:ElementRef) {
  this.el.nativeElement.style.color="white";
  this.el.nativeElement.style.backgroundColor='black';
}



@HostListener("mouseenter")
display(){
this.el.nativeElement.style.color="black";
this.el.nativeElement.style.backgroundColor='yellow';
}



@HostListener("mouseleave")
hide(){
this.el.nativeElement.style.backgroundColor='black';
this.el.nativeElement.style.color="white";
}

}
