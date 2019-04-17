import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  constructor(private element:ElementRef,
    private render2: Renderer2) {
      render2.listen(element.nativeElement,"click",(ev)=>{console.log("hola");console.log(ev);} )
      render2.setStyle(element.nativeElement,"font-size","22px");
      render2.setProperty(element.nativeElement,"onClick",'function () {console.log("hola");}');
      
     }

}
