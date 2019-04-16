import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  constructor(private element: ElementRef,
              private render2: Renderer2) {
                console.log("paso1");
                setTimeout(()=>{
                render2.setStyle(element.nativeElement,"display","none");
                render2.setStyle(element.nativeElement, "backgroundColor","gray");
                //render2.setStyle(element.nativeElement, "visibility","hidden");
                console.log("paso2");
                console.log(element.nativeElement);
              },0);
              console.log("paso3");
               }

}
