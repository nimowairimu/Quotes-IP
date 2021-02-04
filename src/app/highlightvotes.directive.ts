import { Directive ,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightvotes]'
})
export class HighlightvotesDirective {

  constructor(private elem:ElementRef) { 
}
@HostListener("click") onClicks(){
  this.textDeco("#red")
}

@HostListener("dblclick") onDoubleClicks(){
  this.textDeco("None")
}
private textDeco(action:string){
  this.elem.nativeElement.style.color=action;
}


  }
